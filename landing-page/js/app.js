/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const list = document.getElementById("navbar__list");
const frag = document.createDocumentFragment();
//  used to creat data-link for every nav bottun
let i = 1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (const sec of sections) {
    const title = sec.dataset.nav;
    const link = document.createElement('a');
    const list = document.createElement('li');
    const id = sec.id;
    list.setAttribute('class','menu__link');
    // used for the activate function
    list.setAttribute('id',title);
    // used for the scrolling function
    list.setAttribute('data-link','section'+i)
    
    link.textContent =title;
    list.appendChild(link);
    frag.appendChild(list);
    ++i;

}

list.appendChild(frag);
// Add class 'active' to section when near top of viewport
 
document.addEventListener('scroll', () => {
    for ( const sec of sections){
    const navLink = document.getElementById(sec.dataset.nav);
        if (sec.getBoundingClientRect().top >= -250  && sec.getBoundingClientRect().top <= 250  ) {
           sec.setAttribute('class','your-active-class');
           navLink.setAttribute('class','menu__link active');
        } else {
           sec.setAttribute('class','none');
           navLink.setAttribute('class','menu__link');
        };
    };
  }
);

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll('.menu__link') ;
for (const link of links){
    link.addEventListener('click', (e) =>{
         e.preventDefault();
         const section = document.getElementById(link.dataset.link);
         // Scroll to section on link click
         section.scrollIntoView({behavior:"smooth"});
    })
};
/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click

// Set sections as active


