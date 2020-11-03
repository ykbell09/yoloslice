window.onload = () => {

    // global varaiables

    const toppings = [];
    const choices = document.querySelectorAll('.checkbox');
    let qtyToppings;

    // generator functions

    const checkToggle = (value) => {
        choices.forEach(selection => selection.checked = value);
    };

    const getSelections = () => {

        toppings.length = 0;
        choices.forEach(selection => {
            if (selection.checked === true) toppings.push(selection.id);
        });
    };


    const generatePizza = () => {

        getSelections();
        qtyToppings = parseInt(document.querySelector('#select-qty').value);

        if (qtyToppings === 0) {
            alert(`Please select a number of toppings for your pizza.`);
        } else if (qtyToppings >= toppings.length) {
            alert(`You have chosen a pizza with ${qtyToppings} toppings. You will need to select more than ${toppings.length} topping options so we can properly surprise you.`);
        } else if (qtyToppings < toppings.length) {
            console.log(qtyToppings);
        }

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