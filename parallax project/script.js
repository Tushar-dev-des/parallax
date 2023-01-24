gsap.from("#img3", {
    opacity: 0.4,
    y:40,
    duration:1.6,
})
// gsap.from("#img1", {
//     opacity: 0,
//     y:30,
//     duration:1,
//     delay:2,
// })
gsap.from("#img2", {
    opacity: 0,
    y:30,
    duration:0.6,
    delay:1.8,
})
gsap.from("#img1", {
    opacity: 0.4,
    y:140,
    duration:1.8,
 
})

let img3 = document.getElementById('img3');
let img2 = document.getElementById('img2');
let img1 = document.getElementById('img1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    img3.style.left = value * -10.5 + 'px';
})