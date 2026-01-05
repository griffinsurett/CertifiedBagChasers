import { useState } from 'react';

const BookPage = () => {
  const [selectedFormat, setSelectedFormat] = useState<'paperback' | 'kindle' | 'audiobook'>('paperback');

  const formats = {
    paperback: { price: '$24.99', description: 'Physical book shipped to your door', delivery: 'Ships in 3-5 business days' },
    kindle: { price: '$19.99', description: 'Instant digital download', delivery: 'Instant access' },
    audiobook: { price: '$29.99', description: 'Listen on your favorite platform', delivery: 'Available on major platforms' },
  };

  return (
    <div className="pt-[100px]">
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          {/* Book Image */}
          <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-2xl border-2 border-gold/30 flex items-center justify-center relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-5 border border-gold/20 rounded-xl" />
            <div className="text-center p-10">
              <div className="gold-gradient text-2xl font-extrabold mb-4">CERTIFIED BAG CHASERS</div>
              <div className="text-text-dim text-sm uppercase tracking-[2px]">Book Cover</div>
            </div>
          </div>

          {/* Book Info */}
          <div>
            <span className="text-white text-sm uppercase tracking-[3px] font-semibold">The Book</span>

            <h1 className="text-5xl font-extrabold mt-4 mb-6 font-display uppercase">
              The <span className="gold-metallic-heading">Complete Guide</span> to Building Real Wealth
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Everything I've learned about building wealth, condensed into one comprehensive guide. No fluff, no get-rich-quick promises—just real strategies that work.
            </p>

            <div className="mb-8">
              <h4 className="text-white mb-4 font-semibold">What's Inside:</h4>
              <ul className="list-none">
                {['The Wealth Mindset Framework', 'Personal Finance Fundamentals', 'Investment Strategies for Beginners', 'Building Multiple Income Streams', 'Asset Protection & Tax Strategies', 'Your 5-Year Wealth Building Plan'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 mb-3 text-[#ccc]">
                    <span className="text-gold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Format Selection */}
            <div className="mb-8">
              <h4 className="text-white mb-4 font-semibold">Choose Your Format:</h4>
              <div className="flex gap-3 flex-wrap">
                {(Object.keys(formats) as Array<keyof typeof formats>).map((format) => (
                  <button
                    key={format}
                    onClick={() => setSelectedFormat(format)}
                    className={`py-4 px-6 rounded-lg font-semibold cursor-pointer capitalize transition-all duration-300 ${selectedFormat === format ? 'bg-gradient-to-r from-gold-darkest via-gold to-gold-light text-bg-primary border-none' : 'bg-transparent border-2 border-gold/30 text-white hover:border-gold'}`}
                  >
                    {format}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Format Details */}
            <div className="bg-gradient-to-br from-bg-tertiary to-bg-secondary rounded-xl p-6 mb-8 border border-gold/20">
              <div className="flex justify-between items-center mb-3">
                <span className="text-text-muted capitalize">{selectedFormat}</span>
                <span className="gold-gradient text-[32px] font-extrabold">{formats[selectedFormat].price}</span>
              </div>
              <p className="text-text-dim text-sm">{formats[selectedFormat].description}</p>
              <p className="text-gold text-sm mt-2">{formats[selectedFormat].delivery}</p>
            </div>

            <button className="btn-gold w-full text-lg">
              Buy Now - {formats[selectedFormat].price}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
