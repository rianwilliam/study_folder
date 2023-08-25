#include <stdio.h>

int main(void) {
	for(int i = 1; i < 5; i++) {
		float nota1,nota2,nota3,nota4;
		printf("Insira as 4 notas do aluno %i: ", i);
		scanf("%f %f %f %f",&nota1,&nota2,&nota3,&nota4);
		printf("A media do aluno %i eh: %f \n", i ,(nota1+nota2+nota3+nota4)/4);
	}
	return 0;
}
