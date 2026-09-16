window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarAditivoPasse = function(dados) {
  let docAssinatura = dados.tipoDoc === 'cin' ? dados.cpf : dados.rg;
  if (!dados.isMaior) docAssinatura = dados.rgResp;

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'ADITIVO AO CONTRATO-BASE DE ADESÃO – MODALIDADE PASSE\nPRESTAÇÃO DE SERVIÇO | 2º SEMESTRE/2026', style: 'header' },
      { text: 'Pelo presente instrumento particular, que integra e complementa o Contrato-Base de Adesão à AEB e o Aditivo Contratual de Transporte Estudantil, as partes têm entre si justo e contratado o presente, com as seguintes cláusulas:', style: 'clause' },
      
      { text: `MODALIDADE ADQUIRIDA:\n(${dados.passeDias == '1' ? 'X' : '  '}) 1 PASSE (Uma viagem semanal)\n(${dados.passeDias == '2' ? 'X' : '  '}) 2 PASSES (Duas viagens semanais)`, style: 'sectionTitle' },

      { text: [{ text: 'CLÁUSULA 1ª – DO OBJETO E CONDIÇÕES:', bold: true, color: '#267da8' }, ' O objeto é a utilização da modalidade de "Passe" (1 ou 2 vezes na semana) para Franca – SP e Ribeirão Preto – SP. A concessão é limitada a 20 passes por semestre e condicionada à apresentação de atestado de frequência da faculdade.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 2ª – DOS VALORES E ENCARGOS:', bold: true, color: '#267da8' }, ' Os valores mensais são: I – Passe de 1 vez na semana: R$280,00; II – Passe de 2 vezes na semana: R$320,00.\n', { text: '§ 2º', bold: true }, ' – Desconto de pontualidade de R$10,00 para pagamentos até o vencimento.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 3ª e 4ª – CARTEIRA E CONTROLE:', bold: true, color: '#267da8' }, ' O associado receberá carteira específica (intransferível). Caso ultrapasse a quantidade de viagens semanais adquirida, o benefício será cancelado, passando a incidir o valor integral do transporte mensal (R$ 480,00).'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 5ª a 7ª – DISPOSIÇÕES GERAIS:', bold: true, color: '#267da8' }, ' Aplica-se o aviso prévio de 15 dias para cancelamento. O Aditivo é válido para o 2º Semestre/2026. A AEB tratará os dados conforme a LGPD.'], style: 'clause' },

      {
        unbreakable: true,
        stack: [
          { text: [{ text: 'CLÁUSULA 8ª - ASSINATURA ELETRÔNICA:', bold: true, color: '#267da8' }, ' As Partes concordam que este instrumento será assinado eletronicamente no portal gov.br, garantindo força executiva.'], style: 'clause', margin: [0, 0, 0, 80] },
          {
            columns: [
              { text: '_____________________________________\nAssociado(a)\n\nNOME: ' + (dados.isMaior ? dados.nome : '') + '\nRG/CIN: ' + (dados.isMaior ? docAssinatura : ''), style: 'assinatura' },
              { text: '_____________________________________\nPai ou Responsável\n\nNOME: ' + (!dados.isMaior ? dados.nomeResp : '') + '\nRG/CIN: ' + (!dados.isMaior ? docAssinatura : ''), style: 'assinatura' }
            ]
          },
          { text: '_____________________________________\nAssociação dos Estudantes de Batatais', style: 'assinatura', margin: [0, 80, 0, 0] }
        ]
      }
    ],
    defaultStyle: { fontSize: 11, lineHeight: 1.2, alignment: 'justify' },
    styles: {
        header: { fontSize: 14, bold: true, alignment: 'center', margin: [0, 0, 0, 15] },
        sectionTitle: { fontSize: 12, bold: true, color: '#267da8', margin: [0, 15, 0, 15] },
        clause: { margin: [0, 0, 0, 10], fontSize: 10 },
        assinatura: { fontSize: 10, alignment: 'center' }
    }
  };
};
