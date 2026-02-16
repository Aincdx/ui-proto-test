export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex h-[80px] items-center justify-between bg-white px-12"
      style={{ borderBottom: "1px solid #E2E8F0" }}
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
          <circle cx="14" cy="14" r="13" stroke="#3BA3D9" strokeWidth="2" />
          <circle cx="14" cy="14" r="5" fill="#3BA3D9" />
          <line x1="14" y1="1" x2="14" y2="7" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="14" y1="21" x2="14" y2="27" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="1" y1="14" x2="7" y2="14" stroke="#3BA3D9" strokeWidth="2" />
          <line x1="21" y1="14" x2="27" y2="14" stroke="#3BA3D9" strokeWidth="2" />
        </svg>
        <span
          className="text-[20px] font-bold tracking-wider"
          style={{ color: "#3BA3D9" }}
        >
          PROTOBOARD
        </span>
      </a>

      {/* Nav Links */}
      <ul className="hidden items-center gap-0 text-[15px] font-medium md:flex" style={{ color: "#4A5568" }}>
        <li>
          <a
            href="#"
            className="cursor-pointer px-4 py-2 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ outlineColor: "#3BA3D9" }}
          >
            Home
          </a>
        </li>
        <li className="text-[#CBD5E0] select-none" aria-hidden="true">/</li>
        <li>
          <a
            href="#"
            className="cursor-pointer px-4 py-2 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ outlineColor: "#3BA3D9" }}
          >
            About
          </a>
        </li>
        <li className="text-[#CBD5E0] select-none" aria-hidden="true">/</li>
        <li>
          <a
            href="#how-it-works"
            className="cursor-pointer px-4 py-2 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ outlineColor: "#3BA3D9" }}
          >
            How It Works
          </a>
        </li>
        <li className="text-[#CBD5E0] select-none" aria-hidden="true">/</li>
        <li>
          <a
            href="#"
            className="cursor-pointer px-4 py-2 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ outlineColor: "#3BA3D9" }}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Sign Up Button */}
      <a
        href="#"
        className="cursor-pointer rounded-full px-6 py-[10px] text-[14px] font-semibold text-white hover:opacity-90 focus:outline-2 focus:outline-offset-2"
        style={{ backgroundColor: "#3BA3D9", outlineColor: "#3BA3D9" }}
      >
        Sign Up
      </a>
    </nav>
  );
}
