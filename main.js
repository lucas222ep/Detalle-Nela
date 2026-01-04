// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Crear el gestor de pantallas
  const manager = new ScreenManager(screens);

  // Botón siguiente
  const nextBtn = document.getElementById("next-btn");

  nextBtn.addEventListener("click", () => {
    manager.next();
  });

  // 🎵 Control de audio
  const audio = document.getElementById("bg-audio");
  const audioBtn = document.getElementById("audio-btn");

  let isPlaying = false;

  audioBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      audioBtn.textContent = "⏸ Pausar";
    } else {
      audio.pause();
      audioBtn.textContent = "🎵 Música";
    }
    isPlaying = !isPlaying;
  });

});
