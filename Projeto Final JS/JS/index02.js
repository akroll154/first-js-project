let i = 0;                          //referente ao indice da img atual
let imagens = [];

imagens.push("../Imagem/DSCF7185.JPG");
imagens.push("../Imagem/DSCF7022.JPG");
imagens.push("../Imagem/DSCF7272.JPG");
imagens.push("../Imagem/DSCF7287.JPG");
imagens.push("../Imagem/DSCF7114.JPG");
imagens.push("../Imagem/DSCF7069.JPG");


// imagem anterior

function anterior() {

    if (i == 0) {
        i = imagens.length - 1;
        document.getElementById("imgproxima").src = imagens[0];
        document.getElementById("imganterior").src = imagens[i - 1];
    } else {
        i--;
        document.getElementById("imgproxima").src = imagens[i + 1];
        document.getElementById("imganterior").src = imagens[i - 1];
    }

    if (i == 0) {
        document.getElementById("imgproxima").src = imagens[i + 1];
        document.getElementById("imganterior").src = imagens[imagens.length - 1];

    }

    document.getElementById("imgatual").src = imagens[i];
    document.getElementById("imgproxima").style.opacity = 0.5;
    document.getElementById("imganterior").style.opacity = 0.5;

    // icones

    if (i == 0) {
        document.getElementById("i11").style.backgroundColor = "rgb(245, 181, 78)";
        document.getElementById("i22").style.backgroundColor = "white";
    }
    if (i == 1) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "rgb(245, 181, 78)";
        document.getElementById("i33").style.backgroundColor = "white";
    }
    if (i == 2) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "rgb(245, 181, 78)";
        document.getElementById("i44").style.backgroundColor = "white";
    }
    if (i == 3) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "rgb(245, 181, 78)";
        document.getElementById("i55").style.backgroundColor = "white";
    }
    if (i == 4) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "white";
        document.getElementById("i55").style.backgroundColor = "rgb(245, 181, 78)";
        document.getElementById("i66").style.backgroundColor = "white";
    }

    if (i == 5) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "white";
        document.getElementById("i55").style.backgroundColor = "white";
        document.getElementById("i66").style.backgroundColor = "rgb(245, 181, 78)";
    }

}

// proxima imagem

function proximo() {

    if (i == imagens.length - 1) {
        i = 0;
        document.getElementById("imgproxima").src = imagens[i + 1];
        document.getElementById("imganterior").src = imagens[i - 1];

    } else {
        i++;
        document.getElementById("imgproxima").src = imagens[i + 1];
        document.getElementById("imganterior").src = imagens[i - 1];
    }

    if (i == imagens.length - 1) {
        document.getElementById("imgproxima").src = imagens[0];
        document.getElementById("imganterior").src = imagens[i - 1];
    }

    if (i == 0) {
        document.getElementById("imgproxima").src = imagens[i + 1];
        document.getElementById("imganterior").src = imagens[imagens.length - 1];

    }

    document.getElementById("imgproxima").style.opacity = 0.5;
    document.getElementById("imganterior").style.opacity = 0.5;

    // icones

    document.getElementById("imgatual").src = imagens[i];

    if (i == 0) {
        document.getElementById("i11").style.backgroundColor = "rgb(245, 181, 78)";
        document.getElementById("i66").style.backgroundColor = "white";
    }
    if (i == 1) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "rgb(245, 181, 78)";
    }
    if (i == 2) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "rgb(245, 181, 78)";
    }
    if (i == 3) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "rgb(245, 181, 78)";
    }
    if (i == 4) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "white";
        document.getElementById("i55").style.backgroundColor = "rgb(245, 181, 78)";
    }

    if (i == 5) {
        document.getElementById("i11").style.backgroundColor = "white";
        document.getElementById("i22").style.backgroundColor = "white";
        document.getElementById("i33").style.backgroundColor = "white";
        document.getElementById("i44").style.backgroundColor = "white";
        document.getElementById("i55").style.backgroundColor = "white";
        document.getElementById("i66").style.backgroundColor = "rgb(245, 181, 78)";
    }
}

setInterval(proximo, 3000);
