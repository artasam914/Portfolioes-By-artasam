function createSpan() {
  document.querySelectorAll(".elem").forEach((elem) => {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child"); 

    spanChild.innerHTML = elem.innerHTML;

    spanParent.appendChild(spanChild);
    elem.innerHTML = "";

    elem.appendChild(spanParent);
  });
}
createSpan();

function valueSetter() {
  gsap.set("#homepage .child", {
    y: 300,
  });
  gsap.set("#homepage nav", {
    y: -20,
    opacity: 0,
  });
  gsap.set("#homepage i", {
    opacity: 0,
  });

  // visual svg
  document.querySelectorAll("#Visual>g").forEach((e) => {
    let character = e.childNodes[1].childNodes[1];
    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  console.log(character)
  
  });
}
valueSetter();
function loaderAnimation() {
  let tl = gsap.timeline();
  tl.from("#loader .elem .child span", {
    x: 100,
    duration: 1,
    stagger: 0.2,
    ease: Expo.ease,
  });

  tl.to("#loader .child", {
    y: -100,
    duration: 2,
    ease: Expo.easeInOut,
  });
  tl.to(".loader", {
    opacity: 0,
    delay: -1.9,
    ease: Expo.easeInOut,
  });
  tl.to("#loader", {
    height: 0,
    opacity: 0,

    duration: 1,
    ease: Expo.easeInOut,
  });
  tl.to("#green", {
    height: "100%",
    // top: 0,
    duration: 2,
    // opacity: 0,

    delay: -1,
    ease: Expo.easeInOut,
  });

  tl.to("#green", {
    height: "0",
    duration: 1,
    delay: -0.8,
    ease: Expo.easeInOut,

    onComplete: function () {
      homepageAnimation();
    },
  });
}

loaderAnimation();

function homepageAnimation() {
  let tl = gsap.timeline();
  tl.to("#homepage nav", {
    y: 0,
    opacity: 1,
    delay: -1,

    ease: Power3.easeInOut,
    // duration: .5,
  });

  tl.to("#homepage .child", {
    y: 0,
    duration: 1,
    // stagger: 0.3,
    ease: Power3.ease,
  });
  gsap.to("#homepage i", {
    opacity: 1,
    onComplete: function () {
      svgVisualAni();
    },
  });
}
function svgVisualAni() {
  gsap.to("#Visual>g>g>path,#Visual>g>g>polyline", {
    // strokeDasharray:0,
    strokeDashoffset: 0,
    delay: 2,
    duration: 2,
    ease: Expo,
  });
}

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
