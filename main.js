import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


document.querySelector('#app').innerHTML = `
  <div>
   <div>
      <a class="link" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API">Web_Animation_API</a>
    </div>

  </div>
`
const myAnimation = document.querySelector(".circle").animate(
  [
    {
      transform: "rotate(0)",
    },
    {
      transform: "rotate(359deg)",
    },
  ],
  {
    duration: 1000,
    iterations: Infinity,
  }
);

document
.querySelector(".pause")
.addEventListener("click", () => myAnimation.pause());

document
.querySelector(".play")
.addEventListener("click", () => myAnimation.play());

document
.querySelector(".reverse")
.addEventListener("click", () => myAnimation.reverse());

document.getElementById('range').addEventListener('input', (e) => {
  const value = e.target.value;
  document.getElementById('current').innerText = value
  myAnimation.playbackRate = +value;
})