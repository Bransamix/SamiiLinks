// Lightning animation logic
const bg = document.getElementById("lightning-bg");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  bg.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #111, #000)`;
});

// tsParticles lightning effect
tsParticles.load("tsparticles", {
  background: { color: { value: "#000000" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    collisions: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1.2,
      straight: false
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } }
  },
  detectRetina: true
});

// Music controller logic
const audio = document.getElementById("bg-music");
const playBtn = document.getElementById("play-music-btn");
const playIcon = document.getElementById("play-icon");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playIcon.src = "assets/play.png";
  } else {
    audio.play()
      .then(() => {
        playIcon.src = "assets/pause.png";
      })
      .catch(err => {
        console.error("Audio play error:", err);
        alert("Audio failed to play. Please try again.");
      });
  }

  isPlaying = !isPlaying;
});
