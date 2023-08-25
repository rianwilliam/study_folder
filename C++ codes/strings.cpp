
#include <iostream>

// Biblioteca de strings
#include <string>

using namespace std;

int main(int argc, char** argv) {
    // Coloca-se um número a mais pois o último valor da string é o \0
    char myArray[11] = "0123456789";
    
    // Criando strings
    string myString = "Teste";
    myString += " de string";

    cout << myString << "\n";

    return 0;
}
