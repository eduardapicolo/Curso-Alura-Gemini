function pesquisar(){
    let titulo = "";
    let descricao = "";
    let resultados = "";
    let tags = "";
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value ;
    console.log(section);

    if (campoPesquisa == ""){
        section.innerHTML= "<p>Nada foi encontrado. Voce nao buscou por um atleta</p> ";
        return 
    }



    campoPesquisa = campoPesquisa.toLowerCase()


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags= dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados +=
            `
            <div class="item-resultado">
            <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link}target="_blank"> Mais Informações</a>
            </div>
            `

        }
        
    }
    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>";
    }
    section.innerHTML = resultados;
}

//console.log(dados);
//console.log(dados[0].titulo);

