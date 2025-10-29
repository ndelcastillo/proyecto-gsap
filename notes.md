# 🌿 GSAP-NOTES.md

Guía completa y resumida con los fundamentos principales de **GSAP (GreenSock Animation Platform)**.

---

## 🚀 ¿Qué es GSAP?

**GSAP (GreenSock Animation Platform)** es una librería JavaScript para crear animaciones fluidas, precisas y de alto rendimiento en HTML, CSS, SVG, Canvas o WebGL.

**Ventajas principales:**
- Animaciones más suaves que con CSS.
- Control total con timelines, easings y secuencias.
- Plugins avanzados: `ScrollTrigger`, `ScrollTo`, `Draggable`, `MotionPath`.
- Excelente rendimiento en todos los navegadores.

---

**Tween**
- Un Tween (de in-between) es una animación que interpola valores entre un punto A y un punto B en el tiempo. Es el proceso que lleva una propiedad desde su estado inicial hasta su estado final. 
- Puedo observar como se esta aplicando la animacion insepccionando el target, si tiene una duration alta
- El objeto GSAP tiene 3 metodos principales para crear Tweens y poder agregarlos a un Timeline.
🔹 `gsap.to()` **Anima desde el valor actual al nuevo valor.**
🔹 `gsap.from()` **Anima desde un valor inicial al actual.**
🔹 `gsap.fromTo()` **Define ambos estados (inicio y fin).**
- Ejemplo simple: Esto crea un Tween que mueve el elemento con clase ".box" desde su posición actual x hasta x: 100 y una animacion de opacidad de 0 a 1, todo en una duracion de 1 segundo.
```js
gsap.to(".box", { x: 100, opacity: 1, duration: 1 });
```
🔹 `gsap.to()`                            : method
🔹 `"box"`                                : target
🔹 `{ x: 100, opacity: 1, duration: 1 }`  : vars object
🔹 `x: 100`                               : property animating
🔹 `duration: 1`                          : special property beacuse is not a property that is being animating
🔹 `ANIMATION`                            : translate target "box" on the Xaxis 100px in a duration of 3 seconds

**Propiedades que puede animar un Tween**
- Propiedades CSS (x, y, scale, opacity, color, rotate, etc.)
- Propiedades numéricas de objetos JavaScript (obj.value, por ejemplo)
- Atributos de SVG
- Filtros CSS o transformaciones 3D
- Para obtener el mejor rendimiento, anima los valores de transformación CSS y la opacidad: x, y, rotación, rotaciónX, rotaciónY, skewX y skewY, scaleX, scaleY o simplemente scale
- GSAP puede animar cualquier propiedad numérica que le proporciones: width and height, background-color, color, padding, left and top (must set position to relative, absolute, or fixed), vh and vw.
- Los valores con guion deben estar en camelCase
- Modificar valores que no sean transformaciones CSS ni opacidad puede provocar que el navegador rehaga el diseño de la página, lo que en casos extremos puede afectar al rendimiento. Para algunas animaciones, no es tan grave como algunos puristas creen.

**Easing y duración**
- Cada Tween puede tener:
🔹 duration: tiempo en segundos
🔹 ease: tipo de movimiento (por ejemplo, "power2.out", "elastic.out")
- Si no especifica una duración, gsap utilizará el valor predeterminado de 0,5 segundos (500 ms).
- Puede cambiar la duración predeterminada mediante:
```js
gsap.defaults({duration:1});
```

**Múltiples Tweens → Timeline**
- Varios Tweens se pueden encadenar dentro de una Timeline para crear secuencias. Es un contenedor de multiples Tweens:
```js
let tl = gsap.timeline();
tl.to(".box1", { x: 100, duration: 1 })
  .to(".box2", { y: 100, duration: 1 })
  .to(".box3", { scale: 1.5, duration: 1 });
```

---

## ⚙️ SINTAXIS BÁSICA > GSAP

### 🔹 `gsap.to()`
Anima **desde el estado actual hacia el nuevo**.

```js
gsap.to(".box", { x: 100, opacity: 1, duration: 1 });
```

### 🔹 `gsap.from()`
Anima **desde un estado inicial hacia su estado actual**.

```js
gsap.from(".title", { y: 50, opacity: 0, duration: 1 });
```

### 🔹 `gsap.fromTo()`
Define **explícitamente el estado inicial y final**.

```js
gsap.fromTo(".item", { scale: 0 }, { scale: 1, duration: 1 });
```


## ⚙️ SINTAXIS BÁSICA > TIMELINE

### 🔹 `tl.to()`
Permiten **encadenar múltiples animaciones y controlarlas fácilmente (pausar, revertir, etc.)**

```js
const tl = gsap.timeline({ repeat: 0, yoyo: false });

tl.to(".box1", { x: 100, duration: 1 })
  .to(".box2", { y: 100, duration: 1 }, "-=0.5") // se solapan 0.5s
  .to(".box3", { rotation: 360, duration: 1 });

```