import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="mt-2 text-sm opacity-50">
        &copy; {new Date().getFullYear()} Brendan K. Schatzki. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
