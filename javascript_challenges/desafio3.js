//! Você recebe qualquer carta como argumento. Sua tarefa é devolver o naipe desta carta

function defineSuit(card) {
    if (card.includes('♣')) return 'clubs'
    if (card.includes('♦')) return 'diamonds'
    if (card.includes('♥')) return 'hearts'
    if (card.includes('♠')) return 'spades'
}

console.log(defineSuit('10♥'))

//?Outras maneiras de se fazer

function defineSuit(card) {
    switch (card.slice(-1)){ //* o slice -1 deve ser para pegar o último caractere da string
      case '♣': return 'clubs';
      case '♦': return 'diamonds';
      case '♥': return 'hearts';
      case '♠': return 'spades';    
    }      
}


function defineSuit(card) {
    return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
}

function defineSuit(card) {
    return {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    }[card.substr(-1)] //* substr(-1) deve ter o mesmo efeito que slice -1
  }


/* 
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' 
*/