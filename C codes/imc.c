#include <stdio.h>

int main(void) {

    float peso,altura,imc;
    printf("Insira seu peso: ");
    scanf("%f", &peso);

    printf("Insira sua Altura: ");
    scanf("%f", &altura);

    imc = peso / (altura*altura);

    printf("Seu IMC: %f \n", imc);

    return 0;
}
