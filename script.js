 window.addEventListener("scroll", function () {
        let navbar = document.getElementById("navbar");
        if (window.scrollY > 30) {
          navbar.classList.add("scrolled_two"); // Add class when scrolling
        } else if (window.scrollY > 5) {
          navbar.classList.add("scrolled"); // Add class when scrolling
        } else {
          navbar.classList.remove("scrolled"); // Remove class when at top
          navbar.classList.remove("scrolled_two"); // Remove class when at top
        }
      });