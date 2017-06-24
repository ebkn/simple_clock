var now = new Date();
    hour   = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();

    secondDeg = (second*6) + 90 ;
    minuteDeg = (minute*6) + ((second*6) / 60) + 90;
    hourDeg   = (hour*30) + ((minute*6) / 12)  + ((second*6) / 720) + 90;

    animation = document.createElement("style");

animation.innerHTML = `
  @keyframes rotation-s2 {
    0% {
      transform: rotate(${secondDeg}deg)
    }
    100% {
      transform: rotate(${secondDeg + 360}deg)}
    }
  @keyframes rotation-m2 {
    0% {
      transform: rotate(${minuteDeg}deg)
    }
    100% {
      transform: rotate(${minuteDeg + 360}deg)
    }
  }
  @keyframes rotation-h2 {
    0% {
      transform: rotate(${hourDeg}deg)
    }
    100% {
      transform: rotate(${hourDeg + 360}deg)
    }
  }
  `;
document.head.appendChild(animation);
