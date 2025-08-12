const track = document.getElementById("image-track");


const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage  }% center`
    }, { duration: 1200, fill: "forwards" });
  }
}
function smoothScrollTrack(nextPercentage) {
  const track = document.getElementById("image-track");

  track.dataset.percentage = nextPercentage;

  // Smooth ease for both track and images
  track.animate(
    { transform: `translate(${nextPercentage}%, -50%)` },
    { duration: 400, fill: "forwards", easing: "ease-out" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      { objectPosition: `${100 + nextPercentage }% center` },
      { duration: 400, fill: "forwards", easing: "ease-out" }
    );
  }
}

const WHEEL_SPEED = 0.15;

function handleOnWheel(e) {
  const track = document.getElementById("image-track");
  if (!track.contains(e.target) && e.target.closest(".gallery-content") == null) return;

  const prev = parseFloat(track.dataset.percentage) || 0;
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

  const proposed = prev + (-delta * WHEEL_SPEED);
  const next = Math.max(Math.min(proposed, 0), -100);

  const atEdge =
    (next === 0 && proposed > 0) || (next === -100 && proposed < -100);

  if (!atEdge) {
    e.preventDefault();
    smoothScrollTrack(next);
    track.dataset.prevPercentage = next;
  }
}

window.addEventListener("wheel", handleOnWheel, { passive: false });


window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);