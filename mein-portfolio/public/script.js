document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");
  
    const inView = (section) => {
      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    };
  
    const handleScroll = () => {
      sections.forEach((section) => {
        if (inView(section)) {
          section.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialer Check
  });
  