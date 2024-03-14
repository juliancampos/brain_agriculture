const invalidValues = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999'
];

const digitIsValid = (strCPF, untilDigit, validateDigit) => {
  let soma = 0;
  let resto;
  for (i = 1; i <= untilDigit; i++) {
    soma += parseInt(strCPF.substring(i - 1, i)) * (validateDigit - i);
  }
  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11)) {
    resto = 0;
  }

  if (resto != parseInt(strCPF.substring(untilDigit, untilDigit+1))) {
    return false;
  }
  return true;
}

const validaCPF = (cpf) => {
  let strCPF = String(cpf).replace(/[^\d]/g, '')

  if (strCPF.length !== 11) return false;
  if (invalidValues.includes(strCPF)) return false;

  if(!digitIsValid(strCPF, 9, 11)) {
    return false;
  }

  if(!digitIsValid(strCPF, 10, 12)) {
    return false;
  }

  return true;
}

module.exports = validaCPF;
