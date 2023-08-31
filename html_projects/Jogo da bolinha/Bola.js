const bolinha = document.querySelector("#Bolinha")

class Bola {
    constructor(ctx,jogador) {
        this.ctx = ctx
        this.jogador = jogador

        this.largura = this.jogador.largura / 8
        this.altura = this.jogador.altura

        // this.largura = 9.5
        // this.altura = 9.5
        
        this.posicaoXInicial = (this.ctx.canvas.width / 2) - this.largura
        this.posicaoYInicial = this.jogador.y - this.altura

        this.x = this.posicaoXInicial
        this.y = this.posicaoYInicial
        
        
        this.vel = 1
        this.velAtual = 1
        this.dirX = 0
        this.dirY = 1
        
        this.movendo = false

    }

    resize() {
        if(!this.movendo) {
            this.posicaoXInicial = (this.ctx.canvas.width / 2) - this.largura
            this.posicaoYInicial = this.jogador.y - this.altura
            this.x = this.posicaoXInicial
            this.y = this.posicaoYInicial
        }
        this.largura = this.jogador.largura / 8
        this.altura = this.jogador.altura
    }
    
    //* Começar a mover a bola
    iniciar() {
        if(vidas > 0) {
            this.movendo = true
        }
    }

    //* Movimentação e velocidade da bola / hitbox com o jogador
    mover() {
        this.x += this.dirX * this.vel
        this.y += this.dirY * this.vel
        
        //* Verificações para evitar bugs
        if(this.x < 0 && (this.x + this.largura) / 1.5<= 0) {
            this.x = this.posicaoXInicial
            this.y = this.posicaoYInicial
        }

        if((this.x + this.largura) / 2.5 >= this.ctx.canvas.width && this.x + this.largura >= this.ctx.canvas.width) {
            this.x = this.posicaoXInicial
            this.y = this.posicaoYInicial
        }

        if(this.y <= 0 && (this.y + this.altura) / 2 <= 0) {
            this.x = this.posicaoXInicial
            this.y = this.posicaoYInicial
        }


        //* Colisões com o canvas
        if(this.x <= 0 || this.x + this.largura > this.ctx.canvas.width ) {
            this.dirX *= -1
            somToqueBola.play()
        }
        if(this.y <= 0) {
            this.dirY *= -1
            somToqueBola.play()
        }
        
        //* Eventos caso o jogador perca
        if((this.y + this.altura) >= this.ctx.canvas.height) {
            this.x = this.posicaoXInicial
            this.y = this.posicaoYInicial

            vidas -= 1
            this.vel = 1
            exibirVidas.innerHTML = vidas

            //* Redefinir
            redefinir()

            if(vidas <= 0) {
                gameOverScreen.style.display = "block"
                btnIniciar.style.display = "none"
                somGameOver.play()
                this.movendo = false
                jogador.iniciado = false
            } else  {
                this.movendo = false
                jogador.iniciado = false
                btnIniciar.style.display = "block"
                this.dirX = 0
                this.dirY = 1
                this.jogador.x = (this.ctx.canvas.width - this.jogador.largura) / 2
            }
            somPerderVida.play()
        }

        //* Colisão com o jogador
        //? Toque normal
        if(
            (this.x <= this.jogador.x + this.jogador.largura) && (this.x + this.largura >= this.jogador.x) &&
            ((this.y + this.altura) >= this.jogador.y) && (this.y <= this.ctx.canvas.height - this.jogador.gap) && (this.y <= this.jogador.y + this.jogador.altura)
        ) {
            this.dirY = -1
            this.dirX = (((this.jogador.x + (this.jogador.largura / 2)) - (this.x + this.largura / 2)) / 40) * -1
            this.vel += ctx.canvas.height / 10000
            this.velAtual += ctx.canvas.height / 10000
            somToqueBola.play()
        }
        
    }
    desenhar() {
        this.ctx.drawImage(bolinha,0,0,125,125,this.x,this.y,this.largura,this.altura)
        if(this.movendo) {
            this.mover()
        }
    }
}
