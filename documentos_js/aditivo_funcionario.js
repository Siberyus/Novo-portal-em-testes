window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarAditivoFuncionario = function(dados) {
  let docAssinatura = dados.tipoDoc === 'cin' ? dados.cpf : dados.rg;
  if (!dados.isMaior) docAssinatura = dados.rgResp;

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'ADITIVO AO CONTRATO-BASE DE ADESÃO – MODALIDADE ISENÇÃO PARA FUNCIONÁRIO PÚBLICO MUNICIPAL\nPRESTAÇÃO DE SERVIÇO | 2º SEMESTRE/2026', style: 'header' },
      { text: 'Pelo presente instrumento particular, as partes têm entre si justo e contratado o presente, com as seguintes cláusulas:', style: 'clause' },
      
      { text: [{ text: 'CLÁUSULA 1ª – DO OBJETO E CONTRIBUIÇÃO ASSOCIATIVA:', bold: true, color: '#267da8' }, ' Regulamentação da isenção do valor referente aos custos operacionais do transporte para o(a) ASSOCIADO(A) funcionário público municipal de Batatais (Leis Municipais n.º 3.419/15, 3.429/16 e 3.485/17).\n', { text: 'Parágrafo único:', bold: true }, ' A isenção aplica-se estritamente ao transporte. O associado continua obrigado a pagar a taxa associativa mensal (R$60,00).'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 2ª – DOS REQUISITOS:', bold: true, color: '#267da8' }, ' I – Ser residente em Batatais; II – Estar matriculado(a); III – Estar na primeira graduação/técnico; IV – Comprovar que a soma da mensalidade + auxílio é inferior à mensalidade em Batatais, OU que estuda em escola pública (isenta).'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 3ª e 4ª – DA PERDA DO BENEFÍCIO E LGPD:', bold: true, color: '#267da8' }, ' Se exonerado, perderá a isenção, passando a pagar a mensalidade integral. Os dados serão tratados pela AEB e compartilhados com o Município, nos termos da Lei 13.709/2018.'], style: 'clause' },

      { text: 'DECLARAÇÕES COMPLEMENTARES:', style: 'sectionTitle' },
      { text: `(${dados.funcDeclaracao === 'soma_inferior' ? 'X' : '  '}) Que o resultado da soma da mensalidade do curso e do valor complementar ao “Auxílio Transporte” é inferior ao valor da mensalidade de curso equivalente em Batatais;\n(${dados.funcDeclaracao === 'escola_publica' ? 'X' : '  '}) Que estudo em escola pública, isenta do pagamento de mensalidade.`, style: 'clause' },
      
      { text: `Nome da Instituição: ${dados.instituicao}\nCurso: ${dados.curso}\nPeríodo/Ano: ${dados.funcPeriodo}\nValor em Batatais: ${dados.funcValorAeb}\nValor na respectiva Instituição: ${dados.funcValorInst}`, style: 'clause', margin: [0, 0, 0, 15] },

      {
        unbreakable: true,
        stack: [
          { text: [{ text: 'CLÁUSULA 5ª - ASSINATURA ELETRÔNICA:', bold: true, color: '#267da8' }, ' As Partes concordam que este instrumento será assinado eletronicamente no portal gov.br.'], style: 'clause', margin: [0, 0, 0, 80] },
          {
            columns: [
              { text: '_____________________________________\nAssociado(a)\n\nNOME: ' + (dados.isMaior ? dados.nome : '') + '\nRG/CIN: ' + (dados.isMaior ? docAssinatura : ''), style: 'assinatura' },
              { text: '_____________________________________\nPai ou Responsável\n\nNOME: ' + (!dados.isMaior ? dados.nomeResp : '') + '\nRG/CIN: ' + (!dados.isMaior ? docAssinatura : ''), style: 'assinatura' }
            ]
          },
          { text: '_____________________________________\nAssociação dos Estudantes de Batatais', style: 'assinatura', margin: [0, 30, 0, 0] }
        ]
      }
    ],
    defaultStyle: { fontSize: 11, lineHeight: 1.2, alignment: 'justify' },
    styles: {
        header: { fontSize: 14, bold: true, alignment: 'center', margin: [0, 0, 0, 15] },
        sectionTitle: { fontSize: 12, bold: true, color: '#267da8', margin: [0, 5, 0, 5] },
        clause: { margin: [0, 0, 0, 10], fontSize: 10 },
        assinatura: { fontSize: 10, alignment: 'center' }
    }
  };
};
