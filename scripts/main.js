//Selection éléments de la DOM

const htmlContainer=document.querySelector('.container');

//Ajout du click sur le container pour da délégation des evements

htmlContainer.addEventListener('click',(event)=>{
    event.preventDefault();

    //Récupération de la cible clicquée
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