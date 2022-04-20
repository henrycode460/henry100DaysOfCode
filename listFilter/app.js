
let filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", filterName);

function filterName (){
    // get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // get name ul

    let ul = document.getElementById('names');

    // get li from ul
    let li = ul.querySelectorAll('li.list-item');

    // looping through the list item li
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        
        // if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';

        }else{
            li[i].style.display = 'none';
        }

       
    }
    


}