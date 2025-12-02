import React, { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroHeight = document.getElementById("hero-section")?.offsetHeight || 300;

    const onScroll = () => {
      if (window.scrollY > heroHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-7 py-3 rounded-full shadow-xl 
      transition-all duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      ↑ Top
    </button>
  );
}

export default ScrollToTopButton;
