class Inimigo{
	
	const pontosConcedidos;
	posicaoY;
	posicaoX
	velocidade;
	colidiu;
	
	constructor(pontosConcedidos,posicaoy,posicaoX,velocidade,colidiu){
		this.pontosConcedidos = pontosConcedidos;
		this.posicaoY = posicaoY;
		this.posicaoX = posicaoX;
		this.velocidade = velocidade;
		this.colidiu = colidiu;
	}
	
	VerificarColisao(){
		//verifica a colisao do inimigo
		return colidiu;
	}
	
	IrParaLado(){
		//movimenta o inimigo para o lado
		//se o inimigo colide, ele muda de direção.
		//retorna a atual posição do inimigo
		return posicaoX;
	}
	
	Atirar(){
		//cria projetil
	}
	
	CalculaVelocidade(){
		//toda vez que colidiu  for true, a velocidade aumenta
		return velocidade;
	}
	
	IrParaBaixo(){
		//quando colide na parede, desce para baixo uma vez
		return posicaoY
	}
	
	Morrer(){
		//destroi o inimigo
	}
		
}