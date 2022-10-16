// "use strict";

//select sections list
const sectionsList = [...document.querySelectorAll(".section")];

/// create nav elements
const navUl = document.querySelector("nav ul");

for (let index = 0; index < sectionsList.length; index++) {
  //create the element and add it to the nav
  const navElement = document.createElement("li");
  navElement.textContent = `Section ${index + 1}`;
  navUl.appendChild(navElement);
}

// select links(nodeList)
const linksNav = [...document.querySelectorAll("nav ul li")];

//select topbutton
const topButton = document.querySelector(".scrollTop");

//add class active to the viewed section
window.onscroll = function () {
  // offset Y for the window
  const windowOffsetTop = window.pageYOffset;

  for (const section of sectionsList) {
    // offset Y for the section element
    const sectionOffsetTop = section.offsetTop;

    //section all height
    const sectionHeight = section.offsetHeight;

    //window height
    const windowHeight = window.innerHeight;

    //set class active if the section is all on the view
    if (
      windowOffsetTop <= sectionOffsetTop &&
      windowOffsetTop + windowHeight >= sectionOffsetTop + sectionHeight
    ) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  }

  //display the top button only if the pagr scrolled down
  if (windowOffsetTop) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
};

//scroll to the link on click(event)
linksNav.forEach((link, index) => {
  //add the event
  link.addEventListener("click", (e) => {
    //scroll to function
    //38 =>> nav height 
    window.scrollTo({top:sectionsList[index].offsetTop - 38,behavior:"smooth"});

    //prevent defualt action
    e.preventDefault();

    //smoth scrolling
  });
});

// scroll to top when clicking top button
topButton.addEventListener("click", () => {
  //top top
  window.scrollTo({top:0,behavior:"smooth"});
});
