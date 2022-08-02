async function insertionSort() {
    // till index 0, the list is already sorted
    list[0].bar.className = "blue";
    for (let i = 1; i < list.length; i++) {
        list[i].bar.className = "purple";
        await pause(delay);

        let j;
        // to figure the position where the list[i] element is to be placed
        for (j = i - 1; j >= 0 && list[j].val > list[i].val; j--) {
            list[j].bar.className = "pink";
            await pause(delay);
            list[j].bar.className = "blue";
        }
        
        j++;
        list[j].bar.className = "pink";
        // placing the list[i] element in sorted position
        for (let k = i; k > j; k--) {
            let temp = list[k];
            list[k] = list[k-1];
            list[k-1] = temp;

            render();
            await pause(delay);
        }

        list[j].bar.className = "blue";
        // when the bar is not already at sorted position
        if (j != i)
            list[j+1].bar.className = "blue";
        await pause(delay);
    }
}