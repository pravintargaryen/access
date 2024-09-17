// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AccessControl is Ownable {
    enum Role { None, Admin, User }

    mapping(address => Role) private roles;

    event RoleAssigned(address indexed account, Role role);

    // Pass the initialOwner directly to the Ownable constructor
    constructor(address initialOwner) Ownable(initialOwner) {
        roles[initialOwner] = Role.Admin; // The contract deployer is an Admin
    }

    modifier onlyAdmin() {
        require(roles[msg.sender] == Role.Admin, "Not an admin");
        _;
    }

    function assignRole(address account, Role role) public onlyAdmin {
        roles[account] = role;
        emit RoleAssigned(account, role);
    }

    function getRole(address account) public view returns (Role) {
        return roles[account];
    }
}
