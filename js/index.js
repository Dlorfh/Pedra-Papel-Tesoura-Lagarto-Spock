let faz = document.getElementById("regra");//Armazena o id regra na variavel faz

//Constante que armazena o texto que aparece quando o mouse é retirado de cima das imagens
const txtOriginal = "Passe o mouse por cima das imagens para ver o que cada uma faz";  
//Objeto que armazena os textos que aparecem quando o mouse passa por cima da imagem, organizados por id
const regrasTexto = {
    pedra: "Pedra amassa a tesoura e esmaga o lagarto",
    papel: "Papel cobre a pedra e refuta o Spock",
    tesoura: "Tesoura corta o papel e decapita o lagarto",
    lagarto: "Lagarto envenena o Spock e come o papel",
    spock: "Spock quebra a tesoura e vaporiza a pedra"
}

//Função que faz o texto mudar
function regras(event){
    let id = event.target.id;//Converte os id para uma variavel
    faz.textContent = regrasTexto[id];//Muda o conteudo do texto dependendo da imagem que chamar essa função
}
//Função que faz o texto voltar ao original
function voltar(){
    faz.textContent = txtOriginal;
}

//Armazena os id das imagens em variaveis e adiciona eventos chamando as funçôes acima
let pedra = document.getElementById("pedra");
pedra.addEventListener("mouseover", regras);
pedra.addEventListener("mouseout", voltar);

let papel = document.getElementById("papel");
papel.addEventListener("mouseover", regras);
papel.addEventListener("mouseout", voltar);

let tesoura = document.getElementById("tesoura");
tesoura.addEventListener("mouseover", regras);
tesoura.addEventListener("mouseout", voltar);

let lagarto = document.getElementById("lagarto");
lagarto.addEventListener("mouseover", regras);
lagarto.addEventListener("mouseout", voltar);

let spock = document.getElementById("spock");
spock.addEventListener("mouseover", regras);
spock.addEventListener("mouseout", voltar);