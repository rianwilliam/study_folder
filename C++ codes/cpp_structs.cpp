
#include <iostream>
#include <string>

using namespace std;

// Structs são criadas fora do escopo da main
struct Human {
    string name;
    int age;
    float height;

    // Fazendo isso criamos uma struct que recebe parâmetros
        // Obrigatórios ou opcionais
    Human(string n, int a=0, float h) {
        name = n;
        age = a;
        height = h;
    };

    // Criando função dentro da struct
    void getStatus() {
        cout << name << "\n";
        cout << age << "\n";
        cout << height << "\n";
    }
}; 

int main(int arg, char** argv) {

    // Aqui criamos a instância da struct
    Human me("rian",21,1.76f);

    me.getStatus();

    return 0;
}