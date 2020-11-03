window.onload = () => {

    // global varaiables

    const toppings = [];
    const choices = document.querySelectorAll('.checkbox');;

    // generator functions

    const checkToggle = (value) => {
        choices.forEach(selection => selection.checked = value);
    };

    const getSelections = () => {

        toppings.length = 0;
        choices.forEach(selection => {
            if (selection.checked === true) toppings.push(selection.id);
        });

        console.log(toppings);
    };


    const generatePizza = () => {

        getSelections();
        console.log('test');

    };

    // add event listeners, button functionality

    document.querySelector('#button-check-all').addEventListener('click', () => {
        checkToggle('true');
    });

    document.querySelector('#button-uncheck-all').addEventListener('click', () => {
        checkToggle('');
    });

    document.querySelector('#button-submit').addEventListener('click', () => {
        generatePizza();
    });

};