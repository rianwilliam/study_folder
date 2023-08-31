class Carteira {
    constructor(ctx) {
        this.ctx = ctx

        // * De quanto em quanto tempo o dinheiro será gerado
        this.tempoGeracao = 200
        this.cnt = 0
        this.nivelTempoGeracao = 1
        // * Quantidade de Dinheiro
        this.dinheiro = 0
        // * Dinheiro Que vai ser gerado a cada tempo
        this.dinheiroGerado = 2
        this.nivelDinheiroGerado = 1

        // * Posições e tamanhos
        this.x = 10
        this.y = 35

        this.largura = this.ctx.canvas.width / 5

        // * Preços para upar o tempo de geração e o dinheiro gerado
        this.precoTempoGeracao = 1000
        this.precoDinheiroGerado = 10
        this.precoBanco = 10000

        this.up;
        
    }

    gerar() {
        

    }

    // * Aqui são todos os upgrades
    upgrades(n) {
        this.up = [

            // * Aumentar o dinheiro gerado
            () => {
                if(this.dinheiro >= this.precoDinheiroGerado) {
                    // * Ele retira o valor
                    this.dinheiro -= this.precoDinheiroGerado
        
                    // * Aumenta o dinheiro gerado p/segundo
                    this.dinheiroGerado += 3
        
                    // * E aumenta o preço em 10%
                    this.precoDinheiroGerado += Math.round((this.precoDinheiroGerado * 120) / 100)

                    this.nivelDinheiroGerado++
                }
            },

            // * Diminuir o tempo de geração
            () => {
                if(this.dinheiro >= this.precoTempoGeracao) {
                    // * Ele retira o valor
                    this.dinheiro -= this.precoTempoGeracao
        
                    // * Diminuí o tempo de geração
                    this.tempoGeracao -= 5
        
                    // * E aumenta o preço em 10%
                    this.precoTempoGeracao += Math.round((this.precoTempoGeracao * 40) / 100)

                    this.nivelTempoGeracao
                }
            },

            () => {
                if(this.dinheiro >= this.precoBanco) {
                    this.dinheiro -= this.precoBanco

                    this.precoBanco += Math.round((this.precoBanco * 10) / 100)
                }
            }
        ]

        this.up[n]()
    }

    responsividade() {
        this.largura = this.ctx.canvas.width
    }

    desenhar() {
        if(this.cnt >= this.tempoGeracao) {
            this.ctx.clearRect(0,0,100,100)
            this.dinheiro += this.dinheiroGerado
            this.cnt = 0
        }
        this.ctx.clearRect(0,0,this.largura,200)

        
        this.ctx.font = "30px arial"
        this.ctx.fillStyle = "#000"
        this.ctx.fillText(`${this.dinheiro}$`,this.x,this.y,this.largura)
        this.ctx.fillText(`Tempo De geração: ${this.tempoGeracao/100}S : Lv${this.nivelTempoGeracao}`,this.x ,this.y * 2,this.largura)
        this.ctx.fillText(`Dinheiro Gerado por vez: ${this.dinheiroGerado}$ : Lv${this.nivelDinheiroGerado}`,this.x ,this.y * 3,this.largura)
        
        this.cnt++
    }
}

// Colocar texto no canvas

// Determinar tamanho e fonte
// ctx.font = "(Tamanho da fonte em px) (Fonte)"

// Cor da fonte
// ctx.filLStyle = "#008"

// Escrever em forma de contorno
// ctx.strokeText("Texto a ser escrito",Posição X, Posição Y, Largura máxima)

// Escrever de forma preenchida
// ctx.fillText("Texto a ser escrito",Posição X, Posição Y, Largura máxima)