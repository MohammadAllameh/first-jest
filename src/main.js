function gta(c, d) {
  //   if (c > d) return true;
  //   if (c < d) return false;
  //   if (c == d) return true;
  return c >= d ? true : false;
}

function getMessageWelcom(msg) {
  return `Welcome ${msg}!`;
}

// const shoppingList = [
//   "diapers",
//   "kleenex",
//   "trash bags",
//   "paper towels",
//   "milk",
// ];

function shoppingList(msg) {
  return ["diapers", "kleenex", "trash bags", "paper towels", "milk"];
}

function getUser() {
  return {
    id: 1,
    name: "mohammad",
  };
}

function login(pass) {
  if (pass !== "1234") throw new Error("invalid password");
  return { jwt: "jskdfosldfkjownerk2oi34uj2342i3j5$#Q$@#$" };
}

module.exports = { gta, getMessageWelcom, shoppingList, getUser, login };
