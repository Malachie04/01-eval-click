//Selection éléments de la DOM

const htmlContainer=document.querySelector('.container');

//Ajouter du click

htmlContainer.addEventListener('click',(event)=>{
    event.preventDefault();

    let clickedElement=event.target;

    //Selection de tous les enfants du selecteurs
    let constElements=clickedElement.closest('.container');

    
    if(clickedElement.classList.contains('selected')){
        //Déselection
        clickedElement.classList.remove('selected');
    }else{
        //Supression de la classe selection sur tous les bouttons
        constElements.querySelectorAll('button').forEach(element => {
            element.classList.remove('selected');
        });
        //Ajout de la selection à la classe cible
        clickedElement.classList.add('selected');
    }
});