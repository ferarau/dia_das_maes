const listaFrases = [
    "Andando de ônibus com a mamãe",
    "Foto no espelho com a mamis",
    "Eu e mamãe no casamento do tio Bruno",
    "Mamãe e irmão no ponto de ônibus",
    "Eu e a mami passeando juntas",
    "Mãe e eu em casa",
    "No shopping com a Fran e a mamis",
    "Eu e a mãe no cha do Fe",
    "Piscina com a irmã e a mãe",
    "Curtindo uma festa com a mamãe",
    "Meu primeiro aniversário com a mamãe",
    "Fran, eu e Mãe",
    "Curtindo uma praia com a mamis",
    "Primeira corrida com a mami",
    "Selfie com a mamis",
    "Sofá em família",
    "Prainha com o meu amor",
    "Sítio da bisa com a mamãe",
    "Pesqueiro com ela",
    "Mãe linda e maravilhosa",

];

const listaImagens = [
    "fotos/foto1.jpeg", "fotos/foto2.jpeg", "fotos/foto3.jpeg", "fotos/foto4.jpeg",
    "fotos/foto5.jpeg", "fotos/foto7.jpeg", "fotos/foto8.jpeg",
    "fotos/foto9.jpeg", "fotos/foto21.jpeg", "fotos/foto12.jpeg", "fotos/foto13.jpeg",
    "fotos/foto14.jpeg", "fotos/foto15.jpeg", "fotos/foto16.jpeg", "fotos/foto17.jpeg",
    "fotos/foto18.jpeg", "fotos/foto19.jpeg", "fotos/foto20.jpeg", "fotos/foto10.jpeg",
    "fotos/foto22.jpeg", "fotos/foto23.jpeg"
];

const fraseElemento = document.getElementById('frase');
const imagemElemento = document.getElementById('imagem');

let indiceAtual = 0;
let ultimoIndice = listaImagens.length - 1;

function atualizarConteudo() {
    imagemElemento.src = listaImagens[indiceAtual];
    
    // Se acabar as frases personalizadas, usa uma padrão
    fraseElemento.textContent = listaFrases[indiceAtual] || "Momento especial com você! ❤️";
}

function proximaFoto() {
    if (indiceAtual < ultimoIndice) {
        indiceAtual++;
    } else {
        indiceAtual = 0;
    }
    atualizarConteudo();
}


function toggleCarta() {
    const overlay = document.getElementById('overlay-carta');
    // Se estiver escondido, mostra. Se estiver visível, esconde.
    if (overlay.style.display === 'flex') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
    }
}

// Mantenha sua função de corações se tiver gostado dela!   

// Inicializa o site
atualizarConteudo();