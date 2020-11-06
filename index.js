window.onload = () => {

    // --- global varaiables ---

    let sizeRequested;
    let qtyRequested;
    const choices = document.querySelectorAll('.checkbox');
    const checkedSelections = [];
    const randomChosenItems = [];


    // --- generator functions ---

    const checkToggle = (value) => {
        choices.forEach(selection => selection.checked = value);
    };

    const getCheckedSelections = () => {

        checkedSelections.length = 0;
        choices.forEach(selection => {
            if (selection.checked === true) checkedSelections.push(selection.id);
        });
    };

    // make sure the user has selected enough toppings to randomize their request
    const checkQtyRequested = () => {

        qtyRequested = parseInt(document.querySelector('#select-qty').value);

        if (qtyRequested === 0) {
            return alert(`Please select a number of toppings for your pizza.`);
        } else if (qtyRequested >= checkedSelections.length) {
            return alert(`You have chosen a pizza with ${qtyRequested} toppings. You will need to select more than ${checkedSelections.length} topping options so we can properly surprise you.`);
        } else if (qtyRequested < checkedSelections.length) {
            return true;
        }
    };

    // generate random chosen items
    const generatePizza = () => {

        // clear previously items
        randomChosenItems.length = 0;

        getCheckedSelections();
        
        if (checkQtyRequested() === true) {
            for (let i = 0; randomChosenItems.length < qtyRequested; i++) {
                const n = Math.floor(Math.random() * checkedSelections.length);
                if (!randomChosenItems.includes(checkedSelections[n])) {
                    randomChosenItems.push(checkedSelections[n]);
                }
            }
        }
    };
    
    // display results
    const displayPizza = () => {

        sizeRequested = document.querySelector('#select-size').value;
        document.querySelector('#span-ordered-size').innerHTML = sizeRequested;  
        const list = document.querySelector('#list-ordered-toppings');
        list.innerHTML = '';

        randomChosenItems.forEach(item => {
            const newItem = document.createElement('li');
            newItem.innerText = item;
            list.appendChild(newItem);
        });

        document.querySelector('#container-popup').style.display = 'block';
    };
    
    
    //  --- add event listeners, button functionality ---

    document.querySelector('#button-check-all').addEventListener('click', () => {
        checkToggle('true');
    });

    document.querySelector('#button-uncheck-all').addEventListener('click', () => {
        checkToggle('');
    });

    document.querySelector('#button-submit').addEventListener('click', () => {
        generatePizza();
        displayPizza();
    });

};