import { useRef, useEffect } from 'react';

export default function SpotlightSection({ children, ...props }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.classList.add("spotlight-section");
    
    const overlay = document.createElement("span");
    overlay.className = "spotlight-overlay";
    section.prepend(overlay);

    const setSectionSpotlight = (event) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--spot-x", `${x}%`);
      section.style.setProperty("--spot-y", `${y}%`);
    };

    const handleMouseMove = (event) => {
      section.classList.add("section-spotlight-active");
      setSectionSpotlight(event);
    };

    const handleMouseLeave = () => {
      section.classList.remove("section-spotlight-active");
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      if (overlay.parentNode) {
        overlay.remove();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} {...props}>
      {children}
    </section>
  );
}
