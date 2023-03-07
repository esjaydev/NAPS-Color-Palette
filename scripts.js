window.addEventListener('load', iniciarPaleta);

function iniciarPaleta() {

    document.getElementById("hex1").addEventListener("click", copiar1);
    function copiar1() {
        let codigoTexto = document.getElementById('codigoTexto').innerHTML = "#000b12";
        document.getElementById('codigoTexto').style.color = "#000b12";
        navigator.clipboard.writeText("000b12");
    }

    document.getElementById("hex2").addEventListener("click", copiar2);
    function copiar2() {
        let codigoTexto = document.getElementById('codigoTexto').innerHTML = "#00233f";
        document.getElementById('codigoTexto').style.color = "#00233f";
        navigator.clipboard.writeText("00233f");
    }

    document.getElementById("hex3").addEventListener("click", copiar3);
    function copiar3() {
        let codigoTexto = document.getElementById('codigoTexto').innerHTML = "#0c62af";
        document.getElementById('codigoTexto').style.color = "#0c62af";
        navigator.clipboard.writeText("0c62af");
    }

    document.getElementById("hex4").addEventListener("click", copiar4);
    function copiar4() {
        let codigoTexto = document.getElementById('codigoTexto').innerHTML = "#1eb3e1";
        document.getElementById('codigoTexto').style.color = "#1eb3e1";
        navigator.clipboard.writeText("1eb3e1");
    }

    document.getElementById("hex5").addEventListener("click", copiar5);
    function copiar5() {
        let codigoTexto = document.getElementById('codigoTexto').innerHTML = "#b7e5f4";
        document.getElementById('codigoTexto').style.color = "#b7e5f4";
        navigator.clipboard.writeText("b7e5f4");
    }

    document.getElementById("hex6").addEventListener("click", copiar6);
    function copiar6() {
        let codigoTexto = document.getElementById('codigoTexto').innerHTML = "#757575";
        document.getElementById('codigoTexto').style.color = "#757575";
        navigator.clipboard.writeText("757575");
    }

    document.getElementById("hex7").addEventListener("click", copiar7);
    function copiar7() {
        let codigoTexto = document.getElementById('codigoTexto').innerHTML = "#f2f2f2";
        document.getElementById('codigoTexto').style.color = "#f2f2f2";
        navigator.clipboard.writeText("f2f2f2");
    }

    document.getElementById("hex8").addEventListener("click", copiar8);
    function copiar8() {
        let codigoTexto = document.getElementById('codigoTexto').innerHTML = "#f26524";
        document.getElementById('codigoTexto').style.color = "#f26524";
        navigator.clipboard.writeText("f26524");

    }

}