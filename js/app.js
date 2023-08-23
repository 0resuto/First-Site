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
  
  if (angle_b <= 10){
    angle_b = 10
  }
  if (angle_b >= 80){
    angle_b = 85
  }
  if (angle_g <= -30){
    angle_g = -30
  }
  if (angle_g >= 30){
    angle_g = 30
  }

  const g = angle_g / 6;
  const b = (angle_b - 40) / 8;
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${g}deg;
    --move-y: ${-b}deg;
    `
  })  
});

