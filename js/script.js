/* ==========================================
   PANDU DIGITAL
========================================== */

/* ==========================
   DARK MODE
========================== */

const btn = document.getElementById("darkModeBtn");

function updateThemeIcon() {
  if (document.body.classList.contains("dark-mode")) {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

updateThemeIcon();

btn.addEventListener("click", () => {
  
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  
  updateThemeIcon();
  
});


/* ==========================
   CARD AKTIF
========================== */

const cards = document.querySelectorAll(".about-card, .card, .manfaat-card");

cards.forEach(card => {
  
  card.addEventListener("click", () => {
    
    if (card.classList.contains("active")) {
      card.classList.remove("active");
      return;
    }
    
    cards.forEach(c => c.classList.remove("active"));
    
    card.classList.add("active");
    
  });
  
});


/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load", () => {
  
  const loading = document.getElementById("loading-screen");
  const text = document.getElementById("loading-text");
  const percent = document.getElementById("loading-percent");
  
  let value = 0;
  
  const timer = setInterval(() => {
    
    value++;
    percent.textContent = value + "%";
    
    if (value === 30) text.textContent = "Memuat Website...";
    if (value === 60) text.textContent = "Menyiapkan Konten...";
    if (value === 90) text.textContent = "Hampir Selesai...";
    
    if (value >= 100) {
      
      clearInterval(timer);
      
      text.textContent = "Selamat Datang!";
      
      setTimeout(() => {
        loading.classList.add("hide");
      }, 700);
      
    }
    
  }, 25);
  
});

/* ===================================
   GALERI FILTER
=================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
  
  button.addEventListener("click", () => {
    
    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );
    
    button.classList.add("active");
    
    const filter = button.dataset.filter;
    
    galleryItems.forEach(item => {
      
      if (
        filter === "all" ||
        item.dataset.category === filter
      ) {
        
        item.style.display = "block";
        
      } else {
        
        item.style.display = "none";
        
      }
      
    });
    
  });
  
});

/* ===================================
   LIGHTBOX
=================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(item => {
  
  const img = item.querySelector("img");
  
  img.addEventListener("click", () => {
    
    lightbox.style.display = "flex";
    
    lightboxImg.src = img.src;
    
  });
  
});

closeLightbox.addEventListener("click", () => {
  
  lightbox.style.display = "none";
  
});

lightbox.addEventListener("click", (e) => {
  
  if (e.target === lightbox) {
    
    lightbox.style.display = "none";
    
  }
  
});

/* ==========================================
   ANIMASI CARD HALAMAN TENTANG
========================================== */

const revealCards = document.querySelectorAll(
  ".about-card,.pembina-card,.creator-card");

const revealObserver = new IntersectionObserver((entries) => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target.classList.add("show-card");
      
    }
    
  });
  
}, {
  threshold: 0.15
});

revealCards.forEach(card => {
  
  card.classList.add("hidden-card");
  
  revealObserver.observe(card);
  
});


/* ==========================================
   EFEK PARALLAX HERO
========================================== */

const heroImage = document.querySelector(".about-image img");

window.addEventListener("scroll", () => {
  
  const scroll = window.scrollY;
  
  if (heroImage) {
    
    heroImage.style.transform =
      `translateY(${scroll*0.08}px)`;
    
  }
  
});


/* ==========================================
   HOVER FOTO PEMBUAT
========================================== */

const creator = document.querySelector(".creator-photo");

if (creator) {
  
  creator.addEventListener("mouseenter", () => {
    
    creator.style.transform = "scale(1.05) rotate(-2deg)";
    
  });
  
  creator.addEventListener("mouseleave", () => {
    
    creator.style.transform = "scale(1) rotate(0deg)";
    
  });
  
}


