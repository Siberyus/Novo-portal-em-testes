window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarAditivoIrmaos = function(dados) {
  let docAssinatura = dados.tipoDoc === 'cin' ? dados.cpf : dados.rg;
  if (!dados.isMaior) docAssinatura = dados.rgResp;

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'ADITIVO AO CONTRATO-BASE DE ADESÃO – MODALIDADE DESCONTO PARA IRMÃOS\nPRESTAÇÃO DE SERVIÇO | 2º SEMESTRE/2026', style: 'header' },
      { text: 'Pelo presente instrumento particular, que integra e complementa o Contrato-Base de Adesão à AEB e o Aditivo Contratual de Transporte Estudantil, as partes têm entre si justo e contratado o presente, com as seguintes cláusulas:', style: 'clause' },
      
      { text: [{ text: 'CLÁUSULA 1ª – DO OBJETO:', bold: true, color: '#267da8' }, ' Regulamentação da concessão de desconto na mensalidade do transporte para o(a) ASSOCIADO(A) que possui irmão(s) ou irmã(s) que também utiliza(m) os serviços da Associação.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 2ª – DO VALOR:', bold: true, color: '#267da8' }, ' Fica estabelecido desconto mensal no valor de R$10,00 (dez reais). Em caso de atraso, o desconto de pontualidade é perdido e incidem juros e multa.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 3ª – DOS REQUISITOS:', bold: true, color: '#267da8' }, ' O desconto exige que os irmãos estejam matriculados no transporte na modalidade INTEGRAL (A existência de irmão apenas com o Contrato-Base sem transporte, ou no Passe, descaracteriza o desconto de irmãos para fins deste benefício).'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 4ª – DA PERDA DO DESCONTO:', bold: true, color: '#267da8' }, ' Caso um dos irmãos rescinda o contrato ou deixe de utilizar a modalidade integral, restando apenas um irmão no transporte, o desconto é cancelado automaticamente, retornando a mensalidade ao valor normal.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 5ª e 6ª – DISPOSIÇÕES GERAIS:', bold: true, color: '#267da8' }, ' A AEB realizará o tratamento dos dados conforme LGPD. Aplica-se o aviso prévio de 15 dias para cancelamento.'], style: 'clause' },

      {
        unbreakable: true,
        stack: [
          { text: [{ text: 'CLÁUSULA 7ª - ASSINATURA ELETRÔNICA:', bold: true, color: '#267da8' }, ' As Partes concordam que este instrumento será assinado de forma eletrônica (portal gov.br).'], style: 'clause', margin: [0, 0, 0, 80] },
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
        clause: { margin: [0, 0, 0, 10], fontSize: 10 },
        assinatura: { fontSize: 10, alignment: 'center' }
    }
  };
};
