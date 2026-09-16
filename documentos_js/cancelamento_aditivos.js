window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarCancelamentoAditivos = function(dados) {
  return {
    content: [
      { text: 'TERMO DE CANCELAMENTO DE ADITIVO ESPECÍFICO (AEB)', style: 'header', alignment: 'center', bold: true, margin: [0, 0, 0, 20] },
      { text: `Eu, ${dados.nome}, inscrito(a) no CPF sob o nº ${dados.cpf} e portador(a) do RG nº ${dados.rg}, ou CIN nº ${dados.cpf}, residente e domiciliado(a) na ${dados.rua}, ${dados.num} - ${dados.bairro}, na cidade de ${dados.cidade}, venho, por meio deste instrumento, requerer o CANCELAMENTO EXCLUSIVO do Aditivo específico firmado com a Associação dos Estudantes de Batatais (AEB), conforme assinalado abaixo:`, alignment: 'justify', margin: [0, 0, 0, 15] },
      
      { text: 'ADITIVO/BENEFÍCIO A SER CANCELADO (Assinale uma opção):', bold: true, margin: [0, 0, 0, 5] },
      { text: `(${dados.aditivoCancelado === 'passe' ? 'X' : '  '}) Aditivo Contratual – Modalidade Passe\n(${dados.aditivoCancelado === 'irmaos' ? 'X' : '  '}) Aditivo Contratual – Desconto para Irmãos\n(${dados.aditivoCancelado === 'funcionario' ? 'X' : '  '}) Aditivo Contratual – Isenção para Funcionário Público Municipal`, margin: [0, 0, 0, 15] },

      { text: 'DECLARAÇÕES E CONDIÇÕES DE CANCELAMENTO:', bold: true, margin: [0, 0, 0, 5] },
      { text: '1. Declaro estar ciente de que o cancelamento exclusivo deste benefício/modalidade NÃO CANCELA o meu vínculo principal de transporte. A reversão à condição de usuário(a) da modalidade INTEGRAL (ou a perda do desconto/isenção) possui efeito imediato a partir da assinatura deste termo, passando a incidir o valor integral da mensalidade regular do serviço.\n2. Estou ciente de que a alteração do valor da mensalidade ocorrerá de forma imediata (com a emissão de cobrança complementar proporcional aos dias de uso integral no mês vigente, se aplicável) ou a partir do faturamento do mês subsequente, conforme a data desta solicitação e os procedimentos operacionais da Associação.\n3. Reconheço que este cancelamento parcial não me isenta da responsabilidade de quitar eventuais débitos, taxas ou mensalidades (vencidas ou vincendas) correspondentes ao período de utilização do benefício, independentemente de a data de vencimento ocorrer após o efetivo encerramento deste aditivo específico.\n4. Reafirmo que o "Contrato-Base de Adesão à AEB" e o "Aditivo Contratual de Transporte Estudantil" (principal) permanecem plenamente válidos e inalterados, continuando a reger meus direitos e deveres junto à Associação.', alignment: 'justify', margin: [0, 0, 0, 15] },

      {
        unbreakable: true,
        stack: [
          { text: 'Os dados informados nesta ficha serão tratados pela AEB para fins de gestão associativa e operação do transporte, podendo ser compartilhados com a transportadora e o Município, nos termos da cláusula de Proteção de Dados do Contrato-Base e da Lei 13.709/2018.\n\nAs Partes concordam que este instrumento será assinado de forma eletrônica, utilizando-se o portal gov.br (níveis Prata ou Ouro), nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020. E, por estarem assim justas e contratadas, declaram reconhecer expressamente a validade, integridade, autenticidade e eficácia jurídica do presente documento, bem como sua força executiva, o qual constituirá um único arquivo digital original para todos os fins de direito, dispensando-se a emissão ou assinatura de vias físicas.', alignment: 'justify', fontSize: 10, margin: [0, 0, 0, 80] },
          {
            columns: [
              { text: '_____________________________________\nAssociado(a)\n\nNOME: ' + (dados.isMaior ? dados.nome : '') + '\nRG/CIN: ' + (dados.isMaior ? (dados.rg || dados.cpf) : ''), alignment: 'center' },
              { text: '_____________________________________\nPai ou Responsável\n\nNOME: ' + (!dados.isMaior ? dados.nomeResp : '') + '\nRG/CIN: ' + (!dados.isMaior ? dados.rgResp : ''), alignment: 'center' }
            ]
          },
          { text: '_____________________________________\nAssociação dos Estudantes de Batatais', alignment: 'center', margin: [0, 30, 0, 0] }
        ]
      }
    ],
    defaultStyle: { fontSize: 11 }
  };
};
