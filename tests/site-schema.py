"""Verify CBC's built offering identities, real page hierarchy and content boundaries."""
from pathlib import Path
from html.parser import HTMLParser
import json

ROOT = Path(__file__).resolve().parents[1] / '.vercel/output/static'
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.nodes, self.block, self.active = [], '', False
        self.html = path.read_text()
        self.feed(self.html)
    def handle_starttag(self, tag, attrs):
        if tag == 'script' and dict(attrs).get('type') == 'application/ld+json':
            self.active, self.block = True, ''
    def handle_data(self, value):
        if self.active: self.block += value
    def handle_endtag(self, tag):
        if tag == 'script' and self.active:
            self.active = False
            node = json.loads(self.block)
            self.nodes.extend(node.get('@graph', [node]))
    def one(self, kind):
        nodes = [n for n in self.nodes if n.get('@type') == kind]
        assert len(nodes) == 1, (kind, len(nodes))
        return nodes[0]

origin = 'https://certifiedbagchasers.com'
expected = {
    'book': ('Product', '25.00'),
    'book-ebook': ('Product', '19.99'),
    'book-audiobook': ('Product', '24.99'),
    'budgeting-tool': ('Product', '0.00'),
    'discord-community': ('Service', '50.00'),
    'mentorship': ('Service', None),
    'the-course': ('Course', None),
}
for slug, (kind, price) in expected.items():
    page = Page(ROOT / f'products/{slug}/index.html')
    node = page.one(kind)
    url = f'{origin}/products/{slug}'
    assert node['@id'] == f'{url}#{kind.lower()}'
    assert node['url'] == url
    assert node.get('offers', {}).get('price') == price
    assert node['name'] in page.html
    assert 'aggregateRating' not in node
    if price is None: assert 'offers' not in node
    else: assert node['offers']['priceCurrency'] == 'USD'
    crumbs = page.one('BreadcrumbList')['itemListElement']
    assert crumbs[0]['item'] == origin + '/'
    assert crumbs[1]['item'] == origin + '/products'
    if slug.startswith('book-'):
        assert crumbs[2]['item'] == origin + '/products/book'
        assert len(crumbs) == 4
    if slug == 'discord-community':
        billing = node['offers']['priceSpecification']['billingDuration']
        assert billing['value'] == 1 and billing['unitCode'] == 'MON'
    if kind in ['Service', 'Course']:
        assert node['provider']['@id'] == origin + '/#business'

home = Page(ROOT / 'index.html')
business, person = home.one('OnlineBusiness'), home.one('Person')
assert business['founder'] == [{'@id': person['@id']}]
assert person['name'] == 'Arold Norelus'
assert business['email'] == 'contact@certifiedbagchasers.com'
assert not any(key in business for key in ['address', 'openingHoursSpecification', 'aggregateRating'])
# Screenshot-only social proof has no visible written quote/rating to serialize.
for path in ROOT.rglob('*.html'):
    page = Page(path)
    assert all(n.get('@type') != 'Review' for n in page.nodes)
    assert all('aggregateRating' not in n for n in page.nodes)

faq = Page(ROOT / 'faq/index.html')
questions = faq.one('FAQPage')['mainEntity']
assert len(questions) == 2
for question in questions:
    assert question['name'] in faq.html
    assert question['acceptedAnswer']['text'].startswith('<p>')
    assert 'import ' not in question['acceptedAnswer']['text']

bio = Page(ROOT / 'authors/arold-norelus/index.html')
assert 'Chartered Market Technician (CMT) Level II' in bio.html
assert 'risk, price action, market structure, and decision-making under pressure.' in bio.html
assert not (ROOT / 'blog/index.html').exists()
assert not (ROOT / 'blog/first-post/index.html').exists()
llms = (ROOT / 'llms-full.txt').read_text()
assert '/products/mentorship' in llms and '/products/the-course' in llms
assert 'Getting Started with Astro' not in llms
print('CBC: seven offering pages, founder, biography, FAQ, nested breadcrumbs and generated AEO checks passed.')
