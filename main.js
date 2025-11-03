/* Example-1 */
// 🔹 `gsap.to()` **Anima desde el valor actual al nuevo valor.**
gsap.to(".box-1", { y: 100, duration: 1, delay: 0 })
gsap.to(".box-2", { y: 100, duration: 1, delay: 0.1 })
gsap.to(".box-3", { y: 100, duration: 1, delay: 0.2 })

/* Example-2 */
// 🔹 `gsap.from()` **Anima desde un valor inicial al actual.**
gsap.from(".box-4", { y: 100, duration: 1, delay: 0 })
gsap.from(".box-5", { y: 100, duration: 1, delay: 0.1 })
gsap.from(".box-6", { y: 100, duration: 1, delay: 0.2 })

/* Example-3 */
// 🔹 `gsap.fromTo()` **Define ambos estados (inicio y fin).**
gsap.fromTo(".box-7", { y: 500 }, { y: 50, duration: 1, delay: 0 })
gsap.fromTo(".box-8", { y: 500 }, { y: 70, duration: 1, delay: 0.1 })
gsap.fromTo(".box-9", { y: 500 }, { y: 100, duration: 1, delay: 0.2 })

/* Example-4 */
// 🔹 `gsap.fromTo()` **Define ambos estados (inicio y fin).**
gsap.fromTo(".box-10", { y: 50, scale: 0.1, opacity: 0 }, { y: 200, duration: 2, delay: 0, scale: 1.2, opacity: 1 })
gsap.fromTo(".box-11", { y: 70, scale: 0.2, opacity: 0 }, { y: 280, duration: 2, delay: 0, scale: 1.2, opacity: 1 })
gsap.fromTo(".box-12", { y: 100, scale: 0.3, opacity: 0 }, { y: 340, duration: 2, delay: 0, scale: 1.2, opacity: 1 })

/* Example-5 */
// 🔹 `gsap.to()` **Anima desde el valor actual al nuevo valor.**
gsap.to(".box-13", { y: 150, duration: 1 })
gsap.to(".box-14", { y: 150, duration: 1, repeat: 1 })
gsap.to(".box-15", { y: 250, duration: 1, repeat: 1, yoyo: true })
gsap.to(".box-16", { y: 200, duration: 1, repeat: -1, yoyo: true })

/* Example-6 */
// 🔹 Animation Ease
gsap.to(".box-17", { y: 300, duration: 3, ease: "linear" })
gsap.to(".box-18", { y: 300, duration: 3, ease: "bounce" })
gsap.to(".box-19", { y: 300, duration: 3, ease: "bounce.in" })
gsap.to(".box-20", { y: 300, duration: 3, ease: "bounce.inOut" })
gsap.to(".box-21", { y: 300, duration: 3, ease: "elastic" })
gsap.to(".box-22", { y: 300, duration: 3, ease: "back" })
gsap.to(".box-23", { y: 300, duration: 3, ease: "back(5)" })

/* Example-7 */
// 🔹 Stagger
// gsap.to(".example__7 .box", { y: 150, stagger: 0.1 })
// gsap.to(".example__7 .box", {
//     y: 150, stagger: {
//         each: 0.2
//     }
// })
// gsap.to(".example__7 .box", {
//     y: 150, stagger: {
//         amount: 1,
//     }
// })
// gsap.to(".example__7 .box", {
//     y: 150, stagger: {
//         amount: 1,
//         from: "end"
//     }
// })
// gsap.to(".example__7 .box", {
//     y: 150, stagger: {
//         amount: 1,
//         from: "center"
//     }
// })
gsap.to(".example__7 .box", {
    y: 150, stagger: {
        amount: 1,
        from: "end"
    }
})

/* Example-8 */
// 🔹 Tween Control
let tween = gsap.to(".box-28", { x: 600, duration: 1, ease: "linear", paused: true })
// document.getElementById("play").onclick = function () {
//     tween.play();
// }
document.getElementById("play").onclick = () => tween.play();
document.getElementById("pause").onclick = () => tween.pause();
document.getElementById("reverse").onclick = () => tween.reverse();
document.getElementById("restart").onclick = () => {
    tween.seek(0).pause();
};