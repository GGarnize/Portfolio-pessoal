/**
 * Guilherme de Oliveira Garnize RU: 4579677
 * Curso de Análise e Desenvolvimento de Sistemas - UNINTER
 * Matéria: Fundamentos da Programação Web
 *
 * Decidi fazer neste formato por causa do meu conehcemento prévio do meu dia a dia
 * como desenvolvedor.
 * Acredito que atende a todos os requisitos propostos no trabalho. e de uma maneira que
 * para mim foi a mais fácil!!
 */

// Função para gerar o conteúdo da página inicial
function homeContent() {
  return `
        <div class="home-container">
            <h1 class="main-title">Guilherme de Oliveira Garnize.</h1>
            <p class="boxcontent">RU: 4579677</p>
            <p class="boxcontent">Curso de Análise e Desenvolvimento de Sistemas - UNINTER</p>
            <p class="boxcontent">Matéria: Fundamentos da Programação Web</p>
            <p class="boxcontent">Conduzido pelo compromisso com a excelência e a inovação, desafiando limites para criar soluções que impactam significativamente o mundo.</p>
        </div>
    `;
}

// Função para gerar o conteúdo da página "Sobre Mim"
function sobreMimContent() {
  return `
        <div class="sobre-container">
            <h1 class="main-title">Sobre Mim</h1>
            <p class="boxcontent">Minha jornada no mundo da tecnologia começou nos bastidores, como técnico de informática. Aqui, mergulhei nos fundamentos de software e sistemas, além da manutenção de hardware. Esses primeiros passos me deram uma base robusta e uma visão clara das necessidades dos usuários.</p>
            <p class="boxcontent">Com o tempo, evoluí para a área de infraestrutura, cuidando do monitoramento de servidores e links de internet, onde aprimorei habilidades essenciais para manter sistemas e serviços sempre disponíveis e seguros.</p>
            <p class="boxcontent">No momento, meu foco está em desenvolvimento na Data4Company, onde me dedico a criar e otimizar microserviços. Trabalho com sistemas de gerenciamento de usuários escaláveis e seguros, além de integrar APIs para diversas funcionalidades, como importação de dados de sistemas ERP e rastreamento de cargas.</p>
            <p class="boxcontent">Cada etapa da minha carreira contribuiu para o meu leque de habilidades técnicas e de resolução de problemas. Estou sempre em busca de novos desafios e oportunidades para aplicar e expandir minhas habilidades, visando criar soluções inovadoras que atendam às demandas do mercado.</p>
            <p class="boxcontent">Eu nunca achei necessário fazer faculdade. Já tentei iniciar cursos de administração e até mesmo ADS por três vezes, mas tive que parar, pois não via necessidade naquilo. Porém, tudo mudou quando descobri um MBA que realmente despertou meu interesse. Vi então a necessidade de fazer a graduação, como um passo fundamental para alcançar esse conhecimento superior e cumprir minha meta de concluir o MBA que se tornou minha maior ambição.</p>
            <button class="btn-voltar">Voltar</button>
        </div>
    `;
}

// Função para gerar o conteúdo da página "Formação"
function formacaoContent() {
  return `
        <div class="formacao-container">
            <h1 class="main-title">Formação</h1>
            <p class="boxcontent">Atualmente, estou focado em adquirir conhecimento prático e técnico por meio de cursos, treinamentos e projetos pessoais. Embora não tenha concluído nenhum curso de graduação, estou constantemente buscando oportunidades de aprendizado e desenvolvimento profissional.</p>
            <p class="boxcontent">Alguns dos cursos de graduação que iniciei:</p>
            <ul>
                <li>Administração - Uniasselvi (2 semestres)</li>
                <li>Administração - Anhanguera (1 semestre)</li>
                <li>Análise e Desenvolvimento de Sistemas - Anhanguera(1 semestre)</li>
                <li>Análise e Desenvolvimento de Sistemas - UNINTER(Atual)</li>
            </ul>
            <p class="boxcontent">Alguns dos cursos extras que já concluí:</p>
            <ul>
                <li>Imersão FullCycle (2 vezes)</li>
                <li>Cursos sobre boas práticas de programação (HTML, CSS, JavaScript e React) - Udemy</li>
                <li>Certificação LARAVEL JUNIOR - JOBS TREINAMENTOS</li>
                <li>Cursos sobre NestJS e NextJs - Udemy</li>
                <li>Curso de PHP - Udemy</li>
                <li>Curso de manutenção de computadores e notebooks (2014)</li>
                <li>Entre outros cursos avulsos...</li>
            </ul>
            <p class="boxcontent">Além disso, participo regularmente de workshops, conferências e eventos da indústria para me manter atualizado com as últimas tendências e tecnologias.</p>
            <button class="btn-voltar">Voltar</button>
        </div>
    `;
}

// Função para gerar o conteúdo da página "Meu Portfólio"
function portfolioContent() {
  return `
        <div class="portfolio-container">
            <h1 class="main-title">Meu Portfólio</h1>
            <div class="project">
                <h2 class="project-title">Meu Perfil no GitHub</h2>
                <p class="project-description">Não tenho muitos projetos particulares no meu GitHub, mas você pode conferir meu perfil.</p>
                <div class="project-links"><a href="https://github.com/GGarnize/" target="_blank" class="project-link"><i class="fab fa-github"></i> GGarnize</a></div>
            </div>
            <div class="project">
                <h2 class="project-title">Startup - Game</h2>
                <p class="project-description">Esse projeto é um desafio pessoal que estabeleci para mim mesmo.</p>
                <p class="project-description">Decidi usar meu conhecimento em Laravel (PHP) e React (Typescript/Javascript) para criar um jogo de simulação de startup.</p>
                <div class="project-links"><a href="https://github.com/GGarnize/startupgame" target="_blank" class="project-link"><i class="fab fa-github"></i> Startup Game</a></div>
            </div>
            <div class="project">
                <h2 class="project-title">Bot Telegram</h2>
                <p class="project-description">Criei um bot de Telegram para ajudar na gestão de uma barbearia de um amigo.</p>
                <p class="project-description">O bot consome um backend desenvolvido por uma amiga e ambos foram feitos utilizando apenas Javascript (Node.js).</p>
                <div class="project-links"><a href="https://github.com/GGarnize/bot-telegram" target="_blank" class="project-link"><i class="fab fa-github"></i> Bot Telegram</a></div>
                <div class="project-links"><a href="https://github.com/GGarnize/backend-barbershop" target="_blank" class="project-link"><i class="fab fa-github"></i> Backend</a></div>
            </div>
            <div class="project">
                <h2 class="project-title">Projetos pela Empresa</h2>
                <p class="project-description">Não tenho muitos projetos no meu GitHub pessoal, mas tenho muitos projetos feitos pela empresa.</p>
                <p class="project-description">Estes incluem FrontEnds feitos em Quasar (Vue.js), React, PHP, e BackEnds feitos em Laravel (PHP), NodeJs, .Net (C#).</p>
                <p class="project-description">Também tenho 2 projetos de apps, usando Expo que utiliza React-native.</p>
            </div>
            <button class="btn-voltar">Voltar</button>
        </div>
    `;
}

/**
 *  Função para gerar o conteúdo da página "Contato"
 *  Essa foi um pouco diferente, porque para que funcione o su bmit.
 *  Para isso, foi necessário adicionar um event listener para o formulário.
 *  só que tive que adicionar o listner na função, porque se eu adicionar no
 *  js direto, ele fica "submit" como undefined, pois o form nao tinha sido montado ainda
 * */
function contatoContent() {
  // Adiciona event listener para o formulário de contato aqui
  setTimeout(() => {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        // Previne o comportamento padrão do formulário (enviar o formulário para o navegador)
        event.preventDefault();

        // Captura os valores dos campos pelo ID
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Envia os dados para o Formspree (plataforma de envio de e-mail)
        fetch("https://formspree.io/f/xwkgqyvd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        })
          .then((response) => {
            // Limpa os campos se o envio for bem-sucedido
            if (response.ok) {
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
              alert("Mensagem enviada com sucesso!");
            } else {
              // Exibe uma mensagem de erro se o envio falhar
              alert(
                "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
              );
            }
          })
          .catch((error) => {
            console.error("Erro:", error);
            // Exibe uma mensagem de erro se ocorrer um erro durante o envio
            alert(
              "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
            );
          });
      });
  }, 0);

  // Retorna o HTML do conteúdo da página "Contato"
  return `
        <div class="contato-container">
            <h1 class="main-title">Contato</h1>
            <form id="contact-form" class="contact-form">
              <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>
                      </div>
              <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                  <label for="message">Mensagem:</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn-submit">Enviar</button>
          </form>
          <button class="btn-voltar">Voltar</button>
        </div>
    `;
}

// Função para definir o botão "ativo" no menu
function setActiveButton(selectedButtonId) {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((button) => {
    if (button.id === selectedButtonId) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Estutar evento para o clique no botão "Home"
document.getElementById("home").addEventListener("click", () => {
  document.getElementById("content").innerHTML = homeContent();
  setActiveButton("home");
});

// Escutar evento do clique no botão "Sobre mim"
document.getElementById("sobreMim").addEventListener("click", () => {
  document.getElementById("content").innerHTML = sobreMimContent();
  setActiveButton("sobreMim");
});

// Escutar evento do clique no botão "Formação"
document.getElementById("formacao").addEventListener("click", () => {
  document.getElementById("content").innerHTML = formacaoContent();
  setActiveButton("formacao");
});

// Escutar evento do clique no botão "Portfolio"
document.getElementById("portfolio").addEventListener("click", () => {
  document.getElementById("content").innerHTML = portfolioContent();
  setActiveButton("portfolio");
});

// Escutar evento do clique no botão "Contato"
document.getElementById("contato").addEventListener("click", () => {
  document.getElementById("content").innerHTML = contatoContent();
  setActiveButton("contato");
});

// Event listener para carregar o conteúdo "Home" por padrão quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("content").innerHTML = homeContent();
  setActiveButton("home"); // Define a home como ativa logo qdo carregar a página!

  // Adiciona event escutando o botão "Voltar" em todos os conteúdos
  document.getElementById("content").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-voltar")) {
      document.getElementById("content").innerHTML = homeContent();
      setActiveButton("home");
    }
  });
});
