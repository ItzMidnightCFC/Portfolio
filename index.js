var readout = new Audio();
readout.addEventListener("ended", () => {
  voicesvg.src = "not-moving.svg";
});

readout.addEventListener("play", () => {
  voicesvg.src = "voice-svgrepo-com.svg";
});

audcov.onclick = () => {
  readout.src = "/myself1.mp3";
  readout.play();
  voicediv.classList.add("voiceact");
};

readoutp.onclick = () => {
  readout.src = "/myself1.mp3";
  readout.pause();
  readout.currentTime = 0;
  voicediv.classList.remove("voiceact");
};

const dot = document.querySelector(".cursor");
const dottrack = document.querySelector(".cursortrack");
const hovers = document.querySelectorAll(
  "a,#hbtn,#readbox,#imgs div,.probox,.servbox,#submit"
);

document.addEventListener("mouseenter", () => {
  dot.classList.remove("hide");
  dottrack.classList.remove("hide");
});

document.addEventListener("mouseleave", () => {
  dot.classList.add("hide");
  dottrack.classList.add("hide");
});

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  dottrack.style.left = e.clientX + "px";
  dottrack.style.top = e.clientY + "px";
});

hovers.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    dot.classList.add("square");
  });

  el.addEventListener("mouseleave", () => {
    dot.classList.remove("square");
  });
});

let scrolltimeout;

allcov.addEventListener("scroll", () => {
  dottrack.classList.add("scrolling");
  dot.classList.add("scrolling2");
  clearTimeout(scrolltimeout);

  scrolltimeout = setTimeout(() => {
    dottrack.classList.remove("scrolling");
    dot.classList.remove("scrolling2");
  }, 150);
});

const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link,.side-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry.target.id);

      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((div) => observer.observe(div));

document.querySelectorAll("#navs a,#snavs a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.remove("show");
    const targetId = link.dataset.target;
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

menubox.onclick = () => {
  sidebar.classList.add("show");
};

sidecancel.onclick = () => {
  sidebar.classList.remove("show");
};

// Initialize EmailJS
(function () {
  emailjs.init("5usAClzk3pvvriUi9"); // Replace with your EmailJS Public Key
})();

// Handle form submission
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Send email using EmailJS
  emailjs
    .send("service_u3l4q0u", "template_x8siven", templateParams)
    .then((response) => {
      alert("Message sent successfully!");
      console.log("Success:", response.status, response.text);

      // Clear the form
      form.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Please try again later.");
      console.error("Error:", error);
    });
});
