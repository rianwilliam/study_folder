
#include <iostream>
#include <string>

// Biblioteca de arrays
#include <array>

using namespace std;

int main(int arg, char** argv) {
    string pass_input;
    string password = "123";

    // While loop
    while(pass_input != password) {
        cout << "Digite a sua senha: ";
        cin >> pass_input;
    }
    cout << "Senha correta" << "\n" ;

    // Há duas maneiras de se criar um array em C++
        // 1° Maneira
    string items[4] = {"item1", "item2", "item3", "item4"};

    array<string,4> items2{"item5","item6","item7"};

    // Ao criar desta primeira maneira precisamos retirar o \0 do final do array
    for(int i=0; i < items->size()-1; i++)  {  
        cout << i << ": " << items[i] << "\n";
    }

    return 0;
}