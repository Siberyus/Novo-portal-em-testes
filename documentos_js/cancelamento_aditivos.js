window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarCancelamentoAditivos = function(dados) {
  let documentoEstudante = dados.tipoDoc === 'cin' ? (dados.cpf || 'Não informado') : (dados.rg || dados.cpf || 'Não informado');
  let documentoResponsavel = dados.rgResp || 'Não informado';
  let docTextIntro = dados.tipoDoc === 'cin' ? `CIN nº ${dados.cpf || '______________________'}` : `CPF sob o nº ${dados.cpf || '______________________'} e portador(a) do RG nº ${dados.rg || '______________________'}`;

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'TERMO DE CANCELAMENTO DE ADITIVO ESPECÍFICO (AEB)', style: 'header' },
      
      { text: `Eu, ${dados.nome || '___________________________________________________________________'}, inscrito(a) no ${docTextIntro}, residente e domiciliado(a) na ${dados.rua || '________________________________________________________'}, na cidade de Batatais (SP), venho, por meio deste instrumento, requerer o CANCELAMENTO EXCLUSIVO do Aditivo específico firmado com a Associação dos Estudantes de Batatais (AEB), conforme assinalado abaixo:`, style: 'clause' },
      
      { text: 'ADITIVO/BENEFÍCIO A SER CANCELADO (Assinale uma opção):', style: 'sectionTitle' },
      { text: `(${dados.aditivoCancelado === 'passe' ? 'X' : '  '}) Aditivo Contratual – Modalidade Passe\n(${dados.aditivoCancelado === 'irmaos' ? 'X' : '  '}) Aditivo Contratual – Desconto para Irmãos\n(${dados.aditivoCancelado === 'funcionario' ? 'X' : '  '}) Aditivo Contratual – Isenção para Funcionário Público Municipal`, style: 'clause' },

      { text: 'DECLARAÇÕES E CONDIÇÕES DE CANCELAMENTO:', style: 'sectionTitle' },
      { text: '1. Declaro estar ciente de que o cancelamento exclusivo deste benefício/modalidade NÃO CANCELA o meu vínculo principal de transporte. A reversão à condição de usuário(a) da modalidade INTEGRAL (ou a perda do desconto/isenção) possui efeito imediato a partir da assinatura deste termo, passando a incidir o valor integral da mensalidade regular do serviço. \n2. Estou ciente de que a alteração do valor da mensalidade ocorrerá de forma imediata (com a emissão de cobrança complementar proporcional aos dias de uso integral no mês vigente, se aplicável) ou a partir do faturamento do mês subsequente, conforme a data desta solicitação e os procedimentos operacionais da Associação.\n3. Reconheço que este cancelamento parcial não me isenta da responsabilidade de quitar eventuais débitos, taxas ou mensalidades (vencidas ou vincendas) correspondentes ao período de utilização do benefício, independentemente de a data de vencimento ocorrer após o efetivo encerramento deste aditivo específico.\n4. Reafirmo que o "Contrato-Base de Adesão à AEB" e o "Aditivo Contratual de Transporte Estudantil" (principal) permanecem plenamente válidos e inalterados, continuando a reger meus direitos e deveres junto à Associação.', style: 'clause' },

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
