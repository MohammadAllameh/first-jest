function getUserById(id) {
  console.log("reading data from db ... ");
  const users = [
    { id: 1, name: "mohammad", purchasesCount: 4 },
    { id: 2, name: "ali", purchasesCount: 6 },
    { id: 3, name: "reza", purchasesCount: 2 },
  ];
}

function sendEmail(name, message) {
  console.log("email sent!");
}

module.exports = {
  getUserById,
  sendEmail,
};
