const buildNewFarm = ({
  name,
  city,
  state,
  totalArea,
  productiveArea,
  vegetationArea,
  cultivation
}) => {
  const createdAt = new Date();

  const newFarm = {
    name,
    city,
    state,
    totalArea: Number(totalArea),
    productiveArea: Number(productiveArea),
    vegetationArea: Number(vegetationArea),
    cultivation,
    createdAt
  };
  return newFarm;
}

const buildUpdateFarm = ({
  name,
  city,
  state,
  totalArea,
  productiveArea,
  vegetationArea,
  cultivation,
  producerId
}) => {
  const updatedAt = new Date();

  const newFarm = {
    ...(name && { name: name }),
    ...(city && { city: city }),
    ...(state && { state: state }),
    ...(totalArea && { totalArea: Number(totalArea) }),
    ...(productiveArea && { productiveArea: Number(productiveArea) }),
    ...(vegetationArea && { vegetationArea: Number(vegetationArea) }),
    ...(cultivation && Array.isArray(cultivation) && { cultivation: [...new Set(cultivation)] }),
    ...(producerId && { producerId: Number(producerId) }),
    updatedAt
  };
  return newFarm;
}

module.exports = {
  buildNewFarm,
  buildUpdateFarm
};
