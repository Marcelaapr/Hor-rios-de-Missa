function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
 
    // Verificar se o campoPesquisa for uma String
    if(!campoPesquisa) {
        section.innerHTML = `<p>Nada foi encontrado. Você precisa digitar o nome de uma paróquia ou bairro.</p>`;
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
      
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let paroquia = "";
    let endereco = "";
    let diahorario = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) { 
        paroquia = dado.paroquia.toLowerCase()
        endereco = dado.endereco.toLowerCase()
        diahorario = dado.diahorario.toLowerCase()
        tags = dado.tags.toLowerCase()

        //se paroquia includes campoPesquisa
        if (paroquia.includes(campoPesquisa) || endereco.includes(campoPesquisa) || diahorario.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>${dado.paroquia}</h2>
                <p class="descricao-meta">${dado.endereco}</p>
                <p class="descricao-meta">${dado.diahorario}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }  
    }  

    if (!resultados ) {
        resultados = "<p>Nada foi enecontrado</p>"
    }
    // Atribui os resultados gerados ao conteúdo da seção HTML
    section.innerHTML = resultados
  }