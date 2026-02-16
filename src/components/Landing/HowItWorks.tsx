export default function HowItWorks() {
  const cards = [
    {
      icon: (
        /* Circuit/chip generation icon */
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="12"
            y="12"
            width="24"
            height="24"
            rx="4"
            stroke="#3BA3D9"
            strokeWidth="2"
          />
          <text
            x="24"
            y="28"
            textAnchor="middle"
            fill="#3BA3D9"
            fontSize="10"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
          >
            $A2
          </text>
          {/* Pins */}
          <line x1="18" y1="8" x2="18" y2="12" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="24" y1="8" x2="24" y2="12" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="30" y1="8" x2="30" y2="12" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="18" y1="36" x2="18" y2="40" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="24" y1="36" x2="24" y2="40" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="30" y1="36" x2="30" y2="40" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="8" y1="20" x2="12" y2="20" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="8" y1="28" x2="12" y2="28" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="36" y1="20" x2="40" y2="20" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="36" y1="28" x2="40" y2="28" stroke="#3BA3D9" strokeWidth="2" />
        </svg>
      ),
      title: "AI Circuit Generation",
      description: "Describe you project idea.",
      borderColor: "#B8DCF0",
    },
    {
      icon: (
        /* Document/sandbox icon */
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="10"
            y="6"
            width="28"
            height="36"
            rx="3"
            stroke="#3BA3D9"
            strokeWidth="2"
          />
          <line x1="16" y1="16" x2="32" y2="16" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="16" y1="22" x2="32" y2="22" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="16" y1="28" x2="28" y2="28" stroke="#3BA3D9" strokeWidth="2" />
          {/* Checkmark accent */}
          <rect x="13" y="14" width="4" height="4" rx="1" fill="#3BA3D9" opacity="0.3" />
          <rect x="13" y="20" width="4" height="4" rx="1" fill="#3BA3D9" opacity="0.3" />
          <rect x="13" y="26" width="4" height="4" rx="1" fill="#3BA3D9" opacity="0.3" />
        </svg>
      ),
      title: "Interactive Sandlox",
      description: "Drag, drop & sircuits",
      borderColor: "#B8DCF0",
    },
    {
      icon: (
        /* Guided assembly / circuit board icon */
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="24" cy="16" r="8" stroke="#3BA3D9" strokeWidth="2" />
          <circle cx="24" cy="16" r="3" fill="#3BA3D9" />
          <line x1="24" y1="24" x2="24" y2="32" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="16" y1="32" x2="32" y2="32" stroke="#3BA3D9" strokeWidth="2" />
          <circle cx="16" cy="36" r="3" stroke="#3BA3D9" strokeWidth="2" />
          <circle cx="32" cy="36" r="3" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="16" y1="39" x2="16" y2="44" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="32" y1="39" x2="32" y2="44" stroke="#3BA3D9" strokeWidth="2" />
        </svg>
      ),
      title: "3. Guided Physical Assembly",
      description: "Test real circuits easily",
      borderColor: "#D1D5DB",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full"
      style={{ backgroundColor: "#F7FAFC" }}
    >
      <div className="mx-auto max-w-[1200px] px-12 py-16">
        <h2
          className="mb-12 text-center text-[32px] font-bold leading-[1.3]"
          style={{ color: "#1A1A2E" }}
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center rounded-2xl bg-white p-8 text-center"
              style={{
                border: `2px solid ${card.borderColor}`,
                minHeight: "220px",
              }}
            >
              {/* Icon */}
              <div className="mb-5">{card.icon}</div>

              {/* Title */}
              <h3
                className="mb-2 text-[18px] font-bold leading-[1.3]"
                style={{ color: "#1A1A2E" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] font-normal leading-[1.5]"
                style={{ color: "#6B7280" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
