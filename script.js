function iniciarJogo(){
    document.getElementById("trilhaSonora").volume = 0.5;
    document.getElementById("trilhaSonora").play();
    document.getElementById("playButton").style.display = "none";
    setTimeout(avancarHistoria, 500);
}
function avancarHistoria() {
alert ("O céu sobre Stramstahr ainda arde com o eco escarlate do Raio Vermelho. Em meio às cinzas e florestas retalhadas, uma figura solitária respira fundo antes da tempestade.");
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
    let danoEspada = Math.floor(Math.random() * 11) + 5;
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
            acoesCombate();
            break;
    }
}
function magiaFogo () {
    if (manaJogador >= 15){
    let danoFogo = Math.floor(Math.random() * 16) + 3;
    vidaInimigo -= danoFogo;
    manaJogador -= 15;
    alert ("Você causou " + danoFogo + " de dano ao " + nomeInimigo);
    } else {
        alert("Você não tem mana suficiente para lançar essa magia!");
    }
}
function magiaGelo () {
    if (manaJogador >= 20) {
    let danoGelo = Math.floor(Math.random() * 20) + 5;
    vidaInimigo -= danoGelo;
    manaJogador -= 20;
    alert ("Você causou " + danoGelo + " de dano ao " + nomeInimigo);
    } else {
    alert("Você não tem mana suficiente para lançar essa magia!");
    }
}
function magiaEletrica () {
    if (manaJogador >= 40) {
    let danoEletrico = Math.floor(Math.random() * 30) + 10;
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
    let danoAtaqueInimigo = Math.floor(Math.random() * 21);

    if (vidaInimigo > 0) {
    vidaJogador -= danoAtaqueInimigo;
    alert (nomeInimigo + " causou " + danoAtaqueInimigo + " de dano!");
    }
}

function verificarResultadoCombate () {
    if (vidaInimigo <= 0) {
        alert("Vitória!\n\nVida restante: " + vidaJogador);
    } else if (vidaJogador <= 0) {
        alert("O " + nomeInimigo + " derrotou você!\n\nGAME OVER.");
        alert("Pressione 'OK' para recomeçar!");
        iniciarJogo();
    }
}

//Dados dos Inimigos
let nomeInimigo = "";
let vidaInimigo = 0;

//Capítulos da Campanha
function batalhaDraconato() {
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
}

function cenaLago(){
    escolha = prompt("À sua frente, as águas revoltas refletem a fumaça de Asmodeus. Para continuar até o conselho de guerra, você tem dois caminhos:\n\n1 - Seguir para o sul, buscando refúgio nas fortalezas subterrâneas de Dwargnum.\n2 - Seguir pela costa leste, buscando a proteção das barreiras de Ylvylahr com os Elfos das Fronteiras.");

switch (escolha) {
    case "1":
        alert("Você desce para as cavernas de pedra esculpida dos anões. Recebe reforço de armadura ou uma arma forjada nas profundezas de Khazrûn, mas precisa provar sua lealdade aos desconfiados Vigias das Sombras.");
        alert("Eles tratam seus ferimentos e te presenteiam com uma armadura de ferro-frio e uma espada de ferro glacial. Além disso eles também te entregam algumas poções de mana.");
        vidaJogador = 150;
        danoEspada = Math.floor(Math.random() * 51) + 20;
        pocoesMana += 5;
        alert("Armadura equipada! (Vida de " + nomeJogador + " subiu para 150!)");
        alert("Espada equipada! (Dano de espada melhorado!)");
        alert("Recebeu 5 poções de mana!\nPoções de mana no inventário: " + pocoesMana);
        break;
    case "2":
        alert("Você encontra Sylvara ou seus seguidores. Eles ensinam a manipular o fluxo arcano e revelam segredos sobre como a magia do Grande Clarão se corrompeu com a chegada dos dragões.");
        alert("Eles restauram sua mana, curam seus ferimentos e melhoram sua capacidade de magia. Além disso, eles te presenteiam com algumas poções de cura.");
        danoFogo = Math.floor(Math.random() * 30) + 15;
        danoGelo = Math.floor(Math.random() * 41) + 20;
        danoEletrico = Math.floor(Math.random() * 61) + 30;
        vidaJogador = 100;
        manaJogador = 200;
        pocoesCura += 5;
        alert("Reserva de mana de " + nomeJogador + " subiu para 200!");
        alert("Todas as suas magias foram melhoradas e agoram dão mais dano!");
        alert("Recebeu 5 poções de cura!\nPoções de cura no inventário: " + pocoesCura);
        break;
}
}

function batalhaKragan(){
    alert("Combate iniciado!");
    nomeInimigo = "Kragan, o Devorador de Brasas";
    vidaInimigo = 150;

    while (vidaInimigo > 0 && vidaJogador > 0){
        acoesCombate();
        turnoInimigo();
    }
    if(vidaInimigo <= 0) {
        alert("O cristal absorve o poder ígneo de Kragan. O caminho até o conselho de guerra das raças unidas é aberto, e " + nomeJogador + " é aclamado como o portador da centelha capaz de desafiar Asmodeus!");
        alert("Fim!\nObrigado por jogar!");
    } else if(vidaJogador <= 0) {
        alert("O cristal é tomado, e o avanço de Drakmor consome o que restava de Stramstahr.");
        alert("GAME OVER!");
        alert("Pressione 'OK' para recomeçar!");
        iniciarJogo();
    }
}

// Andamento da campanha
alert(nomeJogador + ", você carrega na cintura o fragmento de um cristal primordial de Khazrûn. Os anões juram que esta pedra pode conter as chamas da Ilha de Asmodeus, mas seu acampamento acaba de ser cercado por batedores Draconatos!");
batalhaDraconato();

alert("Você chega à margem do grande lago interior, de onde é possível avistar ao longe o brilho incandescente da Ilha de Asmodeus. Para cruzar em direção ao coração da resistência, surgem duas rotas possíveis:");
cenaLago();

alert("Derrepente um general Draconato de elite embosca você para recuperar o cristal de Khazrûn antes que a resistência possa usá-lo.");
batalhaKragan();
}