class Jogador{
	p;
	vidas;
	const controles; 
	
	constructor(vidas,posicao,controles){
		this.vidas = vidas;
		this.posicao = p;
		this.controles = controles;
	}
	
	Movimentar(){
		// Vai somar ou subtrair o valor de p sobre outros valores, estes que serão calculados quando o
		// jogador fazer uso do atributo "controles", e então, retorna
		return p;
	}
	
	Atirar(){
		// Vai criar um objeto da classe "Projetil", 
		// onde sua posição x e y vão ser as mesmas do jogador, e a direção vai ser para cima.
	}
	
	PerderVida(){
		// Se o jogador receber um projetil inimigo, ele perde uma vida.
		// Ou seja, ao colidir co um projetil inimigo, vidas -= 1
		return vidas;
	}
	
	VerificaColisao(){
		//verifica se o personagem colide com a parede. 
		//se colidir, o impede de ir para a direção da colisão.
	}
}