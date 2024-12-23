// Animate Phase

setTimeout(Animate , 300)

// Animation
var num = 0
function Animate(){
  num++
  if(num == 20){
    
    written.innerHTML = "Hi, I'm a Gamer"
    fourth.style.right = "50%"
    fourth.style.opacity = "0"
    second.style.right = "0%"
    first.style.right = "0%"
  }
  
  if (num == 40) {
    
    written.innerHTML = "Hi, I'm an Artist"
    fourth.style.right = "0%"
    third.style.right = "50%"
    third.style.opacity = "0"
  }
  
  if (num == 60) {
    
    written.innerHTML = "Hi, I'm an Editor"
    third.style.right = "0%"
    second.style.right = "50%"
    second.style.opacity = "0"
  }
  
  if (num == 80) {
    
    written.innerHTML = "Hi, I'm a Developer"
    first.style.right = "50%"
    fourth.style.opacity = "1"
    third.style.opacity = "1"
    second.style.opacity = "1"
    num = 0
  }
}


var hang = setInterval(Animate , 300)
// Ending Animate

let lastScrollTop = 0;
let lastTime = 0;
let timeoutId
window.addEventListener('scroll', ()=>{
  
  const gestureArea = document.getElementById('body');
    let startX = 0, startY = 0, startTime = 0;
    gestureArea.addEventListener('touchstart', (event) => {
      startY = event.touches[0].clientY;
      startTime = new Date().getTime(); // Record the start time
    });
  
  scrolled = window.scrollY
  if (scrolled > 500){
    images.style.display = "none"
    topanim.style.height = "50px"
    topanim.style.backdropFilter = "blur(4px)"
    topanim.style.position = "sticky"
    topanim.style.display = "flex"
    topanim.style.alignItems = "center"
    topanim.style.background = "#BCBCBCC4"
    topanim.style.color = "black"
    myname.style.display = "none"
    written.style.display = "none"
    writein.style.display = "block"
    menu.style.display = "block"
    myself.style.marginTop = "30px"
    myself.style.animation = "ChColor 30s infinite linear"
    window.addEventListener('scroll', () => {
      if (timeoutId) clearTimeout(timeoutId)
      topanim.style.transform = "translateY(-200px)"
      timeoutId = setTimeout(() => {
      topanim.style.transform = "translateY(0px)"
      }, 200)})
  }
  
  
  if (scrolled < 1) {
    gestureArea.addEventListener('touchend', (event) => {
      const endY = event.changedTouches[0].clientY;
      const endTime = new Date().getTime(); // Record the end time
      const diffY = endY - startY;
      const distance = Math.sqrt(diffY ** 2); // Calculate total distance
      const timeTaken = (endTime - startTime) / 1000; // Time in seconds
      const speed = distance / timeTaken; // Speed in pixels per second
    
      if (diffY > 50) {
    
        if (speed.toFixed(2) > 1200) {
          topanim.style.backdropFilter = "none"
          images.style.display = "block"
          topanim.style.height = "70vh"
          topanim.style.position = "relative"
          topanim.style.top = "0px"
          topanim.style.display = "block"
          topanim.style.alignItems = "none"
          topanim.style.background = "#00000000"
          topanim.style.color = "#fff"
          myname.style.display = "block"
          written.style.display = "block"
          writein.style.display = "none"
          menu.style.display = "none"
          myself.style.marginTop = "20px"
          myself.style.animation = "none"
          
          window.addEventListener('scroll', () => {
            if (timeoutId) clearTimeout(timeoutId)
            topanim.style.transform = "translateY(0px)"
            timeoutId = setTimeout(() => {
              topanim.style.transform = "translateY(0px)"
            }, 1)
          })
        }
      }
    });
  }
  

})


var readout = new Audio
aud.onclick = () => {
  
  readout.src = "/myself.mp3"
  readout.play()
}

var carom = 0

function Testimonial() {
  carom++
  if (carom == 10) {
    shift2.style.opacity = "1"
    shift1.style.transform = "translateX(-78vw)"
    shift2.style.transform = "translateX(-78vw)"
    shift3.style.transform = "translateX(-78vw)"
    shift4.style.transform = "translateX(-78vw)"
    shift5.style.transform = "translateX(-78vw)"
    shift3.style.opacity = "0.5"
  }
  
  if (carom == 20) {
    shift3.style.opacity = "1"
    shift1.style.transform = "translateX(-156vw)"
    shift2.style.transform = "translateX(-156vw)"
    shift3.style.transform = "translateX(-156vw)"
    shift4.style.transform = "translateX(-156vw)"
    shift5.style.transform = "translateX(-156vw)"
    shift4.style.opacity = "0.5"
  }
  
  if (carom == 30) {
    shift4.style.opacity = "1"
    shift1.style.transform = "translateX(-238vw)"
    shift2.style.transform = "translateX(-238vw)"
    shift3.style.transform = "translateX(-238vw)"
    shift4.style.transform = "translateX(-238vw)"
    shift5.style.transform = "translateX(-238vw)"
    shift5.style.opacity = "0.5"
  }
  
  if (carom == 40) {
    shift5.style.opacity = "1"
    shift1.style.transform = "translateX(-316vw)"
    shift2.style.transform = "translateX(-316vw)"
    shift3.style.transform = "translateX(-316vw)"
    shift4.style.transform = "translateX(-316vw)"
    shift5.style.transform = "translateX(-316vw)"
  }
  
  if (carom == 50) {
    shift2.style.opacity = "1"
    shift1.style.transform = "translateX(-78vw)"
    shift2.style.transform = "translateX(-78vw)"
    shift3.style.transform = "translateX(-78vw)"
    shift4.style.transform = "translateX(-78vw)"
    shift5.style.transform = "translateX(-78vw)"
    shift3.style.opacity = "0.5"
  }
  
  
  if (carom == 50) {
    shift2.style.opacity = "0.5"
    shift1.style.transform = "translateX(0vw)"
    shift2.style.transform = "translateX(0vw)"
    shift3.style.transform = "translateX(0vw)"
    shift4.style.transform = "translateX(0vw)"
    shift5.style.transform = "translateX(0vw)"
    shift1.style.opacity = "1"
    carom = 0
  }
  
  
  leftarr.onclick = () => {
    if (carom < 10 && carom > 0) {
      shift5.style.opacity = "1"
      shift1.style.transform = "translateX(-316vw)"
      shift2.style.transform = "translateX(-316vw)"
      shift3.style.transform = "translateX(-316vw)"
      shift4.style.transform = "translateX(-316vw)"
      shift5.style.transform = "translateX(-316vw)"
      carom = 40
    }
    if (carom < 20 && carom > 10) {
      shift2.style.opacity = "0.5"
      shift1.style.transform = "translateX(0vw)"
      shift2.style.transform = "translateX(0vw)"
      shift3.style.transform = "translateX(0vw)"
      shift4.style.transform = "translateX(0vw)"
      shift5.style.transform = "translateX(0vw)"
      carom = 0
    }
    
    if (carom < 30 && carom > 20) {
      shift2.style.opacity = "1"
      shift1.style.transform = "translateX(-78vw)"
      shift2.style.transform = "translateX(-78vw)"
      shift3.style.transform = "translateX(-78vw)"
      shift4.style.transform = "translateX(-78vw)"
      shift5.style.transform = "translateX(-78vw)"
      shift3.style.opacity = "0.5"
      carom = 10
    }
    
    if (carom < 40 && carom > 30) {
      shift3.style.opacity = "1"
      shift1.style.transform = "translateX(-156vw)"
      shift2.style.transform = "translateX(-156vw)"
      shift3.style.transform = "translateX(-156vw)"
      shift4.style.transform = "translateX(-156vw)"
      shift5.style.transform = "translateX(-156vw)"
      shift4.style.opacity = "0.5"
      carom = 20
    }
    
    if (carom < 50 && carom > 40) {
      shift4.style.opacity = "1"
      shift1.style.transform = "translateX(-238vw)"
      shift2.style.transform = "translateX(-238vw)"
      shift3.style.transform = "translateX(-238vw)"
      shift4.style.transform = "translateX(-238vw)"
      shift5.style.transform = "translateX(-238vw)"
      shift5.style.opacity = "0.5"
      carom = 30
    }
  }
  
  
  
  rightarr.onclick = () => {
    if (carom < 10 && carom > 0) {
      shift2.style.opacity = "1"
      shift1.style.transform = "translateX(-78vw)"
      shift2.style.transform = "translateX(-78vw)"
      shift3.style.transform = "translateX(-78vw)"
      shift4.style.transform = "translateX(-78vw)"
      shift5.style.transform = "translateX(-78vw)"
      shift3.style.opacity = "0.5"
      carom = 10
    }
    
    if (carom < 20 && carom > 10) {
      shift3.style.opacity = "1"
      shift1.style.transform = "translateX(-156vw)"
      shift2.style.transform = "translateX(-156vw)"
      shift3.style.transform = "translateX(-156vw)"
      shift4.style.transform = "translateX(-156vw)"
      shift5.style.transform = "translateX(-156vw)"
      shift4.style.opacity = "0.5"
      carom = 20
    }
    
    if (carom < 30 && carom > 20) {
      shift4.style.opacity = "1"
      shift1.style.transform = "translateX(-238vw)"
      shift2.style.transform = "translateX(-238vw)"
      shift3.style.transform = "translateX(-238vw)"
      shift4.style.transform = "translateX(-238vw)"
      shift5.style.transform = "translateX(-238vw)"
      shift5.style.opacity = "0.5"
      carom = 30
    }
    
    if (carom < 40 && carom > 30) {
      shift5.style.opacity = "1"
      shift1.style.transform = "translateX(-316vw)"
      shift2.style.transform = "translateX(-316vw)"
      shift3.style.transform = "translateX(-316vw)"
      shift4.style.transform = "translateX(-316vw)"
      shift5.style.transform = "translateX(-316vw)"
      carom = 40
    }
    
    if (carom < 50 && carom > 40) {
      shift2.style.opacity = "0.5"
      shift1.style.transform = "translateX(0vw)"
      shift2.style.transform = "translateX(0vw)"
      shift3.style.transform = "translateX(0vw)"
      shift4.style.transform = "translateX(0vw)"
      shift5.style.transform = "translateX(0vw)"
      carom = 0
    }
  }
  
  
}


setInterval(Testimonial , 1000)

hbtn.onclick = () => {
  window.location.href = "#hrme"
}



menu.onclick = () =>{
  bar.style.display = "grid"
  bar.style.right = "-30%"
  setTimeout(moving , 100)
}

var moving = () =>{
  bar.style.right = "7%"
  body.style.overflowY = "hidden"
}

body.onclick = () =>{
  bar.style.right = "-30%"
  body.style.overflowY = "scroll"
}

bar.onclick = () =>{
  bar.style.right = "7%"
  body.style.overflowY = "hidden"
}

abm.onclick = () =>{
  window.location.href = "#myself"
}

skm.onclick = () => {
  window.location.href = "#myskills"
}

prm.onclick = () => {
  window.location.href = "#myprjct"
}

tem.onclick = () => {
  window.location.href = "#mytest"
}

com.onclick = () => {
}

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
  emailjs.send("service_u3l4q0u", "template_x8siven", templateParams)
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
