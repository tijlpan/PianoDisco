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
          `<div class="body_main_keys"><div class="body_main_keys_inner"></div></div>`
        );
        
        return this.holder.querySelector(".body_main_keys:first-child");
    }
    setUpEvents() {
        this.htmlRef.onclick = () => {
            main.style.backgroundColor = this.bgcolor;
          // this.holder.removeChild(this.htmlRef);
        }
    }
}

allKeys = [];
const main = document.querySelector(".body_main");
const board = document.querySelector(".body_main_board");
main.onclick = (e) => { if (e.target == main || e.target == board) 
    {
    
    if(allKeys.length === 0 || !(allKeys[0].htmlRef.offsetLeft === 20)) {
        const key = new PianoKeys(main);
        allKeys.push(key);
        console.log(allKeys[0].htmlRef.offsetLeft);
        console.log(main.offsetLeft);
        return key;
    }
    main.classList.add("body_main_disabled");
    };  
};

const button = document.querySelector(".body_main_playbutton");
button.onclick = () => {
    let counter = allKeys.length-1;

    allKeys[counter].htmlRef.classList.add("body_main_keys_grow");
    main.style.backgroundColor = allKeys[counter].htmlRef.style.backgroundColor;
    counter--;

    const interval = setInterval(function() {
        const max = allKeys[counter+1];
        if(max && allKeys[counter+1].htmlRef.classList.contains("body_main_keys_grow")) { allKeys[counter+1].htmlRef.classList.remove("body_main_keys_grow")};
        if(counter === -1) {
            clearInterval(interval);
            setTimeout(() => main.style.backgroundColor = "lightgray", 500)
        }
        if (counter !== -1) {
            allKeys[counter].htmlRef.classList.add("body_main_keys_grow");
            main.style.backgroundColor = allKeys[counter].htmlRef.style.backgroundColor;
        };
        counter--;
    }, 500)
};