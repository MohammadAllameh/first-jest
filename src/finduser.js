const service = require("./services");

function calculateDiscount(id) {
  let discount = 0;
  const user = service.getUserById(id);
  if (user.purchasesCount > 3) discount = 10;
  service.sendEmail(user.name, `you have got ${discount} percent`);
  return discount;
}

module.exports = { calculateDiscount };
