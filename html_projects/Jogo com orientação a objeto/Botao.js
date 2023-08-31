class Botao {
    constructor(ctx,carteira,CaminhoImagem,largura,altura,numeroBotao) {
        this.ctx = ctx
        this.CaminhoImagem = CaminhoImagem

        // * Peguei a classe carteira
        this.carteira = carteira
        
        // * Crio a imagem usando o caminho fornecido pelo Usuário
        this.imagem = new Image()
        this.imagem.src = this.CaminhoImagem
        
        // * Pego a altura e largura determinada pelo usuário
        //! Quanto menor o número da largura informada maior o elemento
        this.largura = largura
        this.altura = altura

        // * Aqui pego a largura / altura de todo o canvas e vou dividir pelo número fornecido pelo usuário assim diminuindo o tamanho do elemento e o deixando responsivo
        this.larguraTotal = this.ctx.canvas.width / this.largura
        this.alturaTotal = this.ctx.canvas.height / this.altura

        // * Aqui digo o número do botão, Se ele for o primeiro, vai ser zero, se for o segundo vai ser um e assim por diante
        this.numeroBotao = numeroBotao

        // * Pego as posições do elemento

        // * Pego o número do botão e multiplico pela largura da tela - menos a largura do elemento
        this.x = this.numeroBotao * (this.larguraTotal + 10)

        // * Como os botão ficam em baixo pego a altura da tela e subtraio pela altura do elemento
        this.y = this.ctx.canvas.height - this.alturaTotal

        this.tamanhoFonte = this.larguraTotal / 2

        this.valores = [
            `+Dinheiro por Segundo: ${this.carteira.precoDinheiroGerado}`,
            `-Tempo de Geração: ${this.carteira.precoTempoGeracao}`,
            `Upar Banco: ${this.carteira.precoBanco}`
        ]
    
    }

    click(x,y) {
        // * Aqui peguei a posição X incial do botão e comparei se o click era maior que ela e menor que a posição x final, e também verifiquei se altura do clique era maior que a altura total do elemento
        if(x >= this.x && x <= (this.x + this.larguraTotal + 10) && y >= this.alturaTotal) {
            this.carteira.upgrades(this.numeroBotao)
            this.valores = [
                `+Dinheiro por Segundo: ${this.carteira.precoDinheiroGerado}`,
                `-Tempo de Geração: ${this.carteira.precoTempoGeracao}`,
                `Upar Banco: ${this.carteira.precoBanco}`
            ]
            
        }
    }


    responsividade() {
        // ? Quando o tamanho da tela for alterado ele dispara a função

        // * Aqui ele limpa o elemento de acordo com sua posição X/Y e vai até sua largura e altura total (que é basicamente o tamanho dele) e pega o tamanho da fonte e multiplica por 3 assim é como se tivesse outro elemento do mesmo tamanho acima do botão
        this.ctx.clearRect(this.x,this.y,this.larguraTotal,this.alturaTotal)

        // * Aqui ele calcula a nova altura e nova largura de acordo com o tamanho da tela
        this.larguraTotal = this.ctx.canvas.width / this.largura
        this.alturaTotal = this.ctx.canvas.height / this.altura

        // * E atribuí a altura para que o elemento não entre debaixo da tela
        this.y = this.ctx.canvas.height - this.alturaTotal

        // * E aqui ele mantém os botões com o espaçamento entre si
        this.x = this.numeroBotao * (this.larguraTotal + 10)

        // * Tamanho responsivo da fonte que é a largura do elemento + altura dividido por 2
        this.tamanhoFonte = (this.larguraTotal / this.x) - (this.alturaTotal / 10)
    }

    desenhar() {
        // * Aqui ele limpa o elemento de acordo com sua posição X/Y e vai até sua largura e altura total (que é basicamente o tamanho dele)
        this.ctx.clearRect(this.x,this.y,this.larguraTotal,this.alturaTotal) //! número 100 temporário
        
        // * Aqui ele desenha a imagem. Forneço o nome da variável a posição X/Y Sua altura e sua largura
        this.ctx.drawImage(this.imagem,this.x,this.y,this.larguraTotal,this.alturaTotal)
        
        this.ctx.font = `${this.tamanhoFonte}px poppins`
        this.ctx.fillStyle = "f00"
        this.ctx.fillText(`${this.valores[this.numeroBotao]}$`,(this.x + this.larguraTotal/10),this.ctx.canvas.height - this.alturaTotal / 2,this.larguraTotal/1.3)
        this.ctx.textBaseline = "middle"
    }
}
// ctx.drawImage(Nome da variável,Posição X Inicial, Posição Y inicial, Largura, Altura, Posição X final de recorte, Posição Y final de Recorte, Largura Final de Recorte, Altura final de Recorte))11