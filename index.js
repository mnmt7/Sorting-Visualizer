function randomRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateList(size, minLen, maxLen) {
    let newList = [];
    let i = 0;
    while (i < size) {
        const len = randomRange(minLen, maxLen);   
        const bar = document.createElement('div');
        
        bar.className = "bar";
        bar.style.height = len;
        
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
            resolve();
        }, time * 1000)
    })
    return p;
}

function generateNearlySorted(size, minLen, maxLen) {
    generateList(size, minLen, maxLen);
    list.sort((a, b) => a.val - b.val);
    const set = new Set();
    for (let i = 0; i < size - 6; i++) {
        const x = randomRange(i, i + 5);   
        if (set.has(x)) 
            continue;

        set.add(x);
        let tmp = list[i];
        list[i] = list[x];
        list[x] = tmp;
    }

    render();
}

function generateReverse(size, minLen, maxLen) {
    generateList(size, minLen, maxLen);
    list.sort((a, b) => b.val - a.val);
    render();
}
function render() {
    let canvas = document.getElementById('canvas');
    canvas.innerText = '';
    list.forEach(function (element) {
        canvas.append(element.bar);
    });
}

function increaseSpeed() {
    if (delay <= 0.0125) {
        document.getElementById("increase-speed-btn").disabled = true;
        document.getElementById("increase-speed-btn").style.opacity = 0.5;
        return;
    }
    
    delay /= 2;
    
    document.getElementById("decrease-speed-btn").disabled = false;
    document.getElementById("decrease-speed-btn").style.opacity = 1;
}

function decreaseSpeed() {
    if (delay >= 0.8) {
        document.getElementById("decrease-speed-btn").disabled = true;
        document.getElementById("decrease-speed-btn").style.opacity = 0.5;
        return;        
    }
    
    delay *= 2;

    document.getElementById("increase-speed-btn").disabled = false;
    document.getElementById("increase-speed-btn").style.opacity = 1;
}

function increaseSize() {
    if (size >= 70) {
        document.getElementById("increase-size-btn").disabled = true;
        document.getElementById("increase-size-btn").style.opacity = 0.5;
        return;
    }

    document.getElementById("decrease-size-btn").disabled = false;
    document.getElementById("decrease-size-btn").style.opacity = 1;

    size += 5;
    generateList(size, minLen, maxLen);
}

function decreaseSize() {
    if (size <= 40) {
        document.getElementById("decrease-size-btn").disabled = true;
        document.getElementById("decrease-size-btn").style.opacity = 0.5;
        return;        
    }

    document.getElementById("increase-size-btn").disabled = false;
    document.getElementById("increase-size-btn").style.opacity = 1;

    size -= 5;
    generateList(size, minLen, maxLen);
}

async function sort(event) {
    const id = event.target.id;

    disableButtons(true);

    if (id === "merge-sort-btn")
        await(mergeSort(0, size - 1));
    else if (id === "selection-sort-btn")
        await(selectionSort());
    else if (id === "bubble-sort-btn")
        await(bubbleSort());
    else if (id === "quick-sort-btn")
        await(quickSort(0, size - 1));
    else if (id === "heap-sort-btn")
        await(heapSort(size));
    else
        await(insertionSort());

    disableButtons(false);
}

function disableButtons(flag) {
    document.getElementById("merge-sort-btn").disabled = flag;
    document.getElementById("selection-sort-btn").disabled = flag;
    document.getElementById("bubble-sort-btn").disabled = flag;
    document.getElementById("insertion-sort-btn").disabled = flag;
    document.getElementById("quick-sort-btn").disabled = flag;
    document.getElementById("heap-sort-btn").disabled = flag;
    document.getElementById("increase-size-btn").disabled = flag;
    document.getElementById("decrease-size-btn").disabled = flag;
    document.getElementById("generate-new-array").disabled = flag;
    document.getElementById("generate-ns-array").disabled = flag;
    document.getElementById("generate-rev-array").disabled = flag;
    
    document.getElementById("merge-sort-btn").style.opacity = flag ? 0.5 : 1;
    document.getElementById("selection-sort-btn").style.opacity = flag ? 0.5 : 1;
    document.getElementById("bubble-sort-btn").style.opacity = flag ? 0.5 : 1;
    document.getElementById("insertion-sort-btn").style.opacity = flag ? 0.5 : 1;
    document.getElementById("quick-sort-btn").style.opacity = flag ? 0.5 : 1;
    document.getElementById("heap-sort-btn").style.opacity = flag ? 0.5 : 1;
    document.getElementById("increase-size-btn").style.opacity = flag ? 0.5 : 1;
    document.getElementById("decrease-size-btn").style.opacity = flag ? 0.5 : 1;
    document.getElementById("generate-new-array").style.opacity = flag ? 0.5 : 1;
    document.getElementById("generate-ns-array").style.opacity = flag ? 0.5 : 1;
    document.getElementById("generate-rev-array").style.opacity = flag ? 0.5 : 1;
    document.getElementById("size-label").style.opacity = flag ? 0.5 : 1;
}

document.getElementById("merge-sort-btn").addEventListener("click", (event) => sort(event));
document.getElementById("selection-sort-btn").addEventListener("click", (event) => sort(event));
document.getElementById("bubble-sort-btn").addEventListener("click", (event) => sort(event));
document.getElementById("insertion-sort-btn").addEventListener("click", (event) => sort(event));
document.getElementById("quick-sort-btn").addEventListener("click", (event) => sort(event));
document.getElementById("heap-sort-btn").addEventListener("click", (event) => sort(event));
document.getElementById("increase-speed-btn").addEventListener("click", increaseSpeed);
document.getElementById("decrease-speed-btn").addEventListener("click", decreaseSpeed);
document.getElementById("increase-size-btn").addEventListener("click", increaseSize);
document.getElementById("decrease-size-btn").addEventListener("click", decreaseSize);
document.getElementById("generate-new-array").addEventListener("click", () => {generateList(size, minLen, maxLen); removeStyle("random-text");});
document.getElementById("generate-ns-array").addEventListener("click", () => {generateNearlySorted(size, minLen, maxLen); removeStyle("almost-sorted-text");});
document.getElementById("generate-rev-array").addEventListener("click", () => {generateReverse(size, minLen, maxLen); removeStyle("reversed-text");});

let size = 60, minLen = 20, maxLen = 350;
let list = [];
generateList(size, minLen, maxLen);
let delay = 0.1;

document.getElementById("generate-new-array").addEventListener("mouseover", () => addStyle("random-text"));
document.getElementById("generate-new-array").addEventListener("mouseout", () => removeStyle("random-text"));

document.getElementById("generate-ns-array").addEventListener("mouseover", () => addStyle("almost-sorted-text"));
document.getElementById("generate-ns-array").addEventListener("mouseout", () => removeStyle("almost-sorted-text"));

document.getElementById("generate-rev-array").addEventListener("mouseover", () => addStyle("reversed-text"));
document.getElementById("generate-rev-array").addEventListener("mouseout", () => removeStyle("reversed-text"));

const addStyle = (id) => {
    document.getElementById(id).classList.add("someStyle");
    document.getElementById("canvas").classList.add("make-transparent");
};

const removeStyle = (id) => {
    document.getElementById(id).classList.remove("someStyle");
    document.getElementById("canvas").classList.remove("make-transparent");
};
