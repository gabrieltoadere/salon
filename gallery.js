window.onmousedown = e => {
  track.dataset.mouseDownAt=e.clientX;
}

window.onmouseup = e => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentge = track.dataset.percentage;
}

window.onmousemove = e => {

  if(track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,maxDelta = window.innerWidth / 2;


  const percentage = (mouseDelta / maxDelta) * -100,nextPercentage = parseFloat(track.dataset.prevPercentge) + percentage;


  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%,-50%)`;
}