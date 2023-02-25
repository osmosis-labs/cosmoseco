# Cosmos Menu

## Explore the Cosmos

The official [Cosmos Menu](https://cosmos-menu-15cf62f9744e4a7cce5bcfb140.webflow.io/), pioneered by Osmosis Labs, aims to be *the* go-to landing page for navigating the Cosmos Ecosystem; a one-stop-shop for high-level information about all projects (Appchains, dApps, utilities, etc.) relevant to any of the Cosmos SDK-based blockchains; i.e., the Interchain/Cosmos Ecosystem.

## Exhibit your Project

We encourage any project, live or soon upcoming, to register their project to the Menu so others can learn more about the ecosystem and about your project. Basic metadata, like a name, description, website, social following and/or contact data, and appropriate keywords should suffice for registration. See the project schema and example below for guidance on registration.

### Properties

Categories:
- Chain: A blockchain: a decentralized, immutable ledger for secure transactions. Examples: Secret Network, Osmosis, Cosmos Hub.
- dApp: Decentralized application that operates on a blockchain. Examples: Gravity DEX, Injective.
- DeFi: Decentralized finance that enables permissionless access to financial services. Examples: Osmosis DEX, Kava Lend.
- NFTs: Non-fungible tokens are unique digital assets represented on a blockchain. Examples: Stargaze, Uptick, OpenSea.
- DWeb: Decentralized web platforms provide censorship-resistant, peer-to-peer services. Examples: Akash Network, Sentinel.
- Gaming: Projects that utilize blockchain technology for gaming purposes. Examples: Axie Infinity, Decentraland.
- Social: Social networks that use blockchain technology for privacy, security and other features. Examples: ICNS, Likecoin, Desmos.
- Liquid Staking: Staking tokens that can be used as collateral in lending and other financial services. Examples: Lido, Stride, Quicksilver.
- EVM: An Ethereum-compatible Virtual Machine for smart contracts. Examples: Evmos, Ethermint.
- General VM: General purpose virtual machines that run smart contracts. Examples: Juno, Terra 2.0.
- Oracle: Decentralized data feed for smart contracts. Examples: Band Protocol.
- Bridge: A technology that allows two different blockchains to communicate with each other. Examples: Axelar, Gravity Bridge, Wormhole.
- Wallet: A cryptocurrency wallet that provides storage and transaction capabilities for different assets. Examples: Keplr, Leap, Ledger.
- Analytics: Blockchain analytics platform that provides insights into transactions, addresses, and networks. Examples: Dexmos, Map of Zones, Flipside Crypto.
- Explorers: Block explorers that provide a user interface to view and search transactions and blocks on a blockchain. Examples: Mintscan, Big Dipper.
- Dev Tools: Development tools, frameworks and libraries for building on Cosmos. Examples: Cosmos Kit, Telescope, Tendermint.
- Meme: projects centered around crypto assets with humorous or cultural significance. Examples: Dogecoin, Chihuahua, MEME.
- Stablecoin: cryptocurrencies pegged to an asset, often to the U.S. Dollar. Examples: Terra USD (UST), Circle USD (USDC), Mirror TSLA (mTSLA).

Chains: The `chains` property is used for listing the chains interacting directly with the project. Each list item must be written exactly as its chain_name property as seen in the Cosmos Chain Registry. E.g., 'cosmoshub' is the correct chain_name property value to refer to the Cosmos Hub, while 'Cosmos Hub' or 'Cosmos' shall not be specified here.

### Example Registration

```
"projects": [
  {
    "name": "Osmosis DEX",
    "status": "live",
    "short_description": "The largest DEX in the Cosmos Ecosystem",
    "website": "osmosis.zone",
    "socials": {
      "twitter": "@osmosiszone",
    },
    "categories": [
      "Chain"
      "dApp",
      "DeFi"
    ],
    "token_info": {
      "coingecko": "https://www.coingecko.com/en/coins/osmosis",
      "cmc": "https://coinmarketcap.com/currencies/osmosis/",
      "osmosis": "https://info.osmosis.zone/token/OSMO"
    },
    "tags": [
      "dex",
      "zone"
    ],
    "chains": [
      "osmosis"
    ]
  }
]
```
