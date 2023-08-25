
#include <stdio.h>
#include <string.h>

struct dados
{
    char nome[20];
    char disciplina[20];
    float nota1;
    float nota2;
};


int main(void) {

    struct dados aluno;

    printf("Insira o nome do aluno: ");
    scanf("%s", aluno.nome);

    printf("Insira a disciplina do aluno: ");
    scanf("%s", aluno.disciplina);

    printf("Insira a nota 1 do aluno: ");
    scanf("%f", &aluno.nota1);

    printf("Insira a nota 2 do aluno: ");
    scanf("%f", &aluno.nota2);

    printf("Nome..........: %s \n", aluno.nome);
    printf("Disciplina..........: %s \n", aluno.disciplina);
    printf("Nota 1..........: %.2f \n", aluno.nota1);
    printf("Nota 2..........: %.2f \n", aluno.nota2);

    return 0;
}
