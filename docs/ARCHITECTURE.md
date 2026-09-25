# Repository Architecture & Standard Structure

```
spatial-biotechnology-website/
├── content/                     # Human-readable markdown content source
│   ├── group-overview.md        # Mission, background, technology pillars
│   ├── research-lines.md        # 4 core research axes & methodologies
│   ├── team.md                  # Complete member roster, roles, LinkedIn
│   ├── publications.md          # Published papers, DOIs, abstracts
│   ├── grants-projects.md       # ERC, AECC, HFSP funding
│   ├── collaborations.md        # Stanford, Harvard, DKFZ, IDIBAPS, etc.
│   ├── join-us.md               # Open positions & internships
│   └── contact.md               # PCB address & directions
│
├── docs/                        # Specifications & architecture guides
│   ├── DESIGN_SPEC.md           # Color tokens, typography, UX specs
│   └── ARCHITECTURE.md          # Codebase blueprint
│
├── public/                      # Static assets served at root
│   ├── images/
│   │   ├── team/                # Researcher headshots & LinkedIn avatars
│   │   ├── research/            # MIBI multiplex microscopy & figures
│   │   ├── logos/               # IBEC, PCB, ERC, AECC, HFSP logos
│   │   └── hero/                # Spatial banner graphics
│   └── resources/               # Downloadable PDFs, posters, papers
│
├── src/                         # React Application Source
│   ├── components/              # Modular UI components
│   │   ├── Navbar.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer with affiliations
│   │   ├── SpatialCanvas.tsx    # Interactive multiplex cellular visualizer
│   │   ├── ResearchCard.tsx     # Research axis component
│   │   ├── TeamCard.tsx         # Headshot with B&W -> Color hover & LinkedIn
│   │   ├── PublicationCard.tsx  # Searchable & expandable paper item
│   │   └── MetricBadge.tsx      # Stat counters
│   │
│   ├── pages/                   # Application views
│   │   ├── HomePage.tsx         # Overview, research highlights, latest news
│   │   ├── ResearchPage.tsx     # Deep-dive into 4 axes & tech platforms
│   │   ├── TeamPage.tsx         # Full team grid & alumni
│   │   ├── PublicationsPage.tsx # Searchable publications repository
│   │   ├── GrantsNewsPage.tsx   # Grants, news, consortium updates
│   │   ├── JoinUsPage.tsx       # Careers, open calls, internship contact
│   │   └── ContactPage.tsx      # Interactive map info, PCB directions
│   │
│   ├── data/                    # Type-safe data modules mirroring content/
│   │   ├── teamData.ts          # Team roster with LinkedIn links
│   │   ├── researchData.ts      # Research axes & platforms
│   │   ├── publicationsData.ts  # Publications dataset with DOIs
│   │   ├── grantsData.ts        # Grants & consortium data
│   │   └── newsData.ts          # News and milestone entries
│   │
│   ├── types/                   # TypeScript interfaces
│   │   └── index.ts
│   │
│   ├── styles/
│   │   └── index.css            # Tailwind directives & custom CSS
│   │
│   ├── App.tsx                  # Main layout & router configuration
│   └── main.tsx                 # React entry point
│
├── index.html                   # HTML template
├── package.json                 # Node dependencies & scripts
├── tailwind.config.js           # Tailwind styles configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript compiler config
└── vite.config.ts               # Vite build config
```

## Adding and Updating Content
1. **Team Members**: Add to `content/team.md` and `src/data/teamData.ts`. Add avatar to `public/images/team/[name].jpg`.
2. **Publications**: Add to `content/publications.md` and `src/data/publicationsData.ts`.
3. **Research Figures**: Place images in `public/images/research/` and reference in research components.
