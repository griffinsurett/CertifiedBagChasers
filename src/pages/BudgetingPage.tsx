const BudgetingPage = () => {
  return (
    <div className="pt-[100px]">
      <section className="section text-center">
        <div className="mb-15">
          <span className="text-white text-sm uppercase tracking-[3px] font-semibold">Free Resource</span>
          <h1 className="text-[56px] font-extrabold mt-4 font-display uppercase">
            Budgeting <span className="gold-metallic-heading">Tool</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[600px] mx-auto mt-6">
            The same budgeting framework that's helped thousands take control of their finances. Yours free.
          </p>
        </div>

        <div className="bg-gradient-to-br from-bg-tertiary to-bg-secondary border-2 border-gold rounded-[20px] p-15 max-w-[700px] mx-auto">
          <div className="text-[80px] mb-6">📊</div>
          <h2 className="text-[32px] font-extrabold mb-4">
            The CBC <span className="gold-metallic-heading">Budget Master</span>
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            A comprehensive spreadsheet that helps you track income, expenses, savings goals, and investments.
            Used by over 10,000 community members.
          </p>

          <ul className="list-none text-left max-w-[400px] mx-auto mb-10">
            {['Income & expense tracking', 'Automatic savings calculator', 'Investment allocation planner', 'Debt payoff tracker', 'Monthly & yearly views', 'Works with Excel & Google Sheets'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 mb-3 text-[#ccc]">
                <span className="text-gold">✓</span> {item}
              </li>
            ))}
          </ul>

          <div className="max-w-[400px] mx-auto">
            <input type="email" placeholder="Enter your email" className="form-input mb-4" />
            <button className="btn-gold w-full">
              Download Free Tool
            </button>
            <p className="text-text-dim text-xs mt-4">
              We'll send the download link to your email. No spam, ever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudgetingPage;
