window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarAditivoTransporte = function(dados) {
  let docAssinatura = dados.tipoDoc === 'cin' ? dados.cpf : dados.rg;
  if (!dados.isMaior) docAssinatura = dados.rgResp;

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'ADITIVO CONTRATUAL – TRANSPORTE ESTUDANTIL (REGRAS OPERACIONAIS E FINANCEIRAS)\nPRESTAÇÃO DE SERVIÇO | 2º SEMESTRE/2026', style: 'header' },
      { text: 'O presente ADITIVO CONTRATUAL integra e complementa o Contrato-base de Adesão à AEB, disciplinando especificamente o serviço acessório e facultativo de transporte estudantil, nos termos do Estatuto da Associação. Ao aderir a este Aditivo, o(a) ASSOCIADO(A) manifesta ciência e concordância com as condições abaixo, sem prejuízo das normas estatutárias.', style: 'clause' },
      
      { text: [{ text: 'CLÁUSULA 1ª – OBJETO DO ADITIVO:', bold: true, color: '#267da8' }, ' O objetivo do presente Aditivo é regular as relações entre a AEB e o(a) ASSOCIADO(A) quanto à utilização do transporte estudantil administrado pela Associação, para Franca – SP e Ribeirão Preto – SP.\n', { text: '§1º', bold: true }, ' – A AEB atua exclusivamente na administração e organização do transporte estudantil, não sendo a prestadora direta do serviço, o qual é realizado por empresa(s) terceirizada(s).'], style: 'clause' },
      
      { text: [{ text: 'CLÁUSULA 2ª e 3ª – CALENDÁRIO E VIGÊNCIA:', bold: true, color: '#267da8' }, ' Cabe à AEB o planejamento do itinerário e calendário. O Aditivo tem validade entre 01 de julho de 2026 e 31 de dezembro de 2026, podendo ser prorrogado.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 4ª – VALORES E COBRANÇA:', bold: true, color: '#267da8' }, ' Pelos serviços, o(a) ASSOCIADO(A) pagará o valor mensal de R$ 480,00 (quatrocentos e oitenta reais).\n', { text: '§1º', bold: true }, ' – Será concedido desconto por pontualidade no valor de R$10,00 (dez reais), aplicável aos pagamentos realizados até o vencimento, reduzindo para R$470,00.\n', { text: '§5º', bold: true }, ' – O não comparecimento ao transporte não exime o pagamento das mensalidades devidas, pois trata-se de rateio de custo de disponibilidade (vaga reservada).'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 5ª – ATRASO E ACRÉSCIMOS:', bold: true, color: '#267da8' }, ' Havendo atraso, incidirão: I – Multa fixa de 2%; II – Juros de mora de 1% ao mês. Permanecendo a inadimplência, o associado poderá sofrer suspensão do embarque (após 15 dias) e ser submetido a exclusão (após 30 dias), sem prejuízo do protesto em cartório.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 5.1ª – TAXA DE RATEIO DE INADIMPLÊNCIA (TRI):', bold: true, color: '#267da8' }, ' É assegurada a cobrança da TRI, de forma excepcional e temporária, para cobrir prejuízos decorrentes da inadimplência que comprometam o transporte, mediante deliberação da Diretoria e fiscalização do Conselho.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 6ª e 7ª – DEVERES E CANCELAMENTO:', bold: true, color: '#267da8' }, ' Ao utilizar o transporte, o(a) ASSOCIADO(A) deve respeitar as normas de trânsito (uso de cinto). O cancelamento/rescisão requer aviso prévio de 15 (quinze) dias. A ausência de aviso implica na cobrança proporcional.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 8ª ao 12ª – DEMAIS REGRAS:', bold: true, color: '#267da8' }, ' O embarque exige Carteirinha (Cláusula 8ª). O ASSOCIADO se obriga a zelar pelos bens (Cláusula 9ª). O instrumento constitui título executivo (Cláusula 10ª). A AEB realizará o tratamento de dados pessoais segundo a LGPD (Cláusula 11ª). Fica eleito o foro de Batatais-SP (Cláusula 12ª).'], style: 'clause' },

      {
        unbreakable: true,
        stack: [
          { text: [{ text: 'CLÁUSULA 13ª - ASSINATURA ELETRÔNICA E DISPENSA DE VIAS FÍSICAS:', bold: true, color: '#267da8' }, ' As Partes concordam que este instrumento será assinado de forma eletrônica (portal gov.br). Declarando expressamente a validade jurídica do documento digital.'], style: 'clause', margin: [0, 0, 0, 80] },
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
        clause: { margin: [0, 0, 0, 10], fontSize: 10 },
        assinatura: { fontSize: 10, alignment: 'center' }
    }
  };
};
