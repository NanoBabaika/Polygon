const testContainer = document.getElementById('test_container');

let createList = document.createElement('ul');
createList.classList.add('list__nav');
createList.id = 'list_id';
testContainer.append(createList);



function createListItems () {
    for(let i;  i < 4; i++) {
        let createListItem = document.createElement('li');
        createListItem.classList.add('list__nav-item');
        createList.append(createListItem);
        }    
}