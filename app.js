
let input = document.getElementById("campo-pesquisa")

let button = document.getElementById("meuBotao")

input.addEventListener('keypress', function(event){
  if (event.key === 'Enter') {
    button.click();
  }
});

    function pesquisar() {
        /**
         * Função responsável por renderizar os resultados da pesquisa na página.
         *
         * Percorre o array `dados` e para cada objeto, cria um elemento HTML
         * com as informações do item encontrado.
         * 
         * Se o valor for nulo ou se o mesmo for composto apenas de espaços a página
         * retorna "Nada foi encontrado"
         *
         * **Parâmetros:**
         *  - Nenhum
         *
         * **Retorno:**
         *  - Não retorna nenhum valor, mas modifica o DOM inserindo os elementos HTML.
         */
        
      
        let campoPesquisa = document.getElementById("campo-pesquisa").value;
        let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão inseridos

        let resultados = "";
        let titulo = "";
        let descricao = ""; 
        let album = "";
        
        if(!campoPesquisa || isOnlySpaces(campoPesquisa)){
          section.innerHTML = "<p>Nada foi encontrado</p>"
          return
        }

      campoPesquisa = campoPesquisa.toLowerCase();
          dados.forEach(dado => {
            /**
             * Para cada objeto `dado` no array `dados`:
             *  - Cria uma string HTML com as informações do item.
             *  - Insere o HTML criado no final da seção de resultados.
             */

            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            album = dado.album.toLowerCase();

          if(titulo.includes(campoPesquisa) ||
           descricao.includes(campoPesquisa) ||
            album.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
            <h2><a href="Albums/Help.jpg" target="blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">Album: ${dado.album}</p>
            <a href="${dado.link}" target="blank">Mais informações</a>
            </div>
            `;
          }
       
          }
        );
  
        if(!resultados){
          resultados = "<p>Sem músicas ou albuns correspondentes...</p>"
        }

          section.innerHTML= resultados;
    }
    //Função testa se o texto digitado na barra de pesquisa é composto somente de espaços
    function isOnlySpaces(str) {
      return /^\s+$/.test(str);
      // Utilização de expressão regular.
      //^ e $ como início e fim do string respectivamente
      // \s representa qualquer caractere de espaço em branco (espao, tabs etc)
      // O método test() retorna true se a string corresponder a expressão regular
    }

    