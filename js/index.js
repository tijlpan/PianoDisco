// import PianoKeys from "./PianoKeys.js";

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

//wou deze class (en bovenstaande functie) eerst in een aparte file plaatsen en importeren, maar er was iets fout met het import statement (zie boven)
//export default 
class PianoKeys {

    constructor(holder) {
        this.holder = holder;
        this.bgcolor = `rgb(${getRandomInRange(0,256)}, ${getRandomInRange(0,256)}, ${getRandomInRange(0,256)})`;
        this.htmlRef = this.generateInitialHTML();
        this.setColor();
        this.setUpEvents();
    }
    setColor() {
        this.htmlRef.style.backgroundColor = this.bgcolor;
    }
    generateInitialHTML() {
        this.holder.insertAdjacentHTML(
          "afterbegin",
          `<div class="body_main_keys"></div>`
        );
        return this.holder.querySelector(".body_main_keys:first-child");
    }
    setUpEvents() {
        this.htmlRef.onclick = () => {
            main.style.backgroundColor = this.bgcolor;
          // this.holder.removeChild(this.htmlRef);
        }
    }
    enlargeKey() {
        
    }
}

const main = document.querySelector(".body_main");
main.onclick = (e) => { if (e.target == main) new PianoKeys(main)};

const button = document.querySelector("button");
const first = document.querySelector(".body_main_keys:first-child");
button.onclick = () => {

};