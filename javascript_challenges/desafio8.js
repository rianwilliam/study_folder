//! faça um array no qual se deve retornar o valor de n em ordem decrescente

const reverseSeq = n => {
    array = []
    for(i = 1;i <= n; i++ ) {
        array.unshift(i)
    }
    return array
};


console.log(reverseSeq(100))

//? Outra maneira interessante de se fazer, Estudar essas funções

const reverseSeq2 = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };