

const menuicon = document.querySelector('.menuicon')
const menulist = document.querySelector('.menulist')
const toggle = document.getElementById('dark-toggle');
const navlink = document.querySelectorAll('.navlink')


menuicon.addEventListener('click' , ()=>{
    menulist.classList.toggle('active')
    menuicon.classList.toggle('cros')
    document.body.classList.toggle('overflow-hidden')
})

navlink.forEach((e) =>{
  e.addEventListener('click' ,() =>{
       menulist.classList.remove('active')
    menuicon.classList.remove('cros')
    document.body.classList.remove('overflow-hidden')
  })
})

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const userButton = document.getElementById("userButton");
  const userDropdown = document.getElementById("userDropdown");
  const userMenu = document.getElementById("userMenu");

  userButton.addEventListener("click", () => {
    const isHidden = userDropdown.classList.contains("hidden");

    // Toggle visibility with animation
    if (isHidden) {
      userDropdown.classList.remove("hidden");
      setTimeout(() => {
        userDropdown.classList.remove("opacity-0", "scale-95");
        userDropdown.classList.add("opacity-100", "scale-100");
      }, 10);
    } else {
      userDropdown.classList.add("opacity-0", "scale-95");
      setTimeout(() => userDropdown.classList.add("hidden"), 200);
    }
  });

  // Close dropdown on click outside
  document.addEventListener("click", (e) => {
    if (!userMenu.contains(e.target)) {
      if (!userDropdown.classList.contains("hidden")) {
        userDropdown.classList.add("opacity-0", "scale-95");
        setTimeout(() => userDropdown.classList.add("hidden"), 200);
      }
    }
  });



  const cards = document.querySelectorAll('.process-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-x-[-50px]');
      entry.target.classList.add('opacity-100', 'translate-x-0');
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => observer.observe(card));







 const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 800,
      slidesPerView: 3,
      spaceBetween: 20,

      // ✅ Responsive breakpoints
      breakpoints: {
        0: {
          slidesPerView: 1, // mobile
        },
        640: {
          slidesPerView: 2, // tablet
        },
        1024: {
          slidesPerView: 3, // desktop
        },
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


  

    const tabs = document.querySelectorAll('.mv-tab');
  const heading = document.getElementById('mv-heading');
  const desc = document.getElementById('mv-desc');
  const image = document.getElementById('mv-image');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active style from all tabs
      tabs.forEach(t => {
        t.classList.remove('bg-indigo-600', 'text-white');
        t.classList.add('bg-gray-100', 'text-gray-700');
      });

      // Add active style to clicked tab
      tab.classList.add('bg-indigo-600', 'text-white');
      tab.classList.remove('bg-gray-100', 'text-gray-700');

      // Update content
      heading.textContent = tab.dataset.heading;
      desc.textContent = tab.dataset.desc;
      image.src = tab.dataset.img;

      // Optional: fade effect
      image.classList.remove('opacity-0');
      void image.offsetWidth; // trigger reflow
      image.classList.add('opacity-0');
      setTimeout(() => {
        image.classList.remove('opacity-0');
      }, 50);
    });
  });



  