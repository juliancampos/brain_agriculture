const buildNewProducer = ({
  documentType,
  documentNumber,
  name
}) => {
  const createdAt = new Date();

  const newProducer = {
    documentType,
    documentNumber,
    name,
    createdAt
  };
  return newProducer;
}

const buildUpdateProducer = ({
  documentType,
  documentNumber,
  name
}) => {
  const updatedAt = new Date();

  const newProducer = {
    ...(documentType && { documentType }),
    ...(documentNumber && { documentNumber }),
    ...(name && { name }),
    updatedAt
  };
  return newProducer;
}

module.exports = {
  buildNewProducer,
  buildUpdateProducer
};
