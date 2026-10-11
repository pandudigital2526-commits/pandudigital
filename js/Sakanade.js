const sakanadeAudio = new Audio("audio/sakanade.mp3");

// ===========================
// SAKANADE STEP 3
// ===========================

const darkBtn = document.getElementById("darkModeBtn");

const aura = document.getElementById("sakanadeAura");

const wave = document.querySelector(".waveRing");

const ripple = document.querySelector(".spaceRipple");

let clickCount = 0;
let clickTimer = null;

// Cek apakah Sakanade sudah aktif
if (localStorage.getItem("sakanade") === "on") {
    document.body.classList.add("sakanade-mode");
    
}

darkBtn.addEventListener("click", () => {
    
    if (clickCount === 0) {
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 5000);
    }
    
    clickCount++;
    
    if (clickCount >= 5) {
        
        clearTimeout(clickTimer);
        clickCount = 0;
        
        // Toggle Sakanade
        if (localStorage.getItem("sakanade") === "on") {
            
            localStorage.removeItem("sakanade");
            document.body.classList.remove("sakanade-mode");
            
            sakanadeAudio.pause();
sakanadeAudio.currentTime = 0;


            
        }
        
        else {
            
            aura.classList.add("active");
            
            wave.classList.add("active");
            
            ripple.classList.add("active");
            
            const overlay = document.getElementById("sakanadeOverlay");
            
            
            
            document.body.classList.add("space-refraction");

overlay.classList.remove("active");

void overlay.offsetWidth; // paksa browser reset animasi

const shinji = document.getElementById("shinjiPortrait");

shinji.style.animation = "none";

void shinji.offsetWidth;

shinji.style.animation = "";



overlay.classList.add("active");



// Putar suara
sakanadeAudio.currentTime = 0;
sakanadeAudio.play();

setTimeout(() => {
    
    aura.classList.remove("active");
    
    wave.classList.remove("active");
    
    ripple.classList.remove("active");
    
    localStorage.setItem("sakanade", "on");
    
    document.body.classList.remove("space-refraction");
    
    document.body.classList.add("sakanade-mode");
    
}, 4000);
            
        }
        
    }
    
});

// ===========================
// SAKANADE SHORTCUT
// Ctrl + Shift + J
// ===========================

document.addEventListener("keydown", (e) => {
    
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        
        e.preventDefault();
        
        // Jalankan event yang sama seperti tombol Dark Mode
        darkBtn.click();
        darkBtn.click();
        darkBtn.click();
        darkBtn.click();
        darkBtn.click();
        
    }
    
});