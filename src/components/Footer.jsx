import React from "react";

function Footer() {
  return (
    <footer className="my-16 text-center">
      <p className="text-xs opacity-50 sm:text-sm">
        &copy; {new Date().getFullYear()} Brendan K. Schatzki.
        <br />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
