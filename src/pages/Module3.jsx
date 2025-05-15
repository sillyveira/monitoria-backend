export default function Module3() {
  const codigo1 = `
  try {
    // Código que pode gerar erro
  } catch (erro) {
    // Código que lida com o erro
  }
`;
  return (
    <div>
      <h1 className="text-2xl mb-2">
        <strong>Sumário</strong>
      </h1>
      <ul className="mb-6 space-y-2">
        <li>
          <a href="#cap1" className="text-blue-700 hover:underline">
            Cap 1 - Como guardamos as senhas?
          </a>
        </li>
        {/* <li>
          <a href="#cap2" className="text-blue-700 hover:underline">
            Cap 2 - Criando o banco MongoDB Atlas
          </a>
        </li>
        <li>
          <a href="#cap3" className="text-blue-700 hover:underline">
            Cap 3 - Migrando para o Mongoose
          </a>
        </li>
        <li>
          <a href="#cap4" className="text-blue-700 hover:underline">
            Cap 4 - Deixando o projeto robusto
          </a>
        </li> */}
        {/* <li>
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
          📘 Capítulo 1 – Como guardamos senhas?
        </h2>

        <p className="mb-4">
          Coloquei uma analogia fofa para vocês entenderem o processo da
          criptografia das senhas. Em resumo, criptografamos as senhas para
          adicionar uma barreira a mais de segurança ao nosso projeto. Nenhum
          sistema é 100% seguro, então tomamos várias medidas para dificultar
          ainda mais esse acesso, sendo tão custoso invadir que não vale a pena.
        </p>

        <div className="aspect-video mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/oyp2GtXN0BA"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="font-semibold text-xl">
          Materiais complementares ao vídeo: <br />
        </h2>
        <p>(Perdão, não consegui achar materiais em português de qualidade. O inglês desses criadores é bem limpo, as legendas automáticas do youtube devem dar conta)</p>
        <ul>
          <li>
            [Inglês]{" "}
            <a
              className="text-blue-500"
              href="https://www.youtube.com/watch?v=--tnZMuoK3E"
              target="_blank"
              rel="noopener noreferrer"
            >
              Password Hashing, Salts, Peppers | Explained!
            </a>
          </li>
          <li>
            [Inglês]{" "}
            <a
              className="text-blue-500"
              href="https://www.youtube.com/watch?v=qgpsIBLvrGY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Password Storage Tier List: encryption, hashing, salting, bcrypt and beyond
            </a>
          </li>
        </ul>

        <hr className="mt-16 mb-4" />

        <p>Atualizado pela última vez em: 15/05/25</p>
      </section>
    </div>
  );
}
