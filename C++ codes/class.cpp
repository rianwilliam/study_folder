
#include <iostream>
#include <string>

using namespace std;

// Aqui vamos criar a classe
class Human {
//Tudo criado dentro da classe é privado então para deixar público faremos o seguinte
    public:
        // Fazendo isso criamos uma struct que recebe parâmetros
            // Obrigatórios ou opcionais
        Human(string n, int a, float h) {
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
    // Porém, podemos deixar privado alguns elementos privados fazendo o seguinte
    private:
            string name;
            int age;
            float height;
}; 

int main(int arg, char** argv) {

    // Aqui criamos a instância da classe
    Human me("rian", 21, 1.76f);
    me.getStatus();

    // Como name está privado não conseguimos imprimir ele
        // cout << me.name << "\n";

    return 0;
}