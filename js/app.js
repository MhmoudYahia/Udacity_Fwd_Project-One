// "use strict";

// select links(nodeList)
const linksNav = [...document.querySelectorAll("nav ul li a")];

//select sections list
const sectionsList = [...document.querySelectorAll(".section")];

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
    window.scrollTo(0, sectionsList[index].offsetTop - 38);

    //prevent defualt action
    e.preventDefault();
  });
});

// scroll to top when clicking top button
topButton.addEventListener("click", () => {
  //top top
  window.scrollTo(0, 0);
});
