const validateTotalAreaFarm = ({ productiveArea, vegetationArea, totalArea }) => {
  if (totalArea != Number(productiveArea) + Number(vegetationArea)) {
    return false;
  }
  return true;
}

module.exports = validateTotalAreaFarm;
