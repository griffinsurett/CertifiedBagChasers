import SocialMediaIcons from '../components/SocialMediaIcons';

const ContactPage = () => {
  return (
    <div className="pt-[100px]">
      <section className="section">
        <div className="text-center mb-15">
          <span className="text-white text-sm uppercase tracking-[3px] font-semibold">Get In Touch</span>
          <h1 className="text-[56px] font-extrabold mt-4 font-display uppercase">
            Contact <span className="gold-metallic-heading">Us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-text-muted leading-relaxed mb-8">
              Have questions about our products or programs? Want to explore partnership opportunities? We'd love to hear from you.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              {[
                { icon: '✉️', label: 'Email', value: 'support@certifiedbagchasers.com' },
                { icon: '💬', label: 'Discord', value: 'Join our community' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-gradient-to-br from-bg-tertiary to-bg-secondary rounded-xl flex items-center justify-center text-2xl border border-gold/20">{item.icon}</div>
                  <div>
                    <div className="text-text-dim text-sm">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-text-dim text-sm mb-4">Follow Us</div>
              <SocialMediaIcons size="medium" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-bg-tertiary to-bg-secondary rounded-2xl p-10 border border-gold/20">
            <div className="grid gap-5">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Email Address" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
              <textarea placeholder="Your Message" rows={5} className="form-input" />
              <button className="btn-gold">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
