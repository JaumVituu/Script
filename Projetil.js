class Projetil{
	
	direcao;
	posicaoY;
	posicaoX;
	
	constructor(direcao, posicaoY, posicaoX){
		this.direcao = direcao;
		this.posicaoY = posicaoY;
		this.posicaoX = posicaoX;
	}
	
	Movimentar(){
		// cria o objeto em X e Y, e faz ele ir na direção estipulada de acordo com sua origem.
		// retorna em qual posicao o projetil se direciona
		return posicaoY;
	}
	
	DestruirProjetil(){
		// Se o projetil colidir com algum elemento, ele some.
	}
	
}