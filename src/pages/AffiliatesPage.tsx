const AffiliatesPage = () => {
  return (
    <div className="pt-[100px]">
      <section className="section">
        <div className="text-center mb-15">
          <span className="text-white text-sm uppercase tracking-[3px] font-semibold">Partner With Us</span>
          <h1 className="text-[56px] font-extrabold mt-4 font-display uppercase">
            Affiliate <span className="gold-metallic-heading">Program</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[600px] mx-auto mt-6">
            Earn money by sharing Certified Bag Chasers with your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-15">
          {[
            { stat: '30%', label: 'Commission Rate', desc: 'On every sale you refer' },
            { stat: '60 Days', label: 'Cookie Duration', desc: 'Extended tracking window' },
            { stat: 'Weekly', label: 'Payouts', desc: 'Get paid consistently' },
          ].map((item) => (
            <div key={item.label} className="card text-center">
              <div className="gold-gradient text-5xl font-black mb-2">{item.stat}</div>
              <div className="text-white font-bold text-xl mb-2">{item.label}</div>
              <div className="text-text-muted">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-bg-tertiary to-bg-secondary rounded-[20px] p-12 border border-gold/20">
          <h2 className="text-[32px] font-extrabold mb-8 text-center">
            Become an <span className="gold-metallic-heading">Affiliate</span>
          </h2>

          <div className="max-w-[600px] mx-auto">
            <div className="grid gap-5">
              <input type="text" placeholder="Full Name" className="form-input" />
              <input type="email" placeholder="Email Address" className="form-input" />
              <input type="text" placeholder="Website / Social Media" className="form-input" />
              <input type="text" placeholder="Audience Size (approximate)" className="form-input" />
              <textarea placeholder="How do you plan to promote Certified Bag Chasers?" rows={4} className="form-input" />
              <button className="btn-gold mt-4">Apply Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliatesPage;
