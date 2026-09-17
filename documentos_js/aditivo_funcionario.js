window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarAditivoFuncionario = function(dados) {
  let documentoEstudante = dados.tipoDoc === 'cin' ? (dados.cpf || 'Não informado') : (dados.rg || dados.cpf || 'Não informado');
  let documentoResponsavel = dados.rgResp || 'Não informado';

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'ADITIVO AO CONTRATO-BASE DE ADESÃO – MODALIDADE ISENÇÃO PARA FUNCIONÁRIO PÚBLICO MUNICIPAL\nPRESTAÇÃO DE SERVIÇO | 2º SEMESTRE/2026', style: 'header' },
      { text: 'Pelo presente instrumento particular, que integra e complementa o Contrato-Base de Adesão à AEB e o Aditivo Contratual de Transporte Estudantil, a ASSOCIAÇÃO DOS ESTUDANTES DE BATATAIS – AEB, inscrita no CNPJ sob nº 66.994.187/0001-02, Inscrição Municipal nº 03 00 0011 0004, estabelecida na Rua Barão de Cotegipe, nº 564, Bairro Centro, CEP 14300-087, Batatais, Estado de São Paulo, neste ato devidamente representada por sua Diretoria, doravante denominada simplesmente AEB, e, de outro lado, o(a) estudante ou seu(ua) pai/mãe/responsável legal no final qualificado(a), doravante denominado(a) ASSOCIADO(A), têm entre si justo e contratado o presente, com as seguintes cláusulas:', style: 'clause' },
      
      { text: 'CLÁUSULA 1ª – DO OBJETO E CONTRIBUIÇÃO ASSOCIATIVA: O presente aditivo tem por objeto a regulamentação da isenção do valor referente aos custos operacionais do transporte da AEB para o(a) ASSOCIADO(A) que possua o cargo de funcionário público municipal de Batatais (SP), em conformidade com as Leis Municipais n.º 3.419/15, 3.429/16 e 3.485/17.\nParágrafo único: Fica expressamente estabelecido que a isenção aplica-se estritamente ao rateio do transporte. O(a) ASSOCIADO(A) beneficiário(a) continua obrigado(a) ao pagamento regular da mensalidade referente à taxa associativa mensal da AEB, prevista no Contrato-Base de Adesão, sujeitando-se, em caso de inadimplência, aos mesmos encargos por atraso (multa moratória fixa de 2% e juros de mora de 1% ao mês), além da perda do desconto por pontualidade.', style: 'clause' },

      { text: 'CLÁUSULA 2ª – DOS REQUISITOS PARA O BENEFÍCIO: Terá direito a participar do “Programa Municipal de Auxílio Transporte aos Estudantes” o(a) estudante que preencher, cumulativamente, os seguintes requisitos:\nI – Ser residente no Município de Batatais, mediante apresentação de documento comprobatório;\nII – Estar devidamente matriculado(a), mediante comprovação de matrícula da instituição de Ensino;\nIII – Estar cursando a sua primeira graduação do Ensino Superior, sua primeira especialização ou o seu primeiro curso técnico profissionalizante;\nIV – Comprovar que o resultado da soma da mensalidade do seu curso e do valor complementar ao “Auxílio Transporte ao Estudante” é inferior ao valor da mensalidade do mesmo curso (ou equivalente) ministrado por instituições de ensino situadas em Batatais, OU comprovar que estuda em escola pública, isenta do pagamento de mensalidade.', style: 'clause' },

      { text: 'CLÁUSULA 3ª – DA PERDA DO BENEFÍCIO E PENALIDADES: Caso o(a) ASSOCIADO(A) venha a ser exonerado(a) ou por qualquer motivo perca o cargo de servidor público municipal de Batatais, ou caso não conclua o curso dentro do período regular de duração, este perderá automaticamente o benefício de isenção, conforme disposto no §2º, art. 6º, da Lei n.º 3.419/15.\nParágrafo único: Ocorrendo a perda do benefício, passará a ser cobrado do(a) ASSOCIADO(A) que permanecer utilizando o serviço o valor integral da mensalidade regular do transporte estudantil a partir do mês em que ocorreu o fato gerador da perda.', style: 'clause' },

      { text: 'CLÁUSULA 4ª – PROTEÇÃO DE DADOS PESSOAIS (LGPD): Os dados informados nesta ficha serão tratados pela AEB para fins de gestão associativa e operação do transporte, podendo ser compartilhados com a transportadora e o Município, nos termos da cláusula de Proteção de Dados do Contrato-Base e da Lei 13.709/2018.', style: 'clause' },

      { text: 'CLÁUSULA 5ª – DISPOSIÇÕES GERAIS E RESCISÃO: Aplica-se ao presente aditivo a regra de aviso prévio mínimo de 15 (quinze) dias para solicitação de cancelamento. Permanecem plenamente válidas, aplicáveis e inalteradas todas as demais cláusulas, regras disciplinares e condições financeiras e operacionais previstas no Estatuto da AEB, no Contrato-Base de Adesão e no Aditivo Contratual de Transporte Estudantil, naquilo que não conflitarem com este instrumento específico.', style: 'clause' },
      
      { text: 'DECLARAÇÕES COMPLEMENTARES:', style: 'sectionTitle' },
      { text: 'Nestes termos, o(a) declarante afirma, sob as penas da lei, as seguintes informações necessárias para instruir o pedido junto ao Programa Municipal (assinale ao menos uma hipótese, sob pena de indeferimento, e anexe o comprovante de vínculo funcional e a grade de mensalidade comparada):', style: 'clause' },
      { text: `(${dados.funcDeclaracao === 'soma_inferior' ? 'X' : '  '}) Que o resultado da soma da mensalidade do curso e do valor complementar ao “Auxílio Transporte ao Estudante” é inferior ao valor da mensalidade do curso ministrado pelas instituições de ensino de Batatais;\n(${dados.funcDeclaracao === 'escola_publica' ? 'X' : '  '}) Que estudo em escola pública, isenta do pagamento de mensalidade.`, style: 'clause' },
      
      { text: `Nome da Instituição de Ensino: ${dados.instituicao || '________________________________________________________'}\nNome do Curso: ${dados.curso || '____________________________________________________________________'}\nPeríodo/Ano: ${dados.funcPeriodo || '______________________________________________________________________'}\nValor da mensalidade do curso em Batatais: ${dados.funcValorAeb || '__________________________________________'}\nValor da mensalidade do curso na respectiva Instituição: ${dados.funcValorInst || '________________________________'}`, style: 'clause', margin: [0, 0, 0, 15] },

      {
        unbreakable: true,
        stack: [
          { text: 'CLÁUSULA 5ª - Assinatura Eletrônica e Dispensa de Vias Físicas: As Partes concordam que este instrumento será assinado de forma eletrônica, utilizando-se o portal gov.br (níveis Prata ou Ouro), nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020. E, por estarem assim justas e contratadas, declaram reconhecer expressamente a validade, integridade, autenticidade e eficácia jurídica do presente documento, bem como sua força executiva, o qual constituirá um único arquivo digital original para todos os fins de direito, dispensando-se a emissão ou assinatura de vias físicas.', style: 'clause', margin: [0, 0, 0, 80] },
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
