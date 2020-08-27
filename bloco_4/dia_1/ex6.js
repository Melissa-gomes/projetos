let peçaDeXadrez = "rainha"

switch (peçaDeXadrez.toLowerCase ()){
    case "peão":
    console.log("move-se apenas uma casa para frente e somente captura outras peças na diagonal.");
    break;
    case "torre":
    console.log("move-se pela vertical ou horizontal, mas não pode pular outras peças.");
    break;
    case "cavalo":
    console.log("move-se em forma de “L” anda duas casas em sentido horizontal e mais uma na vertical ou vice-versa podendo pular outras peças.");
    break;
    case "bispo":
    console.log("move-se ao longo da diagonal. Não pode pular outras peças.");
    break;
    case "rainha":
    console.log("move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
    break;
    case "rei":
    console.log("move-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
    break;
    default:
    console.log("peça inexistente");
    break;
}
