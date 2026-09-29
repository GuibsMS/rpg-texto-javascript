//Mecânicas do jogo


//Dados do Player
alert ("O céu sobre Stramstahr ainda arde com o eco escarlate do Raio Vermelho. Em meio às cinzas e florestas retalhadas, uma figura solitária respira fundo antes da tempestade.")
let nomeJogador = prompt ("Qual o nome do seu aventureiro?");
let vidaJogador = 100;
let manaJogador = 100;
let pocoesCura = 3;
let pocoesMana = 5;

function acoesCombate() {
    escolha = prompt("Vida de " + nomeJogador + ": " + vidaJogador + "\nMana: " + manaJogador + "\n\nVida de " + nomeInimigo + ": " + vidaInimigo + "\n\n1 - Ataque com espada. \n2 - Magias. \n3 - Inventário.");

    switch (escolha) {
        case "1":
            ataqueEspada();
            break;
        case "2":
            slotMagias();
            break;
        case "3":
            abrirInventario();
            break;
        default:
            alert("Ação invalida!\nDigite um número entre as opções disponíveis.");
            acoesCombate();
            break;
    }
}    
function ataqueEspada() {
    const danoEspada = Math.floor(Math.random() * 11);
    vidaInimigo -= danoEspada
    alert ("Você causou " + danoEspada + " de dano ao " + nomeInimigo);
}
function slotMagias() {
    escolha = prompt("Mana: " + manaJogador + "\n\n1 - Bola de fogo. \n2 - Cristais de gelo. \n3 - Raio eletrizante. \n4 - Voltar.");
    switch (escolha) {
        case "1":
            magiaFogo();
            break;
        case "2":
            magiaGelo();
            break;
        case "3":
            magiaEletrica();
            break;
        case "4":
            break;
    }
}
function magiaFogo () {
    if (manaJogador >= 15){
    const danoFogo = Math.floor(Math.random() * 16);
    vidaInimigo -= danoFogo;
    manaJogador -= 15;
    alert ("Você causou " + danoFogo + " de dano ao " + nomeInimigo);
    } else {
        alert("Você não tem mana suficiente para lançar essa magia!");
    }
}
function magiaGelo () {
    if (manaJogador >= 20) {
    const danoGelo = Math.floor(Math.random() * 20);
    vidaInimigo -= danoGelo;
    manaJogador -= 20;
    alert ("Você causou " + danoGelo + " de dano ao " + nomeInimigo);
    } else {
    alert("Você não tem mana suficiente para lançar essa magia!");
    }
}
function magiaEletrica () {
    if (manaJogador >= 40) {
    const danoEletrico = Math.floor(Math.random() * 30);
    vidaInimigo -= danoEletrico;
    manaJogador -= 40;
    alert ("Você causou " + danoEletrico + " de dano ao " + nomeInimigo);
    } else {
        alert("Você não tem mana suficiente para lançar essa magia!");
    }
}
function abrirInventario () {
    escolha = prompt("1 - Poções de cura: " + pocoesCura + "\n2 - Poções de Mana: " + pocoesMana + "\n3 - Voltar.");
    switch (escolha){
        case "1":
            usarPocaoCura();
            break;
        case "2":
            usarPocaoMana();
            break;
        case "3":
            acoesCombate();
            break;
    }
}
function usarPocaoCura () {
    if (pocoesCura > 0) {
    vidaJogador += 20;
    pocoesCura -= 1;
    } else {
        alert("Você não tem poções de cura no momento!")
    }
}
function usarPocaoMana () {
    if (pocoesMana > 0){
    manaJogador += 40;
    pocoesMana -= 1;
    } else {
        alert("Você não tem poções de mana no momento!")
    }
}

function turnoInimigo () {
    const danoAtaqueInimigo = Math.floor(Math.random() * 21);

    if (vidaInimigo > 0) {
    vidaJogador -= danoAtaqueInimigo;
    alert (nomeInimigo + " causou " + danoAtaqueInimigo + " de dano!");
    }
}

function verificarResultadoCombate () {
    if (vidaInimigo <= 0) {
        alert("Vitória!\n\nVida restante: " + vidaJogador);
    } else if (vidaJogador <= 0) {
        alert("O " + nomeInimigo + " derrotou você!\n\nGAME OVER.")
    }
}

//Dados dos Inimigos
let nomeInimigo = "";
let vidaInimigo = 0;

// Andamento da campanha
alert (nomeJogador + ", " + "você carrega na cintura o fragmento de um cristal primordial de Khazrûn. Os anões juram que esta pedra pode conter as chamas da Ilha de Asmodeus, mas seu acampamento acaba de ser cercado por batedores Draconatos!");
let escolha = prompt("Um Draconato de escamas carmesim surge entre as árvores caídas empunhando uma lâmina pesada. Ele ruge, emanando calor vulcânico.\n\nEscolha sua ação:\n1 - Esconder-se \n2 - Empunhar sua arma e avançar no guerreiro.");

switch (escolha) {
    case "1":
        alert ("Você se esconde rapidamente dentro de ruinas nas proximidades.");
        break;

    case "2":
        alert("Combate iniciado!");
        nomeInimigo = "Draconato";
        vidaInimigo = 50;

        while (vidaInimigo > 0 && vidaJogador > 0){
        acoesCombate();
        turnoInimigo();
    }
    verificarResultadoCombate();
}

if (escolha === "1") {
    alert("Você espera o Draconato ir embora e depois foge para a densa mata da floresta.");
}

alert("O jogador chega à margem do grande lago interior, de onde é possível avistar ao longe o brilho incandescente da Ilha de Asmodeus. Para cruzar em direção ao coração da resistência, surgem duas rotas possíveis:")
escolha = prompt("À sua frente, as águas revoltas refletem a fumaça de Asmodeus. Para continuar até o conselho de guerra, você tem dois caminhos:\n\n1 - Seguir para o sul, buscando refúgio nas fortalezas subterrâneas de Dwargnum.\n2 - Seguir pela costa leste, buscando a proteção das barreiras de Ylvylahr com os Elfos das Fronteiras.");

switch (escolha) {
    case "1":
        alert("O jogador desce para as cavernas de pedra esculpida dos anões. Recebe reforço de armadura ou uma arma forjada nas profundezas de Khazrûn, mas precisa provar sua lealdade aos desconfiados Vigias das Sombras.");
        break;
    case "2":
        alert("O jogador encontra Sylvara ou seus seguidores. Eles ensinam a manipular o fluxo arcano e revelam segredos sobre como a magia do Grande Clarão se corrompeu com a chegada dos dragões.")
        break;
}