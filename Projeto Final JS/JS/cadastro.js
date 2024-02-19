// verificar nome, cidade, bairro, nome pai, nome mãe

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

    if (caracteresValidos && nome != ('')) {
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
        document.getElementById("erro" + input).innerHTML = "Conteúdo inválido.";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            nome = nome.slice(0, index) + nome.slice(index + 1);
            index = nome.indexOf("  ");
        }

        document.getElementById(input).value = nome;

    }
}


//
// verificar numero

function verificarChar2(input) {
    let numero = document.getElementById(input).value.trim();
    let lista = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    let caracteresValidos = true; //todos os caracteres da lista sao validos

    // percorrer a string digitada
    for (let i = 0; i < numero.length; i++) {
        let aux = numero.charAt(i);
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

    if (caracteresValidos && numero !== "") {
        // se todos os caracteres sao validos, a borda fica verde
        document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
        document.getElementById("erro" + input).innerHTML = "";

        let index = numero.indexOf("  ");

        while (index !== -1) {
            numero = numero.slice(0, index) + numero.slice(index + 1);
            index = numero.indexOf("  ");
        }

        document.getElementById(input).value = numero;

    } else if (numero === "") {
        //se não, a borda fica vermelha
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Preencha este campo.";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            numero = numero.slice(0, index) + numero.slice(index + 1);
            index = numero.indexOf("  ");
        }

        document.getElementById(input).value = numero;

    } else {
        //se não, a borda fica vermelha
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Conteúdo inválido.";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            numero = numero.slice(0, index) + numero.slice(index + 1);
            index = numero.indexOf("  ");
        }

        document.getElementById(input).value = numero;
    }
}

//
// verificar uf

function verificarChar3(input, input2) {
    let aux = document.getElementById(input).value;
    if (aux === input2) {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Selecione uma UF.";
    } else {
        document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
        document.getElementById("erro" + input).innerHTML = "";
    }
}

//
// verificar e preencher cpf

function verificarChar4(input) {

    let numero = document.getElementById(input).value.trim();

    numero = numero.replaceAll(".", "");
    numero = numero.replaceAll("-", "");
    numero = numero.replaceAll(" ", "");

    if (numero === "") {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Preencha este campo.";
    } else if (numero.length != 11) {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "CPF incompleto.";
    } else {

        let lista = "0123456789";
        let caracteresValidos = true; //todos os caracteres da lista sao validos

        // percorrer a string digitada
        for (let i = 0; i < numero.length; i++) {
            let aux = numero.charAt(i);
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
            //se não sobrou caracteres, o numero já está válido

            //se sobraram caracteres que nao foram encontrados na lista

            // nao teve char encontrado
            if (!charEncontrado) { // esses caracteres não são válidos
                caracteresValidos = false;
                break;
            }
        }

        if (caracteresValidos) {
            // se todos os caracteres sao validos, a borda fica verde
            document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
            document.getElementById("erro" + input).innerHTML = "";
            numero = numero.slice(0, 3) + "." + numero.slice(3, 6) + "." + numero.slice(6, 9) + "-" + numero.slice(9);
        } else {
            //se não, a borda fica vermelha
            document.getElementById(input).style.border = "4px solid red";
            document.getElementById("erro" + input).innerHTML = "CPF inválido."
        }
    }
}

function preencherCpf(input) {
    let aux = document.getElementById(input).value.trim();

    if (aux.length == 3) {
        aux = aux + ".";
        document.getElementById(input).value = aux;
    } if (aux.length == 7) {
        aux = aux + ".";
        document.getElementById(input).value = aux;
    } if (aux.length == 11) {
        aux = aux + "-";
        document.getElementById(input).value = aux;
    }
}

//
// verificar email

function verificarChar6(input) {
    let nome = document.getElementById(input).value.trim();
    let lista = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.@ "; //espaço caracter valido caso a pessoa digite mais de um nome
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

//
// verificar senha

function verificarChar7(input) {
    let aux = document.getElementById(input).value.trim();

    if (aux.length == 0) {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Preencha este campo.";

    } else if (aux.length < 8) {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Sua senha precisa conter no mínimo 8 caracteres.";

    } else {
        document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
        document.getElementById("erro" + input).innerHTML = "";
    }

}

//
// verificar complemento

function verificarChar8(input) {
    let nome = document.getElementById(input).value.trim();
    let lista = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZãõáÁéÉíÍóÓúÚâÂêÊôÔç,.-0123456789 "; //espaço caracter valido caso a pessoa digite mais de um nome
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

    if (caracteresValidos && nome != ('')) {
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
        document.getElementById("erro" + input).innerHTML = "Conteúdo inválido.";

        let index = nome.indexOf("  ");

        while (index !== -1) {
            nome = nome.slice(0, index) + nome.slice(index + 1);
            index = nome.indexOf("  ");
        }

        document.getElementById(input).value = nome;
    }
}

//
// verificar e preencher rg

function verificarChar9(input) {
    let numero = document.getElementById(input).value.trim();

    numero = numero.replaceAll(".", "");
    numero = numero.replaceAll("-", "");
    numero = numero.replaceAll(" ", "");

    if (numero.length == 0) {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Preencha este campo.";
    } else if (numero.length != 9) {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "RG incompleto.";
    } else {

        let lista = "0123456789";
        let caracteresValidos = true; //todos os caracteres da lista sao validos

        // percorrer a string digitada
        for (let i = 0; i < numero.length; i++) {
            let aux = numero.charAt(i);
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
            //se não sobrou caracteres, o numero já está válido

            //se sobraram caracteres que nao foram encontrados na lista

            // nao teve char encontrado
            if (!charEncontrado) { // esses caracteres não são válidos
                caracteresValidos = false;
                break;
            }
        }

        if (caracteresValidos) {
            // se todos os caracteres sao validos, a borda fica verde
            document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
            document.getElementById("erro" + input).innerHTML = "";
            numero = numero.slice(0, 2) + "." + numero.slice(2, 6) + "." + numero.slice(6, 10) + "-" + numero.slice(10);
        } else {
            //se não, a borda fica vermelha
            document.getElementById(input).style.border = "4px solid red";
            document.getElementById("erro" + input).innerHTML = "RG inválido."
        }
    }
}

function preencherRg(input) {
    let aux = document.getElementById(input).value.trim();

    if (aux.length == 2) {
        aux = aux + ".";
        document.getElementById(input).value = aux;
    } if (aux.length == 6) {
        aux = aux + ".";
        document.getElementById(input).value = aux;
    } if (aux.length == 10) {
        aux = aux + "-";
        document.getElementById(input).value = aux;
    }
}

//
// verificar cel

function verificarChar10(input) {

    let numero = document.getElementById(input).value.trim();

    numero = numero.replaceAll("(", "");
    numero = numero.replaceAll(")", "");
    numero = numero.replaceAll("-", "");
    numero = numero.replaceAll(" ", "");

    if (numero.length == 0) {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Preencha este campo.";
    } else if (numero.length != 11) {
        document.getElementById(input).style.border = "4px solid red";
        document.getElementById("erro" + input).innerHTML = "Celular incompleto.";
    } else {

        let lista = "0123456789";
        let caracteresValidos = true; //todos os caracteres da lista sao validos

        // percorrer a string digitada
        for (let i = 0; i < numero.length; i++) {
            let aux = numero.charAt(i);
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
            //se não sobrou caracteres, o numero já está válido

            //se sobraram caracteres que nao foram encontrados na lista

            // nao teve char encontrado
            if (!charEncontrado) { // esses caracteres não são válidos
                caracteresValidos = false;
                break;
            }
        }

        if (caracteresValidos) {
            // se todos os caracteres sao validos, a borda fica verde
            document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
            document.getElementById("erro" + input).innerHTML = "";
            numero = numero.slice(0) + "(" + numero.slice(0, 3) + ")" + numero.slice(3, 9) + "-" + numero.slice(9);
        } else {
            //se não, a borda fica vermelha
            document.getElementById(input).style.border = "4px solid red";
            document.getElementById("erro" + input).innerHTML = "Celular inválido."
        }
    }
}

function preencherTel(input) {
    let aux = document.getElementById(input).value.trim();

    if (aux.length == 0) {
        aux = aux + "(";
        document.getElementById(input).value = aux;
    } if (aux.length == 3) {
        aux = aux + ")";
        document.getElementById(input).value = aux;
    } if (aux.length == 9) {
        aux = aux + "-";
        document.getElementById(input).value = aux;
    }
}


//
// verificar genero

function verificarChar11() {
    let aux = document.getElementById('ifeminino').checked;
    let aux2 = document.getElementById('imasculino').checked;
    let aux3 = document.getElementById('ioutro').checked;

    if (aux == true || aux2 == true || aux3 == true) {
        document.getElementById("errogenero").innerHTML = "";
    } else if (aux == false) {
        document.getElementById("errogenero").innerHTML = "Escolha uma opção.";
    }
}

// verificar data nascimento

function verificarChar12(input) {
    let aux = document.getElementById(input).value;

    if (aux === "") {
        document.getElementById("errodata").innerHTML = "Defina uma data.";
        document.getElementById(input).style.border = "4px solid red";
    } else {
        document.getElementById("errodata").innerHTML = "";
        document.getElementById(input).style.border = "4px solid rgb(0, 173, 0)";
    }
}

//
// permitir envio

// permitir o envio somente se todos os campos estiverem aprovados(verdes)

function verificarCor(input2) {
    let aux = document.getElementById('inome2').style.border;
    let aux2 = document.getElementById('inomepai').style.border;
    let aux3 = document.getElementById('inomemae').style.border;
    let aux4 = document.getElementById('icpf').style.border;
    let aux5 = document.getElementById('irg').style.border;
    let aux6 = document.getElementById('idata').style.border;
    let aux7 = document.getElementById('itel').style.border;
    let aux8 = document.getElementById('iufs').style.border;
    let aux9 = document.getElementById('icidade').style.border;
    let aux10 = document.getElementById('ibairro').style.border;
    let aux11 = document.getElementById('iend').style.border;
    let aux12 = document.getElementById('inum').style.border;
    let aux13 = document.getElementById('icomp').style.border;
    let aux14 = document.getElementById('iemail2').style.border;
    let aux15 = document.getElementById('isenha').style.border;
    let aux16 = document.getElementById('ifeminino').checked;
    let aux17 = document.getElementById('imasculino').checked;
    let aux18 = document.getElementById('ioutro').checked;


    if (aux === "4px solid rgb(0, 173, 0)" && aux2 === "4px solid rgb(0, 173, 0)" && aux3 === "4px solid rgb(0, 173, 0)" && aux4 === "4px solid rgb(0, 173, 0)" && aux5 === "4px solid rgb(0, 173, 0)" && aux6 === "4px solid rgb(0, 173, 0)" && aux7 === "4px solid rgb(0, 173, 0)" && aux8 === "4px solid rgb(0, 173, 0)" && aux9 === "4px solid rgb(0, 173, 0)" && aux10 === "4px solid rgb(0, 173, 0)" && aux11 === "4px solid rgb(0, 173, 0)" && aux12 === "4px solid rgb(0, 173, 0)" && aux13 === "4px solid rgb(0, 173, 0)" && aux14 === "4px solid rgb(0, 173, 0)" && aux15 === "4px solid rgb(0, 173, 0)" && (aux16 == true || aux17 == true || aux18 == true)) {
        document.getElementById(input2).disabled = false;
        document.getElementById('erro').innerHTML = "Clique no botão 'Enviar'.";
        document.getElementById('erro').style.color = "green";
    } else {
        document.getElementById(input2).disabled = true;
        document.getElementById('erro').innerHTML = "Verifique os campos e tente novamente.";
        document.getElementById('erro').style.color = "red";
        document.getElementById('erro').style.textAlign = "center";
    }
}
