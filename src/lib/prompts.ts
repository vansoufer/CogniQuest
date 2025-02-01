export const PROMPTS = {
  QUESTION: {
    AULA: `Você vai ensinar uma aula completa sobre tudo o que precisa saber para resolver esse tipo de questão por conta própria.
Toda a teoria por trás da questão, mas ainda sem entrar na explicação da questão.
A aula deve ser dada usando o método Feynman e deve ser o mais completa possível, explorando toda a teoria necessária para resolver a questão.
Ao final, adicione uma seção chamada "CheatSheet": liste todas as Fórmulas e conceitos necessários ter em mente para resolver o exercício.

Formatação:
- Use markdown extensivamente para estruturar o conteúdo, incluindo títulos, subtítulos, fórmulas, listas numeradas e com marcadores.
- Destaque conceitos-chave, fórmulas e passos importantes usando negrito, itálico ou blocos de código quando parecer apropriado.`,

    LINKS: `1. Liste os tópicos que a questão aborda, com um termo de pesquisa para o Youtube.
2. Liste um termo de pesquisa específico para um exercício resolvido similar.

Formatação:
• Use marcadores para listar os tópicos.
• Para cada termo de pesquisa, crie um link direto para a busca no YouTube.
• Utilize markdown para estruturar e formatar o texto, incluindo títulos, subtítulos e ênfases onde apropriado.`
  },

  THEME: {
    AULA: `Você vai receber um texto contendo um termo e deve retornar uma aula completa sobre o assunto contendo toda o estudo teórico, vai listar os principais conceitos com uma explicação sobre a teoria por traz deles. A aula deve ser dada usando o método Feynman, e deve ser o mais completa possível.

Formatação:
- Use markdown extensivamente para estruturar o conteúdo, incluindo títulos, subtítulos, fórmulas, listas numeradas e com marcadores.
- Destaque conceitos-chave usando negrito, itálico ou blocos de código quando apropriado.`,

    EXERCICIOS: `Você vai receber um texto e vai retornar uma resposta conténdo apenas 3 exemplos de exercicios/questões/problemas sobre o tema e a o passo a passo que leva a solução deles, sem adicionar nenhum resumo, introdução ou explicação sobre o tema, e no final coloque links de referencias para questões similares.

Exemplo:
Questão 1: [Termo de Pesquisa](link de origem da questão)

Formatação:
- Use markdown extensivamente para estruturar o conteúdo, incluindo títulos, subtítulos, fórmulas, listas numeradas e com marcadores.
- Destaque conceitos-chave, fórmulas e passos importantes usando negrito, itálico ou blocos de código quando apropriado.`,

    MATERIAIS: `Você vai receber um texto e vai gerar uma resposta contendo apenas uma lista links, vídeos, artigos, livros e outros recursos relevantes para maior entendimento do tema e os conceitos relevantes para entendimento sobre o tema, sem fazer nenhuma resumo introdução ou explicação sobre o tema.

Formatação:
- Use markdown extensivamente para estruturar o conteúdo, incluindo títulos, subtítulos, fórmulas, listas numeradas e com marcadores.
- Destaque conceitos-chave usando negrito, itálico ou blocos de código quando apropriado.

Exemplo:
1- Tema titulo do recurso : link`
  }
}; 