const grow = document.querySelectorAll(".grow");


const growObserver = new IntersectionObserver(
 (entries) => {
   entries.forEach((entry) => {
     if (entry.isIntersecting) {
       entry.target.classList.add("show"); // Add show class when intersected
       growObserver.unobserve(entry.target); // Stop observing once shown
     }
   });
 },
 {
   threshold: 0.5,
 }
);


grow.forEach((fade) => {
 growObserver.observe(fade);
});


const fadeIn = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeInObserver.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});

//CARD CLASS INTERSECTION OBSERVER 
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

cards.forEach(card => {
    observer.observe(card)
})

//LEFT CARD CLASS INTERSECTION OBSERVER
const leftCards = document.querySelectorAll(".left-card");

const leftObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

leftCards.forEach((leftCard) => {
  observer.observe(leftCard);
});

//RIGHT CLASS INTERSECTION OBSERVER
const rightCards = document.querySelectorAll(".right-card");

const rightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

rightCards.forEach((rightCard) => {
  observer.observe(rightCard);
});

//FOOTER COPYRIGHT TEXT
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();

year.innerHTML = currentYear;