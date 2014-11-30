var S4;

S4 = function() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};


/*
  @module guid
  @return A guid generated.
 */

module.exports = function() {
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};