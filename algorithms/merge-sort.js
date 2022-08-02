async function mergeSort(low, high) {
    if (low === high)
        return;
    const mid = Math.floor(low + (high - low) / 2);

    await mergeSort(low, mid);
    await mergeSort(mid + 1, high);
    await merge(low, mid, high);
}

async function merge(low, mid, high) {
    let left = list.slice(low, mid + 1);
    for (let i = 0; i <= mid - low; i++) {
        left[i].bar.className = "purple";
        await pause(delay);
    }

    let right = list.slice(mid + 1, high + 1);
    for (let i = 0; i < high - mid; i++) {
        right[i].bar.className = "pink";
        await pause(delay);
    }

    const remainingPart_left = list.slice(0, low);
    const remainingPart_right = list.slice(high + 1, list.length);
    let sortedPart = [];

    let x = low, l = 0, r = 0;
    
    while (l < left.length && r < right.length) {
        left[l].bar.className = "bar";
        right[r].bar.className = "bar";
        await pause(delay);

        if (left[l].val <= right[r].val) {
            left[l].bar.className = "blue"
            await pause(delay);

            sortedPart.push(left[l]);
            let newList = remainingPart_left.concat(sortedPart, left.slice(l + 1), right.slice(r), remainingPart_right );
            list = newList;
            
            right[r].bar.className = "pink";
            
            render()
            await pause(delay);
            
            l++;
        }
        else {
            right[r].bar.className = "blue"
            await pause(delay);

            sortedPart.push(right[r]);
            let newList = remainingPart_left.concat(sortedPart, left.slice(l), right.slice(r + 1), remainingPart_right);
            list = newList;
            
            left[l].bar.className = "purple";
            
            render();
            await pause(delay);
            
            r++;
        }
    }

    left.slice(l).forEach((bar) => {
        bar.bar.className = "blue";
    });    
    
    right.slice(r).forEach((bar) => {
        bar.bar.className = "blue";
    });
    
    render()
    await pause(delay);
}   