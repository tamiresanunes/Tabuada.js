// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form"); // Seleciona o formulário de multiplicação
const numberInput = document.querySelector("#number"); // Seleciona o campo de entrada do número base
const multiplicationInput = document.querySelector("#multiplicator"); // Seleciona o campo de entrada do multiplicador

const multiplicationTitle = document.querySelector("#multiplication-title span"); // Seleciona o <span> dentro do título da tabela de multiplicação
const multiplicationTable = document.querySelector("#multiplication-operations"); // Seleciona o elemento que exibe as operações de multiplicação

// Funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = ""; // Limpa a tabela de multiplicação anterior

  for (i = 1; i <= multiplicatorNumber; i++) { // Loop para gerar as linhas da tabela de multiplicação
    const result = number * i; // Calcula o resultado da multiplicação

    const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`; // Cria uma string HTML para a linha da tabela

    const parser = new DOMParser(); // Cria um parser para converter a string em elementos DOM
    const htmlTemplate = parser.parseFromString(template, "text/html"); // Converte a string de template em um documento HTML
    const row = htmlTemplate.querySelector(".row"); // Seleciona a linha da tabela criada

    multiplicationTable.appendChild(row); // Adiciona a linha à tabela de multiplicação na página
  }

  multiplicationTitle.innerText = number; // Atualiza o título da tabela de multiplicação
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio padrão do formulário

  const multiplicationNumber = numberInput.value; // Obtém o valor do número base de multiplicação
  const multiplicatorNumber = +multiplicationInput.value; // Obtém o valor do multiplicador e o converte em número

  if (!multiplicationNumber || !multiplicatorNumber) return; // Verifica se ambos os valores estão presentes; se não, interrompe a execução

  createTable(multiplicationNumber, multiplicatorNumber); // Chama a função para criar a tabela de multiplicação
});
