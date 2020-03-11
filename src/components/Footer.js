import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
<p> This is a footer Placeholder </p>
      <p>Copyright ⓒ {year}</p>
      </div>
     
    </footer>
  );
}

export default Footer;
