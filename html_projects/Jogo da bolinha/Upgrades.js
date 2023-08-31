let superbola = false
let imagemUpgrade = document.querySelector("#teste")

class Upgrades {
    constructor(ctx,jogador,bola,x,y) {
        this.ctx = ctx
        this.jogador = jogador
        this.bola = bola

        this.x = x
        this.y = y
        this.largura = (ctx.canvas.width / 10) / 2
        this.altura = (ctx.canvas.height / 29) / 2

        this.dirY = 1
        this.vel = 1

        this.vivo = true

        this.cnt = 0

        this.ativo = false
    }

    textoUpgrade(texto) {
        upgradeText.innerHTML = texto
        upgradeText.classList.add("ativo")

        setTimeout(() => {upgradeText.classList.remove("ativo")}, 1200)
    }

    powerUp(n) {
        //* Multiplicador
        if (n >= 0 && n <= 45) {
            multiplicador = 2
            this.textoUpgrade("Multiplicador (10s)")
            setTimeout(() => {multiplicador = 1}, 10000); //* 10 Segundos
        }
        //* Aumentar de Tamanho
        else if(n > 45 && n <= 65) {
            this.jogador.largura += (ctx.canvas.height / 30)
            this.textoUpgrade("Barra Maior")
            somAumentarTamanho.play()
        }
        //* Jogador mais rápido
        else if(n > 65 && n <= 80) {
            this.jogador.vel = ctx.canvas.width / 90
            this.textoUpgrade("+Velocidade (15s)")
            setTimeout(() => {this.jogador.vel = ctx.canvas.width / 150},15000) //* 15 Segundos
        }
        //* Superbola
        else if(n > 80 && n <= 95) {
            superbola = true
            this.textoUpgrade("Superbola (10s)")
            setTimeout(() => {superbola = false},10000) //* Segundos
        }
        //* Vida Extra
        else  {
            vidas += 1
            exibirVidas.innerHTML = vidas
            this.textoUpgrade("Vida Extra (+1)")
            somVidaExtra.play()
        }

    }

    //* Verificar colisão do upgrade com o jogador
    pegarUpgrade() {
        if(
            (this.vivo) &&
            (this.y + this.altura >= this.jogador.y) &&
            (this.y <= this.ctx.canvas.height - this.jogador.gap) &&
            (this.x + this.largura >= this.jogador.x) &&
            (this.x <= this.jogador.x + this.jogador.largura)) {
            upgrades.shift()
            this.ctx.clearRect(this.x,this.y,this.largura,this.altura)
            this.vivo = false
            //? Executar aqui dentro a função this.powerUp passando como parâmetro um número aleátorio
            this.powerUp(Math.random()*100)
        }
    }

    desenhar() {
        if(this.vivo && this.y <= this.ctx.canvas.height) {
            this.ctx.drawImage(imagemUpgrade,0,0,256,64,this.x,this.y,this.largura,this.altura)
            this.y += this.dirY * this.vel
            this.pegarUpgrade()
        }
    }
}
