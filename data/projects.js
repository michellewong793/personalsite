const projects = [
  {
    slug: "provable-explorer",
    name: "Provable Explorer",
    url: "https://explorer.provable.com",
    tech: "Next.js · React · TypeScript",
    tagline: "Block explorer for the Provable zkApp ecosystem.",
    image: "/img/Provable_Explorer.png",
    role: "Frontend Engineer",
    year: "August 2024-Feb2025",
    description:
      "Provable Explorer is a full-featured block explorer built for the Provable zkApp platform. The product gives developers and users visibility into on-chain activity — transactions, accounts, smart contracts, and proofs — all in a fast, searchable interface.",
    contributions: [
      "Architected the data-fetching layer using SWR with a custom cache strategy, cutting average load time by 40%.",
      "Built a real-time transaction feed with WebSocket subscriptions and optimistic UI updates.",
      "Designed and implemented a filterable, paginated table system.",
    ],
    outcome:
      "The explorer became the primary debugging tool for zkApp developers on the Provable network, handling over 50k page views in its first month after launch.",
  },
  {
    slug: "mina-protocol",
    name: "Mina Protocol",
    url: "https://www.minaprotocol.com",
    tech: "React · ReasonML",
    tagline: "Website for the world's lightest blockchain.",
    role: "Frontend Engineer",
    year: "Jan 2019–Jan 2020",
    description:
      "Mina Protocol is a layer-1 blockchain that maintains a constant 22KB chain size using zk-SNARKs. The marketing and developer-facing website needed to convey both the technical depth of the protocol and make it accessible to a broad audience.",
    contributions: [
      "Migrated core pages from ReasonML/ReScript to React and Next.js",
      "Integrated Contentful CMS to allow non-technical team members to manage blog posts and announcements.",
      "Improved Lighthouse performance scores from 62 to 91 by auditing and removing render-blocking resources.",
    ],
    outcome:
      "Site traffic grew 3× following the Mina mainnet launch, with the interactive explainer becoming the most-visited page for three consecutive months.",
  },
  {
    slug: "celo",
    name: "Celo",
    url: "https://celo.org",
    tech: "React · TypeScript",
    tagline: "Frontend for a mobile-first DeFi platform.",
    role: "Frontend Engineer",
    year: "2021",
    description:
      "Celo is an EVM-compatible blockchain designed to make financial tools accessible to anyone with a mobile phone. The website serves as the primary gateway for developers, validators, and end users entering the Celo ecosystem.",
    contributions: [
      "Rebuilt the homepage with a new component library, reducing bundle size by 28% while preserving full feature parity.",
      "Implemented custom ZenDesk support center for Valora, enabling team to direct customer inquiries on a personalized site, rather than a generic help center",
      "Wrote unit and integration tests using Jest and Testing Library, bringing coverage on critical paths to 85%.",
    ],
    outcome:
      "The relaunched site supported a 5× increase in developer signups during the Celo Camp accelerator cohort.",
  },
  {
    slug: "valora",
    name: "Valora",
    url: "https://www.valoraapp.com",
    tech: "Contentful · React",
    tagline: "Blog and marketing site for the Valora wallet.",
    role: "Frontend Engineer",
    year: "Jan 2020-Jan2021",
    description:
      "Valora is a mobile payments app built on the Celo network that lets users send, receive, and spend crypto like cash. The blog and marketing site needed to serve as both an editorial platform and a download funnel for the app.",
    contributions: [
      "Built a fully dynamic blog platform backed by Contentful, supporting rich text, embedded media, and custom components.",
      "Implemented Open Graph and Twitter Card metadata generation per post, improving social share click-through by ~30%.",
      "Set up incremental static regeneration (ISR) so new posts go live within 60 seconds without a full rebuild.",
    ],
    outcome:
      "The new blog platform shipped two weeks ahead of schedule and handled a spike of 20k concurrent readers during the Valora V2 announcement.",
  },
];

export default projects;
