async function quickSort(low, high) {
    if (low > high)
        return;
                
    const pivot = await partition(low, high);
    await quickSort(low, pivot - 1);
    await quickSort(pivot + 1, high);
}

async function partition(low, high) {
    const pivot = list[high];

    pivot.bar.className = "purple";
    await pause(delay);
    
    let x = low;
    for (let i = low; i < high; i++) {
        if (list[i].val < pivot.val) {
            list[i].bar.className = "pink";
            await pause(delay);

            let tmp = list[x];
            list[x] = list[i];
            list[i] = tmp;
            x++;
            
            render();
            await pause(delay);
        }
    }
    
    let tmp = list[x];
    list[x] = pivot;
    list[high] = tmp;

    render();
    await pause(delay);
    
    pivot.bar.className = "blue";
    render();
    await pause(delay);

    for (let i = low; i < x; i++) {
        list[i].bar.className = "bar";
    }

    return x;
}
