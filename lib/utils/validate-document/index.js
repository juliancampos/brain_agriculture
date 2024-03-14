const validateCPF = require('./validate-cpf');
const validateCNPJ = require('./validate-cnpj');

const validateDocumentStrategy = {
  CPF: validateCPF,
  CNPJ: validateCNPJ
};

module.exports = validateDocumentStrategy;
