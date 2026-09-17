window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarAditivoPasse = function(dados) {
  let documentoEstudante = dados.tipoDoc === 'cin' ? (dados.cpf || 'Não informado') : (dados.rg || dados.cpf || 'Não informado');
  let documentoResponsavel = dados.rgResp || 'Não informado';

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'ADITIVO AO CONTRATO-BASE DE ADESÃO – MODALIDADE PASSE DE TRANSPORTE ESTUDANTIL\nPRESTAÇÃO DE SERVIÇO | 2º SEMESTRE/2026', style: 'header' },
      { text: 'Pelo presente instrumento particular, que integra e complementa o Contrato-Base de Adesão à AEB e o Aditivo Contratual de Transporte Estudantil, a ASSOCIAÇÃO DOS ESTUDANTES DE BATATAIS – AEB, inscrita no CNPJ sob nº 66.994.187/0001-02, Inscrição Municipal nº 03 00 0011 0004, estabelecida na Rua Barão de Cotegipe, nº 564, Bairro Centro, CEP 14300-087, Batatais, Estado de São Paulo, neste ato devidamente representada por sua Diretoria, doravante denominada simplesmente AEB, e, de outro lado, o(a) estudante ou seu(ua) pai/mãe/responsável legal no final qualificado(a), doravante denominado(a) ASSOCIADO(A), têm entre si justo e contratado o presente, com as seguintes cláusulas:', style: 'clause' },
      
      { text: `MODALIDADE ADQUIRIDA:\n(${dados.passeDias == '1' ? 'X' : '  '}) 1 PASSE (Uma viagem semanal)\n(${dados.passeDias == '2' ? 'X' : '  '}) 2 PASSES (Duas viagens semanais)`, style: 'sectionTitle' },

      { text: 'CLÁUSULA 1ª – DO OBJETO E CONDIÇÕES DE CONCESSÃO: O presente aditivo tem por objeto a regulamentação da utilização da modalidade de "Passe" pelo(a) ASSOCIADO(A), que consiste na utilização do transporte administrado pela AEB por 1 (uma) ou 2 (duas) vezes na semana para as instituições de ensino das cidades de Franca – SP e Ribeirão Preto – SP.\n§ 1º – Em estrita observância ao Estatuto da AEB, a concessão desta modalidade está limitada a 20 (vinte) passes por semestre, sendo 10 (dez) para Franca e 10 (dez) para Ribeirão Preto, concedidos por ordem de solicitação.\n§ 2º – Atingido o limite estipulado, os demais interessados comporão lista de espera oficial.\n§ 3º – A validação deste Aditivo é condicionada à apresentação, por parte do(a) ASSOCIADO(A), de documento oficial emitido pela instituição de ensino que demonstre inequivocamente a necessidade de utilização do transporte em até 2 (dois) dias semanais.', style: 'clause' },

      { text: 'CLÁUSULA 2ª – DOS VALORES E ENCARGOS: Ficam estabelecidos os seguintes valores mensais para a modalidade de passe, os quais já englobam a taxa associativa base:\nI – Passe de 1 (uma) vez na semana: R$280,00 (duzentos e oitenta reais).\nII – Passe de 2 (duas) vezes na semana: R$320,00 (trezentos e vinte reais).\n§ 1 Em caso de atraso no pagamento, aplicar-se-ão as mesmas regras de inadimplência previstas no Aditivo Contratual de Transporte Estudantil principal (multa moratória fixa de 2% e juros de mora de 1% ao mês), sem prejuízo de suspensão de embarque e aplicação da Taxa de Rateio de Inadimplência (TRI), quando cabível.\n§ 2º – Será concedido desconto por pontualidade no valor de R$10,00 (dez reais), aplicável exclusivamente aos pagamentos realizados até a data de vencimento, reduzindo o valor devido do Passe de 1 (uma) vez na semana para R$270,00 (duzentos e setenta reais) e do Passe de 2 (duas) vezes na semana para R$310,00 (trezentos e dez reais).', style: 'clause' },

      { text: 'CLÁUSULA 3ª – DA CARTEIRA DE IDENTIFICAÇÃO ESPECÍFICA: O(a) ASSOCIADO(A) que adquirir a modalidade de passe receberá uma carteira de identificação diferenciada e específica para este fim.\n§ 1º – A apresentação desta carteira no momento do embarque é obrigatória.\n§ 2º – A utilização do passe e da carteira é pessoal e intransferível, sendo expressamente proibida sua cessão, empréstimo ou utilização por terceiros.', style: 'clause' },

      { text: 'CLÁUSULA 4ª – DO CONTROLE E DAS PENALIDADES: O controle rigoroso da quantidade de viagens será feito pelo Representante de Rota.\n§ 1º – Caso o(a) ASSOCIADO(A) ultrapasse a quantidade de viagens semanais estabelecida pelo passe adquirido, o benefício do passe será imediatamente cancelado pela Diretoria.\n§ 2º – Na hipótese de cancelamento por utilização excedente à modalidade contratada, o(a) ASSOCIADO(A) passará a ser cobrado pelo valor da mensalidade integral do transporte (R$ 480,00) a partir do mês da constatação, enquanto mantiver o uso do serviço, por corresponder à modalidade efetivamente utilizada, vedada cobrança retroativa a título de penalidade.', style: 'clause' },

      { text: 'CLÁUSULA 5ª – DISPOSIÇÕES GERAIS E RESCISÃO: Aplica-se ao presente aditivo a regra de aviso prévio mínimo de 15 (quinze) dias para solicitação de cancelamento. Permanecem plenamente válidas, aplicáveis e inalteradas todas as demais cláusulas, regras disciplinares e condições previstas no Estatuto da AEB, no Contrato-Base de Adesão e no Aditivo Contratual de Transporte Estudantil, naquilo que não conflitar com este instrumento específico.', style: 'clause' },

      { text: 'CLÁUSULA 6ª – DA VIGÊNCIA: O presente aditivo tem validade restrita ao 2º semestre de 2026, encerrando-se automaticamente ao final do referido período letivo, ressaltando que o encerramento deste aditivo não afeta a vigência e as obrigações do Contrato-Base de Adesão ou do Aditivo Contratual de Transporte Estudantil.', style: 'clause' },

      { text: 'CLÁUSULA 7ª - PROTEÇÃO DE DADOS PESSOAIS (LGPD): Os dados informados nesta ficha serão tratados pela AEB para fins de gestão associativa e operação do transporte, podendo ser compartilhados com a transportadora e o Município, nos termos da cláusula de Proteção de Dados do Contrato-Base e da Lei 13.709/2018.', style: 'clause' },

      {
        unbreakable: true,
        stack: [
          { text: 'CLÁUSULA 8ª - Assinatura Eletrônica e Dispensa de Vias Físicas: As Partes concordam que este instrumento será assinado de forma eletrônica, utilizando-se o portal gov.br (níveis Prata ou Ouro), nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020. E, por estarem assim justas e contratadas, declaram reconhecer expressamente a validade, integridade, autenticidade e eficácia jurídica do presente documento, bem como sua força executiva, o qual constituirá um único arquivo digital original para todos os fins de direito, dispensando-se a emissão ou assinatura de vias físicas.', style: 'clause', margin: [0, 0, 0, 80] },
          {
            columns: [
              { text: '_____________________________________\nAssociado(a)\n\nNOME: ' + (dados.nome || 'Não informado') + '\nRG/CIN: ' + documentoEstudante, style: 'assinatura' },
              { text: '_____________________________________\nPai ou Responsável\n\nNOME: ' + (!dados.isMaior ? (dados.nomeResp || 'Não informado') : '') + '\nRG/CIN: ' + (!dados.isMaior ? documentoResponsavel : ''), style: 'assinatura' }
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
        clause: { margin: [0, 0, 0, 10] },
        assinatura: { fontSize: 10, alignment: 'center' }
    }
  };
};
