/* In advance, thank you for reviewing this.
I APPRECIATE ANY AND ALL COMMENTS!!!
Anything you type up I will treasure and learn from.
*/


// define global variables
const navBar = document.querySelector('#navbar__list');
const navBarMenu = document.querySelector('#navbar__menu');
const sections = document.querySelectorAll('section');
const buttonToTop = document.querySelectorAll('.button_toTop');


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
  navBarMenu.appendChild(navBar);
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


// Use IntersectionObserver to active classes in viewport
// Declare options
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px 0px -150px 0px",
};

// Create function to activate classes in viewport
let makeActive = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    // Create variables for both the navigation links and sections
    const section = entry.target;
    if (entry.isIntersecting) {
      navBar.classList.add('active');
      section.classList.add('your-active-class');
    } else {
      navBar.classList.remove('active');
      section.classList.remove('your-active-class');
    }
  });
}, options);

// Call the function for each section
sections.forEach(section => {
  makeActive.observe(section);
});


// Create function to hide menu while scrolling
var hideScroll = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (hideScroll > window.pageYOffset) {
    document.getElementById("navScroll").style.top = "0";
  } else {
    document.getElementById("navScroll").style.top = "-219px";
  };

  hideScroll = currentScrollPos;
};


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


// THANKS AGAIN!!! /**
