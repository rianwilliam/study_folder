
#include <iostream>
#include <string>

using namespace std;

int main(int arg, char** argv) {
    string name;

    cout << "Insira seu nome:";

    // Para pegar o input do usuário vamos usar o "cin" com o sinal >>
    cin >> name;

    cout << "seu nome eh " << name << "\n";

    return 0;
}