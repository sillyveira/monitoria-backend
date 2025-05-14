export default function Module1() {
  const codigo1 = `
  try {
    // Código que pode gerar erro
  } catch (erro) {
    // Código que lida com o erro
  }
`;

  const codigo2 = `
  try {
    let resultado = 10 / 0;
    console.log("Resultado:", resultado);
  
    let user = JSON.parse('{"nome":"Maria"}'); // OK
    console.log(user.idade); // undefined
  
    let erro = JSON.parse("isso não é JSON"); // Erro aqui!
  } catch (erro) {
    console.log("Algo deu errado:", erro.message);
  }  
  `;

  const codigo3 = `function esperarSegundos(segundos) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Esperou {segundos} segundos');
      }, segundos * 1000);
    });
  }
  
  async function executar() {
    console.log("Iniciando...");
    const mensagem = await esperarSegundos(2); // espera 2 segundos
    console.log(mensagem);
    console.log("Finalizado");
  }
  
  executar();`;

  return (
    <div>
      <h1 className="text-2xl mb-2">
        <strong>Sumário</strong>
      </h1>
      <ul className="mb-6 space-y-2">
        <li>
          <a href="#cap1" className="text-blue-700 hover:underline">
            Cáp 1 - Lidando com futuro e possibilidades
          </a>
        </li>
        {/* <li>
            <a href="#cap2" className="text-blue-700 hover:underline">
              Cáp 2 - Introdução ao backend
            </a>
          </li>
          <li>
            <a href="#cap3" className="text-blue-700 hover:underline">
              Cáp 3 - Seu primeiro servidor
            </a>
          </li>
          <li>
            <a href="#cap4" className="text-blue-700 hover:underline">
              Cáp 4 - Criando um servidor Express + rotas
            </a>
          </li>
          <li>
            <a href="#cap5" className="text-blue-700 hover:underline">
              Cáp 5 - Refactoring de Modularização
            </a>
          </li> */}
        {/* <li>
            <a href="#exemplos" className="text-blue-700 hover:underline">
              Exemplos
            </a>
          </li> */}
      </ul>

      <section className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h2 id="cap1" className="text-2xl font-bold mb-4">
          📘 Capítulo 1 – Lidando com o futuro e possibilidades.
        </h2>

        <p className="mb-4">
          Gostou do nome do capítulo? A maior verdade que vocês vão enfrentar
          com desenvolvimento de software é que ele é imprevisível e mutável.
          Você pode, em um exemplo hipotético, bloquear que o nome de usuário
          seja composto por números ou caracteres especiais. E então, confiante
          na sua validação, você sobe isso para produção. Não esperava pela
          astúcia de um usuário com um teclado japonês que digita seus hiraganas
          e katakanas no formulário, isso hipoteticamente gera um erro na
          gravação do banco de dados e a sua aplicação trava e é desligada. Você
          vai precisar de try/catch para lidar com "possibilidades".
        </p>

        <p className="mb-4">
          Seguindo nesses exemplos... Quando estamos programando localmente,
          tudo é mil maravilhas, você faz uma requisição ao backend e ele te
          devolve em 1 milissegundo, incrível! No entanto, quando você sobe para
          produção, você pode ter que lidar, por exemplo, com o seu servidor do
          backend, com o servidor do banco de dados e com o servidor do
          frontend. Isso, sem dúvidas, pode atrasar uma requisição em poucos
          segundos que são imperceptíveis ao usuário e suficientes para quebrar
          o seu código. Afinal, imagine uma função que depende da anterior mas a
          anterior nem aconteceu ainda, isso é um problema. Você vai precisar
          lidar com o futuro e promessas de funções que nem sabe se darão
          resultado, chamamos isso de função assíncrona.
        </p>

        <h2 className="font-black text-2xl">Try...Catch</h2>
        <p className="mb-4">
          Em JavaScript, usamos o bloco try...catch para capturar e tratar erros
          que ocorrem durante a execução do código. Ele evita que erros causem
          crash no programa, permitindo que você trate os problemas da sua forma
          (ex: mostrar uma mensagem de erro ao usuário, tentar novamente etc.).
        </p>

        <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">
          <code>{codigo1}</code>
        </pre>

        <p className="mb-4">
          O código pode quebrar sem aviso a qualquer momento por erro de código
          ou de serviços dependentes, como um banco de dados externo, que iremos
          usar. Então interceptar esse erro e tratá-lo com segurança é uma
          jogada muito boa a se fazer, é aí que mora a importância do
          try...catch. Veja abaixo um exemplo:
        </p>

        <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">
          <code>{codigo2}</code>
        </pre>

        <h2 className="font-black text-2xl mb-4">Async</h2>
        <p className="mb-4">
          Em JavaScript, ações como acessar uma API, ler arquivos, ou esperar um
          tempo não são instantâneas. Se o código esperasse essas ações
          terminarem antes de continuar, a aplicação travaria. Por isso, usamos
          funções assíncronas para lidar com essas operações sem travar o fluxo.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Conceitos principais
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            {" "}
            <strong>async:</strong> declara uma função como assíncrona e faça
            com que ela retorne uma Promisse (um objeto que pode existir ou não,
            assim como a sua tradução literal sugere).
          </li>
          <li>
            {" "}
            <strong>await</strong>: espera que uma Promise seja resolvida e só
            pode ser usado dentro de funções async.
          </li>
          <h3 className="font-black text-xl">Exemplo:</h3>
          <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">
            <code>{codigo3}</code>
          </pre>
          <h3 className="font-black text-xl">Saída:</h3>
          <p className="mb-4">
            Iniciando... <br />
            (espera 2 segundos) <br />
            Esperou 2 segundos <br />
            Finalizado 
          </p>
        </ul>
        <hr className="mt-24" />
      </section>
    </div>
  );
}
