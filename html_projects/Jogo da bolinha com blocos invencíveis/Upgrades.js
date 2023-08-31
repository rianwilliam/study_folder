let superbola = false
class Upgrades {
    constructor(ctx,jogador,bola,x,y) {
        this.ctx = ctx
        this.jogador = jogador
        this.bola = bola

        this.x = x
        this.y = y
        this.largura = 30
        this.altura = 20

        this.dirY = 1
        this.vel = 1

        this.vivo = true

        this.cnt = 0
        
        this.ativo = false
    }

    textoUpgrade(texto) {
        upgradeText.innerHTML = texto
        upgradeText.classList.add("ativo")

        setTimeout(() => {
            upgradeText.classList.remove("ativo")
        }, 1200)
    }

    powerUp(n) {
        //* Multiplicador
        if (n >= 0 && n <= 30) {
            multiplicador = 2
            setTimeout(() => {
                multiplicador = 1
            }, 10000); //* 10 segundos
            this.textoUpgrade("Multiplicador (10s)")
        }
        //* Aumentar de Tamanho
        else if(n > 30 && n <= 40) {
            this.jogador.largura += 20
            divisorVelocidade = 50
            somAumentarTamanho.play()
            this.textoUpgrade("Barra Maior")
        }
        //* Jogador mais rápido
        else if(n > 40 && n <= 60) {
            this.jogador.vel = 5.5
            setTimeout(() => {
                this.jogador.vel = 3.5
            },15000)
            this.textoUpgrade("+Velocidade (15s)")
        }
        //* Vida Extra
        else if (n > 60 && n <= 70) {
            vidas += 1
            exibirVidas.innerHTML = vidas
            somVidaExtra.play()
            this.textoUpgrade("Vida Extra (+1)")
        }
        //* Superbola
        else if(n > 70 && n <= 85) {
            superbola = true
            setTimeout(() => {
                superbola = false
            },10000)
            this.textoUpgrade("Superbola (10s)")
        }
        //* Tiro
        else {
            //* Fazer futuramente
            this.textoUpgrade("teste")
        }
    }

    //* Verificar colisão do upgrade com o jogador
    pegarUpgrade() {
        if(
            (this.vivo) &&
            (this.y + this.altura >= this.jogador.y) &&
            (this.y <= this.ctx.canvas.height - 30) &&
            (this.x >= this.jogador.x) &&
            (this.x + this.largura <= this.jogador.x + this.jogador.largura)) {
            upgrades.shift()
            this.ctx.clearRect(this.x,this.y,this.largura,this.altura)
            this.vivo = false
            //? Executar aqui dentro a função this.powerUp passando como parâmetro um número aleátorio
            this.powerUp(Math.random()*100)
        }
    }

    desenhar() {
        if(this.vivo && this.y <= this.ctx.canvas.height) {
            this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
            this.y += this.dirY * this.vel
            this.pegarUpgrade()
        }
        else {
            upgrades.shift()
            this.ctx.clearRect(this.x,this.y,this.largura,this.altura)
            this.vivo = false
        }
    }
}

const redefinirUpgrades = () => {
    upgrades = []
    jogador.largura = ctx.canvas.width / 7
    divisorVelocidade = 40
    superbola = false
    multiplicador = 1
}