

const prevBtn = document.querySelector(".prev-btn");
const nxtBtn = document.querySelector(".nxt-btn");
const book = document.querySelector(".book");

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");

// Event Listeners
prevBtn.addEventListener("click", getPrevPage);
nxtBtn.addEventListener("click", getNextPage);

// Logic
let currentLocation = 1;
let numOfPages = 5;
let maxLocation = numOfPages+1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nxtBtn.style.transform = "translateX(180px)";
}
function closeBook(atBegining) {
    if(atBegining) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nxtBtn.style.transform = "translateX(0px)";
}
function getNextPage() {
    if(currentLocation<maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                p1.classList.add("flipped");
                p1.style.zIndex = 1;
                break;
            case 2:
                p2.classList.add("flipped");
                p2.style.zIndex = 2;
                break;
            case 3:
                p3.classList.add("flipped");
                p3.style.zIndex = 3;
                break;
            case 4:
                p4.classList.add("flipped");
                p4.style.zIndex = 4;
                break;
            case 5:
                p5.classList.add("flipped");
                p5.style.zIndex = 5;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }

}
function getPrevPage() {
    if(currentLocation>1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                p1.classList.remove("flipped");
                p1.style.zIndex = 5;
                break;
            case 3:
                p2.classList.remove("flipped");
                p2.style.zIndex = 4;
                break;

            case 4:
                p3.classList.remove("flipped");
                p3.style.zIndex = 3;
                break;

            case 5:
                p4.classList.remove("flipped");
                p4.style.zIndex = 2;
                break;

            case 6:
                openBook();
                p5.classList.remove("flipped");
                p5.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");

        }
        currentLocation--;
    }
}


