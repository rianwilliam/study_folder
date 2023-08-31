class Grid {
    constructor(ctx) {
        this.quantX = 10
        this.quantY = 14
        this.blocos = new Array(this.quantX * this.quantY)
        this.totalBlocos = 0

        this.mapa = contadorNiveis.next().value 
        
        this.construirMapa()

    }
    
    //* Construção do mapa
    construirMapa() {
        //* Realiza 2 loops for na matriz (que é o mapa), em cada loop cria um bloco com o valor da cor que ele pegou do array de niveis
        for(let i = 0; i < this.quantY; i++) {
            for(let e = 0; e < this.quantX; e++) {
                this.blocos.push(new Bloco(ctx,bola,e,i,this.mapa[i][e]))
                //* Realiza a contagem de blocos para saber quando todos os blocos terminaram para asssim passar de nível (Não conta com os espaços vazios nem blocos invisíveis)
                if(this.mapa[i][e] != 0 && this.mapa[i][e] != 4) {
                    this.totalBlocos++
                }
            }
        }
    }

    //* Função executada quando há 0 blocos
    mudarNivel() {
        //* faz a bola para de se mover e reseta ela para o meio
        bola.movendo = false
        bola.y = bola.meioY
        bola.x = bola.meioX
        bola.dirX = 0

        this.blocos.map(bloco => {
            bloco.vivo = false
        })

        //* Executa novamente a função para realizar a alteração do nível
        this.mapa = contadorNiveis.next().value

        //* Executa a função de construção de mapa para desenhar o novo mapa
        this.construirMapa()
        
        //* Exibe o botão de iniciar novamente
        btnIniciar.style.display = "block"
    }

    desenhar() {}
}