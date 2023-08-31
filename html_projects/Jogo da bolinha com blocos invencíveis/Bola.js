const bolinha = document.querySelector("#Bolinha")

//* Serve para determinar a velocidade da bola ao toque com o jogador, quanto maior o número menor a velocidade
let divisorVelocidade = 40

class Bola {
    constructor(ctx,jogador) {
        this.ctx = ctx
        this.jogador = jogador
        
        this.largura = 8
        this.altura = 8
        
        this.meioX = (this.ctx.canvas.width / 2) - this.largura
        this.meioY = (this.ctx.canvas.height / 2) - this.altura

        this.x = this.meioX
        this.y = this.meioY
        
        this.vel = 1
        this.dirX = 0
        this.dirY = 1
        
        this.movendo = false
    }
    
    //* Começar a mover a bola
    iniciar() {
        this.movendo = true
    }

    //* Movimentação e velocidade da bola / hitbox com o jogador
    mover() {
        this.x += this.dirX * this.vel
        this.y += this.dirY * this.vel
        
        //* Verificações para evitar bugs
        if(this.x < 0 && (this.x + this.largura) / 2 <= 0) {
            this.x = this.meioX
            this.y = this.meioY
        }

        if((this.x + this.largura) / 2 >= this.ctx.canvas.width && this.x + this.largura >= this.ctx.canvas.width) {
            this.x = this.meioX
            this.y = this.meioY
        }

        if(this.y <= 0 && (this.y + this.altura) / 2 <= 0) {
            this.x = this.meioX
            this.y = this.meioY
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
            this.x = this.meioX
            this.y = this.meioY

            vidas -= 1
            exibirVidas.innerHTML = vidas

            //* Redefinir upgrades
            redefinirUpgrades()

            if(vidas == 0) {
                gameOverScreen.style.display = "block"
                somGameOver.play()
                
            } else {
                this.movendo = false
                btnIniciar.style.display = "block"
                this.dirX = 0
                this.dirY = 1
                this.jogador.x = (this.ctx.canvas.width - this.jogador.largura) / 2
            }
        }

        //* Colisão com o jogador
        //? Toque normal
        if(
            (this.x <= this.jogador.x + this.jogador.largura) && (this.x + this.largura >= this.jogador.x) &&
            ((this.y + this.altura) >= this.jogador.y) && (this.y <= this.ctx.canvas.height - 30) && (this.y <= this.jogador.y + this.jogador.altura)
        ) {
            this.dirY = -1
            this.dirX = (((this.jogador.x + (this.jogador.largura / 2)) - (this.x + this.largura / 2)) / 40) * -1
            this.vel += 0.10
            somToqueBola.play()
            console.log(this.vel)
        }
        
    }
    desenhar() {
        this.ctx.fillRect(this.x,this.y,this.altura,this.largura)
        if(this.movendo) {
            this.mover()
        }
    }
}
