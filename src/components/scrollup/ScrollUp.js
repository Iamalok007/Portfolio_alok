import React from 'react';
import './scrollup.css';

function ScrollUp() {
  window.addEventListener("scroll", function() {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show_scroll");
    } else {
      scrollUp.classList.remove("show_scroll");
    }
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="scrollup" onClick={handleClick}>
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </button>
  );
}

export default ScrollUp;
