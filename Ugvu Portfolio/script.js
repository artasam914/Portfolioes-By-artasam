let circle = document.querySelector("#minicircle");

var timeout;

function skrewCircle() {
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;
  window.addEventListener("mousemove", (delts) => {
    clearTimeout(timeout);
    xdiff = delts.x - xprev;
    ydiff = delts.y - yprev;

    xprev = delts.x;
    yprev = delts.y;

    xscale = gsap.utils.clamp(0.6, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.6, 1.2, ydiff);

    circlemove(xscale, yscale);

    timeout = setTimeout(() => {
      circle.style.transform = `translate(${delts.x}px,${delts.y}px) scale(1,1)`;
    }, 100);
  });
}
function circlemove(xscale, yscale) {
  window.addEventListener("mousemove", (delts) => {
    circle.style.transform = `translate(${delts.x}px,${delts.y}px) scale(${xscale},${yscale})`;
  });

  
}
function homepageAnimation() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: 20,
    opacity: 0,
    duration: 0.2,
  });
  tl.to(".boundingelem", {
    // we can make throught the animation like gave the parent or heading overflow hidden
    // and apply gsap (animation),prperties it will same work.  No need Of make another div

    y: 0,
    duration: 1,
  });
  tl.from(".based", {
    y: 20,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".animation", {
    //gave parent or headind overflow hiden
    y: 100,
    opacity: 1,
    duartion: 0.7,
    stagger: 0.3,
  });
}
function imageMoveAndRotate() {
  document.querySelectorAll(".element").forEach((elem) => {
    let rotate = 0;
    let diffrot = 0;
    elem.addEventListener("mousemove", (dets) => {
      let diff = dets.clientY - elem.getBoundingClientRect().top;

      diffrot = dets.x - rotate;
      // rottate ki value ab ham kr de ge..nechey wali
      rotate = dets.x;

      //  console.log(delts.y - elem.getBoundingClientRect().top)

      gsap.to(elem.querySelector(".element img"), {
        opacity: 1,
        // ease: Expo,
        top: diff,
        left: dets.x - 80,
        rotate: gsap.utils.clamp(-20, 20, diffrot),
      });

      elem.addEventListener("mouseleave", () => {
        gsap.to(elem.querySelector(".element img"), {
          opacity: 0,
        });
      });
    });
  });
}
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

skrewCircle();
circlemove();
homepageAnimation();
imageMoveAndRotate();
