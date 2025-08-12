let heroi = {
    nome: "Cavaleiro da Lua",
    xp: 10000
};

function mostrarNivel() {
            heroi.xp = parseInt(document.getElementById('xp').value);
            let nivel = "";


if (heroi.xp <= 1000){
    nivel = "Ferro";
} else if (heroi.xp >= 1001 && heroi.xp <= 2000){
    nivel = "Prata";
} else if (heroi.xp >= 2001 && heroi.xp <= 5000){
    nivel = "Ouro";
} else if (heroi.xp >= 5001 && heroi.xp <= 7000){
    nivel = "Platina";
} else if (heroi.xp >= 8001 && heroi.xp <= 9000){
    nivel = "Ascendente";
} else if (heroi.xp >= 9001 && heroi.xp <= 10000){
    nivel = "Imortal";
} else if (heroi.xp > 10000){
    nivel = "Radiante";
}
document.getElementById("mensagem").textContent = "O Herói de nome " + heroi.nome + " está no nível de " + nivel;

}