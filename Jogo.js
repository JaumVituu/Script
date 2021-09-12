class Jogo{
	
	pontos;
	jogando;
	const tamanhoX;
	const tamanhoY;
	inimigosVivos;
	
	constructor(pontos, jogando, tamanhoX, tamanhoY, inimigosVivos){
		this.pontos = pontos;
		this.jogando = jogando;
		this.tamanhoX = tamanhoX;
		this.tamanhoY = tamanhoY;
		this.inimigosVivos = inimigosVivos;
	}
	
	Calcular(){
		//toda vez que um inimigo for morto, aumenta os pontos
		return pontos;
	}
	
	IniciarJogo(){
		//transforma a varíavel 'jogando' para 'true' e anima os elementos na tela;
		return jogando;
	}
	
	FinalizarJogo(){
		//muda 'jogando' para 'false'
		return jogando;
	}
	
	Desenha(){
		//cria os objetos das classes: "Jogador", "Escudo" e "Inimigo"
	}
	
	Redefine(){
		// apaga todos os objetos da tela e zera as variáveis
	}
	
	RecriarInimigos(){
		//verifica quantos inimigos vivos existem.
		//se não houver nenhum, ele recria todos.
		//retorna a variavel para o valor original
		return inimigosVivos;
	}
}