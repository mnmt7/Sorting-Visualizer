function randomRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateList (size, minLen, maxLen){
    let newList = [];
    let i = 0, elementsInAGroup = (Math.floor(size/4));
    while (i < size) {
        const len = randomRange(minLen, maxLen);   
        const bar = document.createElement('div');
        
        // bar.className = "neon" + (Math.floor(i/elementsInAGroup));
        bar.className = "bar";
        bar.style.height = len + "px";
        bar.id = Math.floor(i/elementsInAGroup);
        
        newList.push({
            val: len,
            bar: bar
        })
        i++;
    }
    list = newList;
    render();
}


function pause(time) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hi");
            console.log("inside pause");
        }, time * 1000)
    })
    return p;
}

function render() {
    let canvas = document.getElementById('canvas');
    canvas.innerText = '';
    list.forEach(function (element) {
        canvas.append(element.bar);
    });
}

function incr() {
    delay -= 0.4 * delay;
    console.log(delay);
}

function decr() {
    delay += 0.4 * delay;
    console.log(delay);
}

document.getElementById("merge-sort-btn").addEventListener("click", () => { mergeSort(0, list.length - 1); console.log("hey me again")});
document.getElementById("selection-sort-btn").addEventListener("click", () => selectionSort());
document.getElementById("bubble-sort-btn").addEventListener("click", () => bubbleSort());
document.getElementById("insertion-sort-btn").addEventListener("click", () => insertionSort());

document.getElementById("incr").addEventListener("click", incr);
document.getElementById("decr").addEventListener("click", decr);

document.getElementById("generate-new-array").addEventListener("click", () => generateList(size, minLen, maxLen));

// size % noOfGroups must be 0
let size = 60, minLen = 20, maxLen = 400, noOfGroups = 4, elementsInAGroup = (Math.floor(size/noOfGroups));
let list = [];
generateList(size, minLen, maxLen);
let delay = 0.1;
console.log(list)