
#include <iostream>
#include <string>
#include <array>

using namespace std;

// Funções e procedimentos devem ser criada acima da main
void welcome_msg() {
    cout << "Seja bem-vindo(a)" << "\n";
}

// Função com parâmetro e retorno
int calculate(int n1, int n2) {
    return n1 + n2;
}

// Função que modifica parâmetro
    // Para a incrementação funcionar deve-se colocar o & no tipo
    // Caso não seja colocado o valor da variável original não irá mudar
void increment(int& n) {
    n += 1;
}

int main(int atg, char** argv) {
    welcome_msg();

    int sum = calculate(1,5);
    cout << sum << "\n";

    int n = 1;
    cout << "Numero normal: " << n << "\n";

    // Para passar este parâmetro é necessário que o valor tenha uma variável
    increment(n);
    cout << "Numero incrementado: " << n << "\n";

    return 0;
}