export function validarAtleta(nome, peso, altura) {
    if (nome.length < 2 || nome.length > 100) {
        return "O nome deve ter entre 2 e 100 caracteres.";
    }
    if (altura < 0 || altura > 2.99) {
        return "A altura não deve ser negativa e ser de no máximo 2,99 metros.";
    }
    if (peso < 0 || peso > 299.9) {
        return "O peso não deve ser negativo e ser de no máximo 299,9 kg.";
    }
    return null; // Válido
}
