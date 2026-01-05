import { useState, useEffect, useRef } from 'react';

const MoneyBagCatchGame = () => {
  const [bagX, setBagX] = useState(50);
  const [checks, setChecks] = useState<Array<{id: number; symbol: string; amount: number; x: number; y: number; caught: boolean; missed: boolean}>>([]);
  const [moneyPopups, setMoneyPopups] = useState<Array<{id: number; amount: number; x: number}>>([]);
  const [bagBounce, setBagBounce] = useState(false);
  const checksRef = useRef<typeof checks>([]);

  const symbols = ['BTC', 'ETH', 'AAPL', 'TSLA', 'NVDA', 'AMC', 'GME', 'DOGE', 'SOL', 'SPY'];
  const amounts = [150, 250, 350, 500, 750, 1000, 1500, 2000, 2500, 3500];

  useEffect(() => {
    checksRef.current = checks;
  }, [checks]);

  useEffect(() => {
    const moveBag = () => {
      const activeChecks = checksRef.current.filter(c => !c.caught && !c.missed);

      if (activeChecks.length > 0) {
        const targetCheck = activeChecks.reduce((closest, check) => {
          if (!closest || check.y > closest.y) return check;
          return closest;
        }, null as typeof checks[0] | null);

        if (targetCheck) {
          setBagX(prev => {
            const diff = targetCheck.x - prev;
            const speed = 1.5;
            if (Math.abs(diff) < speed) return targetCheck.x;
            return prev + (diff > 0 ? speed : -speed);
          });
        }
      } else {
        setBagX(prev => {
          const time = Date.now() / 1000;
          return 50 + Math.sin(time) * 20;
        });
      }
    };

    const interval = setInterval(moveBag, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const spawnCheck = () => {
      const id = Date.now() + Math.random();
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const amount = amounts[Math.floor(Math.random() * amounts.length)];
      const x = 15 + Math.random() * 70;

      setChecks(prev => [...prev, { id, symbol, amount, x, y: -10, caught: false, missed: false }]);
    };

    const interval = setInterval(spawnCheck, 2800);
    setTimeout(spawnCheck, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateChecks = () => {
      setChecks(prev => {
        const currentBagX = bagX;

        return prev.map(check => {
          if (check.caught || check.missed) return check;

          const newY = check.y + 0.8;

          if (newY >= 72 && newY <= 82) {
            const bagLeft = currentBagX - 14;
            const bagRight = currentBagX + 14;

            if (check.x >= bagLeft && check.x <= bagRight) {
              setBagBounce(true);
              setTimeout(() => setBagBounce(false), 300);

              const popupId = Date.now() + Math.random();
              setMoneyPopups(p => [...p, { id: popupId, amount: check.amount, x: currentBagX }]);
              setTimeout(() => {
                setMoneyPopups(p => p.filter(popup => popup.id !== popupId));
              }, 1500);

              return { ...check, y: newY, caught: true };
            }
          }

          if (newY > 110) {
            return { ...check, missed: true };
          }

          return { ...check, y: newY };
        }).filter(check => !check.missed && !(check.caught && check.y > 95));
      });
    };

    const interval = setInterval(animateChecks, 30);
    return () => clearInterval(interval);
  }, [bagX]);

  return (
    <section className="h-[420px] bg-gradient-to-b from-bg-primary via-bg-card to-bg-primary relative overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 162, 39, 0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Falling Checks */}
      {checks.map(check => (
        <div
          key={check.id}
          className={`falling-check ${check.caught ? 'caught' : ''}`}
          style={{ left: `${check.x}%`, top: `${check.y}%` }}
        >
          <svg width="110" height="50" viewBox="0 0 110 50">
            <defs>
              <linearGradient id={`chkBg-${check.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fffef8" />
                <stop offset="100%" stopColor="#f0f0e5" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="110" height="50" rx="4" fill={`url(#chkBg-${check.id})`} stroke="#c0c0b0" strokeWidth="1.5" />
            <rect x="0" y="0" width="7" height="50" fill="#1a5a3a" opacity="0.12" rx="4" />
            <text x="11" y="11" fontSize="5" fill="#1a5a3a" fontWeight="bold">CERTIFIED BAG CHASERS</text>
            <text x="11" y="20" fontSize="4" fill="#666">PAY TO THE ORDER OF:</text>
            <line x1="11" y1="25" x2="65" y2="25" stroke="#333" strokeWidth="0.4" />
            <rect x="70" y="15" width="35" height="14" fill="none" stroke="#1a5a3a" strokeWidth="1" rx="2" />
            <text x="87" y="25" fontSize="8" fill="#1a5a3a" fontWeight="bold" textAnchor="middle">${check.amount.toLocaleString()}</text>
            <rect x="11" y="28" width="24" height="10" rx="2" fill="#c9a227" />
            <text x="23" y="36" fontSize="6" fill="#0a0a0a" fontWeight="bold" textAnchor="middle">{check.symbol}</text>
            <text x="11" y="47" fontSize="4" fill="#333" fontFamily="monospace" opacity="0.4">⑆021000021⑆</text>
          </svg>
        </div>
      ))}

      {/* Money falling into bag on catch */}
      {checks.filter(c => c.caught).map(check => (
        <div key={`fall-${check.id}`} className="money-fall-in" style={{ left: `${bagX}%` }}>
          💵
        </div>
      ))}

      {/* Money Bag */}
      <div className={`money-bag ${bagBounce ? 'bounce' : ''}`} style={{ left: `${bagX}%` }}>
        <svg width="200" height="220" viewBox="0 0 200 220">
          <ellipse cx="100" cy="160" rx="88" ry="55" fill="url(#bagGradGame)" />
          <path d="M28 105 Q28 75 55 63 L100 52 L145 63 Q172 75 172 105 L158 120 Q100 135 42 120 Z" fill="url(#bagTopGradGame)" />
          <ellipse cx="100" cy="58" rx="42" ry="16" fill="#8B4513" />
          <rect x="78" y="40" width="44" height="26" fill="#8B4513" rx="7" />
          <ellipse cx="100" cy="44" rx="18" ry="9" fill="#6B3810" />
          <text x="100" y="175" fontSize="60" fill="#1a1a0a" fontWeight="bold" textAnchor="middle" opacity="0.12">$</text>
          <ellipse cx="100" cy="100" rx="50" ry="20" fill="#1a1a0a" opacity="0.92" />
          <ellipse cx="100" cy="98" rx="36" ry="13" fill="#050505" opacity="0.75" />
          <ellipse cx="60" cy="145" rx="22" ry="32" fill="rgba(255,255,255,0.1)" />
          <ellipse cx="140" cy="150" rx="16" ry="25" fill="rgba(255,255,255,0.06)" />
          <defs>
            <linearGradient id="bagGradGame" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4b254" />
              <stop offset="30%" stopColor="#c9a227" />
              <stop offset="70%" stopColor="#a67c00" />
              <stop offset="100%" stopColor="#8b6914" />
            </linearGradient>
            <linearGradient id="bagTopGradGame" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e8cc6a" />
              <stop offset="50%" stopColor="#c9a227" />
              <stop offset="100%" stopColor="#a67c00" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Money Popup */}
      {moneyPopups.map(popup => (
        <div key={popup.id} className="money-popup" style={{ left: `${popup.x}%` }}>
          💵 +${popup.amount.toLocaleString()}
        </div>
      ))}
    </section>
  );
};

export default MoneyBagCatchGame;
