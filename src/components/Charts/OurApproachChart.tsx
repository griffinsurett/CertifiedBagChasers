/**
 * OurApproachChart Component
 *
 * React island component displaying the "Our Approach" growth chart
 * with animated SVG line drawing showing steady 5-year growth.
 */

const OurApproachChart = () => {
  return (
    <div className="chart-container">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-accent to-[#22c55e] shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
          <h3 className="text-xl font-extrabold font-display uppercase text-white m-0">
            Our Approach
          </h3>
        </div>
        <p className="text-text-dim text-[13px] m-0">
          Steady, sustainable wealth building over 5 years
        </p>
      </div>

      <svg viewBox="0 0 400 200" className="w-full h-auto">
        {/* Grid lines - horizontal */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h-${i}`}
            x1="40"
            y1={40 + i * 35}
            x2="380"
            y2={40 + i * 35}
            className="chart-grid-line"
            strokeWidth="1"
          />
        ))}
        {/* Grid lines - vertical */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 57}
            y1="40"
            x2={40 + i * 57}
            y2="180"
            className="chart-grid-line"
            strokeWidth="1"
          />
        ))}

        {/* Y-axis labels */}
        <text x="30" y="45" fill="#444" fontSize="10" textAnchor="end">
          +300%
        </text>
        <text x="30" y="80" fill="#444" fontSize="10" textAnchor="end">
          +225%
        </text>
        <text x="30" y="115" fill="#444" fontSize="10" textAnchor="end">
          +150%
        </text>
        <text x="30" y="150" fill="#444" fontSize="10" textAnchor="end">
          +75%
        </text>
        <text x="30" y="183" fill="#444" fontSize="10" textAnchor="end">
          0%
        </text>

        {/* X-axis labels */}
        <text x="40" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Start
        </text>
        <text x="108" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Year 1
        </text>
        <text x="176" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Year 2
        </text>
        <text x="244" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Year 3
        </text>
        <text x="312" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Year 4
        </text>
        <text x="380" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Year 5
        </text>

        {/* Main growth line */}
        <path
          d="M40 175 C50 173, 55 170, 65 168 C75 166, 80 171, 90 165 C100 159, 105 163, 115 155 C125 147, 130 152, 140 145 C150 138, 155 143, 165 134 C175 125, 180 130, 190 120 C200 110, 205 116, 215 105 C225 94, 230 100, 240 90 C250 80, 255 87, 265 76 C275 65, 280 72, 290 62 C300 52, 305 60, 315 50 C325 40, 335 48, 345 40 C355 32, 365 38, 375 32 C378 30, 380 28, 380 28"
          fill="none"
          stroke="url(#greenGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className="chart-line-ours"
        />

        {/* Glow effect line */}
        <path
          d="M40 175 C50 173, 55 170, 65 168 C75 166, 80 171, 90 165 C100 159, 105 163, 115 155 C125 147, 130 152, 140 145 C150 138, 155 143, 165 134 C175 125, 180 130, 190 120 C200 110, 205 116, 215 105 C225 94, 230 100, 240 90 C250 80, 255 87, 265 76 C275 65, 280 72, 290 62 C300 52, 305 60, 315 50 C325 40, 335 48, 345 40 C355 32, 365 38, 375 32 C378 30, 380 28, 380 28"
          fill="none"
          stroke="rgba(74, 222, 128, 0.3)"
          strokeWidth="10"
          strokeLinecap="round"
          className="chart-line-ours"
          style={{ filter: "blur(8px)" }}
        />

        {/* End point indicator */}
        <circle
          cx="380"
          cy="28"
          r="6"
          fill="#4ade80"
          className="chart-label"
          style={{ animationDelay: "4s" }}
        >
          <animate
            attributeName="r"
            values="6;8;6"
            dur="2s"
            repeatCount="indefinite"
          />
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
        <span className="text-accent text-2xl font-extrabold font-display">
          +287% Growth
        </span>
      </div>
    </div>
  );
};

export default OurApproachChart;
