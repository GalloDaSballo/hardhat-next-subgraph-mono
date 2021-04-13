# Hardhat Next Subgraph Mono

Monorepo setup using:
- Solidity Template by @TomAFrench and @paulrberg
- NextJS with Typescript and EsLint
- theGraph


## hardhat
The contracts, with tests and tasks to publish new content, using Solidity Template

## next
The UI for the website, to interact with the protocol and publish new content, using NextJS

## subgraph
The subgraph code to track new posts, using TheGraph

# Commands

## Shortcuts
```
yarn hardhat
```
```
yarn next
```
```
yarn subgraph
```

### Example: Deploy with Hardhat
```
yarn hardhat deploy
```

### Example Run NextJS in Development Mode
```
yarn next dev
```

# Setup Hardhat

Rename `.env.example` to `.env` and fill in the details

# Setup Subgraph

Rename `YOU_GITHUB/SUB_GRAPHNAME` in `subgraph/package.json`