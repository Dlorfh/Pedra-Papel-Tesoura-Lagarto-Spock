let maquina = document.getElementById("imgMaquina");//Variavel para mudar a imagem escolhida pela maquina
let usuario = document.getElementById("usuario");//Variavel usada para mudar imagem escolhida pelo usuario
let escolhaJogador;//Variavel usada para armazenar a escolha do jogador
let num;//Variavel usada no futuro para gerar um numero aleatorio de 1 a 5

//Adicionam um ouvinte de eventos a esses ids abaixo e chamam o mudaFoto()
document.getElementById("pedra").addEventListener("click", mudaFoto);
document.getElementById("papel").addEventListener("click", mudaFoto);
document.getElementById("tesoura").addEventListener("click", mudaFoto);
document.getElementById("lagarto").addEventListener("click", mudaFoto);
document.getElementById("spock").addEventListener("click", mudaFoto);
//Adiciona um ouvinte de evento ao id abaixo e chamam o comparar()
document.getElementById("maquina").addEventListener("click", function(){
    setTimeout(comparar, 600);//Tempo em milissegundos que a função vai demorar para funcionar
});

//Função para mudar a foto das escolhas do usuario 
function mudaFoto(event){//Event para poder comparar os id com string
    escolhaJogador = event.target.id;//Pega o id do que chamou 

    if (escolhaJogador === "pedra"){//Confere se a escolha é igual ao id pedra
        usuario.src = "../img/pedra.jpg";//Muda a imagem para pedra.jpg
    }else if (escolhaJogador === "papel"){//Confere se a escolha é igual ao id papel
        usuario.src = "../img/papel.jpg";//Muda a imagem para papel.jpg
    }else if (escolhaJogador === "tesoura"){//Confere se a escolha é igual ao id tesoura
        usuario.src = "../img/tesoura.jpg";//Muda a imagem para tesoura.jpg
    }else if (escolhaJogador === "lagarto"){//Confere se a escolha é igual ao id lagarto
        usuario.src = "../img/lagarto.jpg";//Muda a imagem para lagarto.jpg
    }else if (escolhaJogador === "spock"){//Confere se a escolha é igual ao ifd spock 
        usuario.src = "../img/spock.jpg";//Muda a imagem para spock.jpg
    }
    computador()//Chama a função computador()
}

//Função que vai ser usada para comparar a escolha do jogador e maquina para determinar quem venceu
function comparar() {
    switch(num) {
        case 1:// Máquina escolheu Pedra
            if (escolhaJogador === "tesoura") {
                window.alert("Você perdeu!\nPedra amassa Tesoura.");
            } else if (escolhaJogador === "pedra") {
                window.alert("Empate!\nPedra empata com Pedra.");
            } else if (escolhaJogador === "papel") {
                window.alert("Você venceu!\nPapel cobre Pedra.");
            } else if (escolhaJogador === "lagarto") {
                window.alert("Você perdeu!\nPedra esmaga Lagarto.");
            } else if (escolhaJogador === "spock") {
                window.alert("Você venceu!\nSpock vaporiza Pedra.");
            }
        break;//Para as açôes do 1
        case 2:// Máquina escolheu Papel
            if (escolhaJogador === "tesoura") {
                window.alert("Você venceu!\nTesoura corta Papel.");
            } else if (escolhaJogador === "pedra") {
                window.alert("Você perdeu!\nPapel cobre Pedra.");
            } else if (escolhaJogador === "papel") {
                window.alert("Empate!\nPapel empata com Papel.");
            } else if (escolhaJogador === "lagarto") {
                window.alert("Você venceu!\nLagarto come Papel.");
            } else if (escolhaJogador === "spock") {
                window.alert("Você perdeu!\nPapel refuta Spock.");
            }
        break;//Para as açôes do 2
        case 3:// Máquina escolheu Tesoura
            if (escolhaJogador === "tesoura") {
                window.alert("Empate!\nTesoura empata com Tesoura.");
            } else if (escolhaJogador === "pedra") {
                window.alert("Você venceu!\nPedra amassa Tesoura.");
            } else if (escolhaJogador === "papel") {
                window.alert("Você perdeu!\nTesoura corta Papel.");
            } else if (escolhaJogador === "lagarto") {
                window.alert("Você perdeu!\nTesoura decapita Lagarto.");
            } else if (escolhaJogador === "spock") {
                window.alert("Você venceu!\nSpock quebra Tesoura.");
            }
        break;//Para as ações do 3
        case 4:// Máquina escolheu Lagarto
            if (escolhaJogador === "tesoura") {
                window.alert("Você venceu!\nTesoura decapita Lagarto.");
            } else if (escolhaJogador === "pedra") {
                window.alert("Você venceu!\nPedra esmaga Lagarto.");
            } else if (escolhaJogador === "papel") {
                window.alert("Você perdeu!\nLagarto come Papel.");
            } else if (escolhaJogador === "lagarto") {
                window.alert("Empate!\nLagarto empata com Lagarto.");
            } else if (escolhaJogador === "spock") {
                window.alert("Você perdeu!\nLagarto envenena Spock.");
            }
        break;//Para as ações do 4
        case 5:// Máquina escolheu Spock
            if (escolhaJogador === "tesoura") {
                window.alert("Você perdeu!\nSpock quebra Tesoura.");
            } else if (escolhaJogador === "pedra") {
                window.alert("Você perdeu!\nSpock vaporiza Pedra.");
            } else if (escolhaJogador === "papel") {
                window.alert("Você venceu!\nPapel refuta Spock.");
            } else if (escolhaJogador === "lagarto") {
                window.alert("Você venceu!\nLagarto envenena Spock.");
            } else if (escolhaJogador === "spock") {
                window.alert("Empate!\nSpock empata com Spock.");
            }
        break;//Para as ações do 5
        default://Caso tiver algum erro e não for identificado
            window.alert("Erro ao identificar jogada.");
    }
}

//Função que faz a escolha do computador
function computador(){
    num = Math.floor(Math.random() * 5) + 1;//Gera um numero aleatorio de 1 a 5

    if(num === 1){//Verifica se o num é igual a 1
        maquina.src = "../img/pedra.jpg";
    }else if(num === 2){//Verifica se o num é igual a 2
        maquina.src = "../img/papel.jpg";
    }else if(num === 3){//Verifica se o num é igual a 3
        maquina.src = "../img/tesoura.jpg";
    }else if(num === 4){//Verifica se o num é igual a 4
        maquina.src = "../img/lagarto.jpg";
    }else if(num === 5){//Verifica se o num é igual a 5
        maquina.src = "../img/spock.jpg";
    }
}