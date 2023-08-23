document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * -.004}deg;
    --move-y: ${(e.clientY - window.innerHeight / 2) * .005}deg;
    `
  })
})


window.addEventListener("deviceorientation", (evt) => {
  const angle_g = evt.gamma;
  const angle_b = evt.beta;
  
  if (angle_b <= 30){
    angle_b = 30
  }
  if (angle_b >= 70){
    angle_b = 70
  }
  if (angle_g <= -20){
    angle_g = -20
  }
  if (angle_g >= 20){
    angle_g = 20
  }

  Object.assign(document.documentElement, {
    style: `
    --move-x: ${angle_g}deg;
    --move-y: ${angle_b - 60 }deg;
    `
  })  
});

