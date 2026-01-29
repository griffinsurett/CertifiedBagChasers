/**
 * GetRichQuickChart Component
 *
 * React island component displaying the "Get Rich Quick" chart
 * with animated SVG line showing the typical pump-and-dump pattern.
 */

const GetRichQuickChart = () => {
  return (
    <div className="chart-container">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ef4444] to-[#dc2626] shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          <h3 className="text-xl font-extrabold font-display uppercase text-white m-0">
            Get Rich Quick Courses
          </h3>
        </div>
        <p className="text-text-dim text-[13px] m-0">
          The typical "guru" promise over 1 year
        </p>
      </div>

      <svg viewBox="0 0 400 200" className="w-full h-auto">
        {/* Grid lines - horizontal */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h2-${i}`}
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
            key={`v2-${i}`}
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
          +200%
        </text>
        <text x="30" y="80" fill="#444" fontSize="10" textAnchor="end">
          +100%
        </text>
        <text x="30" y="115" fill="#444" fontSize="10" textAnchor="end">
          0%
        </text>
        <text x="30" y="150" fill="#444" fontSize="10" textAnchor="end">
          -50%
        </text>
        <text x="30" y="183" fill="#444" fontSize="10" textAnchor="end">
          -100%
        </text>

        {/* Zero line (dashed) */}
        <line
          x1="40"
          y1="110"
          x2="380"
          y2="110"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          strokeDasharray="4,4"
        />

        {/* X-axis labels */}
        <text x="40" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Start
        </text>
        <text x="97" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Month 2
        </text>
        <text x="154" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Month 4
        </text>
        <text x="211" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Month 6
        </text>
        <text x="268" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Month 8
        </text>
        <text x="325" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Month 10
        </text>
        <text x="380" y="195" fill="#444" fontSize="9" textAnchor="middle">
          Year 1
        </text>

        {/* Main crash line */}
        <path
          d="M40 110 C55 100, 65 85, 80 65 C95 45, 105 35, 120 30 C135 25, 145 28, 155 35 C170 45, 180 55, 195 75 C210 95, 220 110, 235 125 C250 140, 260 150, 280 160 C300 170, 320 175, 345 178 C360 180, 375 182, 380 183"
          fill="none"
          stroke="url(#redGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className="chart-line-theirs"
        />

        {/* Glow effect line */}
        <path
          d="M40 110 C55 100, 65 85, 80 65 C95 45, 105 35, 120 30 C135 25, 145 28, 155 35 C170 45, 180 55, 195 75 C210 95, 220 110, 235 125 C250 140, 260 150, 280 160 C300 170, 320 175, 345 178 C360 180, 375 182, 380 183"
          fill="none"
          stroke="rgba(239, 68, 68, 0.3)"
          strokeWidth="10"
          strokeLinecap="round"
          className="chart-line-theirs"
          style={{ filter: "blur(8px)" }}
        />

        {/* Peak indicator */}
        <circle
          cx="120"
          cy="30"
          r="5"
          fill="#fbbf24"
          className="chart-label"
          style={{ animationDelay: "1.2s" }}
        />
        <text
          x="120"
          y="18"
          fill="#fbbf24"
          fontSize="10"
          textAnchor="middle"
          fontWeight="bold"
          className="chart-label"
          style={{ animationDelay: "1.2s" }}
        >
          PEAK +180%
        </text>

        {/* Back to zero indicator */}
        <circle
          cx="220"
          cy="110"
          r="4"
          fill="#888"
          className="chart-label"
          style={{ animationDelay: "2s" }}
        />
        <text
          x="220"
          y="100"
          fill="#888"
          fontSize="8"
          textAnchor="middle"
          className="chart-label"
          style={{ animationDelay: "2s" }}
        >
          Back to $0
        </text>

        {/* End point indicator */}
        <circle
          cx="380"
          cy="183"
          r="6"
          fill="#ef4444"
          className="chart-label"
          style={{ animationDelay: "3s" }}
        >
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
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
        <span className="text-[#ef4444] text-2xl font-extrabold font-display">
          -67% Loss
        </span>
      </div>
    </div>
  );
};

export default GetRichQuickChart;
