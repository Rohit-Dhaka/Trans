const menuicon = document.querySelector('.menuicon')
const menulist = document.querySelector('.menulist')
const toggle = document.getElementById('dark-toggle');


menuicon.addEventListener('click' , ()=>{
    menulist.classList.toggle('active')
    menuicon.classList.toggle('cros')
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