window.DocumentosAEB = window.DocumentosAEB || {};
window.DocumentosAEB.gerarFichaRecadastro = function(dados) {
  return {
    content: [
      { text: 'FICHA DE RECADASTRAMENTO AEB – 2º SEMESTRE DE 2026', style: 'header', alignment: 'center', bold: true, margin: [0, 0, 0, 15] },
      
      { text: 'DADOS DO(A) ASSOCIADO(A)', bold: true, margin: [0, 0, 0, 5] },
      { text: `Nome: ${dados.nome}`, margin: [0, 0, 0, 3] },
      { text: `CPF nº: ${dados.cpf}   RG/CIN nº: ${dados.rg}`, margin: [0, 0, 0, 3] },
      { text: `Endereço: ${dados.rua}, ${dados.num} - ${dados.complemento ? dados.complemento + ' - ' : ''}${dados.bairro}`, margin: [0, 0, 0, 3] },
      { text: `CEP: ${dados.cep}   Cidade: ${dados.cidade}`, margin: [0, 0, 0, 3] },
      { text: `E-mail: ${dados.email}`, margin: [0, 0, 0, 3] },
      { text: `Tel. Residencial: ${dados.tel}   Tel. Celular: ${dados.celular}`, margin: [0, 0, 0, 15] },

      { text: 'INSTITUIÇÃO DE ENSINO', bold: true, margin: [0, 0, 0, 5] },
      { text: `Nome da Instituição: ${dados.instituicao}`, margin: [0, 0, 0, 3] },
      { text: `Destino: (${dados.destino === 'Franca-SP' ? 'X' : '  '}) Franca (SP)   (${dados.destino === 'Ribeirao Preto-SP' ? 'X' : '  '}) Ribeirão Preto (SP)`, margin: [0, 0, 0, 3] },
      { text: `Curso: ${dados.curso}`, margin: [0, 0, 0, 3] },
      { text: `Nº de Matrícula: ${dados.matricula}`, margin: [0, 0, 0, 3] },
      { text: `Período: (${dados.periodo === 'Diurno' ? 'X' : '  '}) Diurno   (${dados.periodo === 'Noturno' ? 'X' : '  '}) Noturno   (${dados.periodo === 'Vespertino' ? 'X' : '  '}) Vespertino   (${dados.periodo === 'Integral' ? 'X' : '  '}) Integral`, margin: [0, 0, 0, 3] },
      { text: `Data de Ingresso: ${dados.ingresso}   Data Estimada de Formação: ${dados.conclusao}`, margin: [0, 0, 0, 15] },

      { text: 'MODALIDADES DE TRANSPORTE (Marque as opções aplicáveis)', bold: true, margin: [0, 0, 0, 5] },
      { text: `(${dados.modalidade === 'integral' ? 'X' : '  '}) Integral (Todos os dias da semana)`, margin: [0, 0, 0, 3] },
      { text: `(${dados.modalidade === 'passe' ? 'X' : '  '}) Passe de Transporte      (${dados.passeDias == '1' ? 'X' : '  '}) 1 (um) dia na semana   (${dados.passeDias == '2' ? 'X' : '  '}) 2 (dois) dias na semana`, margin: [0, 0, 0, 3] },
      { text: `      Dias da semana a utilizar: ${dados.passeQuais}`, margin: [0, 0, 0, 3] },
      { text: `(${dados.aditivo === 'irmaos' ? 'X' : '  '}) Desconto para Irmãos(ãs)`, margin: [0, 0, 0, 3] },
      { text: `      Nome(s) do(s) irmão(s): ${dados.nomeIrmao}`, margin: [0, 0, 0, 3] },
      { text: `(${dados.aditivo === 'funcionario' ? 'X' : '  '}) Isenção para Funcionário Público Municipal de Batatais (SP)`, margin: [0, 0, 0, 3] },
      { text: `(${dados.modalidade === 'associativo' ? 'X' : '  '}) Apenas benefícios associativos (não utiliza transporte)`, margin: [0, 0, 0, 15] },

      { text: 'DOCUMENTAÇÃO E ANEXOS (Para uso da AEB)', bold: true, margin: [0, 0, 0, 5] },
      { text: 'Assinale os documentos entregues e assinados conforme a situação do(a) associado(a):', margin: [0, 0, 0, 3] },
      { text: `( X ) Cópia do Comprovante de Matrícula atualizado\n( X ) Contrato-Base de Adesão à AEB`, margin: [0, 0, 0, 5] },
      { text: 'Conforme a modalidade (Assinalar se aplicável):', margin: [0, 0, 0, 3] },
      { text: `(${dados.modalidade === 'integral' ? 'X' : '  '}) Aditivo Contratual – Transporte Estudantil (Regras Operacionais e Financeiras)\n(${dados.modalidade === 'passe' ? 'X' : '  '}) Aditivo Contratual – Modalidade Passe\n(${dados.aditivo === 'irmaos' ? 'X' : '  '}) Aditivo Contratual – Desconto para Irmãos\n(${dados.aditivo === 'funcionario' ? 'X' : '  '}) Aditivo Contratual – Isenção para Funcionário Público\n(${['passe', 'irmaos', 'funcionario'].includes(dados.modalidade) || ['passe', 'irmaos', 'funcionario'].includes(dados.aditivo) ? 'X' : '  '}) Documentação comprobatória específica`, margin: [0, 0, 0, 15] },

      {
        unbreakable: true,
        stack: [
          { text: 'DECLARAÇÃO:\nDeclaro, para todos os fins legais, que as informações contidas nesta ficha de recadastramento e os documentos anexos são verdadeiros e estão atualizados. Estou ciente de que a manutenção da condição de associado(a) e os benefícios relativos às modalidades específicas dependem da entrega e assinatura dos respectivos Aditivos e Contratos aplicáveis à minha situação.\n\nOs dados informados nesta ficha serão tratados pela AEB para fins de gestão associativa e operação do transporte, podendo ser compartilhados com a transportadora e o Município, nos termos da cláusula de Proteção de Dados do Contrato-Base e da Lei 13.709/2018.\n\nAs Partes concordam que este instrumento será assinado de forma eletrônica, utilizando-se o portal gov.br (níveis Prata ou Ouro), nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020. E, por estarem assim justas e contratadas, declaram reconhecer expressamente a validade, integridade, autenticidade e eficácia jurídica do presente documento, bem como sua força executiva, o qual constituirá um único arquivo digital original para todos os fins de direito, dispensando-se a emissão ou assinatura de vias físicas.', alignment: 'justify', fontSize: 9, margin: [0, 0, 0, 80] },
          {
            columns: [
              { text: '_____________________________________\nAssociado(a)\n\nNOME: ' + (dados.isMaior ? dados.nome : '') + '\nRG/CIN: ' + (dados.isMaior ? (dados.rg || dados.cpf) : ''), alignment: 'center' },
              { text: '_____________________________________\nPai ou Responsável\n\nNOME: ' + (!dados.isMaior ? dados.nomeResp : '') + '\nRG/CIN: ' + (!dados.isMaior ? dados.rgResp : ''), alignment: 'center' }
            ]
          }
        ]
      }
    ],
    defaultStyle: { fontSize: 10 }
  };
};
