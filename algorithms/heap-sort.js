async function heapSort(size) {

    await buildHeap(size);
    
    for (let x = size - 1; x > 0; x--) {
        const tmp = list[0];
        list[0] = list[x];
        list[x] = tmp;

        list[x].bar.className = "blue";
        render();
        await pause(delay);
        
        await heapify(0, x);
    }
    
    list[0].bar.className = "blue";
}
    
async function buildHeap(size) {
    for (let x = size - 1; x >= 0; x--)
        await heapify(x, size);
}

async function heapify(x, size) {
    let tmp = list[x];

    tmp.bar.className = "pink";
    await pause(delay);

    let left = 2 * x + 1;
    while (left < size) {
        let max = left;
        list[max].bar.className = "purple";
        await pause(delay);
        
        let right = 2 * x + 2;
        if (right < size) {
            list[right].bar.className = "purple";            
            await pause(delay);
        }
        if (right < size && list[right].val > list[max].val) {
            list[max].bar.className = "bar";
            await pause(delay);
            max = right;
        }
        else if (right < size) {
            list[right].bar.className = "bar";                        
            await pause(delay);
        }
        
        if (list[max].val > tmp.val) {
            list[x] = list[max];
            list[max] = tmp;
            
            render();
            await pause(delay);

            list[x].bar.className = "bar";
            await pause(delay);
            
            x = max;
            left = 2 * x + 1;
        }
        else {
            list[max].bar.className = "bar";
            await pause(delay);
            break;
        }
    }
    
    list[x] = tmp;
    tmp.bar.className = "bar";
    await pause(delay);
}
