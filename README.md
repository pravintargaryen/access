# Access Control Smart Contract

This project demonstrates a decentralized access control system using Ethereum smart contracts. It uses Truffle for development and testing, and OpenZeppelin for reusable contract components.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16 or later)
- npm (v7 or later)
- Ganache CLI (for local blockchain testing)
- Truffle (for contract deployment)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pravintargaryen/access.git
cd access-control-smart-contract
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Ganache CLI

```bash
ganache-cli

```

### 4. Compile Contracts

```bash
truffle compile

```

### 5. Run Migrations

```bash
truffle migrate --network development

```

### 6. Test

```bash
truffle test

```

### Directory Structure

- contracts/ - Contains Solidity smart contract files.
- migrations/ - Contains Truffle migration scripts for deploying contracts.
- test/ - Contains test scripts for your contracts.
- truffle-config.js - Configuration file for Truffle.
