
let submit = document.getElementById('btn');

function submitForm(e) {
    e.preventDefault();
    let input = document.getElementById('input-text').value;
  
    if (input == '') {
        alert('enter the url');
    } else if (input.search('https')==0) {
        alert('safe website');
    }
    else {
        alert('not safe ');
    }
   

    
}


submit.addEventListener('click', submitForm);