// ScreenManager.js
class ScreenManager {
  constructor(screens) {
    this.screens = screens;
    this.currentIndex = 0;

    // Referencias al DOM
    this.app = document.getElementById("app");
    this.screen = document.getElementById("screen");
    this.image = document.getElementById("screen-image");
    this.text = document.getElementById("screen-text");
    this.extraText = document.getElementById("extra-text");
    this.button = document.getElementById("next-btn");
    this.heartsContainer = document.getElementById("hearts-container");

    this.render();
    this.generateHearts(25);
  }

  render() {
    const current = this.screens[this.currentIndex];

    // Fondo
    this.app.style.background = current.background;

    // Imagen
    this.image.src = current.image;

    // Texto
    this.text.textContent = current.text;

    // Texto extra (solo última pantalla)
    if (current.extraText) {
      this.extraText.textContent = current.extraText;
      this.extraText.classList.remove("hidden");
    } else {
      this.extraText.classList.add("hidden");
    }

    // Texto del botón
    this.button.textContent = current.buttonText;

    // Control del botón final
    if (this.currentIndex === this.screens.length - 1) {
      setTimeout(() => {
        this.button.classList.add("fade-button");
      }, 2000);
    } else {
      this.button.classList.remove("fade-button");
    }
  }

  next() {
    if (this.currentIndex >= this.screens.length - 1) return;

    // Animación de salida
    this.screen.classList.add("fade-out");

    setTimeout(() => {
      this.currentIndex++;
      this.render();

      // Animación de entrada
      this.screen.classList.remove("fade-out");
      this.screen.classList.add("fade-in");
    }, 1000);
  }

  generateHearts(amount) {
    this.heartsContainer.innerHTML = "";

    for (let i = 0; i < amount; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = 6 + Math.random() * 6 + "s";
      heart.style.animationDelay = Math.random() * 5 + "s";

      this.heartsContainer.appendChild(heart);
    }
  }
}
