const AdminUpgradeabilityProxy = artifacts.require("AdminUpgradeabilityProxy");

module.exports = function (deployer) {
  deployer.deploy(AdminUpgradeabilityProxy, '0xFF282b532BD5562BB7Aa88aBD559e56c212D0162');
};
