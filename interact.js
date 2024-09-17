const Web3 = require("web3");
const contract = require("@truffle/contract");
const AccessControlArtifact = require("./build/contracts/AccessControl.json");

// Connect to the local blockchain
const web3 = new Web3("http://127.0.0.1:7545");
const AccessControl = contract(AccessControlArtifact);
AccessControl.setProvider(web3.currentProvider);

(async () => {
  const accounts = await web3.eth.getAccounts();
  const instance = await AccessControl.deployed();

  // Assign a role
  await instance.assignRole(accounts[1], 2, { from: accounts[0] }); // Assign User role to accounts[1]

  // Get role
  const role = await instance.getRole(accounts[1]);
  console.log("Role of account[1]:", role.toString()); // Output the role
})();
