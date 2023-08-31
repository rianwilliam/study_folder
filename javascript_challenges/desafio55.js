//! Retorne true se a frase conter todas as letras do alfabeto em sua composição

function isPangram(string){ 
    let regex = /([A-Z])(?!.*\1)/gi; //* O número 1 são quantas vezes ele vai precisar identificar esses caracteres mas eu não entendi o por que dos simbolos antes dele
    return (string.match(regex) || []).length === 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

//? Outras maneiras de se fazer

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

//! Preciso estudar o comando every

function isPangram(str){
    var alphabet = ['a', 'b', 'c', 'd', 'e',
                    'f', 'g', 'h', 'i', 'j',
                    'l', 'm', 'n', 'o', 'p',
                    'q', 'r', 's', 't', 'u',
                    'v', 'w', 'x', 'y', 'z'
         ];
         str = str.toLowerCase();
         for (var i = 0; i < alphabet.length; i++) {
             if (str.indexOf(alphabet[i])<0) {
               return false;
             }
         }
         return true
}