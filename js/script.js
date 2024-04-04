window.addEventListener("scroll", function(){
    let nav = document.querySelector('#nav');
    nav.classList.toggle('rolagem', window.scrollY > 0)
})

function cursosUece() {
    var pontuacoes = {
        "Administração": 622.2,
        "Ciência da Computação": 610.42,
        "Ciências Biológicas": 608.58,
        "Ciências Contábeis": 608.82,
        "Educação Física": 581.84,
        "Enfermagem": 594.64,
        "Física": 610.92,
        "Geografia": 602.76,
        "Medicina": 741.08,
        "Medicina Veterinária": 672.28,
        "Nutrição": 629.28,
        "Psicologia": 660.24
    };

    var matematica = parseFloat(document.getElementById("matematica").value);
    var humanas = parseFloat(document.getElementById("humanas").value);
    var linguagens = parseFloat(document.getElementById("linguagens").value);
    var natureza = parseFloat(document.getElementById("natureza").value);
    var redacao = parseFloat(document.getElementById("redacao").value);

    var media = (matematica + humanas + linguagens + natureza + redacao) / 5;

    var cursosPassados = [];

    for (var curso in pontuacoes) {
        if (media >= pontuacoes[curso]) {
            cursosPassados.push(curso);
        }
    }

    if (cursosPassados.length > 0) {
        alert("Parabéns! Você passou nos seguintes cursos: \n" + cursosPassados.join("\n"));
    } else {
        alert("Infelizmente, você não passou em nenhum curso.");
    }
}