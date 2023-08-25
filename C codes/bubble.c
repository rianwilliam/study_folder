
#include <stdio.h>

int main(void) {

	//? Primeiramente criamos o vetor
	int vetor[] = {10,5,6,3,2};

	//? Depois vamos passar por esse vetor apenas 4 vezes
	for(int i = 1; i < 5; i++) {

		//? Aqui também vamos passar apenas 4 vezes
		for (int e = 0; e < 4; e++) {

			//* Aqui vamos verificar se o número atual é menor que o próximo número do vetor
			if (vetor[e+1] < vetor[e]) {

				//* Caso seja, vamos guardar o número atual
				int aux = vetor[e];

				//* Depois vamos dizer que o número atual vai ser igual ao próximo número que é menor que ele
				vetor[e] = vetor[e+1];

				//* E depois vamos dizer que o próximo número será igual ao número atual que está guardado na variável auxiliar
				vetor[e+1] = aux;

			}
			//! Ele vai rodar esse código 4 vezes no primeiro loop. O primeiro output do 2° for será igual a:
			//* 5,6,3,2,10
			//! Ele pegou o primeiro elemento e foi jogando ele para trás quando ele era maior que o próximo elemento
			//! Isso vai ser repetir várias vezes no loop
			//* 5,3,2,6,10
			//* 3,2,5,6,10
			//* 2,3,5,6,10
		}
	}

	for(int i = 0; i < 5; i++) {
		printf("%d \n",vetor[i]);
	}

	return 0;
}
