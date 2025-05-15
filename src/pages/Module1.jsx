export default function Module1() {
  return (
    <div>
      <h1 className="text-2xl mb-2">
        <strong>Sumário</strong>
      </h1>
      <ul className="mb-6 space-y-2">
        <li>
          <a href="#cap1" className="text-blue-700 hover:underline">
            Cap 1 - Boas-vindas e Contexto do Curso
          </a>
        </li>
        <li>
          <a href="#cap2" className="text-blue-700 hover:underline">
            Cap 2 - Introdução ao backend
          </a>
        </li>
        <li>
          <a href="#cap3" className="text-blue-700 hover:underline">
            Cap 3 - Seu primeiro servidor
          </a>
        </li>
        <li>
          <a href="#cap4" className="text-blue-700 hover:underline">
            Cap 4 - Criando um servidor Express + rotas
          </a>
        </li>
        <li>
          <a href="#cap5" className="text-blue-700 hover:underline">
            Cap 5 - Refactoring de Modularização
          </a>
        </li>
        {/* <li>
          <a href="#exemplos" className="text-blue-700 hover:underline">
            Exemplos
          </a>
        </li> */}
      </ul>

      <section className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h2 id="cap1" className="text-2xl font-bold mb-4">
          📘 Capítulo 1 – Boas-vindas e Contexto do Curso
        </h2>

        <p className="mb-4">
          Seja bem-vindo à nossa jornada pelo desenvolvimento backend com
          Node.js!
        </p>

        <p className="mb-4">
          A ideia desse material é te guiar passo a passo na construção de
          aplicações web do lado do servidor — ou seja, tudo o que acontece “por
          trás das cortinas” quando você usa um site ou aplicativo. Aqui, vamos
          entender como funciona o backend, aprender a criar APIs e desenvolver
          sistemas que recebem dados, processam informações e respondem de forma
          organizada para quem está do outro lado: o usuário.
        </p>

        <p className="mb-4">
          O foco vai ser sempre entender primeiro o{" "}
          <strong>conceito geral</strong>, e só depois ir aprofundando aos
          poucos com exemplos práticos. Isso ajuda a não se perder nos detalhes
          técnicos logo de cara, e facilita para quem ainda está pegando o jeito
          com JavaScript ou com a lógica por trás da web.
        </p>

        <p className="mb-4">
          Pela minha experiência de aprendizado aprender linearmente sem visar o
          "todo" no início me deixou bastante perdido no processo de aprender o
          backend. Você perceberá que é um <strong>conteúdo bem extenso</strong>{" "}
          em questão de conceitos. Por exemplo, para criar um simples login em
          um site, você vai precisar ter noção de como os dados são guardados em
          um banco de dados, como ter certeza que esses dados estão sendo
          enviados de forma segura, como criptografar a senha, como funciona
          sessões, e por aí vai... Mas não se preocupe! Em algum momento tudo
          isso se tornará <strong>muito natural</strong> para você, vem comigo
          :D
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          O que você pode esperar por aqui:
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Aprender como a internet funciona por trás do navegador.</li>
          <li>Criar seu próprio servidor web usando Node.js.</li>
          <li>
            Entender e usar conceitos como rotas, métodos HTTP, requisições e
            respostas.
          </li>
          <li>
            Escrever APIs com Express e organizar seu código de forma
            profissional.
          </li>
          <li>Praticar com projetos reais e desafios simples, mas úteis.</li>
        </ul>

        <p className="mb-6">
          Ah, e pode ficar tranquilo: você não precisa saber tudo de JavaScript
          ou já ter experiência com backend. O material foi feito para ir
          crescendo com você, do básico ao mais avançado, sempre com explicações
          acessíveis e exemplos comentados. É interessante que você tenha
          uma base mínima em Javascript, mas não é obrigatório, eu irei explicar tudo que eu programar. Enfim, recomendo esse vídeo aqui antes de
          começar:
        </p>

        <div className="aspect-video mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/VWwat030fXs"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <hr className="mt-24" />

        <h2 id="cap2" className="text-2xl font-bold mt-24 mb-4">
          📘 Capítulo 2 – Introdução ao backend.
        </h2>
        <p className="mt-4 mb-4">
          Vamos começar pelo começo: O que é o backend? Qual a diferença do
          front para o back? E como funciona a comunicação back-front. Criei um
          vídeo com uma analogia bem mastigadinha para que você entenda esse
          início de conceito. Mais para frente iremos nos aprofundar no que foi
          apresentado aqui.
        </p>

        
        <div className="aspect-video mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/VGubgBfBXes"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="font-semibold text-xl">Materiais complementares ao vídeo:</h2>
        <ul>
          <li>
            [Inglês]{" "}
            <a
            className="text-blue-500"
              href="https://www.youtube.com/watch?v=XBu54nfzxAQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              What is Backend
            </a>
          </li>
          <li>
            [Português]{" "}
            <a
            className="text-blue-500"
              href="https://www.youtube.com/watch?v=AABqPceCwZk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Como funciona a internet?
            </a>
          </li>
          <li>
            [Português]{" "}
            <a
            className="text-blue-500"
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uma visão geral do HTTP
            </a>
          </li>
          <li>
            [Português]{" "}
            <a
            className="text-blue-500"
              href="https://www.oracle.com/br/database/what-is-database/"
              target="_blank"

            >
              O que é um banco de dados?
            </a>
          </li>
        </ul>

        <hr className="mt-24" />

        <h2 id="cap3" className="text-2xl font-bold mt-24 mb-4">
          📘 Capítulo 3 – Seu primeiro servidor.
        </h2>
        <p className="mt-4 mb-4">Vamos criar nosso primeiro servidor com a biblioteca http do Node.JS!</p>
        <div className="aspect-video mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/_bVqbBsSZlw"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <hr className="mt-24" />
        <h2 id="cap4" className="text-2xl font-bold mt-24 mb-4">
          📘 Capítulo 4 – Criando um servidor Express.
        </h2>
        <p className="mt-4 mb-4">Aprenderemos a criar o projeto Express, as primeiras rotas, uso de parâmetros e JSON. Além de revisar alguns conceitos de Javascript.</p>
        <div className="aspect-video mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/IWqENk2lwAE"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <hr className="mt-24" />
        <h2 id="cap5" className="text-2xl font-bold mt-24 mb-4">
          📘 Capítulo 5 – CRUD (GET, POST, PUT, DELETE) & Middleware.
        </h2>
        <p className="mt-4 mb-4">Terminaremos o nosso CRUD (Create, Read, Update, Delete) e aprenderemos sobre middlewares.</p>
        <div className="aspect-video mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/izB8ods0C7M"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <hr className="mt-24" />
        <h2 id="cap6" className="text-2xl font-bold mt-24 mb-4">
          📘 Capítulo 6 – Modularização do projeto.
        </h2>
        <p className="mt-4 mb-4">Nesse capítulo iremos modularizar o projeto em diferentes pastas e arquivos ao invés de ter um código espaguete. Esse processo de organizar e reescrever o código para otimizá-lo sem adicionar features se chama refactoring.</p>
        <div className="aspect-video mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/WxpLAIhvFvs"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </section>
    </div>
  );
}
