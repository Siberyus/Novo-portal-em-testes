window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarContratoBase = function(dados) {
  let docAssinatura = dados.tipoDoc === 'cin' ? dados.cpf : dados.rg;
  if (!dados.isMaior) docAssinatura = dados.rgResp;

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      { text: 'CONTRATO-BASE DE ADESÃO À ASSOCIAÇÃO DOS ESTUDANTES DE BATATAIS (AEB) – CONDIÇÃO DE ASSOCIADO(A) E BENEFÍCIOS INSTITUCIONAIS', style: 'header' },
      { text: '(O transporte estudantil e suas regras operacionais e financeiras serão disciplinados em Aditivo Contratual específico, nos termos do Estatuto da AEB.)', alignment: 'center', fontSize: 9, margin: [0, 0, 0, 15] },
      
      { text: 'Pelo presente instrumento particular de CONTRATO-BASE DE ADESÃO À ASSOCIAÇÃO, a ASSOCIAÇÃO DOS ESTUDANTES DE BATATAIS – AEB, inscrita no CNPJ sob nº 66.994.187/0001-02, Inscrição Municipal nº 03 00 0011 0004, estabelecida na Rua Barão de Cotegipe, nº 564, Bairro Centro, CEP 14300-087, Batatais, Estado de São Paulo, neste ato devidamente representada por sua Diretoria, doravante denominada simplesmente AEB, e, de outro lado, o(a) estudante Associado(a) ou seu(ua) pai/mãe/responsável legal, no final qualificado(a), doravante denominado(a) ASSOCIADO(A), têm entre si justo e contratado o presente instrumento, que estabelece as condições de adesão à Associação, direitos e deveres gerais do(a) Associado(a) e acesso aos benefícios institucionais, tudo em conformidade com o Estatuto da AEB.', style: 'clause' },

      { text: [{ text: 'CLÁUSULA 1ª', bold: true, color: '#267da8' }, ' – A AEB é associação civil sem fins lucrativos, regida por seu Estatuto, com objetivos institucionais voltados à congregação estudantil, defesa dos interesses de seus Associados(as) e promoção de benefícios institucionais por meio de atividades e parcerias. Nos termos do Estatuto, a Associação também organiza e administra o transporte estudantil de seus Associados(as), atividade principal da Associação, porém facultativa ao(à) associado(a), e que será regulada por contrato e/ou aditivo próprio, não se confundindo com a condição de Associado(a).\n', { text: 'Parágrafo único:', bold: true }, ' Para fins deste contrato-base, considera-se associado(a) o(a) estudante admitido(a) na forma do Estatuto, mediante cadastramento/recadastramento e comprovação de vínculo com instituição de ensino. A eventual utilização do transporte estudantil, embora se trate de atividade principal da Associação, dependerá de adesão específica ao respectivo instrumento (contrato/aditivo), com regras operacionais e obrigações financeiras próprias, observadas as disposições estatutárias e contratuais aplicáveis.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 2ª', bold: true, color: '#267da8' }, ' – O objeto do presente contrato-base é regular a adesão do(a) ASSOCIADO(A) à AEB, estabelecendo direitos e deveres gerais decorrentes da condição de Associado(a), bem como o acesso aos benefícios institucionais previstos no Estatuto e em parcerias eventualmente firmadas pela Associação.\n', { text: '§1º', bold: true }, ' – Para manutenção da condição de Associado(a) no exercício seguinte, será obrigatório o recadastramento, a ser realizado nos prazos, condições e procedimentos divulgados pela AEB por seus canais oficiais, especialmente no início de cada ano.\n', { text: '§2º', bold: true }, ' – Excepcionalmente, a condição de Associado(a) e os respectivos direitos e benefícios serão mantidos de forma provisória, exclusivamente até a conclusão do recadastramento ou encerramento do prazo estabelecido divulgado pela AEB, o que ocorrer primeiro.\n', { text: '§3º', bold: true }, ' – A não realização do recadastramento dentro do período estabelecido implicará na perda da condição de Associado(a) ao final do referido prazo, sem prejuízo da quitação de eventuais obrigações pendentes.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 3ª – VIGÊNCIA E RECADASTRAMENTO:', bold: true, color: '#267da8' }, ' O presente contrato base terá vigência limitada ao ano civil de sua assinatura, encerrando-se em 31 de dezembro do respectivo ano.\n', { text: '§1º', bold: true }, ' – O recadastramento constitui condição indispensável para continuidade do vínculo associativo e eventual acesso a serviços específicos, incluindo o transporte estudantil, quando aplicável.\n', { text: '§2º', bold: true }, ' – Os instrumentos acessórios eventualmente firmados pelo(a) Associado(a), incluindo aditivos relativos a serviços específicos, poderão possuir vigência própria e condições específicas, não se confundindo com a vigência do presente contrato base, permanecendo válidos nos termos neles estabelecidos, desde que mantida a condição de Associado(a), observado o disposto nesta cláusula quanto ao recadastramento.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 4ª – CONTRIBUIÇÃO ASSOCIATIVA E DESCONTO POR PONTUALIDADE:', bold: true, color: '#267da8' }, ' O(a) ASSOCIADO(A) contribuirá com a taxa associativa mensal no valor de R$ 60,00 (sessenta reais), destinada à manutenção das atividades administrativas e institucionais da Associação, nos termos do Estatuto.\n', { text: '§1º', bold: true }, ' – Será concedido desconto por pontualidade no valor de R$10,00 (dez reais), aplicável exclusivamente aos pagamentos realizados até a data de vencimento, reduzindo o valor devido para R$50,00 (cinquenta reais).\n', { text: '§2º', bold: true }, ' – O desconto por pontualidade possui caráter de incentivo à adimplência e é cumulativo com o desconto por parentesco (irmãos), podendo ambos incidir sobre a mesma mensalidade quando atingidos os requisitos mínimos regulados em aditivo próprio; contudo, o desconto por pontualidade não se aplica aos pagamentos realizados após o vencimento.\n', { text: '§3º', bold: true }, ' – O não pagamento até a data de vencimento implica na perda automática do desconto por pontualidade, permanecendo devido o valor integral da contribuição associativa, sem prejuízo dos encargos eventualmente aplicáveis nos termos do Estatuto e deste contrato.\n', { text: '§4º', bold: true }, ' – Os valores das contribuições associativas poderão ser revistos periodicamente pela AEB, mediante deliberação da Diretoria, observados os critérios e limites estabelecidos no Estatuto.\n', { text: '§5º', bold: true }, ' – Durante a vigência de aditivo de transporte firmado pelo(a) Associado(a), a contribuição associativa prevista nesta cláusula fica absorvida pelo valor do transporte, não sendo cobrada de forma cumulativa.\n', { text: '§6º', bold: true }, ' – O associado declara ciência de que a contribuição associativa pode conter parcela destinada ao custeio de bolsas dos membros da administração, nos termos do art. 54 do Estatuto, cujo valor é apurado e publicado anualmente.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 5ª – REGIME DISCIPLINAR, INADIMPLÊNCIA E MEDIDAS CABÍVEIS:', bold: true, color: '#267da8' }, ' O(a) ASSOCIADO(A) se sujeita às regras de inadimplência, penalidades, medidas administrativas e procedimentos previstos no Estatuto da AEB, aplicáveis à execução de quaisquer instrumentos específicos.\n', { text: '§1º', bold: true }, ' – Em caso de atraso, incidirão: I – multa moratória fixa de 2%; e II – juros de mora de 1% ao mês.\n', { text: '§2º', bold: true }, ' – O inadimplemento poderá ensejar medidas administrativas e disciplinares previstas no Estatuto.\n', { text: '§4º', bold: true }, ' – Medidas de cobrança extrajudicial/judicial serão adotadas conforme legislação e instrumentos firmados.\n', { text: '§5º', bold: true }, ' – Quando houver previsão expressa, o(a) ASSOCIADO(A) autoriza inscrição em cadastros de proteção ao crédito ou protesto.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 5.1ª', bold: true, color: '#267da8' }, ' – Caso a Associação institua a Taxa de Rateio de Inadimplência (TRI), sua aplicação observará estritamente o Estatuto e constará de instrumento próprio.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 6ª – DIREITOS E DEVERES DO(A) ASSOCIADO(A):', bold: true, color: '#267da8' }, ' O(a) ASSOCIADO(A) compromete-se a respeitar as leis, os direitos e deveres previstos no Estatuto e regulamentos internos da AEB.\n', { text: 'Parágrafo único', bold: true }, ' – O(a) associado(a) declara ter recebido cópia ou acesso ao Estatuto por meio do QR code abaixo, dando-se por ciente.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 7ª – DESLIGAMENTO/RESCISÃO:', bold: true, color: '#267da8' }, ' O(a) ASSOCIADO(A) poderá solicitar sua desvinculação da AEB mediante aviso prévio mínimo de 15 (quinze) dias, por requerimento formal. O não cumprimento implicará na cobrança das mensalidades limitadas ao aviso prévio não observado.'], style: 'clause' },

      { text: [{ text: 'CLÁUSULA 8ª ao 12ª – DEMAIS DISPOSIÇÕES:', bold: true, color: '#267da8' }, ' A Carteira de Identificação é documento indispensável (Cláusula 8ª). O(a) ASSOCIADO(A) se sujeita às penalidades estatutárias (Cláusula 9ª). As partes reconhecem que este instrumento constitui título executivo extrajudicial (Cláusula 10ª). O(A) ASSOCIADO(A) autoriza o tratamento de seus dados pessoais pela AEB, conforme a LGPD, para gestão e operação (Cláusula 11ª). Fica eleito o foro de Batatais-SP (Cláusula 12ª).'], style: 'clause' },

      // Bloco do Link e QR Code Gerado Nativo no Centro
      { text: 'ACESSO AO ESTATUTO: https://www.aebatatais.com.br/transparencia/documentos/estatutos', link: 'https://www.aebatatais.com.br/transparencia/documentos/estatutos', color: '#267da8', decoration: 'underline', alignment: 'center', margin: [0, 10, 0, 5], fontSize: 10 },
      { qr: 'https://www.aebatatais.com.br/transparencia/documentos/estatutos', fit: 80, alignment: 'center', margin: [0, 0, 0, 15] },

      {
        unbreakable: true,
        stack: [
          { text: [{ text: 'CLÁUSULA 13ª - ASSINATURA ELETRÔNICA:', bold: true, color: '#267da8' }, ' As Partes concordam que este instrumento será assinado de forma eletrônica (portal gov.br), nos termos do art. 10, § 2º, da MP nº 2.200-2/2001 e Lei nº 14.063/2020. Constituirá um único arquivo digital original, dispensando-se assinatura física.'], style: 'clause', margin: [0, 0, 0, 80] },
          {
            columns: [
              // Coluna do Associado (Sempre exibe o nome do estudante e o documento dele)
              { 
                text: '_____________________________________\nAssociado(a)\n\nNOME: ' + dados.nome + '\nRG/CIN: ' + (dados.tipoDoc === 'cin' ? dados.cpf : dados.rg), 
                style: 'assinatura' 
              },
              // Coluna do Responsável (Exibe o nome e doc do responsável caso seja menor, ou fica limpo se for maior)
              { 
                text: '_____________________________________\nPai ou Responsável\n\nNOME: ' + (!dados.isMaior ? dados.nomeResp : '') + '\nRG/CIN: ' + (!dados.isMaior ? dados.rgResp : ''), 
                style: 'assinatura' 
              }
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
