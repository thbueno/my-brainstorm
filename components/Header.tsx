"use client";

import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 right-0">
      <div>
        {/* Left side */}
        <div>
          <Link href="/">
            <h1>My brainstorm</h1>
          </Link>
        </div>
        {/* Right side */}
        <div></div>
      </div>
    </header>
  );
}

export default Header;
