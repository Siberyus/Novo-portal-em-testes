window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarRescisao = function(dados) {
  let documentoEstudante = dados.tipoDoc === 'cin' ? (dados.cpf || 'Não informado') : (dados.rg || dados.cpf || 'Não informado');
  let documentoResponsavel = dados.rgResp || 'Não informado';
  let docTextIntro = dados.tipoDoc === 'cin' ? `CIN nº ${dados.cpf || '______________________'}` : `CPF sob o nº ${dados.cpf || '______________________'} e portador(a) do RG nº ${dados.rg || '______________________'}`;

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'TERMO DE RESCISÃO DE CONTRATO E CANCELAMENTO DE SERVIÇOS (AEB)', style: 'header' },
      
      { text: `Eu, ${dados.nome || '___________________________________________________________________'}, inscrito(a) no ${docTextIntro}, residente e domiciliado(a) na ${dados.rua || '________________________________________________________'}, na cidade de Batatais (SP), venho, por meio deste instrumento, requerer a RESCISÃO do(s) vínculo(s) firmado(s) com a Associação dos Estudantes de Batatais (AEB), conforme assinalado abaixo:`, style: 'clause' },
      
      { text: '1.TIPO DE RESCISÃO SOLICITADA (Assinale apenas uma opção):', style: 'sectionTitle' },
      { text: `(${dados.tipoRescisao === 'cancelamento_transporte' ? 'X' : '  '}) OPÇÃO 1: CANCELAMENTO APENAS DO TRANSPORTE ESTUDANTIL Rescisão exclusiva do "Aditivo Contratual de Transporte Estudantil" (e seus eventuais aditivos acessórios, como Passe, Irmãos ou Funcionário Público). Declaro o desejo de manter minha condição de associado(a) à AEB, preservando os direitos e sujeitando-me aos deveres institucionais previstos no Estatuto, permanecendo devida a cobrança correspondente ao período de aviso prévio.\n(${dados.tipoRescisao === 'desligamento_total' ? 'X' : '  '}) OPÇÃO 2: DESLIGAMENTO TOTAL DA ASSOCIAÇÃO Rescisão do "Contrato-Base de Adesão à AEB" e de todos os Aditivos vinculados. Solicito minha desvinculação total do quadro social da Associação, perdendo a condição de associado(a) e encerrando meus deveres estatutários apenas na data do efetivo desligamento associativo (término dos 15 dias de aviso prévio), permanecendo devida a cobrança correspondente a este período.`, style: 'clause' },

      { text: '2. CONDIÇÕES DE USO DURANTE O AVISO PRÉVIO (Assinale apenas uma opção):', style: 'sectionTitle' },
      { text: `(${dados.condicaoAviso === 'manutencao' ? 'X' : '  '}) OPÇÃO A: MANUTENÇÃO DO EMBARQUE Declaro que farei uso físico do transporte até o final do período do aviso prévio de 15 (quinze) dias, assumindo o custo da mensalidade integral referente ao(s) ciclo(s) de faturamento mensal em que houver a ocupação e utilização da referida vaga.\n(${dados.condicaoAviso === 'liberacao' ? 'X' : '  '}) OPÇÃO B: SUSPENSÃO OPERACIONAL E COBRANÇA PROPORCIONAL Concordo com a suspensão do meu direito de embarque de forma imediata ou ao final do mês vigente (conforme alinhamento com a secretaria para liberação da vaga). Tenho ciência de que arcarei com o valor correspondente aos dias em que o serviço esteve à minha disposição no mês da solicitação, acrescido obrigatoriamente da proporção referente ao período administrativo de 15 (quinze) dias de aviso prévio. `, style: 'clause' },

      { text: '3.DECLARAÇÕES E CONDIÇÕES DE CANCELAMENTO:', style: 'sectionTitle' },
      { text: 'I. Estou ciente de que a solicitação de cancelamento exige um aviso prévio mínimo de 15 (quinze) dias, formalmente protocolado, conforme a Cláusula 7ª do Contrato-Base e a Cláusula 7ª do Aditivo de Transporte.\nII. Tenho ciência de que o aviso prévio de 15 (quinze) dias possui caráter administrativo e financeiro para cobrir os compromissos previamente assumidos pela Associação. Sendo assim, são integralmente devidas as mensalidades ou proporções correspondentes a este período de 15 dias em qualquer hipótese de cancelamento, independentemente da efetiva utilização física do transporte, a qual poderá ser suspensa de forma antecipada pela AEB exclusivamente para a organização operacional das rotas.\nIII. Reconheço que a presente rescisão não me isenta da responsabilidade de quitar eventuais débitos, taxas ou mensalidades (vencidas ou vincendas) correspondentes ao período de prestação do serviço e do aviso prévio, independentemente de a data de vencimento ocorrer após o efetivo encerramento do vínculo.\nIV. A AEB e o(a) Associado(a) dão-se mútua quitação apenas em relação às obrigações efetivamente pagas e compensadas até a presente data, restando ressalvado à Associação o direito de promover a cobrança extrajudicial ou judicial de quaisquer valores remanescentes em aberto.\nV. Vedação de Retroatividade: A contagem do aviso prévio de 15 (quinze) dias tem início estritamente na data de assinatura e protocolo deste termo, sendo expressamente vedada a retroatividade do cancelamento sob qualquer alegação de não utilização física anterior do transporte, uma vez que a vaga permaneceu reservada e à disposição.\nVI. Natureza do Rateio e Estornos: Reconheço que o serviço de transporte opera sob o regime de rateio de custos fixos mensais de frota. Sendo assim, declaro ciência de que não há previsão estatutária ou contratual para devolução, estorno ou crédito de dias fracionados relativos a ciclos de faturamento já iniciados, faturados ou pagos.', style: 'clause' },

      {
        unbreakable: true,
        stack: [
          { text: 'Os dados informados nesta ficha serão tratados pela AEB para fins de gestão associativa e operação do transporte, podendo ser compartilhados com a transportadora e o Município, nos termos da cláusula de Proteção de Dados do Contrato-Base e da Lei 13.709/2018.', style: 'clause' },
          { text: 'As Partes concordam que este instrumento será assinado de forma eletrônica, utilizando-se o portal gov.br (níveis Prata ou Ouro), nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020. E, por estarem assim justas e contratadas, declaram reconhecer expressamente a validade, integridade, autenticidade e eficácia jurídica do presente documento, bem como sua força executiva, o qual constituirá um único arquivo digital original para todos os fins de direito, dispensando-se a emissão ou assinatura de vias físicas.', style: 'clause', margin: [0, 0, 0, 80] },
          {
            columns: [
              { text: '_____________________________________\nAssociado(a)\n\nNOME: ' + (dados.nome || 'Não informado') + '\nRG/CIN: ' + documentoEstudante, style: 'assinatura' },
              { text: '_____________________________________\nPai ou Responsável\n\nNOME: ' + (!dados.isMaior ? (dados.nomeResp || 'Não informado') : '') + '\nRG/CIN: ' + (!dados.isMaior ? documentoResponsavel : ''), style: 'assinatura' }
            ]
          },
          { text: '_____________________________________\nAssociação dos Estudantes de Batatais', style: 'assinatura', margin: [0, 30, 0, 0] }
        ]
      }
    ],
    defaultStyle: { fontSize: 11, lineHeight: 1.2, alignment: 'justify' },
    styles: {
        header: { fontSize: 14, bold: true, alignment: 'center', margin: [0, 0, 0, 15] },
        sectionTitle: { fontSize: 12, bold: true, color: '#267da8', margin: [0, 15, 0, 8] },
        clause: { margin: [0, 0, 0, 10] },
        assinatura: { fontSize: 10, alignment: 'center' }
    }
  };
};
