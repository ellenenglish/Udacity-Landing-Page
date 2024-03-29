* In advance, thank you for reviewing this. 
I APPRECIATE ANY AND ALL COMMENTS!!! 
Anything you type up I will treasure and learn from. 
*/


// define global variables
const navBar = document.querySelector('#navbar__list');
const navBarMenu = document.querySelector('#navbar__menu');
const sections = document.querySelectorAll('section');
const buttonToTop = document.querySelectorAll('.button_toTop');
const pageHeader = document.querySelector('.page__header');


// build navigation 
const navBuild = () => {

  // looping over all sections
  sections.forEach(section => {
    let buttons = document.createElement("li");
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    // creating buttons
    buttons.innerHTML = `<a class="menu__link" href="#${sectionID}">${sectionDataNav}</a>`;
    navBar.appendChild(buttons);
  });
};


// call function to create navigation
navBuild();



// create function for smooth scroll effect to each section
const smoothScroll = (evt) => {
  evt.preventDefault();
  const dataLink = evt.target.getAttribute('href');
  const sectionTarget = document.querySelector(dataLink);
  window.scrollTo({
    top: sectionTarget.offsetTop,
    behavior: 'smooth',
  });
};


// Scroll to section on link click
const buttonLinks = document.querySelectorAll('.menu__link');
buttonLinks.forEach((button) => button.addEventListener('click', smoothScroll));



// Create function to send user back to top of page
for (const button of buttonToTop) {
  button.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
}


// create function to have buttons fade in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px"
};



const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
  appearOptions);

// Call function for buttons to fade in
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



// Create function to activate sections and header links
function activate() {
  let navLinks = document.querySelectorAll('.menu__link');
  let headers = document.querySelectorAll('h2');
  sections.forEach((section, index) => {    const sectionBond = section.getBoundingClientRect();
    if (sectionBond.top <= 150 && sectionBond.bottom >= 150) {
      section.classList.add("your-active-class");
      navLinks[index].classList.add("active_appear");
      headers[index].classList.add("foo");
    } else {
      section.classList.remove("your-active-class");
      navLinks[index].classList.remove("active_appear");
      headers[index].classList.remove("foo");
    };
  });
};

window.addEventListener('scroll', (event) => {
  activate();
})



// Create function to hide navigation after scrolling
let timer = null;

window.addEventListener('scroll', function () {
  if (timer !== null) {
    clearTimeout(timer);
    pageHeader.classList.remove('header-gone');
  }
  timer = setTimeout(function () {
    pageHeader.classList.add('header-gone');
  }, 2500);
}, false);


// THANKS AGAIN!!! 
