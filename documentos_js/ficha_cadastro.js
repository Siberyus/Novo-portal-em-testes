window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarFichaCadastro = function(dados) {
  
  let documentoEstudante = dados.tipoDoc === 'cin' ? (dados.cpf || 'Não informado') : (dados.rg || dados.cpf || 'Não informado');
  let documentoResponsavel = dados.rgResp || 'Não informado';
  let linhaIdentificacao = dados.tipoDoc === 'cin' ? [ { text: 'CIN nº: ', bold: true }, dados.cpf || '' ] : [ { text: 'CPF nº: ', bold: true }, dados.cpf || '', { text: '   RG nº: ', bold: true }, dados.rg || '' ];
  
  let blocoFoto = (dados.isNovo && dados.fotoBase64) 
      ? { image: dados.fotoBase64, width: 75, height: 100, alignment: 'right' } 
      : { width: 75, text: '' };

  return {
    pageMargins: [50, 40, 50, 40],
    content: [
      {
        columns: [
          { text: 'FICHA CADASTRAL AEB – 2º SEMESTRE DE 2026', style: 'header', width: '*', margin: [0, 20, 0, 0] },
          blocoFoto
        ],
        margin: [0, 0, 0, 20]
      },
      
      { text: 'DADOS DO(A) ASSOCIADO(A)', style: 'sectionTitle' },
      { text: [ { text: 'Nome: ', bold: true }, dados.nome || '' ], style: 'lineItem' },
      { text: linhaIdentificacao, style: 'lineItem' },
      { text: [ { text: 'Endereço: ', bold: true }, `${dados.rua || ''}, ${dados.num || ''} - ${dados.complemento ? dados.complemento + ' - ' : ''}${dados.bairro || ''}` ], style: 'lineItem' },
      { text: [ { text: 'CEP: ', bold: true }, `${dados.cep || ''}   `, { text: 'Cidade: ', bold: true }, dados.cidade || '' ], style: 'lineItem' },
      { text: [ { text: 'E-mail: ', bold: true }, dados.email || '' ], style: 'lineItem' },
      { text: [ { text: 'Tel. Residencial: ', bold: true }, `${dados.tel || ''}   `, { text: 'Tel. Celular: ', bold: true }, dados.celular || '' ], style: 'lineItem', margin: [0, 0, 0, 15] },

      { text: 'INSTITUIÇÃO DE ENSINO', style: 'sectionTitle' },
      { text: [ { text: 'Nome da Instituição: ', bold: true }, dados.instituicao || '' ], style: 'lineItem' },
      { text: [ { text: 'Destino: ', bold: true }, `(${dados.destino === 'Franca-SP' ? 'X' : '  '}) Franca (SP)   (${dados.destino === 'Ribeirao Preto-SP' ? 'X' : '  '}) Ribeirão Preto (SP)` ], style: 'lineItem' },
      { text: [ { text: 'Curso: ', bold: true }, dados.curso || '' ], style: 'lineItem' },
      { text: [ { text: 'Nº de Matrícula: ', bold: true }, dados.matricula || '' ], style: 'lineItem' },
      { text: [ { text: 'Período: ', bold: true }, `(${dados.periodo === 'Diurno' ? 'X' : '  '}) Diurno   (${dados.periodo === 'Noturno' ? 'X' : '  '}) Noturno   (${dados.periodo === 'Vespertino' ? 'X' : '  '}) Vespertino   (${dados.periodo === 'Integral' ? 'X' : '  '}) Integral` ], style: 'lineItem' },
      { text: [ { text: 'Data de Ingresso: ', bold: true }, `${dados.ingresso || ''}   `, { text: 'Data Estimada de Formação: ', bold: true }, dados.conclusao || '' ], style: 'lineItem', margin: [0, 0, 0, 15] },

      { text: 'MODALIDADES DE TRANSPORTE (Marque as opções aplicáveis)', style: 'sectionTitle' },
      { text: `(${dados.modalidade === 'integral' ? 'X' : '  '}) Integral (Todos os dias da semana)`, style: 'lineItem' },
      { text: `(${dados.modalidade === 'passe' ? 'X' : '  '}) Passe de Transporte      (${dados.passeDias == '1' ? 'X' : '  '}) 1 (um) dia na semana   (${dados.passeDias == '2' ? 'X' : '  '}) 2 (dois) dias na semana`, style: 'lineItem' },
      { text: `      Dias da semana a utilizar: ${dados.passeQuais || ''}`, style: 'lineItem' },
      { text: `(${dados.aditivo === 'irmaos' ? 'X' : '  '}) Desconto para Irmãos(ãs)`, style: 'lineItem' },
      { text: `      Nome(s) do(s) irmão(s): ${dados.nomeIrmao || ''}`, style: 'lineItem' },
      { text: `(${dados.aditivo === 'funcionario' ? 'X' : '  '}) Isenção para Funcionário Público Municipal de Batatais (SP)`, style: 'lineItem' },
      { text: `(${dados.modalidade === 'associativo' ? 'X' : '  '}) Apenas benefícios associativos (não utiliza transporte)`, style: 'lineItem', margin: [0, 0, 0, 15] },

      { text: 'DOCUMENTAÇÃO E ANEXOS (Para uso da AEB)', style: 'sectionTitle' },
      { text: 'Assinale os documentos entregues e assinados conforme a situação do(a) associado(a):\nObrigatórios para NOVO CADASTRO:', style: 'lineItem' },
      { text: `( X ) 02 Fotos 3x4 atualizadas\n( X ) Cópia do RG/CPF ou CIN\n( X ) Cópia do Comprovante de Residência atualizado\n( X ) Cópia do Comprovante de Matrícula atualizado\n( X ) Contrato-Base de Adesão à AEB`, style: 'lineItem', margin: [0, 0, 0, 5] },
      { text: 'Conforme a modalidade (Assinalar se aplicável):', style: 'lineItem' },
      { text: `(${dados.modalidade === 'integral' ? 'X' : '  '}) Aditivo Contratual – Transporte Estudantil (Regras Operacionais e Financeiras)\n(${dados.modalidade === 'passe' ? 'X' : '  '}) Aditivo Contratual – Modalidade Passe\n(${dados.aditivo === 'irmaos' ? 'X' : '  '}) Aditivo Contratual – Desconto para Irmãos\n(${dados.aditivo === 'funcionario' ? 'X' : '  '}) Aditivo Contratual – Isenção para Funcionário Público\n(${['passe', 'irmaos', 'funcionario'].includes(dados.modalidade) || ['passe', 'irmaos', 'funcionario'].includes(dados.aditivo) ? 'X' : '  '}) Documentação comprobatória específica (Passe, Irmãos ou Funcionário Público)`, style: 'lineItem', margin: [0, 0, 0, 15] },

      {
        unbreakable: true,
        stack: [
          { text: 'DECLARAÇÃO:', bold: true, margin: [0, 0, 0, 5] },
          { text: 'Declaro, para todos os fins legais, que as informações contidas nesta ficha cadastral e os documentos anexos (cópias do RG, CPF, comprovante de matrícula, comprovante de residência e fotos 3x4) são verdadeiros e estão atualizados. Estou ciente de que a efetivação da condição de associado(a) e os benefícios relativos às modalidades específicas dependem da entrega e assinatura dos respectivos Aditivos e Contratos aplicáveis à minha situação.\n\nOs dados informados nesta ficha serão tratados pela AEB para fins de gestão associativa e operação do transporte, podendo ser compartilhados com a transportadora e o Município, nos termos da cláusula de Proteção de Dados do Contrato-Base e da Lei 13.709/2018.', style: 'clause' },
          { text: 'As Partes concordam que este instrumento será assinado de forma eletrônica, utilizando-se o portal gov.br (níveis Prata ou Ouro), nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020. E, por estarem assim justas e contratadas, declaram reconhecer expressamente a validade, integridade, autenticidade e eficácia jurídica do presente documento, bem como sua força executiva, o qual constituirá um único arquivo digital original para todos os fins de direito, dispensando-se a emissão ou assinatura de vias físicas.', style: 'clause', margin: [0, 0, 0, 80] },
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
        header: { fontSize: 14, bold: true, alignment: 'center' },
        sectionTitle: { fontSize: 12, bold: true, color: '#267da8', margin: [0, 15, 0, 8] },
        lineItem: { margin: [0, 0, 0, 4] },
        clause: { margin: [0, 0, 0, 10] },
        assinatura: { fontSize: 10, alignment: 'center' }
    }
  };
};
