document.addEventListener("DOMContentLoaded", () => {
    const startBtn    = document.getElementById("startBtn");
    const scene1      = document.getElementById("scene1");
    const scene2      = document.getElementById("scene2");
    const scene3      = document.getElementById("scene3");
    const scene4      = document.getElementById("scene4");
    const scene5      = document.getElementById("scene5");
    const scene6      = document.getElementById("scene6");
    const scene7      = document.getElementById("scene7");
    const scene8      = document.getElementById("scene8");
    const scene9      = document.getElementById("scene9");
    const whiteFade   = document.getElementById("whiteFade");
    const magicWord   = document.getElementById("magicWord");
  
    const nextBtn2    = document.getElementById("nextBtn");    // Scene 2 -> 3
    const nextBtn3    = document.getElementById("nextBtn3");   // Scene 3 -> 4
    const nextBtn4    = document.getElementById("nextBtn4");   // Scene 4 -> 5
    const nextBtn5    = document.getElementById("nextBtn5");   // Scene 5 -> 6
    const nextBtn6    = document.getElementById("nextBtn6");   // Scene 6 -> 7
    const nextBtn7    = document.getElementById("nextBtn7");   // Scene 7 -> 8
    const nextBtn8    = document.getElementById("nextBtn8");   // Scene 8 -> 9
  
    const backBtn2    = document.getElementById("backBtn2");   // Scene 2 -> 1
    const backBtn3    = document.getElementById("backBtn3");   // Scene 3 -> 2
    const backBtn4    = document.getElementById("backBtn4");   // Scene 4 -> 3
    const backBtn5    = document.getElementById("backBtn5");   // Scene 5 -> 4
    const backBtn6    = document.getElementById("backBtn6");   // Scene 6 -> 5
    const backBtn7    = document.getElementById("backBtn7");   // Scene 7 -> 6
    const backBtn8    = document.getElementById("backBtn8");   // Scene 8 -> 7
  
    const scene4Magic = document.getElementById("scene4Magic");
    const penFollower = document.getElementById("penFollower");
    const scene5OverlayImg = document.getElementById("scene5OverlayImg");
    const vangWord    = document.getElementById("vangWord");
    const nguoiWord   = document.getElementById("nguoiWord");
    const laVangWord  = document.getElementById("laVangWord"); // Lá vàng in scene 7
    const noWord      = document.getElementById("noWord");     // "nở" in scene 8
    const backToStartWord = document.getElementById("backToStartWord"); // Hồn in scene 9
  
    // Guard: if critical scenes aren’t found, stop
    if (!scene1 || !scene2 || !whiteFade) return;
  
    // --- Scene 1 -> Scene 2 ---
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        whiteFade.classList.add("active");
        scene1.classList.add("fade-out");
        scene2.classList.add("visible");
  
        setTimeout(() => {
          scene1.style.display = "none";
          whiteFade.classList.remove("active");
        }, 800);
      });
    }
  
    // --- Scene 2 background toggle (NỞ) ---
    if (magicWord) {
      magicWord.addEventListener("click", () => {
        scene2.classList.toggle("alt-bg");
      });
    }
  
    // --- Scene 2 -> Scene 3 ---
    if (nextBtn2 && scene3) {
      nextBtn2.addEventListener("click", () => {
        scene3.classList.add("visible");
        scene2.classList.remove("visible");
      });
    }
  
    // --- Scene 2 -> Scene 1 (Back) ---
    if (backBtn2 && scene2 && scene1) {
      backBtn2.addEventListener("click", () => {
        scene1.style.display = "";
        scene1.classList.remove("fade-out");
        scene2.classList.remove("visible");
      });
    }
  
    // --- Scene 3 -> Scene 4 ---
    if (nextBtn3 && scene4 && scene3) {
      nextBtn3.addEventListener("click", () => {
        scene4.classList.add("visible");
        scene3.classList.remove("visible");
      });
    }
  
    // --- Scene 3 -> Scene 2 (Back) ---
    if (backBtn3 && scene3 && scene2) {
      backBtn3.addEventListener("click", () => {
        scene2.classList.add("visible");
        scene3.classList.remove("visible");
      });
    }
  
    // --- Scene 4 -> Scene 3 (Back) ---
    if (backBtn4 && scene4 && scene3) {
      backBtn4.addEventListener("click", () => {
        scene3.classList.add("visible");
        scene4.classList.remove("visible");
      });
    }
  
    // --- Scene 4: toggle Clap background via last words ---
    if (scene4Magic && scene4) {
      scene4Magic.addEventListener("click", () => {
        scene4.classList.toggle("alt-bg");
      });
    }
  
    // --- Scene 4 -> Scene 5 ---
    if (nextBtn4 && scene5 && scene4) {
      nextBtn4.addEventListener("click", () => {
        scene5.classList.add("visible");
        scene4.classList.remove("visible");
  
        if (penFollower) {
          penFollower.style.display = "block";
        }
      });
    }
  
    // --- Scene 5 -> Scene 4 (Back) ---
    if (backBtn5 && scene5 && scene4) {
      backBtn5.addEventListener("click", () => {
        scene4.classList.add("visible");
        scene5.classList.remove("visible");
      });
    }
  
    // --- Pen follower in Scene 5 ---
    if (scene5 && penFollower) {
      scene5.addEventListener("mousemove", (e) => {
        penFollower.style.left = `${e.clientX}px`;
        penFollower.style.top  = `${e.clientY}px`;
      });
  
      scene5.addEventListener("mouseenter", () => {
        penFollower.style.display = "block";
      });
  
      scene5.addEventListener("mouseleave", () => {
        penFollower.style.display = "none";
      });
    }
  
    // --- Scene 5: click to toggle transparent overlay image ---
    if (scene5 && scene5OverlayImg) {
      scene5.addEventListener("click", () => {
        scene5OverlayImg.classList.toggle("visible");
      });
    }
  
    // --- Scene 5 -> Scene 6 ---
    if (nextBtn5 && scene6 && scene5) {
      nextBtn5.addEventListener("click", () => {
        scene6.classList.add("visible");
        scene5.classList.remove("visible");
  
        if (penFollower) {
          penFollower.style.display = "none";
        }
      });
    }
  
    // --- Scene 6 -> Scene 5 (Back) ---
    if (backBtn6 && scene6 && scene5) {
      backBtn6.addEventListener("click", () => {
        scene5.classList.add("visible");
        scene6.classList.remove("visible");
      });
    }
  
    // --- Scene 6: click words to change / revert background ---
    if (scene6 && vangWord) {
      vangWord.addEventListener("click", () => {
        const isActive = scene6.classList.contains("vang-bg");
        scene6.classList.remove("nguoi-bg");
  
        if (isActive) {
          scene6.classList.remove("vang-bg");
        } else {
          scene6.classList.add("vang-bg");
        }
      });
    }
  
    if (scene6 && nguoiWord) {
      nguoiWord.addEventListener("click", () => {
        const isActive = scene6.classList.contains("nguoi-bg");
        scene6.classList.remove("vang-bg");
  
        if (isActive) {
          scene6.classList.remove("nguoi-bg");
        } else {
          scene6.classList.add("nguoi-bg");
        }
      });
    }
  
    // --- Scene 6 -> Scene 7 ---
    if (nextBtn6 && scene7 && scene6) {
      nextBtn6.addEventListener("click", () => {
        scene7.classList.add("visible");
        scene6.classList.remove("visible");
      });
    }
  
    // --- Scene 7 -> Scene 6 (Back) ---
    if (backBtn7 && scene7 && scene6) {
      backBtn7.addEventListener("click", () => {
        scene6.classList.add("visible");
        scene7.classList.remove("visible");
      });
    }
  
    // --- Scene 7: click "Lá vàng" to toggle background + sakura ---
    if (scene7 && laVangWord) {
      laVangWord.addEventListener("click", () => {
        const isActive = scene7.classList.contains("lavang-bg");
  
        if (isActive) {
          scene7.classList.remove("lavang-bg");
          scene7.classList.remove("sakura-active");
        } else {
          scene7.classList.add("lavang-bg");
          scene7.classList.add("sakura-active");
        }
      });
    }
  
    // --- Scene 7 -> Scene 8 ---
    if (nextBtn7 && scene8 && scene7) {
      nextBtn7.addEventListener("click", () => {
        scene8.classList.add("visible");
        scene7.classList.remove("visible");
      });
    }
  
    // --- Scene 8 -> Scene 7 (Back) ---
    if (backBtn8 && scene8 && scene7) {
      backBtn8.addEventListener("click", () => {
        scene7.classList.add("visible");
        scene8.classList.remove("visible");
      });
    }
  
    // --- Scene 8: click "nở" to toggle sakura petals ---
    if (scene8 && noWord) {
      noWord.addEventListener("click", () => {
        const isActive = scene8.classList.contains("no-petal-active");
  
        if (isActive) {
          scene8.classList.remove("no-petal-active");
        } else {
          scene8.classList.add("no-petal-active");
        }
      });
    }
  
    // --- Scene 8 -> Scene 9 (Next) ---
    if (nextBtn8 && scene9 && scene8) {
      nextBtn8.addEventListener("click", () => {
        scene9.classList.add("visible");
        scene8.classList.remove("visible");
      });
    }
  
    // --- Scene 9: click "Hồn" to go back to Scene 1 ---
    if (backToStartWord && scene1) {
      backToStartWord.addEventListener("click", () => {
        // hide all later scenes
        scene2.classList.remove("visible");
        scene3.classList.remove("visible");
        scene4.classList.remove("visible");
        scene5.classList.remove("visible");
        scene6.classList.remove("visible");
        scene7.classList.remove("visible");
        scene8.classList.remove("visible");
        scene9.classList.remove("visible");
  
        // show Scene 1 again
        scene1.style.display = "";
        scene1.classList.remove("fade-out");
  
        window.scrollTo(0, 0); // optional
      });
    }
  });