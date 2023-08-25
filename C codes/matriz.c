
#include <stdio.h>

int main() {

    int matriz[2][2];

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("Insira o valor da linha %d, coluna %d: ", i+1, j+1);
            scanf("%d", &matriz[i][j]);
        }
    }

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("O valor da linha %d, coluna %d eh: %d \n", i+1,j+1, matriz[i][j]);
        }
    }

    return 0;
}
