const MentorshipPage = () => {
  return (
    <div className="pt-[100px]">
      <section className="section">
        <div className="text-center mb-15">
          <span className="text-white text-sm uppercase tracking-[3px] font-semibold">Elite Program</span>
          <h1 className="text-[56px] font-extrabold mt-4 font-display uppercase">
            1-on-1 <span className="gold-metallic-heading">Mentorship</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[600px] mx-auto mt-6">
            Personal guidance from Arold for those serious about accelerating their wealth-building journey
          </p>
        </div>

        <div className="bg-gradient-to-br from-bg-tertiary to-bg-secondary border-2 border-gold rounded-[20px] p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[32px] font-extrabold mb-6">What You Get:</h2>
              <ul className="list-none">
                {['Weekly 1-hour video calls with Arold', 'Personalized wealth-building strategy', 'Direct messaging access 24/7', 'Custom investment portfolio review', 'Business/side hustle coaching', 'Accountability check-ins', 'Priority Discord access', 'All products included free'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 mb-4 text-[#ccc] text-lg">
                    <span className="text-gold text-xl">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-primary rounded-2xl p-10 border border-gold/20">
              <h3 className="text-gold mb-6 text-2xl">Requirements:</h3>
              <ul className="list-none">
                {['Serious commitment to growth', 'Ready to take action', 'Open to feedback', 'Long-term mindset', 'Application required'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 mb-3 text-text-muted">
                    <span className="text-gold">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-gold/10 rounded-xl">
                <div className="text-text-muted text-sm mb-2">Investment</div>
                <div className="gold-gradient text-5xl font-black">Apply</div>
                <div className="text-text-dim text-sm">Limited spots available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gradient-to-br from-bg-secondary to-bg-dark rounded-[20px] p-12 border border-gold/20">
          <h2 className="text-[32px] font-extrabold mb-8 text-center">
            Apply for <span className="gold-metallic-heading">Mentorship</span>
          </h2>

          <div className="max-w-[600px] mx-auto">
            <div className="grid gap-5">
              <input type="text" placeholder="Full Name" className="form-input" />
              <input type="email" placeholder="Email Address" className="form-input" />
              <input type="text" placeholder="Current Income Level" className="form-input" />
              <textarea placeholder="Why do you want mentorship? What are your goals?" rows={4} className="form-input" />
              <textarea placeholder="What's holding you back from reaching your financial goals?" rows={4} className="form-input" />
              <button className="btn-outline-green mt-4 w-full justify-center">Submit Application</button>
            </div>
            <p className="text-center text-text-dim mt-6 text-sm">
              Applications reviewed within 48 hours. Only serious applicants will be contacted.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorshipPage;
