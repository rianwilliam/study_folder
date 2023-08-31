var maxSequence = function(arr){
    let cnt = 0;
    let result = 0;

    for(i of arr) {
        retorno = arr.map((item,index) => {
            let sum = arr.slice(cnt,index+(cnt+1)).reduce((a,b) => a+b)
            if(sum > result) {result = sum}
        }) 
        cnt+=1
    }
    return result
}

let arrTeste = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let arrTeste2 = [46,-3,37,-40,34,-13,42,-9,29,4,11,-42,14,-27,35,-19,37,25,10,28,24,33,5,-29,44,-39,-8,39,4,-29,41,32,-7,-3,-30,49,-25,-12,29,40,-38,5,13,-17,-6,18,31,41,13,20,43,-28];

let arrTeste3 = [7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43];

console.log(maxSequence(arrTeste))
console.log(maxSequence(arrTeste2))
console.log(maxSequence(arrTeste3))


