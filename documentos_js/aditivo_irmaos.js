window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarAditivoIrmaos = function(dados) {
  let documentoEstudante = dados.tipoDoc === 'cin' ? (dados.cpf || 'Não informado') : (dados.rg || dados.cpf || 'Não informado');
  let documentoResponsavel = dados.rgResp || 'Não informado';

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'ADITIVO AO CONTRATO-BASE DE ADESÃO – MODALIDADE DESCONTO PARA IRMÃOS\nPRESTAÇÃO DE SERVIÇO | 2º SEMESTRE/2026', style: 'header' },
      { text: 'Pelo presente instrumento particular, que integra e complementa o Contrato-Base de Adesão à AEB e o Aditivo Contratual de Transporte Estudantil, a ASSOCIAÇÃO DOS ESTUDANTES DE BATATAIS – AEB, inscrita no CNPJ sob nº 66.994.187/0001-02, Inscrição Municipal nº 03 00 0011 0004, estabelecida na Rua Barão de Cotegipe, nº 564, Bairro Centro, CEP 14300-087, Batatais, Estado de São Paulo, neste ato devidamente representada por sua Diretoria, doravante denominada simplesmente AEB, e, de outro lado, o(a) estudante ou seu(ua) pai/mãe/responsável legal no final qualificado(a), doravante denominado(a) ASSOCIADO(A), têm entre si justo e contratado o presente, com as seguintes cláusulas:', style: 'clause' },
      
      { text: 'CLÁUSULA 1ª – DO OBJETO: O presente aditivo tem por objeto a regulamentação da concessão de desconto na mensalidade do transporte estudantil para o(a) ASSOCIADO(A) que possui irmão(s) ou irmã(s) que também utiliza(m) os serviços de transporte da Associação.', style: 'clause' },

      { text: 'CLÁUSULA 2ª – DO VALOR DO DESCONTO E ENCARGOS: Fica estabelecido um desconto mensal no valor de R$10,00 (dez reais) a ser deduzido do valor integral da mensalidade do transporte estudantil.\nParágrafo único: Em caso de atraso no pagamento, aplicar-se-ão as regras de inadimplência previstas no Aditivo Contratual de Transporte Estudantil principal (multa moratória fixa de 2% e juros de mora de 1% ao mês), sem prejuízo da perda do desconto de pontualidade e das sanções estatutárias aplicáveis.\n§ 2º – O desconto por parentesco (irmãos) é cumulativo com o desconto de pontualidade, podendo ambos incidir sobre a mesma mensalidade.', style: 'clause' },

      { text: 'CLÁUSULA 3ª – DOS REQUISITOS PARA CONCESSÃO: Somente fará jus ao presente desconto o(a) ASSOCIADO(A) que estiver regularmente cadastrado(a) na modalidade integral do transporte estudantil.\n§ 1º – O fato de um dos irmãos estar utilizando a modalidade "Passe" ou ser beneficiário da "Bolsa de Funcionário Público Municipal" não prejudica o direito do outro irmão, que possua cadastro na modalidade integral, de adquirir e manter o presente desconto.\n§ 2º – A contagem de irmãos para fins de concessão do desconto considera exclusivamente aqueles vinculados ao Aditivo Contratual de Transporte Estudantil. Irmãos que possuam apenas o "Contrato-Base de Adesão" (sem transporte) não serão computados para esta finalidade, de modo que a existência de apenas um irmão na modalidade integral, acompanhado de outro(s) apenas no contrato-base, não cumpre o requisito para a concessão do benefício.\n§ 3º– A concessão do desconto fica condicionada à comprovação do parentesco.\n§ 4º– Havendo dois ou mais irmãos vinculados ao Aditivo Contratual de Transporte Estudantil e matriculados na modalidade integral, o desconto de R$10,00 será concedido a cada um deles, enquanto mantiverem o vínculo e mediante comprovação do parentesco, vedada a cumulação de mais de um desconto do mesmo tipo por associado.', style: 'clause' },

      { text: 'CLÁUSULA 4ª – DA PERDA DO DESCONTO E RESCISÃO: Caso um dos irmãos rescinda o seu respectivo contrato ou aditivo com a Associação, ou deixe de utilizar o transporte, o direito ao desconto objeto deste instrumento será mantido para os remanescentes apenas enquanto houver, no mínimo, 2 (dois) irmãos utilizando regularmente a modalidade integral. Havendo menos de 2 (dois) irmãos nestas condições, o(a) ASSOCIADO(A) remanescente perderá automaticamente o benefício.\nParágrafo único: Ocorrendo a perda do benefício de que trata o caput, passará a ser cobrado do(a) ASSOCIADO(A) que permanecer no transporte o valor integral da mensalidade regular do serviço a partir do mês em que ocorreu o cancelamento ou rescisão.', style: 'clause' },

      { text: 'CLÁUSULA 5ª – PROTEÇÃO DE DADOS PESSOAIS (LGPD): Os dados informados nesta ficha serão tratados pela AEB para fins de gestão associativa e operação do transporte, podendo ser compartilhados com a transportadora e o Município, nos termos da cláusula de Proteção de Dados do Contrato-Base e da Lei 13.709/2018.', style: 'clause' },

      { text: 'CLÁUSULA 6ª – DISPOSIÇÕES GERAIS: Aplica-se ao presente aditivo a regra de aviso prévio mínimo de 15 (quinze) dias para solicitação de cancelamento. Permanecem plenamente válidas, aplicáveis e inalteradas todas as demais cláusulas, regras disciplinares e condições financeiras e operacionais previstas no Estatuto da AEB, no Contrato-Base de Adesão e no Aditivo Contratual de Transporte Estudantil, naquilo que não conflitarem com este instrumento específico.', style: 'clause' },

      {
        unbreakable: true,
        stack: [
          { text: 'CLÁUSULA 7ª - Assinatura Eletrônica e Dispensa de Vias Físicas: As Partes concordam que este instrumento será assinado de forma eletrônica, utilizando-se o portal gov.br (níveis Prata ou Ouro), nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020. E, por estarem assim justas e contratadas, declaram reconhecer expressamente a validade, integridade, autenticidade e eficácia jurídica do presente documento, bem como sua força executiva, o qual constituirá um único arquivo digital original para todos os fins de direito, dispensando-se a emissão ou assinatura de vias físicas.', style: 'clause', margin: [0, 0, 0, 80] },
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
        clause: { margin: [0, 0, 0, 10] },
        assinatura: { fontSize: 10, alignment: 'center' }
    }
  };
};
