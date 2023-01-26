# Cosmos Menu

## Explore the Cosmos

The official [Cosmos Menu](https://cosmos-menu-15cf62f9744e4a7cce5bcfb140.webflow.io/), pioneered by Osmosis Labs, aims to be *the* go-to landing page for navigating the Cosmos Ecosystem; a one-stop-shop for high-level information about all projects (Appchains, dApps, utilities, etc.) relevant to any of the Cosmos SDK-based blockchains; i.e., the Interchain/Cosmos Ecosystem.

## Exhibit your Project

We encourage any project, live or soon upcoming, to register their project to the Menu so others can learn more about the ecosystem and about your project. Basic metadata, like a name, description, website, social following and/or contact data, and appropriate keywords should suffice for registration. See the project schema and example below for guidance on registration.

Key Categories:
 - Appchain: Any Cosmos SDK-based blockchain. Should not include chains merely originating with Cosmos SDK that have since deviated from any official version of the Cosmos SDK.
 - Wallet: Wallet apps and browser extensions.
 - Analytics: Analytics Displays.
 - Explorers: Interfaces allowing users to search for any transaction, block, or address of an appchain.
 - Bridge: Applications that interconnect blockchains by allowing users to send tokens form one chain to another.
 - Community: Community-run projects, suchs as a Support Chat site.
 - Trading Frontend: Any interface (e.g., Desktop App, Mobile App, or Website) where users can connect a wallet, view prices, execute swap transactions or trade orders.
 - dApp: Any Decentralized Application.
 - Dev Tools: APIs and other tools for developers.

### Example Registration

Foochain:
```
"projects": [
  {
    "name": "osmosis",
    "pretty_name": "Osmosis Zone",
    "short_description": "The largest DEX in the Cosmos Ecosystem",
    "website": "osmosis.zone",
    "related_links": [
      "app.osmosis.zone",
      "docs.osmosis.zone",
      "support.osmosis.zone",
      "frontier.osmosis.zone",
      "testnet.osmosis.zone"
    ],
    "socials": {
      "twitter": "@osmosiszone",
      "medium": "medium.com/osmosis",
      "blog": "osmosis.zone/blog",
      "telegram": "https://t.me/osmosis_chat"
    },
    "categories": [
      "trading_frontend",
      "dApp",
      "appchain"
    ],
    "tags" [
      "dex"
    ],
    "long_description": "Osmosis Zone is a ...",
    "team_members": [
      {
        "sunny97" // could direct to a 'person profile', with maybe their role, bio, or socials, etc.?
      },
      {
        "another person"
      }
    ]
  }
]
```
