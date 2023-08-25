
#include <stdio.h>

int main(void) {

    int vetor[] = {10,50,100,300,100};
    int maior = vetor[0];

    for (int i = 0; i < 5; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    printf("O maior valor do vetor eh: %d \n", maior);

    return 0;
}
