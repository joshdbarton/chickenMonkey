const chickenMonkey = function() {
    for (let i = 1; i < 100; i++) {
        if (i % 7 === 0 && i % 5 === 0 ) {
            console.log('ChickenMonkey');
        } else if (i % 7 === 0) {
            console.log('Monkey');
        } else if (i % 5 === 0) {
            console.log('Chicken');
        } else {
            console.log(i);
        }
    }
}

chickenMonkey();

