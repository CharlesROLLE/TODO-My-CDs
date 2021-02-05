// if we need that the script runs after the page was loaded
//document.addEventListener('DOMContentLoaded', function() {
     // PUT TH SCRIPT HERE
//});


// DELETE CD's
// Remove CD's of the list with Event Bubbling

// We get the parent -> div id (cd-list)
const list = document.querySelector('#cd-list ul');

// we create an event listener on the ul that bubbling from
// the click button (Span -> delete)
// we check if the user click on the target -> span tag
list.addEventListener('click', function(e){
    // with the if we verify the right target -> 'delete' span
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        // we remove the child -> li clicked
        list.removeChild(li);
    }
});

// ADD CD
// we grab the form using it's id
const addForm = document.forms['add-cd'];

// we create an event listener to the submit -> Add
// we prevent default then we get the value of the input field
// we can check that in the console
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const cdValue = addForm.querySelector('input[type="text"]').value;
    
    // create the 3 elements needed
    const li = document.createElement('li');
    const cdName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add the content -> name of CD and delete Btn
    cdName.textContent = cdValue;
    deleteBtn.textContent = 'delete';

    // add classes for CD name and Btn
    cdName.classList.add('name');
    deleteBtn.classList.add('delete');


    // Append to the DOM inthe right order
    li.appendChild(cdName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

});

// Hide CDs
// we grab the div with it's id -> hide
const hideBox = document.querySelector('#hide');

// we create an event listener on change for the checkbox
hideBox.addEventListener('change',function(e){
    // with the if & else we check the changes in the 
    // checkbox to hide or show the Cd's
    if(hideBox.checked){
        list.style.display = "none";
    }else{
        list.style.display = "block";
    }

});

// Filter for search CD's
// we grab the input of the search form
const searchCd = document.forms['search-cd'].querySelector('input');
// we create an event listener then we switch the searching to lowercase
searchCd.addEventListener('keyup',function(e){ 
    const searchExp = e.target.value.toLowerCase();
    // we get all the li using it's Tag name
    const cds = list.getElementsByTagName('li');
    // create an Array of the Html collection taken the 1st child li
    Array.from(cds).forEach(function(cd){
        // if searchExp matches with the li we show only the cd's else we hidden
        const title = cd.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(searchExp)!= -1){
            cd.style.display = "block";
    }else{
        cd.style.display ='none';
    }
    });

});

// tabbed content
// we grab the ul tabs and the div panel in two variables
// we create an event listener (click) in the Ul, 
// with bubbling we'll get the target of each li clicked
// we assign the targeted panel to a var
// the foreach loop allow us change the class 'active'
// to navigate through the tabs
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});