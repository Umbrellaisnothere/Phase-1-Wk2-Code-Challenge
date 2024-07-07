// script.js

// Waits for the DOM content to load completely
document.addEventListener('DOMContentLoaded', () => {

    const itemInput = document.getElementById('item');
    const addBtn = document.getElementById('addBtn');
    const clearBtn = document.getElementById('clearBtn');
    const list = document.getElementById('list');

    // This function is used to add an item to the list
    function addToList() {

        const newItem = itemInput.value.trim();

        if (newItem !== '') {
            // This creates a new item
            const itemList = document.createElement('li');
            itemList.textContent = newItem;

            // This creates an edit button for each item keyed in
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => {
                const newName = prompt('Edit item name:', itemList.textContent);
                if (newName !== null) {
                    itemList.textContent = newName.trim();
                }
            });

            // Append the edit button to the list item
            itemList.appendChild(editButton);

            // Append the itemList to the list item
            list.appendChild(itemList); 
            itemInput.value = '';
        } 
        else {
            alert('Enter an item!!');
        }

    }
    
    // This event listener is added for Add Item button for the 'click' event
    addBtn.addEventListener('click', addToList);

    // Adding the event listener for the 'click' event
    clearBtn.addEventListener('click', () => {
        list.innerHTML = ''; 
    });

});