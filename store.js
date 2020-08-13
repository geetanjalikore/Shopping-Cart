var removeCartItemButtons=document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);

for(let i = 0 ; i < removeCartItemButtons.length ; i++){
    const button = removeCartItemButtons[i];

    button.addEventListener('click',function(event){
        const buttonClicked=event.target;
        buttonClicked.parentElement.parentElement.remove();
    })    
}