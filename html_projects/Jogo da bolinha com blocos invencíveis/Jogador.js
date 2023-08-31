class Jogador {
    constructor(ctx,teclas) {
        this.ctx = ctx;
        this.teclas = teclas
        
        this.largura = this.ctx.canvas.width / 7
        this.altura = 12
        
        this.x = (this.ctx.canvas.width - this.largura) / 2;
        this.y = (this.ctx.canvas.height - 30) - this.altura

        this.vel = 3
    }

    mover() {
        if(this.x >= 0) {
            if(this.teclas.esquerda) {
                this.x -= this.vel
            }
        }
        if((this.x + this.largura) <= this.ctx.canvas.width) {
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