function verificarChar(input) {
    let nome = document.getElementById(input).value.trim();
    let lista = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZãõáÁéÉíÍóÓúÚâÂêÊôÔç "; //espaço caracter valido caso a pessoa digite mais de um nome
    let caracteresValidos = true; //todos os caracteres da lista sao validos

    // percorrer a string digitada
    for (let i = 0; i < nome.length; i++) {
        let aux = nome.charAt(i);
        let charEncontrado = false;                 //ainda nao comparou com a lista

        // percorrer a string lista
        for (let j = 0; j < lista.length; j++) {
            let aux2 = lista.charAt(j);

            // comparar os caracteres
            if (aux === aux2) {
                charEncontrado = true;   // comparou, se aux for igual a aux2, encontrou caracteres presentes na lista
                break;
            }
        }

        //validou todos os caracteres permitidos
        //se não sobrou caracteres, o nome já está válido

        //se sobraram caracteres que nao foram encontrados na lista

        // nao teve char encontrado
        if (!charEncontrado) { // esses caracteres não são válidos
            caracteresValidos = false;
            break;
        }
    }

    if (caracteresValidos && nome !== '') {
        // se todos os caracteres sao validos, a borda fica verde
        document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
        document.getElementById("erro" + input).innerHTML = "";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            nome = nome.slice(0, index) + nome.slice(index + 1);
            index = nome.indexOf("  ");
        }

        document.getElementById(input).value = nome;


    } else {
        //se não, a borda fica vermelha
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Campo inválido.";
        document.getElementById("erro" + input).style.color = "red";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            nome = nome.slice(0, index) + nome.slice(index + 1);
            index = nome.indexOf("  ");
        }

        document.getElementById(input).value = nome;

    }


}

// verificar email

function verificarChar6(input) {
    let nome = document.getElementById(input).value.trim();
    let lista = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.@";
    let caracteresValidos = true; //todos os caracteres da lista sao validos

    // percorrer a string digitada
    for (let i = 0; i < nome.length; i++) {
        let aux = nome.charAt(i);
        let charEncontrado = false;                 //ainda nao comparou com a lista

        // percorrer a string lista
        for (let j = 0; j < lista.length; j++) {
            let aux2 = lista.charAt(j);

            // comparar os caracteres
            if (aux === aux2) {
                charEncontrado = true;   // comparou, se aux for igual a aux2, encontrou caracteres presentes na lista
                break;
            }
        }

        //validou todos os caracteres permitidos
        //se não sobrou caracteres, o nome já está válido

        //se sobraram caracteres que nao foram encontrados na lista

        // nao teve char encontrado
        if (!charEncontrado) { // esses caracteres não são válidos
            caracteresValidos = false;
            break;
        }
    }

    //minimo de 3 caracteres entre o @ e o .

    let aux3 = nome.lastIndexOf('@');
    let aux4 = nome.lastIndexOf('.');

    if (caracteresValidos && nome != ('') && nome.includes("@") && nome.includes(".") && (aux4 - aux3) > 3) {
        // se todos os caracteres sao validos, a borda fica verde
        document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
        document.getElementById("erro" + input).innerHTML = "";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            nome = nome.slice(0, index) + nome.slice(index + 1);
            index = nome.indexOf("  ");
        }

        document.getElementById(input).value = nome;

    } else if (nome === "") {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Preencha este campo.";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            nome = nome.slice(0, index) + nome.slice(index + 1);
            index = nome.indexOf("  ");
        }

        document.getElementById(input).value = nome;

    } else {
        //se não, a borda fica vermelha
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Informe seu endereço de e-mail completo contendo '@' e ' . '.";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            nome = nome.slice(0, index) + nome.slice(index + 1);
            index = nome.indexOf("  ");
        }

        document.getElementById(input).value = nome;

    }
}

function verificarTextArea(textarea) {

    let aux = document.getElementById(textarea).value.trim();

    if (aux === "") {
        document.getElementById(textarea).style.border = "4px solid red";
        document.getElementById("erro" + textarea).innerHTML = "Preencha este campo.";
        document.getElementById("erro" + textarea).style.color = "red";
    } else {
        document.getElementById(textarea).style.border = "4px solid rgb(0, 173, 0)";
        document.getElementById('erro' + textarea).innerHTML = "";
    }
}

// permitir o envio somente se todos os campos estiverem aprovados(verdes)

function verificarCor(input2) {
    let aux = document.getElementById('inome').style.border;
    let aux2 = document.getElementById('iemail').style.border;
    let aux3 = document.getElementById('itexto').style.border;

    if (aux === "4px solid rgb(0, 173, 0)" && aux2 === "4px solid rgb(0, 173, 0)" && aux3 === "4px solid rgb(0, 173, 0)") {
        document.getElementById(input2).disabled = false;
        document.getElementById('erro').innerHTML = "Clique no botão 'Enviar'."
        document.getElementById('erro').style.color = "rgb(0, 173, 0)";
        document.getElementById('erro').style.textAlign = "center";
    } else {
        document.getElementById(input2).disabled = true;
        document.getElementById('erro').innerHTML = "Verifique os campos e tente novamente."
        document.getElementById('erro').style.color = "red";
        document.getElementById('erro').style.textAlign = "center";
    }
}