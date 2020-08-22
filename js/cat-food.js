//Выбор карточки

var foodCards = document.querySelectorAll('.food-card');

for( let i = 0; i < foodCards.length; i++){

    let foodCard = foodCards[i];
    let card = foodCard.querySelector('.food-card__card'); 
    let buyButton = foodCard.querySelector('.food-card__buy'); 

    card.addEventListener('click', function(evt){
        cardOut(evt.currentTarget);
        cardToggle(evt.currentTarget);
        cardToggleText(foodCard);
    });

    buyButton.addEventListener('click', function(evt){
        cardToggle(card);
        cardToggleText(foodCard);
    });

    card.addEventListener('mouseover', function(evt){
        cardEnter(evt.currentTarget);
    })

    card.addEventListener('mouseout', function(evt){
        cardOut(evt.currentTarget);
    })
}

var cardToggle = function(card){
    if(card.classList.contains('food-card__card--default')){
        card.classList.toggle('food-card__card--default');
        card.classList.toggle('food-card__card--selected');
    }else if(card.classList.contains('food-card__card--selected')){
        card.classList.toggle('food-card__card--default');
        card.classList.toggle('food-card__card--selected');
    }
}

var cardToggleText = function(card){
    var defaultText = card.querySelector('.food-card__is-available-text--default');
    var selectedText = card.querySelector('.food-card__is-available-text--selected');

    var catFoodCard = card.querySelector('.food-card__card');

    if(catFoodCard.classList.contains('food-card__card--default')){
        defaultText.classList.toggle('hidden');
        selectedText.classList.toggle('hidden');
        
    }else if(catFoodCard.classList.contains('food-card__card--selected')){
        defaultText.classList.toggle('hidden');
        selectedText.classList.toggle('hidden');
    }
}

//Состояние наведения

var defaultHoverColor = '#0000ff';
var selectedHoverColor = '#ff0000';

var cardOut = function(card){
    var sticker = card.querySelector('.food-card__weight-sticker');
    var corner = card.querySelector('.food-card__beveled-corner')

    card.removeAttribute('style');
    sticker.removeAttribute('style');
    corner.removeAttribute('style'); 
}

var cardEnter = function(card){ 
    var sticker = card.querySelector('.food-card__weight-sticker');
    var corner = card.querySelector('.food-card__beveled-corner')

    if(card.classList.contains('food-card__card--default')){
        card.setAttribute('style', 'border-color: ' + defaultHoverColor);
        sticker.setAttribute('style', 'background-color: ' + defaultHoverColor);
        corner.setAttribute('style', 'border-top-color: ' + defaultHoverColor); 
    }else if(card.classList.contains('food-card__card--selected')){
        card.setAttribute('style', 'border-color: ' + selectedHoverColor);
        sticker.setAttribute('style', 'background-color: ' + selectedHoverColor);
        corner.setAttribute('style', 'border-top-color: ' + selectedHoverColor);
    }    

}






