class Jogador {
    constructor(ctx,teclas) {
        this.ctx = ctx;
        this.teclas = teclas
        
        // this.largura = this.ctx.canvas.width / 7
        // this.altura = 12

        this.gap = ctx.canvas.height / 20
        
        this.largura = ctx.canvas.width / 7
        this.altura = ctx.canvas.height / 90
        
        
        this.x = (this.ctx.canvas.width - this.largura) / 2;
        this.y = (this.ctx.canvas.height - this.gap) - this.altura
        this.vel = ctx.canvas.width / 150
        // this.vel = 3
        
        
        this.iniciado = false
    }
    
    resize() {
        this.vel = ctx.canvas.width / 150
        this.gap = ctx.canvas.height / 20
        this.largura = ctx.canvas.width / 7
        this.altura = ctx.canvas.height / 90
        this.x = (this.ctx.canvas.width - this.largura) / 2;
        this.y = (this.ctx.canvas.height - this.gap) - this.altura
    }

    iniciar() {
        this.iniciado = true
    }

    mover() {
        if(this.x >= 0) {
            if(this.teclas.esquerda && this.iniciado) {
                this.x -= this.vel
            }
        }
        if((this.x + this.largura) <= this.ctx.canvas.width && this.iniciado) {
            if(this.teclas.direita) {
                this.x += this.vel
            }
        }
    }
    
    desenhar() {
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura);
        this.ctx.beginPath()
        this.mover()
    }
}