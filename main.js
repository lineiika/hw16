
const inputEl = document.getElementById('input');
const hostDiv = document.createElement('div');


hostDiv.textContent = 'I am host'

function addCallback (){
    document.body.append(hostDiv)
}

function removeCallback () {
    document.body.remove(hostDiv)
}


inputEl.addEventListener('focus', addCallback);
inputEl.addEventListener('blur', removeCallback);



 