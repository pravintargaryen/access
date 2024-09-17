const AccessControl = artifacts.require("AccessControl");

module.exports = async function (deployer, network, accounts) {
  // Use the first account as the initial owner
  const initialOwner = accounts[0];

  await deployer.deploy(AccessControl, initialOwner);
};
