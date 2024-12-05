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
  
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");
    const header = document.querySelector("header");
    const hero = document.querySelector(".hero");
  
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
  
      // Hintergrundfarbe ändern
      if (window.scrollY > hero.offsetHeight) {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = ""; // Standard-Hintergrund
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialer Check
  });
  