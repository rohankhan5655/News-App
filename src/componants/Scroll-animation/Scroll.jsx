import React, { useRef, useEffect, useState } from "react";
import { Element } from "react-scroll";
import "../Scroll-animation/Animation.css"; // Import your CSS file with animations

const Scroll = ({ children, name }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Adjust this value based on when you want the animation to trigger
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Element name={name}>
      <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
        {children}
      </div>
    </Element>
  );
};

export default Scroll;
