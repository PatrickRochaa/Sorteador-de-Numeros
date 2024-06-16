let botao = document.querySelector("form button");
let paragrafo = document.querySelector(".resultado p");
let section = document.querySelector("section");
let numerosGerados = [];

botao.addEventListener("click", function (event) {
  let numero = document.getElementById("numeros");
  event.preventDefault();
  let tamanho = Number(numero.value);
  section.classList.add("aparecer");
  console.log(tamanho);

  //numero.value = "";
  if (tamanho < 6 || tamanho > 9) {
    alert("Informe um número entre 6 e 9");
    return (paragrafo.innerHTML = "Número Invalido");
  } else {
    gerador(tamanho);
  }
  numerosGerados.length = 0;
});

function gerador(tamanho) {
  while (numerosGerados.length < tamanho) {
    const numerosSorteados = Math.floor(Math.random() * 60 + 1);

    if (!numerosGerados.includes(numerosSorteados)) {
      numerosGerados.push(numerosSorteados);
    }
  }
  //console.log(numerosGerados);
  sorteados(numerosGerados.join(" - "));
  tamanho.value = "";
}

function sorteados(...sorteados) {
  //console.log(`desconstruido ${sorteados}`);
  paragrafo.innerHTML = sorteados;
}
