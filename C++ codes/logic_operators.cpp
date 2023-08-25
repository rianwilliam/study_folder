
#include <iostream>
#include <string>

using namespace std;

int main(int arg, char** argv) {
    int n1 = 10;

    if(n1 >= 10) {
        cout << "O numero " << n1 << " Passou" << "\n";
    }
    else {
        cout << "O numero " << n1 << " Nao passou" << "\n";
    }

    return 0;
}