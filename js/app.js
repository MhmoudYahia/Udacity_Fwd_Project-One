// "use strict";

// select links(nodeList)
const linksNav = [...document.querySelectorAll("nav ul li a")];

//select sections list
const sectionsList = [...document.querySelectorAll(".section")];

//add class active to the viewed section
window.onscroll = function () {
  // offset Y for the window
  let windowOffsetTop = window.pageYOffset;

  for (const section of sectionsList) {
    // offset Y for the section element
    let sectionOffsetTop = section.offsetTop;

    //section all height
    sectionHeight = section.offsetHeight;

    //window height
    windowHeight = window.innerHeight;

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
};

//scroll to the link on click(event)
linksNav.forEach((link, index) => {
  //add the event
  link.addEventListener("click", (e) => {
    //scroll to function
    window.scrollTo(0, sectionsList[index].offsetTop);

    //prevent defualt action
    e.preventDefault();
  });
});
