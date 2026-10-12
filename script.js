const navToggle = document.querySelector(".nav-toggle");
const flexNav = document.querySelector(".flex-nav");
const primaryMenu = document.getElementById("primary-menu");

if (navToggle && flexNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = flexNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Toggle navigation",
    );
  });

  if (primaryMenu) {
    primaryMenu.addEventListener("click", (event) => {
      if (event.target.closest("a") && flexNav.classList.contains("open")) {
        flexNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Toggle navigation");
      }
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860 && flexNav.classList.contains("open")) {
      flexNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const contactButton = document.getElementById("contact-button");
const contactModal = document.getElementById("contact-modal");
const closeButtons = document.querySelectorAll("[data-close-modal]");

const openModal = () => {
  if (!contactModal) return;
  contactModal.classList.add("contact-modal--open");
  contactModal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  if (!contactModal) return;
  contactModal.classList.remove("contact-modal--open");
  contactModal.setAttribute("aria-hidden", "true");
};

if (contactButton && contactButton.tagName === "BUTTON") {
  contactButton.addEventListener("click", openModal);
}

closeButtons.forEach((button) => button.addEventListener("click", closeModal));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal && contactModal.classList.contains("contact-modal--open")) {
    closeModal();
  }
});

const contactForms = document.querySelectorAll(".contact-form");
contactForms.forEach((contactForm) => {
  contactForm.addEventListener("submit", (event) => {
    const firstNameInput = contactForm.elements.firstName;
    const lastNameInput = contactForm.elements.lastName;
    const emailInput = contactForm.elements.email;
    const phoneInput = contactForm.elements.phone;

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+]?[\d\s().-]{7,20}$/;

    firstNameInput.setCustomValidity("");
    lastNameInput.setCustomValidity("");
    emailInput.setCustomValidity("");
    phoneInput.setCustomValidity("");

    if (!firstName) {
      firstNameInput.setCustomValidity("First name is required.");
    }

    if (!lastName) {
      lastNameInput.setCustomValidity("Last name is required.");
    }

    if (!email) {
      emailInput.setCustomValidity("Email is required.");
    } else if (!emailPattern.test(email)) {
      emailInput.setCustomValidity("Please enter a valid email address.");
    }

    if (!phone) {
      phoneInput.setCustomValidity("Phone number is required.");
    } else if (!phonePattern.test(phone)) {
      phoneInput.setCustomValidity("Please enter a valid phone number.");
    }

    if (!contactForm.checkValidity()) {
      event.preventDefault();
      contactForm.reportValidity();
    }
  });
});

const services = {
  strategy: {
    title: "Business Strategy",
    icon: "fa-regular fa-lightbulb",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, exercitationem beatae esse aperiam magnam saepe.",
    text2:
      "Dolore animi voluptate necessitatibus pariatur quae, est facere deleniti doloribus eum possimus exercitationem minima voluptas?",
  },
  research: {
    title: "Research",
    icon: "fa-solid fa-book-open",
    text1:
      "We dig into users, competitors and market trends to find clear opportunities before we build.",
    text2:
      "Interviews, surveys and audits turn assumptions into an actionable research-backed plan.",
  },
  data: {
    title: "Data Analysis",
    icon: "fa-solid fa-magnifying-glass-chart",
    text1:
      "We turn raw metrics into clear insights — tracking what works and what needs fixing.",
    text2:
      "Dashboards, reports and testing help you make confident, data-driven decisions.",
  },
  ui: {
    title: "UI Design",
    icon: "fa-solid fa-compass-drafting",
    text1:
      "Clean, modern interfaces with consistent typography, spacing and visual hierarchy.",
    text2:
      "We design responsive layouts that look sharp on mobile, tablet and desktop.",
  },
  ux: {
    title: "UX Design",
    icon: "fa-solid fa-pen-ruler",
    text1:
      "User flows, wireframes and prototypes focused on making every step simple and intuitive.",
    text2:
      "We remove friction so visitors can find what they need and convert faster.",
  },
  technology: {
    title: "Technology",
    icon: "fa-solid fa-microchip",
    text1:
      "Vanilla HTML, CSS and JavaScript done right — fast, accessible and easy to maintain.",
    text2:
      "No heavy frameworks, just clean code that loads quickly and scales with you.",
  },
  creative: {
    title: "Creative",
    icon: "fa-solid fa-lightbulb",
    text1:
      "Distinct ideas, visuals and copy that make your brand memorable.",
    text2:
      "From concepts to final polish, we add the creative details that make a big impression.",
  },
};

const sidebarItems = document.querySelectorAll(".sidebar-item");
const serviceIcon = document.getElementById("service-icon");
const serviceTitle = document.getElementById("service-title");
const serviceText1 = document.getElementById("service-text-1");
const serviceText2 = document.getElementById("service-text-2");

const setActiveService = (key) => {
  const service = services[key];
  if (!service) return;

  sidebarItems.forEach((item) => {
    const isActive = item.dataset.service === key;
    item.classList.toggle("sidebar-item--active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "true");
    } else {
      item.setAttribute("aria-current", "false");
    }
  });

  if (serviceIcon) serviceIcon.className = service.icon;
  if (serviceTitle) serviceTitle.textContent = service.title;
  if (serviceText1) serviceText1.textContent = service.text1;
  if (serviceText2) serviceText2.textContent = service.text2;
};

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => setActiveService(item.dataset.service));
});






