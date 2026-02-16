export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex h-[80px] items-center justify-between px-12"
      style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-light)" }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a
        href="/"
        className="flex items-center gap-2 cursor-pointer"
        aria-label="PROTOBOARD home"
      >
        {/* Logo icon placeholder — circuit board style */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="13" stroke="var(--primary)" strokeWidth="2" />
          <circle cx="14" cy="14" r="5" fill="var(--primary)" />
          <line x1="14" y1="1" x2="14" y2="7" stroke="var(--primary)" strokeWidth="2" />
          <line x1="14" y1="21" x2="14" y2="27" stroke="var(--primary)" strokeWidth="2" />
          <line x1="1" y1="14" x2="7" y2="14" stroke="var(--primary)" strokeWidth="2" />
          <line x1="21" y1="14" x2="27" y2="14" stroke="var(--primary)" strokeWidth="2" />
        </svg>
        <span
          className="text-[20px] font-bold tracking-wider"
          style={{ color: "var(--primary)" }}
        >
          PROTOBOARD
        </span>
      </a>

      {/* Nav Links */}
      <ul className="hidden items-center gap-0 text-[15px] font-medium md:flex" style={{ color: "var(--text-nav)" }}>
        <li>
          <a
            href="#"
            className="cursor-pointer px-4 py-2 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ outlineColor: "var(--primary)" }}
          >
            Home
          </a>
        </li>
        <li className="select-none" style={{ color: "var(--border-light)" }} aria-hidden="true">/</li>
        <li>
          <a
            href="#"
            className="cursor-pointer px-4 py-2 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ outlineColor: "var(--primary)" }}
          >
            About
          </a>
        </li>
        <li className="select-none" style={{ color: "var(--border-light)" }} aria-hidden="true">/</li>
        <li>
          <a
            href="#how-it-works"
            className="cursor-pointer px-4 py-2 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ outlineColor: "var(--primary)" }}
          >
            How It Works
          </a>
        </li>
        <li className="select-none" style={{ color: "var(--border-light)" }} aria-hidden="true">/</li>
        <li>
          <a
            href="#"
            className="cursor-pointer px-4 py-2 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ outlineColor: "var(--primary)" }}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Sign Up Button */}
      <a
        href="#"
        className="cursor-pointer rounded-full px-6 py-[10px] text-[14px] font-semibold text-white hover:opacity-90 focus:outline-2 focus:outline-offset-2"
        style={{ backgroundColor: "var(--btn-primary-bg)", outlineColor: "var(--primary)" }}
      >
        Sign Up
      </a>
    </nav>
  );
}
