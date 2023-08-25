
#include <stdio.h>

int main(void) {
    int n,res;
    printf("Digite um número: ");
    scanf("%i", &n);
    while(n > 0) {
        res += n;
        printf("Digite um número: ");
        scanf("%i", &n);
    }
    printf("O resultado é : %i \n",res);

}
