document.addEventListener("DOMContentLoaded", () => {
    initMap(); // Chama o mapa ao carregar a página
});

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = `<p>Nada foi encontrado. Você precisa digitar o nome de uma paróquia ou bairro.</p>`;
        return;
    }

    let resultados = "";
    let encontrou = false;

    dados.forEach(dado => {
        if (
            dado.paroquia.toLowerCase().includes(campoPesquisa) ||
            dado.endereco.toLowerCase().includes(campoPesquisa) ||
            dado.diahorario.toLowerCase().includes(campoPesquisa) ||
            dado.contato.toLowerCase().includes(campoPesquisa) ||
            dado.tags.toLowerCase().includes(campoPesquisa)
        ) {
            encontrou = true;
            resultados += `
            <div class="item-resultado">
                <h2>${dado.paroquia}</h2>
                <p class="descricao-meta">${dado.endereco}</p>
                <p class="descricao-meta">${dado.diahorario}</p>
                <p class="descricao-meta">${dado.contato}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
                <button onclick="tracarRota(${dado.coordenadas.latitude}, ${dado.coordenadas.longitude})">
        Traçar rota
    </button>
            </div>`;
        }
    });

    section.innerHTML = encontrou ? resultados : "<p>Nada foi encontrado.</p>";
}

let map;
let markers = []; // Array para armazenar os marcadores no mapa

function initMap() {
    // Inicializa o mapa centrado em João Pessoa
    map = new google.maps.Map(document.getElementById("mapa-container"), {
        center: { lat: -7.1195, lng: -34.8630 },
        zoom: 12,
    });
}

function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = `<p>Nada foi encontrado. Você precisa digitar o nome de uma paróquia ou bairro.</p>`;
        limparMarcadores();
        return;
    }

    let resultados = "";
    let encontrouResultados = false;

    // Filtra os dados com base na pesquisa
    dados.forEach(dado => {
        const paroquia = dado.paroquia.toLowerCase();
        const endereco = dado.endereco.toLowerCase();
        const tags = dado.tags.toLowerCase();

        if (paroquia.includes(campoPesquisa) || endereco.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            encontrouResultados = true;

            resultados += `
                <div class="item-resultado">
                    <h2>${dado.paroquia}</h2>
                    <p class="descricao-meta">${dado.endereco}</p>
                    <p class="descricao-meta">${dado.diahorario}</p>
                    <p class="descricao-meta">${dado.contato}</p>
                    <button onclick="tracarRota(${dado.coordenadas.latitude}, ${dado.coordenadas.longitude})">
                        Traçar rota
                    </button>
                    <a href="#" class="btn-navegacao" onclick="navegarParaGPS(${dado.coordenadas.   latitude}, ${dado.coordenadas.longitude})"> Navegar pelo GPS
                    </a>
                </div>
            `;

            // Adiciona um marcador para este resultado
            adicionarMarcador(dado.coordenadas.latitude, dado.coordenadas.longitude, dado.paroquia);
        }
    });

    if (!encontrouResultados) {
        resultados = `<p>Nada foi encontrado para "${campoPesquisa}".</p>`;
        limparMarcadores();
    }

    section.innerHTML = resultados;
}

function adicionarMarcador(lat, lng, titulo) {
    // Cria um novo marcador no mapa
    const marcador = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: titulo,
    });

    // Adiciona o marcador ao array de marcadores
    markers.push(marcador);
}

function limparMarcadores() {
    // Remove todos os marcadores do mapa
    markers.forEach(marcador => marcador.setMap(null));
    markers = []; // Limpa o array de marcadores
}

let directionsRenderer = new google.maps.DirectionsRenderer();

// Limpa rotas anteriores do mapa, se existirem
if (directionsRenderer) {
    directionsRenderer.setMap(null); // Remove a rota do mapa
    directionsRenderer = new google.maps.DirectionsRenderer(); // Cria um novo renderer
}

// Configura o novo DirectionsRenderer
directionsRenderer.setMap(map);


function tracarRota(destLat, destLng) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const origem = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                const directionsService = new google.maps.DirectionsService();
                const directionsRenderer = new google.maps.DirectionsRenderer();

                directionsRenderer.setMap(map);

                const request = {
                    origin: origem,
                    destination: { lat: destLat, lng: destLng },
                    travelMode: google.maps.TravelMode.DRIVING,
                };

                directionsService.route(request, (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(result);

                        // Rola para o mapa após traçar a rota
                        const mapaContainer = document.getElementById("mapa-container");
                        mapaContainer.scrollIntoView({ behavior: "smooth", block: "start" });
                    } else {
                        alert("Não foi possível traçar a rota: " + status);
                    }
                });
            },
            () => alert("Erro ao obter sua localização. Por favor, habilite o GPS.")
        );
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
}

function navegarParaGPS(destLat, destLng) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const origemLat = position.coords.latitude;
                const origemLng = position.coords.longitude;

                // Gera o link para o Google Maps no modo de navegação
                const url = `https://www.google.com/maps/dir/?api=1&origin=${origemLat},${origemLng}&destination=${destLat},${destLng}&travelmode=driving`;

                // Abre o link no navegador
                window.open(url, "_blank");
            },
            error => {
                alert("Não foi possível obter sua localização. Verifique se o GPS está ativado.");
            }
        );
    } else {
        alert("Seu navegador não suporta geolocalização.");
    }
}

