function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se há um termo de pesquisa
    if (campoPesquisa === "") {
      section.innerHTML = "<p>Nada foi encontrado</p>";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado e verifica se contém o termo de pesquisa
    for (let dado of dados) {
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
  
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }