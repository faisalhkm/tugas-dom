console.log("js ready")
//create new div element
let divTitle = document.createElement('div');
let formSection = document.createElement('form');
let divInput = document.createElement('div');
let divOutput = document.createElement('div');
let uList = document.createElement('ul');


document.body.append(divTitle)
formSection.appendChild(divInput);
divOutput.appendChild(uList);
document.body.append(formSection);//append div to body
document.body.append(divOutput);



//set attribute to div
divInput.setAttribute('id', 'div-input');
divOutput.setAttribute('id', 'div-output');

//create content to div-title
let titleElement = document.createElement('h1')
titleElement.setAttribute('id', 'title')
titleElement.textContent = "My To Do List"
divTitle.append(titleElement);

//create content to div-input
let inputElement = document.createElement('input');
inputElement.setAttribute('id', 'input-task');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('placeholder', 'input new task')
divInput.appendChild(inputElement);

//addButton
let addButton = document.createElement('button');
addButton.appendChild(document.createTextNode('Add')); //text button
divInput.append(addButton);
addButton.setAttribute('type', 'button')
addButton.addEventListener('click', function(ev) {
    console.log(inputElement.value)
    let inputValue = inputElement.value; //field.value = text
    if (inputValue !== ''){
        uList.innerHTML += '<li>' + inputValue + '<button onclick="Remove(this);">Remove</button> </li>';
        
        inputElement.value = '';
    }
    ev.preventDefault();
    
    // let outputElement = document.createElement('li' + inputValue)   //content for div-output
    // outputElement.textContent = inputValue;
    // uList.append(outputElement);
}, false);
function Remove(taskRemoved){
    taskRemoved.parentNode.parentNode.removeChild(taskRemoved.parentNode);
    }


    

//content for div-output
// let todoList = document.createElement('ul')
// document.body.divOutput.append(todoList)







//content for divElement
// 1. textnode
//let textNode = document.createTextNode("My To Do List");
// 2. input

//add content to divElement
//divElement.appendChild(textNode);





//add element to webpage
// let bodyDiv = document.getElementsByTagName("body");
// bodyDiv.body.appendChild(divElement);