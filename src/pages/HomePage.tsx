import CTAButtons from '../components/CTAButtons';
import MoneyBagCatchGame from '../components/MoneyBagCatchGame';
import SocialReviewsCarousel from '../components/SocialReviewsCarousel';

const topics = [
  { icon: '💰', title: 'Personal Finance', description: 'Master budgeting, eliminate debt, and build a solid financial foundation that supports your wealth-building journey.' },
  { icon: '📊', title: 'Investing', description: 'Learn how to make your money work for you through smart investment strategies in stocks, real estate, and more.' },
  { icon: '🧠', title: 'Wealth Mindset', description: 'Develop the mental frameworks and habits that separate the wealthy from everyone else.' },
  { icon: '💼', title: 'Income Streams', description: 'Discover proven methods to create multiple sources of income and accelerate your path to financial freedom.' },
  { icon: '🛡️', title: 'Asset Protection', description: 'Learn how to protect and preserve your wealth for generations through proper planning and strategies.' },
  { icon: '📈', title: 'Market Analysis', description: 'Understand market trends, economic indicators, and how to position yourself for opportunities.' }
];

interface HomePageProps {
  navigate: (page: string) => void;
}

const HomePage = ({ navigate }: HomePageProps) => {
  return (
    <div className='overflow-x-hidden'>
      {/* Hero Section */}
      <section className="min-h-screen lg flex flex-col items-center justify-center px-5 text-center relative overflow-hidden bg-[linear-gradient(135deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.9)_100%),radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_top_right,rgba(34,87,67,0.2)_0%,transparent_50%),#0a0a0a]">
        {/* Decorative lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent 40%, rgba(201, 162, 39, 0.3) 45%, transparent 50%), linear-gradient(-45deg, transparent 40%, rgba(34, 87, 67, 0.3) 45%, transparent 50%)`
          }}
        />

        <div className="relative z-[2] flex flex-col items-center space-y-5">
          {/* Badge */}
          <div className="bg-gold/15 border border-gold px-8 py-3 rounded-full">
            <span className="text-white font-semibold text-sm uppercase tracking-[2px]">
              💰 Financial Freedom Starts Here
            </span>
          </div>

          <h1 className="hero-heading text-[clamp(48px,8vw,100px)] leading-none max-w-[1000px]">
            <span className="text-white block">Stop Chasing</span>
            <span className="gold-metallic-heading block mt-2">Quick Fixes</span>
          </h1>

          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed">
            We'll help you build a solid financial foundation for the long run. No "get rich quick" schemes—just real strategies that create lasting wealth.
          </p>

          <CTAButtons navigate={navigate} showRating={true} />
        </div>
      </section>

      {/* Money Bag Catch Game */}
      <MoneyBagCatchGame />

      {/* VSL Video Section */}
      <section className="py-20 px-5 bg-bg-primary flex flex-col items-center">
        <div className="w-full max-w-[900px] aspect-video bg-[#151c2c] rounded-xl border border-gold/20 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-20 h-20 bg-gradient-to-br from-gold-darkest via-gold to-gold-light rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_40px_rgba(201,162,39,0.3)]">
            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[24px] border-l-bg-primary ml-1.5" />
          </div>
          <p className="mt-5 text-text-dim text-sm uppercase tracking-[2px]">
            Watch The Free Training
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-bg-primary py-[100px] px-5">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-white text-sm uppercase tracking-[3px] font-semibold">About Us</span>

          <h2 className="hero-heading text-5xl mt-4 mb-8">
            Welcome to <span className="gold-metallic-heading">Certified Bag Chasers</span>
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            Welcome to Certified Bag Chasers, the home of financial empowerment. Founded by Arold Norelus, a Fixed Income Analyst at Bloomberg and an Amazon Best Selling Author, our mission is to guide you through the intricacies of building wealth using time-tested, principled approaches. We believe in the power of education to transform lives and are dedicated to helping you achieve financial stability and growth.
          </p>

          <p className="text-text-secondary text-lg leading-relaxed">
            At Certified Bag Chasers, we're not just about making money—we're about making <strong className="text-white">wise money moves</strong> that set you up for long-term success. Join us on this journey to financial freedom, where every small step counts.
          </p>
        </div>
      </section>

         {/* Social Reviews */}
      <SocialReviewsCarousel />


      {/* Growth Comparison Charts */}
      <section className="bg-gradient-to-b from-bg-dark via-bg-primary to-bg-dark py-[100px] px-5 overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-15">
            <span className="text-white text-sm uppercase tracking-[3px] font-semibold">The Difference</span>
            <h2 className="text-5xl font-extrabold mt-4 font-display uppercase">
              Sustainable Growth vs Get Rich Quick
            </h2>
            <p className="text-text-muted mt-4 max-w-[600px] mx-auto">
              See why our approach builds lasting wealth while shortcuts lead to disaster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Approach Chart */}
            <div className="chart-container">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green to-[#22c55e] shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                  <h3 className="text-xl font-extrabold font-display uppercase text-white m-0">Our Approach</h3>
                </div>
                <p className="text-text-dim text-[13px] m-0">Steady, sustainable wealth building over 5 years</p>
              </div>

              <svg viewBox="0 0 400 200" className="w-full h-auto">
                {[0, 1, 2, 3, 4].map(i => (
                  <line key={`h-${i}`} x1="40" y1={40 + i * 35} x2="380" y2={40 + i * 35} className="chart-grid-line" strokeWidth="1" />
                ))}
                {[0, 1, 2, 3, 4, 5, 6].map(i => (
                  <line key={`v-${i}`} x1={40 + i * 57} y1="40" x2={40 + i * 57} y2="180" className="chart-grid-line" strokeWidth="1" />
                ))}

                <text x="30" y="45" fill="#444" fontSize="10" textAnchor="end">+300%</text>
                <text x="30" y="80" fill="#444" fontSize="10" textAnchor="end">+225%</text>
                <text x="30" y="115" fill="#444" fontSize="10" textAnchor="end">+150%</text>
                <text x="30" y="150" fill="#444" fontSize="10" textAnchor="end">+75%</text>
                <text x="30" y="183" fill="#444" fontSize="10" textAnchor="end">0%</text>

                <text x="40" y="195" fill="#444" fontSize="9" textAnchor="middle">Start</text>
                <text x="108" y="195" fill="#444" fontSize="9" textAnchor="middle">Year 1</text>
                <text x="176" y="195" fill="#444" fontSize="9" textAnchor="middle">Year 2</text>
                <text x="244" y="195" fill="#444" fontSize="9" textAnchor="middle">Year 3</text>
                <text x="312" y="195" fill="#444" fontSize="9" textAnchor="middle">Year 4</text>
                <text x="380" y="195" fill="#444" fontSize="9" textAnchor="middle">Year 5</text>

                <path
                  d="M40 175 C50 173, 55 170, 65 168 C75 166, 80 171, 90 165 C100 159, 105 163, 115 155 C125 147, 130 152, 140 145 C150 138, 155 143, 165 134 C175 125, 180 130, 190 120 C200 110, 205 116, 215 105 C225 94, 230 100, 240 90 C250 80, 255 87, 265 76 C275 65, 280 72, 290 62 C300 52, 305 60, 315 50 C325 40, 335 48, 345 40 C355 32, 365 38, 375 32 C378 30, 380 28, 380 28"
                  fill="none"
                  stroke="url(#greenGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="chart-line-ours"
                />

                <path
                  d="M40 175 C50 173, 55 170, 65 168 C75 166, 80 171, 90 165 C100 159, 105 163, 115 155 C125 147, 130 152, 140 145 C150 138, 155 143, 165 134 C175 125, 180 130, 190 120 C200 110, 205 116, 215 105 C225 94, 230 100, 240 90 C250 80, 255 87, 265 76 C275 65, 280 72, 290 62 C300 52, 305 60, 315 50 C325 40, 335 48, 345 40 C355 32, 365 38, 375 32 C378 30, 380 28, 380 28"
                  fill="none"
                  stroke="rgba(74, 222, 128, 0.3)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className="chart-line-ours"
                  style={{ filter: 'blur(8px)' }}
                />

                <circle cx="380" cy="28" r="6" fill="#4ade80" className="chart-label" style={{ animationDelay: '4s' }}>
                  <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                </circle>

                <defs>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#4ade80" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex justify-between items-center mt-5 pt-5 border-t border-white/5">
                <span className="text-text-muted text-sm">5 Year Result:</span>
                <span className="text-green text-2xl font-extrabold font-display">+287% Growth</span>
              </div>
            </div>

            {/* Get Rich Quick Chart */}
            <div className="chart-container">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ef4444] to-[#dc2626] shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <h3 className="text-xl font-extrabold font-display uppercase text-white m-0">Get Rich Quick Courses</h3>
                </div>
                <p className="text-text-dim text-[13px] m-0">The typical "guru" promise over 1 year</p>
              </div>

              <svg viewBox="0 0 400 200" className="w-full h-auto">
                {[0, 1, 2, 3, 4].map(i => (
                  <line key={`h2-${i}`} x1="40" y1={40 + i * 35} x2="380" y2={40 + i * 35} className="chart-grid-line" strokeWidth="1" />
                ))}
                {[0, 1, 2, 3, 4, 5, 6].map(i => (
                  <line key={`v2-${i}`} x1={40 + i * 57} y1="40" x2={40 + i * 57} y2="180" className="chart-grid-line" strokeWidth="1" />
                ))}

                <text x="30" y="45" fill="#444" fontSize="10" textAnchor="end">+200%</text>
                <text x="30" y="80" fill="#444" fontSize="10" textAnchor="end">+100%</text>
                <text x="30" y="115" fill="#444" fontSize="10" textAnchor="end">0%</text>
                <text x="30" y="150" fill="#444" fontSize="10" textAnchor="end">-50%</text>
                <text x="30" y="183" fill="#444" fontSize="10" textAnchor="end">-100%</text>

                <line x1="40" y1="110" x2="380" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,4" />

                <text x="40" y="195" fill="#444" fontSize="9" textAnchor="middle">Start</text>
                <text x="97" y="195" fill="#444" fontSize="9" textAnchor="middle">Month 2</text>
                <text x="154" y="195" fill="#444" fontSize="9" textAnchor="middle">Month 4</text>
                <text x="211" y="195" fill="#444" fontSize="9" textAnchor="middle">Month 6</text>
                <text x="268" y="195" fill="#444" fontSize="9" textAnchor="middle">Month 8</text>
                <text x="325" y="195" fill="#444" fontSize="9" textAnchor="middle">Month 10</text>
                <text x="380" y="195" fill="#444" fontSize="9" textAnchor="middle">Year 1</text>

                <path
                  d="M40 110 C55 100, 65 85, 80 65 C95 45, 105 35, 120 30 C135 25, 145 28, 155 35 C170 45, 180 55, 195 75 C210 95, 220 110, 235 125 C250 140, 260 150, 280 160 C300 170, 320 175, 345 178 C360 180, 375 182, 380 183"
                  fill="none"
                  stroke="url(#redGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="chart-line-theirs"
                />

                <path
                  d="M40 110 C55 100, 65 85, 80 65 C95 45, 105 35, 120 30 C135 25, 145 28, 155 35 C170 45, 180 55, 195 75 C210 95, 220 110, 235 125 C250 140, 260 150, 280 160 C300 170, 320 175, 345 178 C360 180, 375 182, 380 183"
                  fill="none"
                  stroke="rgba(239, 68, 68, 0.3)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className="chart-line-theirs"
                  style={{ filter: 'blur(8px)' }}
                />

                <circle cx="120" cy="30" r="5" fill="#fbbf24" className="chart-label" style={{ animationDelay: '1.2s' }} />
                <text x="120" y="18" fill="#fbbf24" fontSize="10" textAnchor="middle" fontWeight="bold" className="chart-label" style={{ animationDelay: '1.2s' }}>PEAK +180%</text>

                <circle cx="220" cy="110" r="4" fill="#888" className="chart-label" style={{ animationDelay: '2s' }} />
                <text x="220" y="100" fill="#888" fontSize="8" textAnchor="middle" className="chart-label" style={{ animationDelay: '2s' }}>Back to $0</text>

                <circle cx="380" cy="183" r="6" fill="#ef4444" className="chart-label" style={{ animationDelay: '3s' }}>
                  <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                </circle>

                <defs>
                  <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="25%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="75%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex justify-between items-center mt-5 pt-5 border-t border-white/5">
                <span className="text-text-muted text-sm">1 Year Result:</span>
                <span className="text-[#ef4444] text-2xl font-extrabold font-display">-67% Loss</span>
              </div>
            </div>
          </div>

          {/* Bottom message */}
          <div className="text-center mt-12 p-8 bg-gradient-to-br from-gold/[0.08] to-gold/[0.02] rounded-xl border border-gold/15">
            <p className="text-gold text-lg font-semibold m-0 mb-2">
              5 years of steady growth beats 1 year of chaos. Every time.
            </p>
            <p className="text-text-dim text-sm m-0 mb-6">
              We teach strategies that compound over years, not schemes that collapse in months.
            </p>
            <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="no-underline">
              <button className="btn-gold">Join Our Community →</button>
            </a>
          </div>
        </div>
      </section>

      {/* I Am Arold Section */}
      <section className="bg-gradient-to-b from-bg-primary to-bg-card py-[100px] px-5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-2xl border-2 border-gold/30 flex items-center justify-center relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gold/10 to-transparent" />
            <span className="text-[#444] text-lg uppercase tracking-[2px]">Arold's Photo</span>
          </div>

          <div>
            <span className="text-gold text-sm uppercase tracking-[3px] font-semibold">Your Mentor</span>

            <h2 className="hero-heading text-5xl mt-4 mb-6">
              I Am <span className="gold-metallic-heading">Arold Norelus</span>
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I'm the best-selling author of <strong className="text-white">"Managing the Motion of Money: Simple Steps to Secure a Future of Financial Freedom"</strong>—a book I wrote to empower people just like you to take control of your financial destiny.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              As a Fixed-Income Analyst at <strong className="text-white">Bloomberg</strong> with a specialization in technical analysis, I've spent years navigating market complexities with precision. Now, I'm here to share that expertise with you—providing the guidance you need to build real, lasting wealth.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              <strong className="text-white">My mission is simple: to inspire and guide you toward financial success.</strong> Not through get-rich-quick schemes, but through proven strategies that actually work for the long run.
            </p>

            <div className="flex gap-6 flex-wrap">
              {[
                { icon: '📈', text: 'Bloomberg Analyst' },
                { icon: '📖', text: 'Best-Selling Author' },
                { icon: '🎯', text: 'Technical Analysis Expert' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-bg-dark py-[100px] px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-15">
            <span className="text-white text-sm uppercase tracking-[3px] font-semibold">Our Promise</span>
            <h2 className="text-5xl font-extrabold mt-4 font-display uppercase">
              Our <span className="gold-metallic-heading">Commitments</span> To You
            </h2>
          </div>

          <div className="masonry-grid">
            {/* Card 1 - Large */}
            <div className="masonry-card-large">
              <div className="masonry-card-inner bg-gradient-to-br from-[#1a1810] via-[#0d0c08] to-[#0a0a06]">
                <img src="https://picsum.photos/id/237/600/600" alt="No Get-Rich-Quick" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,6,0.98)] via-[rgba(15,14,10,0.7)] to-[rgba(20,18,12,0.5)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.12] to-transparent" />
                <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.08)_0%,transparent_60%)]" />
                <div className="absolute left-[30px] right-[30px] bottom-[30px] flex flex-col">
                  <h3 className="text-[32px] font-extrabold mb-4 font-display uppercase text-white text-shadow-lg">No Get-Rich-Quick Nonsense</h3>
                  <p className="text-[#ccc] text-base leading-relaxed text-shadow">
                    We don't promise overnight success because that's not how real wealth is built. We teach sustainable strategies that create lasting financial freedom.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Wide */}
            <div className="masonry-card-wide">
              <div className="masonry-card-inner bg-gradient-to-br from-[#151410] via-[#0c0b08] to-[#080806]">
                <img src="https://picsum.photos/id/1011/600/300" alt="Long-Term Partnership" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,11,8,0.98)] to-[rgba(12,11,8,0.8)]" />
                <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle_at_bottom_right,rgba(74,222,128,0.08)_0%,transparent_60%)]" />
                <div className="absolute inset-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold font-display uppercase text-white mb-3 text-shadow-lg">Long-Term Partnership</h3>
                  <p className="text-[#bbb] text-[15px] leading-relaxed max-w-[80%]">
                    We're invested in your success for years, not just a one-time transaction. Your wins are our wins.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-darkest via-gold to-gold-light" />
              </div>
            </div>

            {/* Card 3 - Small */}
            <div className="masonry-card-small">
              <div className="masonry-card-inner bg-gradient-to-br from-[#131510] via-[#0a0c08] to-[#060806]">
                <img src="https://picsum.photos/id/180/300/300" alt="Actionable Education" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,12,8,0.98)] to-[rgba(10,12,8,0.7)]" />
                <div className="absolute top-0 left-0 w-[120px] h-[120px] bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.1)_0%,transparent_60%)]" />
                <div className="absolute inset-5 flex flex-col justify-end">
                  <h3 className="text-lg font-extrabold font-display uppercase text-white mb-2 text-shadow">Real, Actionable Education</h3>
                  <p className="text-[#aaa] text-[13px] leading-normal">
                    Every lesson is designed to be implemented immediately. No fluff.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Small */}
            <div className="masonry-card-small">
              <div className="masonry-card-inner bg-gradient-to-br from-[#16140f] via-[#0c0a08] to-[#080706]">
                <img src="https://picsum.photos/id/433/300/300" alt="Community Support" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,10,8,0.98)] to-[rgba(12,10,8,0.7)]" />
                <div className="absolute bottom-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle_at_bottom_right,rgba(201,162,39,0.1)_0%,transparent_60%)]" />
                <div className="absolute inset-5 flex flex-col justify-end">
                  <h3 className="text-lg font-extrabold font-display uppercase text-white mb-2 text-shadow">Community Support</h3>
                  <p className="text-[#aaa] text-[13px] leading-normal">
                    Join like-minded individuals working toward financial freedom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-15 text-center">
            <CTAButtons navigate={navigate} showRating={true} />
          </div>
        </div>
      </section>

      {/* Topics We Teach */}
      <section className="section">
        <div className="text-center mb-15">
          <span className="text-white text-sm uppercase tracking-[3px] font-semibold">What You'll Learn</span>
          <h2 className="text-5xl font-extrabold mt-4 font-display uppercase">
            Topics We <span className="gold-metallic-heading">Teach</span>
          </h2>
        </div>

        <div className="card text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {topics.map((topic) => (
              <div key={topic.title} className="flex flex-col items-center gap-3">
                <div className="text-5xl">{topic.icon}</div>
                <h3 className="text-2xl font-bold text-white">{topic.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-bg-dark py-[100px] px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-15">
            <span className="text-white text-sm uppercase tracking-[3px] font-semibold">Start Your Journey</span>
            <h2 className="text-5xl font-extrabold mt-4 font-display uppercase">
              Choose Your <span className="gold-metallic-heading">Path</span>
            </h2>
            <p className="text-text-muted mt-4 max-w-[600px] mx-auto">
              Whether you're just starting out or ready for personalized guidance, we have the right option for you.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Book */}
            <div className="pricing-card">
              <div className="mb-6">
                <span className="text-white text-sm font-semibold uppercase tracking-[3px]">Amazon Bestseller</span>
              </div>
              <div className="text-6xl mb-4 drop-shadow-lg">📚</div>
              <h3 className="text-[28px] font-extrabold font-display uppercase text-white mb-2">The Book</h3>
              <p className="text-gold text-sm italic mb-4">Managing The Motion of Money</p>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                Simple steps to secure a future of financial freedom. The perfect starting point for your wealth-building journey.
              </p>
              <div className="mb-6">
                <span className="text-sm text-text-dim line-through">$24.99</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">$19</span>
                  <span className="text-xl text-text-muted">.99</span>
                </div>
                <span className="text-[13px] text-text-dim">Paperback / Kindle / Audiobook</span>
              </div>
              <ul className="list-none p-0 mb-8">
                {['200+ pages of actionable content', 'Real-world case studies', 'Step-by-step frameworks', 'Bonus worksheets included'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 mb-3 text-text-secondary text-sm">
                    <span className="text-green">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="block text-center py-4 px-8 bg-transparent border-2 border-gold rounded-lg text-gold font-bold text-sm uppercase tracking-[1px] no-underline transition-all duration-300 mt-auto hover:bg-gold/10">
                Get The Book →
              </a>
            </div>

            {/* Community - Featured */}
            <div className="pricing-card pricing-card-featured">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-darkest via-gold to-gold-light text-bg-primary py-2 px-5 rounded-full text-xs font-extrabold uppercase tracking-[1px] whitespace-nowrap">🔥 Most Popular</div>
              <div className="mb-6 mt-2">
                <span className="text-white text-sm font-semibold uppercase tracking-[3px]">Full Access</span>
              </div>
              <div className="text-6xl mb-4 drop-shadow-lg">💰</div>
              <h3 className="text-[28px] font-extrabold font-display uppercase text-white mb-2">The Community</h3>
              <p className="text-gold text-sm mb-4">Certified Bag Chasers Discord</p>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                Get direct access to Arold, exclusive courses, live calls, market analysis, and a community of serious wealth builders.
              </p>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">$49</span>
                  <span className="text-xl text-text-muted">/month</span>
                </div>
                <span className="text-[13px] text-text-dim">Cancel anytime • Instant access</span>
              </div>
              <ul className="list-none p-0 mb-8">
                {['Private Discord community', 'Weekly live coaching calls', 'Full course library access', 'Real-time trade alerts', 'Monthly market breakdowns', '24/7 community support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 mb-3 text-text-secondary text-sm">
                    <span className="text-green">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="btn-gold block text-center py-[18px] px-8 rounded-lg font-bold text-sm uppercase tracking-[1px] no-underline mt-auto">
                Join The Community →
              </a>
            </div>

            {/* 1-on-1 Mentorship */}
            <div className="pricing-card">
              <div className="mb-6">
                <span className="text-white text-sm font-semibold uppercase tracking-[3px]">Application Required</span>
              </div>
              <div className="text-6xl mb-4 drop-shadow-lg">🎯</div>
              <h3 className="text-[28px] font-extrabold font-display uppercase text-white mb-2">1-on-1 Mentorship</h3>
              <p className="text-gold text-sm mb-4">Personal Guidance from Arold</p>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                For serious individuals ready to accelerate their journey with personalized strategy sessions and direct mentorship.
              </p>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">Custom</span>
                </div>
                <span className="text-[13px] text-text-dim">Pricing based on your goals</span>
              </div>
              <ul className="list-none p-0 mb-8">
                {['Everything in the Book', 'Everything in Community plan', 'Private 1-on-1 calls with Arold', 'Personalized wealth strategy', 'Portfolio review & guidance', 'Direct messaging access', 'Priority support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 mb-3 text-text-secondary text-sm">
                    <span className="text-green">✓</span> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('mentorship')} className="btn-outline-green block w-full text-center py-4 px-8 mt-auto justify-center">
                Apply Now →
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-10 mt-15 flex-wrap">
            {[
              { icon: '🔒', text: 'Secure Payment' },
              { icon: '💳', text: 'Cancel Anytime' },
              { icon: '⭐', text: '4.9/5 Rating' },
              { icon: '👥', text: '10,000+ Members' }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-text-dim text-sm">
                <span className="text-xl">{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Course Waitlist */}
          <div className="mt-15 p-10 pt-[50px] bg-gradient-to-br from-gold/10 to-gold/[0.03] rounded-2xl border border-gold/20 text-center relative overflow-visible">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-[2] flex items-center justify-center">
              <span className="text-[40px] drop-shadow-lg absolute -rotate-12 -translate-x-[15px] opacity-70">💵</span>
              <span className="text-[45px] drop-shadow-lg relative z-[2]">💵</span>
              <span className="text-[40px] drop-shadow-lg absolute rotate-12 translate-x-[15px] opacity-70">💵</span>
            </div>
            <div className="absolute -top-1/2 -right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(201,162,39,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="inline-block bg-gradient-to-r from-gold-darkest via-gold to-gold-light text-bg-primary py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-[1px] mb-4">
              🚀 Coming Soon
            </div>
            <h3 className="text-[28px] font-extrabold font-display uppercase text-white mb-3">
              The Complete <span className="text-gold">Wealth Building</span> Course
            </h3>
            <p className="text-text-muted text-base max-w-[500px] mx-auto mb-6 leading-relaxed">
              Our most comprehensive program yet. Step-by-step video lessons, worksheets, and lifetime access. Be the first to know when it drops.
            </p>
            <a href="#waitlist" className="btn-outline-white py-4 px-8 text-sm inline-flex">
              <span>Join The Waitlist</span>
              <span className="text-lg">→</span>
            </a>
            <p className="text-[#555] text-[13px] mt-4">
              🔔 Get early access + exclusive launch discount
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#080808] py-[100px] px-5">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-15">
            <span className="text-white text-sm uppercase tracking-[3px] font-semibold">Success Stories</span>
            <h2 className="text-5xl font-extrabold mt-4 font-display uppercase">
              Hear From Our <span className="gold-metallic-heading">Customers</span>
            </h2>
            <p className="text-text-muted mt-4 max-w-[700px] mx-auto">
              Real stories from people who've used our course, Discord community, book, and budgeting tool to take control of their financial future.
            </p>
          </div>

          <div className="testimonial-masonry">
            {/* Video Testimonial 1 */}
            <div className="testimonial-video-card tm-row-2">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl z-[3]">
                <span className="text-bg-primary font-extrabold text-sm">+$22,000</span>
              </div>
              <img src="https://picsum.photos/id/1012/400/600" alt="Justin Spanos" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
              <div className="play-btn" />
              <div className="absolute bottom-5 left-5">
                <div className="font-bold text-xl text-white">Justin Spanos</div>
                <div className="text-text-muted text-sm">Customer</div>
              </div>
            </div>

            {/* Text Testimonial 1 */}
            <div className="testimonial-text-card tm-span-2">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl">
                <span className="text-bg-primary font-extrabold text-sm">+$15,000</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-full border-2 border-gold/30 flex items-center justify-center font-bold text-gold">M</div>
                <div>
                  <div className="font-bold text-white">Marcus T.</div>
                  <div className="text-xs text-text-muted">in 6 months</div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed italic">"Following Arold's investment strategies changed my entire financial outlook. No more gambling on meme stocks."</p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold text-base">★</span>
                ))}
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div className="testimonial-video-card tm-row-2">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl z-[3]">
                <span className="text-bg-primary font-extrabold text-sm">+$19,500</span>
              </div>
              <img src="https://picsum.photos/id/1025/400/600" alt="Richard Sirine" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
              <div className="play-btn" />
              <div className="absolute bottom-5 left-5">
                <div className="font-bold text-xl text-white">Richard Sirine</div>
                <div className="text-text-muted text-sm">Customer</div>
              </div>
            </div>

            {/* Text Testimonial 2 */}
            <div className="testimonial-text-card">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl">
                <span className="text-bg-primary font-extrabold text-sm">+$8,500</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-full border-2 border-gold/30 flex items-center justify-center font-bold text-gold">J</div>
                <div>
                  <div className="font-bold text-white">Jessica R.</div>
                  <div className="text-xs text-text-muted">in 3 months</div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed italic">"The budgeting framework alone was worth 10x what I paid. Finally have control over my money."</p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold text-base">★</span>
                ))}
              </div>
            </div>

            {/* Text Testimonial 3 */}
            <div className="testimonial-text-card">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl">
                <span className="text-bg-primary font-extrabold text-sm">+$32,000</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-full border-2 border-gold/30 flex items-center justify-center font-bold text-gold">D</div>
                <div>
                  <div className="font-bold text-white">David K.</div>
                  <div className="text-xs text-text-muted">in 1 year</div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed italic">"Went from paycheck to paycheck to having a real investment portfolio. This is the real deal."</p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold text-base">★</span>
                ))}
              </div>
            </div>

            {/* Video Testimonial 3 - Center */}
            <div className="testimonial-video-card tm-span-2 tm-row-2">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl z-[3]">
                <span className="text-bg-primary font-extrabold text-sm">+$45,000</span>
              </div>
              <img src="https://picsum.photos/id/1074/600/500" alt="Ryan Reeves" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20" />
              <div className="play-btn !left-1/2 !-translate-x-1/2 !bottom-20" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
                <div className="font-bold text-[22px] text-white">Ryan Reeves</div>
                <div className="text-text-muted text-sm">Customer</div>
              </div>
            </div>

            {/* Text Testimonial 4 */}
            <div className="testimonial-text-card">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl">
                <span className="text-bg-primary font-extrabold text-sm">+$12,000</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-full border-2 border-gold/30 flex items-center justify-center font-bold text-gold">A</div>
                <div>
                  <div className="font-bold text-white">Aaliyah M.</div>
                  <div className="text-xs text-text-muted">in 4 months</div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed italic">"The community keeps you accountable. Having mentors and peers who actually want you to win is priceless."</p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold text-base">★</span>
                ))}
              </div>
            </div>

            {/* Text Testimonial 5 */}
            <div className="testimonial-text-card">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl">
                <span className="text-bg-primary font-extrabold text-sm">+$25,000</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-full border-2 border-gold/30 flex items-center justify-center font-bold text-gold">C</div>
                <div>
                  <div className="font-bold text-white">Chris P.</div>
                  <div className="text-xs text-text-muted">in 8 months</div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed italic">"Arold doesn't BS you. He tells you exactly what you need to do and holds you to it."</p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold text-base">★</span>
                ))}
              </div>
            </div>

            {/* Text Testimonial 6 */}
            <div className="testimonial-text-card">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl">
                <span className="text-bg-primary font-extrabold text-sm">+$18,000</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-full border-2 border-gold/30 flex items-center justify-center font-bold text-gold">S</div>
                <div>
                  <div className="font-bold text-white">Sarah L.</div>
                  <div className="text-xs text-text-muted">in 5 months</div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed italic">"Best investment I ever made was joining this community. My whole relationship with money has transformed."</p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gold text-base">★</span>
                ))}
              </div>
            </div>

            {/* Video Testimonial 4 */}
            <div className="testimonial-video-card tm-row-2">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-darkest via-gold to-gold-light py-2 px-5 rounded-bl-xl z-[3]">
                <span className="text-bg-primary font-extrabold text-sm">+$28,000</span>
              </div>
              <img src="https://picsum.photos/id/1082/400/600" alt="Arthur Johnson" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
              <div className="play-btn" />
              <div className="absolute bottom-5 left-5">
                <div className="font-bold text-xl text-white">Arthur Johnson</div>
                <div className="text-text-muted text-sm">Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-bg-primary to-bg-dark py-[100px] px-5 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 font-display uppercase">
            Ready To <span className="gold-metallic-heading">Chase The Bag</span>?
          </h2>

          <p className="text-xl text-text-muted mb-12 leading-relaxed">
            Stop watching from the sidelines. Join thousands of members who are actively building wealth and changing their financial futures.
          </p>

          <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="no-underline">
            <button className="btn-gold text-xl py-6 px-16">
              Join Now →
            </button>
          </a>

          <p className="mt-6 text-text-dim text-sm">
            30-Day Money Back Guarantee • Cancel Anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
