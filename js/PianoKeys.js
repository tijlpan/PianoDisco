function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export default class PianoKeys {

    constructor(holder) {
        this.holder = holder;
        this.color = `rgb(${getRandomInRange(0,256)}, ${getRandomInRange(0,256)}, ${getRandomInRange(0,256)})`;
        this.htmlRef = this.generateInitialHTML();
        this.setColor();
        this.setUpEvents();
    }
    setColor() {
        this.htmlRef.style.backgroundColor = this.color;
    }
    generateInitialHTML() {
        this.holder.insertAdjacentHTML(
          "beforeend",
          `<div class="body_main_keys"><div class="body_main_keys_inner></div></div>`
        );
        return this.holder.querySelector(".body_main_keys:last-child");
    }
    setUpEvents() {
        this.htmlRef.onclick = () => {
            holder.style.backgroundColor = this.color;
          // this.holder.removeChild(this.htmlRef);
        }
    }
}

//     class Circle {
//         constructor(name, holder, nr) {
//           this.name = name; //string
//           this.holder = holder; // htmlElement
//           this.nr = nr;
//           this.changeSizing();
//           this.htmlRef = this.generateInitialHTML();
//           this.setStyling();
//           this.setUpEvents();
//         }
//         generateInitialHTML() {
//           this.holder.insertAdjacentHTML(
//             "beforeend",
//             `<div class="circle">${this.nr}</div>`
//           );
//           return this.holder.querySelector(".circle:last-child");
//         }
//         setStyling() {
//           this.htmlRef.style.left = this.x + "px";
//           this.htmlRef.style.top = this.y + "px";
//           this.htmlRef.style.width = this.w + "px";
//           this.htmlRef.style.height = this.h + "px";
//         }
//         setUpEvents() {
//           this.htmlRef.onclick = () => {
//             console.log("geklikt op circle-" + this.nr);
//             this.changeSizing();
//             this.setStyling();
//             // this.holder.removeChild(this.htmlRef);
//           };
//         }
//         changeSizing() {
//           this.w = getRandomInRange(50, 100);
//           this.h = this.w;
//           this.x = getRandomInRange(this.w / 2, window.innerWidth - this.w / 2);
//           this.y = getRandomInRange(this.h / 2, window.innerHeight - this.h / 2);
//         }
    
// }

