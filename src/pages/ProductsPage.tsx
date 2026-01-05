interface ProductsPageProps {
  navigate: (page: string) => void;
}

const ProductsPage = ({ navigate }: ProductsPageProps) => {
  return (
    <div className="pt-[100px]">
      <section className="section">
        <div className="text-center mb-15">
          <span className="text-white text-sm uppercase tracking-[3px] font-semibold">What We Offer</span>
          <h1 className="text-[56px] font-extrabold mt-4 font-display uppercase">
            Our <span className="gold-metallic-heading">Products</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[600px] mx-auto mt-6">
            Choose the path that fits your journey to financial freedom
          </p>
        </div>

        {/* Main Product - Discord */}
        <div className="bg-gradient-to-br from-bg-tertiary to-bg-secondary border-2 border-gold rounded-[20px] p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-5 right-5 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-full">
            <span className="text-bg-primary font-extrabold text-sm">MOST POPULAR</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">
                <span className="gold-metallic-heading">Discord Community</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Get direct access to Arold, daily insights, live sessions, and a community of serious wealth builders. This is where the real magic happens.
              </p>

              <ul className="list-none mb-8">
                {['Daily market analysis & insights', 'Weekly live Q&A sessions with Arold', 'Private community of wealth builders', 'Exclusive investment opportunities', 'Direct messaging with mentors', 'Trading alerts & strategies'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 mb-3 text-[#ccc]">
                    <span className="text-gold">✓</span> {item}
                  </li>
                ))}
              </ul>

              <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="no-underline">
                <button className="btn-gold w-full text-lg">
                  Join Discord Community →
                </button>
              </a>
            </div>

            <div className="bg-bg-primary rounded-2xl p-10 text-center border border-gold/20">
              <div className="text-text-muted text-sm uppercase tracking-[2px] mb-2">Starting at</div>
              <div className="gold-gradient text-7xl font-black">$49</div>
              <div className="text-text-muted mb-6">/month</div>
              <div className="text-text-dim text-sm">Cancel anytime • 30-day guarantee</div>
            </div>
          </div>
        </div>

        {/* Other Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book */}
          <div className="card">
            <div className="text-5xl mb-5">📖</div>
            <h3 className="text-[28px] font-bold mb-4 text-gold">The Book</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              The complete guide to building wealth the right way. Available in paperback, Kindle, and audiobook.
            </p>
            <div className="text-2xl font-extrabold mb-6">
              From <span className="gold-gradient">$19.99</span>
            </div>
            <button className="btn-outline w-full" onClick={() => navigate('book')}>
              View Options
            </button>
          </div>

          {/* Course */}
          <div className="card relative">
            <div className="absolute top-4 right-4 bg-[#333] py-1.5 px-3.5 rounded-full text-xs font-bold">COMING SOON</div>
            <div className="text-5xl mb-5">🎓</div>
            <h3 className="text-[28px] font-bold mb-4 text-gold">The Course</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              A comprehensive, self-paced program covering everything from budgeting basics to advanced investment strategies.
            </p>
            <div className="text-2xl font-extrabold mb-6 text-text-dim">
              Price TBA
            </div>
            <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="no-underline">
              <button className="btn-outline w-full opacity-50 cursor-not-allowed">
                Join Waitlist
              </button>
            </a>
          </div>

          {/* Budgeting Tool */}
          <div className="card">
            <div className="text-5xl mb-5">📊</div>
            <h3 className="text-[28px] font-bold mb-4 text-gold">Budgeting Tool</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Our proprietary budgeting spreadsheet that's helped thousands take control of their finances. Free download.
            </p>
            <div className="text-2xl font-extrabold mb-6">
              <span className="gold-gradient">FREE</span>
            </div>
            <button className="btn-gold w-full" onClick={() => navigate('budgeting')}>
              Download Now
            </button>
          </div>

          {/* Mentorship */}
          <div className="card">
            <div className="text-5xl mb-5">🎯</div>
            <h3 className="text-[28px] font-bold mb-4 text-gold">1-on-1 Mentorship</h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Personal guidance directly from Arold. Limited spots available for those serious about accelerating their journey.
            </p>
            <div className="text-2xl font-extrabold mb-6">
              <span className="gold-gradient">Apply</span>
            </div>
            <button className="btn-outline w-full" onClick={() => navigate('mentorship')}>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
