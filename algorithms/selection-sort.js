async function selectionSort() {
    for (let i = 0; i < list.length; i++) {
        let min = i;

        list[i].bar.className = "purple";
        await pause(delay);

        for (let j = i + 1; j < list.length; j++) {
            list[j].bar.className = "pink";
            await pause(delay);

            if (list[j].val < list[min].val) {
                if (min != i)
                    list[min].bar.className = "bar";
                min = j;
            }
            else {
                list[j].bar.className = "bar";
            }
            await pause(delay);
        }
        if (min != i) {
            let temp = list[i];
            list[i] = list[min];
            list[min] = temp;

            render();
            await pause(delay);

            list[i].bar.className = "blue";
            list[min].bar.className = "bar";
            await pause(delay);

        }
        else {
            list[i].bar.className = "blue";
            await pause(delay);
        }

    }
}
