import Logo from './Logo';
import SocialMediaIcons from './SocialMediaIcons';

interface FooterProps {
  navigate: (page: string) => void;
}

const quickLinks = ['Products', 'Book', 'Mentorship', 'Contact'];
const affiliateLinks = ['Become an Affiliate', 'Affiliate Login', 'Commission Rates'];

const Footer = ({ navigate }: FooterProps) => {
  return (
    <footer className="bg-bg-dark border-t border-gold/20 px-5 py-15">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div>
            <Logo className="w-20 h-20 mb-4 mx-auto sm:mx-0" shadow={false} />
            <p className="text-text-muted leading-relaxed">
              Making wise money moves for long-term success. Every small step counts on the journey to financial freedom.
            </p>
          </div>
          <div>
            <h4 className="text-white mb-4 font-bold">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <span
                  key={link}
                  onClick={() => navigate(link.toLowerCase())}
                  className="text-white cursor-pointer transition-colors duration-300 hover:text-gold"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white mb-4 font-bold">Resources</h4>
            <div className="flex flex-col gap-3">
              <span onClick={() => navigate('budgeting')} className="text-white cursor-pointer hover:text-gold">
                Free Budgeting Tool
              </span>
              <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline hover:text-gold">
                Discord Community
              </a>
              <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline hover:text-gold">
                Course (Coming Soon)
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white mb-4 font-bold">Affiliates</h4>
            <div className="flex flex-col gap-3">
              {affiliateLinks.map(link => (
                <span onClick={() => navigate('affiliates')} className="text-white cursor-pointer hover:text-gold" key={link}>
                  {link}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SocialMediaIcons size="small" />
          </div>
        </div>
        <div className="border-t border-gold/10 pt-[30px] text-center text-text-dim">
          <p>
            © 2024 Certified Bag Chasers. All rights reserved. | <span className="cursor-pointer hover:text-gold">Privacy Policy</span> |{' '}
            <span className="cursor-pointer hover:text-gold">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
