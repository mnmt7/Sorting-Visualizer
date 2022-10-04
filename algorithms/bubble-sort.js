async function bubbleSort() {
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - 1 - i; j++) {
            list[j].bar.className = "purple";
            list[j + 1].bar.className = "purple";
            await pause(delay);

            if (list[j].val > list[j + 1].val) {
                let tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
                render();
                await pause(delay);
            }

            list[j].bar.className = "bar";
            list[j + 1].bar.className = "bar";
            await pause(delay);
        }
        list[size - 1 - i].bar.className = "pink";
    }
    list[0].bar.className = "pink";
}
