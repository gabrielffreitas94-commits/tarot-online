export function CardBack() {
  return (
    <div
      data-testid="card-back"
      className="w-full h-full rounded-xl p-2 bg-gradient-to-br from-celestial-900 via-mystic-purple to-celestial-950 border-2 border-gold/70 shadow-celestial-gold flex flex-col items-center justify-between relative overflow-hidden"
    >
      {/* Outer sacred border */}
      <div className="w-full h-full border border-gold/40 rounded-lg p-2 flex flex-col items-center justify-center relative">
        {/* Subtle background star pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f5d061_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Central mystical sun & star medallion */}
        <svg
          viewBox="0 0 100 140"
          className="w-3/4 h-3/4 text-gold drop-shadow-[0_0_8px_rgba(245,208,97,0.5)] transition-transform duration-500 hover:scale-105"
          fill="none"
          stroke="currentColor"
        >
          {/* Sacred Diamond Frame */}
          <polygon
            points="50,15 88,70 50,125 12,70"
            strokeWidth="1.5"
            stroke="currentColor"
            opacity="0.8"
          />
          <polygon
            points="50,22 82,70 50,118 18,70"
            strokeWidth="0.8"
            stroke="currentColor"
            opacity="0.5"
          />

          {/* Central Sun Disc */}
          <circle cx="50" cy="70" r="16" strokeWidth="1.5" fill="#0f1124" />
          <circle cx="50" cy="70" r="8" fill="currentColor" opacity="0.85" />

          {/* 8 Rays */}
          <line x1="50" y1="46" x2="50" y2="38" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="50" y1="94" x2="50" y2="102" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="26" y1="70" x2="18" y2="70" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="74" y1="70" x2="82" y2="70" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="33" y1="53" x2="27" y2="47" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="67" y1="87" x2="73" y2="93" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="33" y1="87" x2="27" y2="93" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="67" y1="53" x2="73" y2="47" strokeWidth="1.5" strokeLinecap="round" />

          {/* Crescent Moons at Top and Bottom */}
          <path
            d="M 44,28 A 6,6 0 1,0 56,28 A 4.5,4.5 0 0,1 44,28"
            fill="currentColor"
            opacity="0.75"
          />
          <path
            d="M 44,112 A 6,6 0 1,1 56,112 A 4.5,4.5 0 0,0 44,112"
            fill="currentColor"
            opacity="0.75"
          />
        </svg>

        {/* Small corner stars */}
        <div className="absolute top-2 left-2 text-gold/70 text-xs">✦</div>
        <div className="absolute top-2 right-2 text-gold/70 text-xs">✦</div>
        <div className="absolute bottom-2 left-2 text-gold/70 text-xs">✦</div>
        <div className="absolute bottom-2 right-2 text-gold/70 text-xs">✦</div>
      </div>
    </div>
  );
}
