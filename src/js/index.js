

const botoes = document.querySelectorAll(".botao");
const regioes = document.querySelectorAll(".regiao");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarRegiao();

		botao.classList.add("selecionado");
		regioes[indice].classList.add("selecionado");
	});
});

function desselecionarRegiao() {
	const regiaoSelecionado = document.querySelector(".regiao.selecionado");
	regiaoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
