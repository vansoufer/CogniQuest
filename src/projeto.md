# BLUEPRINT

- Na página inicial, tem dois botões: pesquisar por questão e pesquisar por tema
- Quando clicar no botão pesquisar por questão, vai para a página de pesquisa por questão na pasta searchByQuestion
- Quando clicar no botão pesquisar por tema, vai para a página de pesquisa por tema na pasta searchByTheme

- Nas duas páginas, pesquisar por questão e pesquisar por tema, deverá haver um header contendo:
- Botão voltar | Logo: imagem logo.png da pasta public e Título: "CogniQuest" centralizados no header

- As duas páginas devem ter o mesmo estilo, ou seja, o mesmo css, seguindo o mesmo padrão de design estilo e cores da página inicial (pages.tsx)

- Na página pesquisar por questão deverá haver:

em uma caixa:
- campo input com button 'enviar' dentro (criar um componente para isso)
- caixa embaixo contendo os botões caso o usuario prefira enviar imagem em vez de texto:
- Tirar foto (disponivel apenas em dispositivos moveis com camera)
- Enviar foto
- Enviar print (do clipboard)
- Outra Questão (Inicialmente oculto)
- utilizar icones para os botões
- usar componente NavButton para os botões
- a caixa deve ter o fundo na cor

em outra caixa as respostas:

- NavTab: Aula Completa
    - Exibir um texto em markdown
- NavTab: Links
    - Exibir um texto em markdown

Funções da página pesquisar por questão:
- Função para botão Enviar texto
- Função para botão Tirar foto
- Função para botão Enviar foto
- Função para botão Enviar print (do clipboard)
O primeiro botão rece um texto e envia para a função Processar texto, os outros 3 botões recebem uma foto e enviam para a função Processar Foto:
- Função Processar texto: 
  - recebe o texto e envia para a função Processar texto
  - se der certo, chama a função Exibir Resultados com o return do gemini, 
	- se der erro, exibe a mensagem de erro
- Função Processar foto: 
	- envia a foto pra função que chama a Função Gemini, e espera a resposta, 
	- se der certo, chama a função Exibir Resultados com o return do gemini, 
	- se der erro, exibe a mensagem de erro
- Função Exibir Resultados:
	- Recebe o objeto que contém os dois resultados, e atualiza o conteúdo das duas navtabs exibindo as respostas nas navtabs correspondentes usando formatação markdown.
- Função Gemini: envia duas solicitações, com a mesma imagem, ou texto, e retorna o objeto com as duas respostas separadas.

Além disso:
- Adiciona event listeners aos botões.
- Inicializa as navtabs.
- Implementa a funcionalidade do botão "Outra Questão": A função do botão Outra Questão para ter a função de f5, ou seja, forçar recarregar a página, e além disso, limpar todos os cookies, cache e dados da página, para resetar do zero

Importações:
- api do google gemini
- ícones bonitos para os botões 

Pontos de atenção:
1. Lembre-se de garantir que a Função Gemini seja global ou importada corretamente para que este código funcione, a função será usada na pesquisa por questão e na pesquisa por tema.
2. Ajuste as permissões do navegador para acessar a câmera e a área de transferência.
3. Faça a importação necessária em cada arquivo, declare as variaveis locais e globais necessárias, importe corretamente a api do Gemini


- Na página pesquisar por tema deverá haver:


em uma caixa os campos:
- campo input com button 'enviar texto' dentro (usar o mesmo componente do input de texto da pesquisa por questão)
- Botão Outra Questão (Inicialmente oculto) 


-usar o componente NavButton para os botões

em outra caixa as respostas:

- NavTab: Aula Completa
    - Exibir um texto em markdown
- NavTab: Exercícios Resolvidos
    - Exibir um texto em markdown
- NavTab: Matériais de apoio
    - Exibir um texto em markdown

Importações:

- api do google gemini


Funções:
- Função para enviar texto apertando enter no teclado
- Função para enviar texto apertando o botão Enviar texto 
Essas 2 funções recebem um texto e enviam para a função Processar Texto:
- Função Processar texto: 
	- envia o texto pra função que chama a Função Gemini, e espera a resposta, 
	- se der certo, chama a função Exibir Resultados com o return do gemini, 
	- se der erro, exibe a mensagem de erro
- Função Exibir Resultados:
	- Recebe o objeto que contém os três resultados, e atualiza o conteúdo das três navtabs exibindo as respostas nas navtabs correspondentes.
- Função Gemini: envia três solicitações, com o mesmo texto, e retorna o objeto com as três respostas separadas.


Além disso:
- Adiciona event listeners aos botões.
- Inicializa as navtabs.
- Implementa a funcionalidade do botão "Outra Questão": A função do botão Outra Questão para ter a função de f5, ou seja, forçar recarregar a página, e além disso, limpar todos os cookies, cache e dados da página, para resetar do zero


Pontos de atenção:
1. Lembre-se de garantir que a Função Gemini seja global ou importada corretamente para que este código funcione.
2. Faça a importação necessária em cada arquivo, declare as variaveis locais e globais necessárias, importe corretamente a api do Gemini

gemini API KEY: AIzaSyC1uP0wjQaWbOk-qRRl8e5f9-T_hqNVnE0

//prompts para o gemini pesquisar por questão:

Prompts:


const prompt1 = "- Você vai ensinar uma aula completa sobre tudo o que precisa saber para resolver esse tipo de questão por conta própria. Toda a teoria por trás da questão, mas ainda sem entrar na explicação da questão. A aula deve ser dada usando o método Feynman, e deve ser o mais completa possível, explorando toda a teoria necessária para resolver a questão.\n- Ao final, adicione uma seção chamada \"CheatSheet: liste todas as Fórmulas e conceitos necessários ter em mente para resolver o exercício da foto.\n\nFormatação:\n- Use markdown extensivamente para estruturar o conteúdo, incluindo títulos, subtítulos, fórmulas, listas numeradas e com marcadores.\n- Destaque conceitos-chave, fórmulas e passos importantes usando negrito, itálico ou blocos de código quando apropriado.\n";

const prompt2 = "1. Liste os tópicos que a questão aborda, com um termo de pesquisa para o Youtube. \n2. Liste um termo de pesquisa específico para um exercício resolvido similar. (Por exemplo, se usuário enviou uma foto e após analisá-la, você identificar que a questão é sobre MRU, retorne termos de pesquisa como \"exercício resolvido movimento retilíneo uniforme\")\n\nFormatação:\n- Use marcadores para listar os tópicos.\n- Para cada termo de pesquisa, crie um link direto para a busca no YouTube no formato: [Termo de Pesquisa](https://www.youtube.com/results?search_query=termo+de+pesquisa+formatado).\n- Utilize markdown para estruturar e formatar o texto, incluindo títulos, subtítulos e ênfases onde apropriado.\n\nExemplo de estrutura:\n\n## Tópicos Abordados\n- Tópico 1: [Termo de Pesquisa](link)\n- ...\n\n## Como encontrar exercícios resolvidos similares\n- Exercício resolvido de ... : [Termo de Pesquisa](link)\n- ...\n";


// prompts para o gemini pesquisar por tema:

const prompt1 = "\nVocê vai receber um texto e você vai ensinar uma aula completa sobre o assunto contendo toda a teória, vai listar os principais conceitos com uma explicação sobre a teoria por traz deles. A aula deve ser dada usando o método Feynman, e deve ser o mais completa possível\nFormatação:\n\nUse markdown extensivamente para estruturar o conteúdo, incluindo títulos, subtítulos, fórmulas, listas numeradas e com marcadores.\n\nDestaque conceitos-chave, fórmulas e passos importantes usando negrito, itálico ou blocos de código quando apropriado.\n";

const prompt2 = "Você vai receber um texto e você vai dar 3 exemplos de exercicios/ questões/problemas sobre o tema do texto recebido e a explição do passo a passo que leva a solução deles e no final coloque links de referencias para questões similares\nExemplo:\nQuestão 1: [Termo de Pesquisa](link de origem da questão)\n## explicação e passo a passo para resolver ela\nFormatação:\n- Use markdown extensivamente para estruturar o conteúdo, incluindo títulos, subtítulos, fórmulas, listas numeradas e com marcadores.\n- Destaque conceitos-chave, fórmulas e passos importantes usando negrito, itálico ou blocos de código quando apropriado.\n\n\n";

const prompt2 ="Você vai receber um texto e você vai gerar apenas uma lista contendo recursos, sem fazer nenhuma resumo introdução ou explicação, sobre o tema e sobre os conceitos chave do tema, tópicos importantes e relevantes como links para vídeos, artigos e outros recursos relevantes para maior entendimento do tema, a lista deve conter o titulo do recurso e o link, e deve ser formatada em markdown\n\nFormatação:\n\n-listas numeradas e com marcadores.\n\nDestaque conceitos-chave, usando negrito, itálico ou blocos de código quando apropriado.\n";


DOCUMENTAÇÃO GEMINI (node.js):

Instalar o pacote do SDK
Para usar a API Gemini no seu aplicativo, você precisa instalar o Pacote GoogleGenerativeAI para Node.js:


npm install @google/generative-ai
Inicializar o modelo generativo
Antes de fazer qualquer chamada de API, você precisa importar e inicializar o um modelo generativo.


const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// ...

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// ...
Ao especificar um modelo, observe o seguinte:

Use um modelo específico para seu caso de uso (por exemplo, gemini-1.5-flash) é para entrada multimodal). Neste guia, as instruções para cada de implementação lista o modelo recomendado para cada caso de uso.

Observação: para informações detalhadas sobre os modelos disponíveis, incluindo recursos e limitações de taxa, confira os modelos do Gemini. Oferecemos opções para solicitar aumentos de limite de taxa se o padrão não é suficiente.
Implemente casos de uso comuns
Agora que seu projeto está configurado, você pode usar a API Gemini para implementar diferentes casos de uso:

Gerar texto com base em uma entrada somente de texto
Gerar texto com base em entradas de texto e imagem (multimodal)
Criar conversas em várias interações (chat)
Usar o streaming para interações mais rápidas
Na seção de casos de uso avançados, você encontra informações sobre a API Gemini e embeddings.

Gerar texto com base em uma entrada somente de texto
Quando a entrada do comando incluir apenas texto, use um modelo Gemini 1.5 com generateContent para gerar a saída de texto:


const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
Observação :a API Gemini também oferece suporte a streaming. para mais detalhes, consulte Use o streaming para interações mais rápidas (neste guia).
Gerar texto com base em entradas de texto e imagem (multimodal)
Observação: se os comandos excederem 20 MB, faça upload dos arquivos de mídia. com a API File.
O Gemini 1.5 Flash e o 1.5 Pro podem lidar com entrada multimodal para que você possa inserir texto e imagens. Não se esqueça de analisar requisitos de imagem para comandos.

Quando a entrada do comando incluir texto e imagens, use um modelo Gemini 1.5 com o método generateContent para gerar uma saída de texto:


const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "What's different between these pictures?";

  const imageParts = [
    fileToGenerativePart("image1.png", "image/png"),
    fileToGenerativePart("image2.jpeg", "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
Observação :a API Gemini também oferece suporte a streaming. para mais detalhes, consulte Use o streaming para interações mais rápidas (neste guia).
Criar conversas de várias interações (chat)
Com o Gemini, você pode criar conversas em formato livre em vários turnos. O O SDK simplifica o processo ao gerenciar o estado da conversa, portanto, ao contrário do que com generateContent, não é necessário armazenar o histórico de conversas você mesmo.

Para criar uma conversa de vários turnos (como um chat), use um modelo Gemini 1.5 ou o Gemini 1.0 Pro e inicialize a conversa chamando startChat(). Em seguida, use sendMessage() para enviar uma nova mensagem de usuário, que também anexará o e a resposta ao histórico de chat.

Há duas opções possíveis para role associadas ao conteúdo em um conversa:

user: o papel que fornece os comandos. Esse valor é o padrão para sendMessage.

model: o papel que fornece as respostas. Esse papel pode ser usado chamando startChat() com as history existentes.

.

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello, I have 2 dogs in my house." }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const msg = "How many paws are in my house?";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
Observação: a API Gemini também oferece suporte a streaming. para mais detalhes, consulte Use o streaming para interações mais rápidas (neste guia).
Use o streaming para interações mais rápidas
Por padrão, o modelo retorna uma resposta após a conclusão de toda a geração de desenvolvimento de software. Para ter interações mais rápidas, não espere resultado e, em vez disso, usar streaming para lidar com resultados parciais.

O exemplo abaixo mostra como implementar o streaming com o Método generateContentStream para gerar texto com base em uma entrada de texto e imagem. prompt de comando.


//...

const result = await model.generateContentStream([prompt, ...imageParts]);

let text = '';
for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  console.log(chunkText);
  text += chunkText;
}

//...
Você pode usar uma abordagem semelhante para casos de uso de entrada somente de texto e chat.


// Use streaming with text-only input
const result = await model.generateContentStream(prompt);
Consulte o exemplo de chat acima para saber como instanciar um chat.


// Use streaming with multi-turn conversations (like chat)
const result = await chat.sendMessageStream(msg);
Implementar casos de uso avançados
Os casos de uso comuns descritos na seção anterior deste tutorial ajudam a se familiarizar com o uso da API Gemini. Esta seção descreve algumas casos de uso que podem ser considerados mais avançados.

Usar embeddings
Embedding é uma técnica usada para representar informações como uma lista de números de ponto flutuante em uma matriz. Com o Gemini, é possível representar texto (palavras, frases e blocos de texto) em forma vetorizada, tornando-o mais fáceis de comparar e contrastar embeddings. Por exemplo, dois textos que compartilham objeto em questão ou sentimento semelhante devem ter embeddings semelhantes, que podem ser identificados por meio de técnicas de comparação matemática, como a similaridade de cossenos.

Use o modelo embedding-001 com o método embedContent (ou o batchEmbedContent) para gerar embeddings. O exemplo a seguir gera um embedding para uma única string:


const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For embeddings, use the embedding-001 model
  const model = genAI.getGenerativeModel({ model: "embedding-001"});

  const text = "The quick brown fox jumps over the lazy dog."

  const result = await model.embedContent(text);
  const embedding = result.embedding;
  console.log(embedding.values);
}

run();
Chamadas de função
A chamada de função facilita o recebimento de saídas de dados estruturados de modelos generativos. Você pode usar essas saídas para chamar outras APIs e retornar os dados de resposta relevantes ao modelo. Em outras palavras, a chamada de função ajuda você conecta modelos generativos a sistemas externos para que o conteúdo gerado inclui as informações mais atualizadas e precisas. Saiba mais na tutorial sobre chamada de função.

Contar tokens
Ao usar prompts longos, pode ser útil contar os tokens antes de enviar conteúdo ao modelo. Os exemplos a seguir mostram como usar countTokens(). para diversos casos de uso:


// For text-only input
const { totalTokens } = await model.countTokens(prompt);

// For text-and-image input (multimodal)
const { totalTokens } = await model.countTokens([prompt, ...imageParts]);

// For multi-turn conversations (like chat)
const history = await chat.getHistory();
const msgContent = { role: "user", parts: [{ text: msg }] };
const contents = [...history, msgContent];
const { totalTokens } = await model.countTokens({ contents });
Opções para controlar a geração de conteúdo
É possível controlar a geração de conteúdo configurando parâmetros de modelo e usando configurações de segurança.

A transmissão de generationConfig ou safetySettings a uma solicitação de modelo (como generateContent) vai substituir totalmente o objeto de configuração com o mesmo nome transmitido em getGenerativeModel.

Configurar parâmetros do modelo
Cada comando que você envia ao modelo inclui valores de parâmetros que controlam como o modelo gera uma resposta. O modelo pode gerar diferentes resultados para diferentes valores de parâmetros. Saiba mais sobre Parâmetros do modelo.


const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 200,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",  generationConfig });
Usar as configurações de segurança
É possível usar as configurações de segurança para ajustar a probabilidade de receber respostas que pode ser considerado nocivo. Por padrão, as configurações de segurança bloqueiam conteúdo com tamanho e/ou alta probabilidade de ser um conteúdo não seguro em todas as dimensões. Aprender Saiba mais sobre as Configurações de segurança.

Veja como definir uma configuração de segurança:


import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

// ...

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
Também é possível definir mais de uma configuração de segurança:


const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];
