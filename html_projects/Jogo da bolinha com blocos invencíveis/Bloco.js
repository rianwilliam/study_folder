const imagemBlocos = document.querySelector("#Sprites")

class Bloco {
    constructor(ctx,bola,posicaoX,posicaoY,cor) {
        this.ctx = ctx
        this.bola = bola
        this.cor = cor

        this.larguraSprite = imagemBlocos.width / 2
        this.alturaSprite = imagemBlocos.height / 4
        this.largura = 60
        this.altura =  this.ctx.canvas.height / 30

        this.vivo = true
        this.invencivel = false
        
        this.posicaoX = posicaoX
        this.posicaoY = posicaoY
        this.tamanhoLinha = this.ctx.canvas.width / 10
        this.tamanhoColuna = this.ctx.canvas.height / 30
        this.x = this.posicaoX * this.tamanhoLinha
        this.y = this.posicaoY * this.tamanhoColuna

        //! 1-Vermelho, 2-Amarelo, 3-Laranja, 4-Cinza, 5-Roxo, 6-Verde, 7-Azul, 8-Ciano
        //* Posições de corte dos blocos
        this.cores = [0,[0,0],[512,0],[0,200],[512,200],[0,400],[512,400],[0,600],[512,600],[0,800],[512,800]]
    }

    //* Destruir bloco
    destruir() {
        this.vivo = false
        this.ctx.clearRect(this.x,this.y,this.largura, this.altura)
        grid.totalBlocos--
        if(grid.totalBlocos == 0) {
            grid.mudarNivel()
            jogador.largura = this.ctx.canvas.width / 7
        }
        if(Math.random()*100 >= 98) {
            upgrades.push(new Upgrades(ctx,jogador,bola,this.x,this.y))
        }
    }

    //* Aumento de pontos
    ganharPontos() {
        if(this.cor != 4) {
            pontos += (5 * this.cor) * multiplicador
            exibirPontos.innerHTML = pontos
        }
    }
    
    //* Desenhar blocos / verificação de colisão com a bola
    desenhar() {
        
        if(this.vivo && this.cor != 0) {
            // * this.largura e altura sprite não mudam
            this.ctx.drawImage(imagemBlocos,this.cores[this.cor][0],this.cores[this.cor][1],this.larguraSprite,this.alturaSprite,this.x,this.y,this.largura,this.altura)

            //* Sombra dos blocos
            ctx.shadowColor = "#e6e6e6"
            ctx.shadowOffsetX = 10
            ctx.shadowOffsetY = 10
            ctx.shadowBlur = 2 
                
            if(this.cor == 4) {
                this.invencivel = true
            }

        } else {
            this.vivo = false
        }

        //? Batida na lateral esquerda Superior
        if(
            (this.vivo) &&
            (this.bola.x + this.bola.largura >= this.x) &&
            (this.bola.x <= this.x + this.largura) &&
            (this.bola.y >= this.y && this.bola.y + this.bola.altura <= this.y + this.altura)) {
                if(!superbola) {
                    this.bola.dirX = -1
                    this.bola.dirY = -1
                }
                if(!this.invencivel) {
                    this.destruir()
                    this.ganharPontos()
                } 
                somToqueBola.play()
        }
        
        //? Batida na lateral direita Superior
        else if(
            (this.vivo) &&
            (this.bola.x <= this.x + this.largura) &&
            (this.bola.y >= this.y && this.bola.y + this.bola.altura <= this.y + this.altura) &&
            (this.bola.x + this.bola.largura >= this.x)) {
                if(!superbola) {
                    this.bola.dirX = 1
                    this.bola.dirY = -1
                }
                if(!this.invencivel) {
                    this.destruir()
                    this.ganharPontos()
                }
                somToqueBola.play()
        }

        //? Batida na lateral esquerda inferior
        else if(
            (this.vivo) &&
            (this.bola.x + this.bola.largura >= this.x) &&
            (this.bola.x <= this.x) &&
            (this.bola.y <= this.y + this.altura) &&
            (this.bola.y + this.bola.altura >= this.y + this.altura) &&
            (this.x + this.largura >= this.bola.x + this.bola.largura)) {
                if(!superbola) {
                    this.bola.dirX = -1
                    this.bola.dirY = 1
                }
                if(!this.invencivel) {
                    this.destruir()
                    this.ganharPontos()
                }
                somToqueBola.play()
            }

        //? Batida na lateral direita inferior
        else if(
            (this.vivo) &&
            (this.bola.x <= this.x + this.largura) &&
            (this.bola.x + this.bola.largura >= this.x + this.largura) &&
            (this.x <= this.bola.x) &&
            (this.bola.y <= this.y + this.altura) &&
            (this.bola.y + this.bola.altura >= this.y + this.altura)) {
                if(!superbola) {
                    this.bola.dirX = 1
                    this.bola.dirY = 1
                }
                if(!this.invencivel) {
                    this.destruir()
                    this.ganharPontos()
                }
                somToqueBola.play()
        }

        //? Batida normal
        else if(
            (this.vivo) &&
            (this.bola.y <= this.y + this.altura) &&
            (this.bola.y + this.bola.altura >= this.y) &&
            (this.bola.x + this.bola.largura >= this.x && this.bola.x <= this.x + this.largura)) {
                if(!superbola) {
                    this.bola.dirY *= -1
                }
                if(!this.invencivel) {
                    this.destruir()
                    this.ganharPontos()
                }
                somToqueBola.play()
        }
    }
}
