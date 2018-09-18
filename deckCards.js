    function build(){
        let allCards = [];
        let cardValue = ["Ace", "2", "3", "4", "5", "6", "7", "Jack", "Queen", "King" ];
        let suits = ["SPADES", "CLUBS", "DIAMONDS", "HEARTS" ];
        for(i = 0; i < suits.length; i++) {
            for(j = 0; j < cardValue.length; j++){
                let card = cardValue[j] + " " + suits[i];
                allCards.push(card);
            }
        }
    // console.log(allCards);    
    function shuffleCards(){
        for(l =0; l<11 ; l++){
            let shuffle1 = Math.floor((Math.random() * allCards.length));
            let shuffle2 = Math.floor((Math.random() * allCards.length));
            let tmp = allCards[shuffle1];
            allCards[shuffle1] = allCards[shuffle2];
            allCards[shuffle2] = tmp;
        }
        
        console.log("Player one: " + allCards[l] + ", "+  allCards[l+1] + ", "+ allCards[l+2] +  ", "+allCards[l+3] + ", "+allCards[l+4]);
        console.log("Player Two: " + allCards[l+ 5] + ", "+  allCards[l+6] + ", "+ allCards[l+7] +  ", "+allCards[l+8] + ", "+allCards[l+9]);
    }
    shuffleCards();
}
build();
