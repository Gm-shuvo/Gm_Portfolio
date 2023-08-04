import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  console.log("🚀 ~ file: ScrollToTop.js:5 ~ ScrollToTop ~ showScroll:", showScroll)

  

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      className="fixed bottom-32 right-10 md:bottom-10 md:right-10 p-2 cursor-pointer rounded-full bg-[#42f1b7e0] shadow-md hover:shadow-lg transition duration-200 ease-in"
      onClick={scrollTop}
      style={{ display: showScroll ? 'block' : 'none' }}
    >
      <lord-icon
        src="https://cdn.lordicon.com/xsdtfyne.json"
        trigger="loop"
        colors=""
        state="hover-2"
        style={{ width: '35px', height: '35px' }}
      ></lord-icon>
    </div>
  );
};

export default ScrollToTop;
