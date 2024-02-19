let carrinho = [];
let valores = [];
let cont = 0;
let cont2 = 0;
let cont3 = 0;
let cont4 = 0;
let cont5 = 0;
let cont6 = 0;
let cont7 = 0;
let cont8 = 0;
let cont9 = 0;
let cont10 = 0;
let soma = 0;
let total;


// adicionar carrinho


function adicionarCarrinho(divproduto, paragrafo, alerta, preco) {

    //colocar produtos no vetor carrinho
    let aux = document.getElementById(divproduto).innerHTML.trim();

    carrinho.push(aux);

    // contabilizar itens no vetor carrinho
    let aux2 = document.getElementById(paragrafo).innerHTML = carrinho.length;

    // exibir mensagem item adicionado ao carrinho
    let aux3 = document.getElementById(alerta).innerHTML = "Item adicionado ao carrinho!";

    aux3 = document.getElementById(alerta).style.color = "rgb(54, 21, 4)";

    // colocar preços array valores
    let aux4 = document.getElementById(preco).innerHTML.trim();
    valores.push(Number(aux4));

}


// remover carrinho

function removerCarrinho(divproduto, paragrafo, alerta, preco) {

    //retirar produtos no vetor carrinho
    let aux = document.getElementById(divproduto).innerHTML.trim();

    // retirar apenas o produto responsavel de cada botao
    let j = carrinho.indexOf(aux);
    if (j > -1) {
        carrinho.splice(j, 1);
    }

    // contabilizar itens no vetor carrinho
    let aux2 = document.getElementById(paragrafo).innerHTML = carrinho.length;

    // exibir mensagem item adicionado ao carrinho
    let aux3 = document.getElementById(alerta).innerHTML = "Item removido do carrinho!";

    aux3 = document.getElementById(alerta).style.color = "rgb(54, 21, 4)";

    // retirar preços array valores
    let aux4 = document.getElementById(preco).innerHTML.trim();

    // retirar apenas os preços responsaveis de cada produto
    let i = valores.indexOf(Number(aux4));
    if (i > -1) {
        valores.splice(i, 1);
    }

}

// quantidade

function contar1(p) {

    cont = cont + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont;
}

function contarA(p) {

    if (cont == 0) {
        cont = 0;
    } else {
        cont = cont - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont;
}

//

function contar2(p) {

    cont2 = cont2 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont2;
}

function contarB(p) {

    if (cont2 == 0) {
        cont2 = 0;
    } else {
        cont2 = cont2 - 1;
    }


    document.getElementById(p).innerHTML = "Quantidade: " + cont2;
}

//

function contar3(p) {

    cont3 = cont3 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont3;
}

function contarC(p) {

    if (cont3 == 0) {
        cont3 = 0;
    } else {
        cont3 = cont3 - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont3;
}

//

function contar4(p) {

    cont4 = cont4 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont4;
}

function contarD(p) {

    if (cont4 == 0) {
        cont4 = 0;
    } else {
        cont4 = cont4 - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont4;
}

//

function contar5(p) {

    cont5 = cont5 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont5;
}

function contarE(p) {

    if (cont5 == 0) {
        cont5 = 0;
    } else {
        cont5 = cont5 - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont5;
}


//

function contar6(p) {

    cont6 = cont6 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont6;
}

function contarF(p) {

    if (cont6 == 0) {
        cont6 = 0;
    } else {
        cont6 = cont6 - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont6;
}

//

function contar7(p) {

    cont7 = cont7 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont7;
}

function contarG(p) {

    if (cont7 == 0) {
        cont7 = 0;
    } else {
        cont7 = cont7 - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont7;
}

//

function contar8(p) {

    cont8 = cont8 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont8;
}

function contarH(p) {

    if (cont8 == 0) {
        cont8 = 0;
    } else {
        cont8 = cont8 - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont8;
}

function contar9(p) {

    cont9 = cont9 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont9;
}

function contarI(p) {

    if (cont9 == 0) {
        cont9 = 0;
    } else {
        cont9 = cont9 - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont9;
}

function contar10(p) {

    cont10 = cont10 + 1;
    document.getElementById(p).innerHTML = "Quantidade: " + cont10;
}

function contarJ(p) {

    if (cont10 == 0) {
        cont10 = 0;
    } else {
        cont10 = cont10 - 1;
    }

    document.getElementById(p).innerHTML = "Quantidade: " + cont10;
}

// carrossel

let i = 0;                          //referente ao indice da img atual
let imagens = [];
let legenda = [];


imagens.push("../Imagem/queijo.jpg");
imagens.push("../Imagem/queijo mix mantiqueira bom sucesso.jpg");
imagens.push("../Imagem/queijo capa preta almeida guimaraes.jpg");
imagens.push("../Imagem/geleia da cris frutas vermelhas com hibisco.jpg");
imagens.push("../Imagem/queijo rosso almeida guimaraes.jpg");
imagens.push("../Imagem/requeijao cremoso bom sucesso.jpg");

legenda.push("Queijos");
legenda.push("Mix Mantiqueira");
legenda.push("Capa Preta");
legenda.push("Geleia Frutas Vermelhas com Hibisco");
legenda.push("Rosso");
legenda.push("Requeijão Cremoso");

// imagem anterior

function anterior() {

    if (i == 0) {
        i = imagens.length - 1;
    } else {
        i--;
    }


    document.getElementById("imgatual").src = imagens[i];
    document.getElementById("iparagrafo2").innerHTML = legenda[i];

    // icones

    if (i == 0) {
        document.getElementById("i11").style.backgroundColor = "cornflowerblue";
        document.getElementById("i22").style.backgroundColor = "white";
    }
    if (i == 1) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "cornflowerblue";
        document.getElementById("i33").style.backgroundColor = "white";
    }
    if (i == 2) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "cornflowerblue";
        document.getElementById("i44").style.backgroundColor = "white";
    }
    if (i == 3) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "cornflowerblue";
        document.getElementById("i55").style.backgroundColor = "white";
    }
    if (i == 4) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "white";
        document.getElementById("i55").style.backgroundColor = "cornflowerblue";
        document.getElementById("i66").style.backgroundColor = "white";
    }

    if (i == 5) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "white";
        document.getElementById("i55").style.backgroundColor = "white";
        document.getElementById("i66").style.backgroundColor = "cornflowerblue";
    }

}
// proxima imagem

function proximo() {

    if (i == (imagens.length - 1)) {
        i = 0;
    } else {
        i++;
    }

    // icones

    document.getElementById("imgatual").src = imagens[i];
    document.getElementById("iparagrafo2").innerHTML = legenda[i];

    if (i == 0) {
        document.getElementById("i11").style.backgroundColor = "cornflowerblue";
        document.getElementById("i66").style.backgroundColor = "white";
    }
    if (i == 1) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "cornflowerblue";
    }
    if (i == 2) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "cornflowerblue";
    }
    if (i == 3) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "cornflowerblue";
    }
    if (i == 4) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "white";
        document.getElementById("i55").style.backgroundColor = "cornflowerblue";
    }

    if (i == 5) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "white";
        document.getElementById("i55").style.backgroundColor = "white";
        document.getElementById("i66").style.backgroundColor = "cornflowerblue";
    }
}

setInterval(proximo, 3000);

function teste(x) {
    let aux = document.getElementById(x);
    let aux2 = document.getElementById('imain');
    let aux3 = document.getElementById('iteste2');
    let aux4 = document.getElementById('iteste3');
    let aux5 = document.getElementById('ccarrinho');
    let aux6 = document.getElementById('imantiqueiraminas').innerHTML;
    let aux7 = document.getElementById('itemperado').innerHTML;
    let aux8 = document.getElementById('iazeitadomanj').innerHTML;
    let aux9 = document.getElementById('idefumado').innerHTML;
    let aux10 = document.getElementById('imeiacura1').innerHTML;
    let aux11 = document.getElementById('icanastra').innerHTML;
    let aux12 = document.getElementById('icapapreta').innerHTML;
    let aux13 = document.getElementById('irosso').innerHTML;
    let aux14 = document.getElementById('ibomsucesso').innerHTML;
    let aux15 = document.getElementById('imix').innerHTML;
    let aux16 = document.getElementById('ccarrinho2');
    let aux17 = document.getElementById('ccarrinho3');  // coluna responsavel pelos preços individuais
    let aux28 = document.getElementById('ccarrinho4'); // coluna responsavel (preço * cont);
    let aux29 = document.getElementById('ccarrinho5');

    //

    let aux18 = document.getElementById('iprecomantiqueira2').innerHTML;
    let aux19 = document.getElementById('iprecotemperado2').innerHTML;
    let aux20 = document.getElementById('iprecoazeitadomanj2').innerHTML;
    let aux21 = document.getElementById('iprecodefumado2').innerHTML;
    let aux22 = document.getElementById('iprecomeiacura2').innerHTML;
    let aux23 = document.getElementById('iprecocanastra2').innerHTML;
    let aux24 = document.getElementById('iprecocapapreta2').innerHTML;
    let aux25 = document.getElementById('iprecorosso2').innerHTML;
    let aux26 = document.getElementById('iprecobomsucesso2').innerHTML;
    let aux27 = document.getElementById('iprecomix2').innerHTML;

    //

    document.getElementById('ivoltar').style.display = "block";

    let all = [];
    let allcont = [];
    let precos = [];

    aux.style.height = "1000px";
    aux.style.borderBottomRightRadius = "35px";
    aux2.style.marginLeft = "-90%";
    aux2.style.display = "block";
    aux2.style.position = "unset";
    aux3.style.width = "99.85%";
    aux4.innerHTML = "Carrinho";
    aux4.style.marginLeft = "5%";
    aux16.style.marginLeft = "0%";
    aux17.style.marginLeft = "10%";



    if (carrinho.length == 0) {
        aux5.innerHTML = "Você não colocou nada no carrinho.";
    } else {

        for (let i = 0; i < carrinho.length; i++) {
            let e = carrinho[i];
        }

        //
        let a = carrinho.indexOf('Mantiqueira de Minas');
        let a1 = carrinho[a];
        if (a1 != undefined) {
            all.push(a1);
            allcont.push(cont + "x");
            precos.push(aux18);


        }

        //
        let b = carrinho.indexOf('Temperado');
        let b1 = carrinho[b];
        if (b1 != undefined) {
            all.push(b1);
            allcont.push(cont2 + "x");
            precos.push(aux19);

        }

        //
        let c = carrinho.indexOf('Azeitado no Manjericão');
        let c1 = carrinho[c];
        if (c1 != undefined) {
            all.push(c1);
            allcont.push(cont3 + "x");
            precos.push(aux20);

        }

        //
        let d = carrinho.indexOf('Defumado');
        let d1 = carrinho[d];
        if (d1 != undefined) {
            all.push(d1);
            allcont.push(cont4 + "x");
            precos.push(aux21);

        }

        //
        let f = carrinho.indexOf('Meia Cura');
        let f1 = carrinho[f];
        if (f1 != undefined) {
            all.push(f1);
            allcont.push(cont5 + "x");
            precos.push(aux22);

        }

        //
        let g = carrinho.indexOf('Legítimo Queijo Canastra');
        let g1 = carrinho[g];
        if (g1 != undefined) {
            all.push(g1);
            allcont.push(cont6 + "x");
            precos.push(aux23);

        }

        //
        let h = carrinho.indexOf('Capa Preta');
        let h1 = carrinho[h];
        if (h1 != undefined) {
            all.push(h1);
            allcont.push(cont7 + "x");
            precos.push(aux24);

        }

        //
        let k = carrinho.indexOf('Rosso');
        let k1 = carrinho[k];
        if (k1 != undefined) {
            all.push(k1);
            allcont.push(cont8 + "x");
            precos.push(aux25);

        }

        //
        let l = carrinho.indexOf('Bom Sucesso');
        let l1 = carrinho[l];
        if (l1 != undefined) {
            all.push(l1);
            allcont.push(cont9 + "x");
            precos.push(aux26);

        }

        //
        let m = carrinho.indexOf('Mix Mantiqueira');
        let m1 = carrinho[m];
        if (m1 != undefined) {
            all.push(m1);
            allcont.push(cont10 + "x");
            precos.push(aux27);

        }



        aux5.innerHTML = all.join("<br>");
        aux16.innerHTML = allcont.join("<br>");
        aux17.innerHTML = precos.join("<br>");



    }

    //somar valores e gerar o total 

    for (let w = 0; w < valores.length; w++) {
        soma += valores[w];

    }

    total = soma;

    if (total == 0) {
        aux29.innerHTML = "";
    } else {
        aux29.innerHTML = "R$ " + total.toFixed(2);

    }

}

function altDisplay() {

    let aux = document.getElementById('iteste');
    let aux2 = document.getElementById('imain');
    let aux3 = document.getElementById('ivoltar').style.display = "none";
    let aux4 = document.getElementById('iteste2');
    let aux5 = document.getElementById('iteste3');
    let aux6 = document.getElementById('ccarrinho');
    let aux7 = document.getElementById('ccarrinho2');
    let aux8 = document.getElementById('ccarrinho3');
    let aux9 = document.getElementById('ccarrinho4');
    let aux10 = document.getElementById('ccarrinho5');


    aux2.style.marginLeft = "0%";
    aux2.style.display = "block";
    aux2.style.position = "absolute";

    aux.style.height = "0px";
    aux4.style.width = "0px";
    aux5.innerHTML = "";
    aux6.innerHTML = "";
    aux7.innerHTML = "";
    aux8.innerHTML = "";
    aux9.innerHTML = "";
    aux10.innerHTML = "";

    soma = 0;

}

window.onbeforeunload = function () {

    let mensagem = "Deseja sair desta página? As informações serão perdidas.";

    return mensagem;
};