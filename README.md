# Cosmos Menu

## Explore the Cosmos

The official [Cosmos Menu](https://cosmos-menu-15cf62f9744e4a7cce5bcfb140.webflow.io/), pioneered by Osmosis Labs, aims to be *the* go-to landing page for navigating the Cosmos Ecosystem; a one-stop-shop for high-level information about all projects (Appchains, dApps, utilities, etc.) relevant to any of the Cosmos SDK-based blockchains; i.e., the Interchain/Cosmos Ecosystem.

## Exhibit your Project

We encourage any project, live or soon upcoming, to register their project to the Menu so others can learn more about the ecosystem and about your project. Basic metadata, like a name, description, website, social following and/or contact data, and appropriate keywords should suffice for registration. See the project schema and example below for guidance on registration.

Key Categories:
 - dApp: Any Decentralized Application
 - DeFi
 - NFTs
 - DWeb
 - Gaming
 - Social
 - Liquid Staking
 - General VM
 - Appchain: Any application-specific chain
 - Wallet: Wallet apps and browser extensions.
 - Analytics: Analytics Displays.
 - Explorers: Interfaces allowing users to search for any transaction, block, or address of an appchain.
 - Bridge: Applications that interconnect blockchains by allowing users to send tokens form one chain to another.
 - Dev Tools: APIs and other tools for developers.

### Example Registration

Foochain:
```
"projects": [
  {
    "name": "osmosis",
    "pretty_name": "Osmosis Zone",
    "status": "live",
    "short_description": "The largest DEX in the Cosmos Ecosystem",
    "website": "osmosis.zone",
    "socials": {
      "twitter": "@osmosiszone",
    },
    "categories": [
      "trading_frontend",
      "dApp",
      "appchain"
    ],
    "token_info": {
      "coingecko": "coingecko_id"
      "osmosis": "https://link_to_osmosis_token_page",
    },
    "tags": [
      "dex"
    ],
    "chains": [
      "osmosis"
    ]
  }
]
```
