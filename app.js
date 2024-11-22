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
    let contato = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) { 
        paroquia = dado.paroquia.toLowerCase()
        endereco = dado.endereco.toLowerCase()
        diahorario = dado.diahorario.toLowerCase()
        contato = dado.contato.toLowerCase()
        tags = dado.tags.toLowerCase()

        //se paroquia includes campoPesquisa
        if (paroquia.includes(campoPesquisa) || endereco.includes(campoPesquisa) || diahorario.includes(campoPesquisa) || contato.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>${dado.paroquia}</h2>
                <p class="descricao-meta">${dado.endereco}</p>
                <p class="descricao-meta">${dado.diahorario}</p>
                <p class="descricao-meta">${dado.contato}</p>
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



    // Configurar o mapa e os marcadores das paróquias
    function initMap() {
        // Centraliza o mapa em João Pessoa
        const centro = { lat: -7.1195, lng: -34.8630 };
        const map = new google.maps.Map(document.getElementById("mapa-container"), {
            zoom: 12,
            center: centro,
        });
    
        // Exemplo de marcadores para cada paróquia
        dados.forEach(dado => {
            const marker = new google.maps.Marker({
                position: { lat: dado.latitude, lng: dado.longitude },
                map: map,
                title: dado.paroquia
            });
    
            // Exibe informações sobre a paróquia quando o marcador é clicado
            const infoWindow = new google.maps.InfoWindow({
                content: `<h3>${dado.paroquia}</h3><p>${dado.endereco}</p><a href="${dado.link}" target="_blank">Mais informações</a>`
            });
    
            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });
        });
    }
    



  }