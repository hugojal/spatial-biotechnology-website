# Spatial Biotechnology Laboratory Website

Official website repository for the **Spatial Biotechnology Research Group** at the **Institute for Bioengineering of Catalonia (IBEC)**, Barcelona, led by **Xavier Rovira-Clavé, PhD**.

---

## 🌟 Tech Stack
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + Custom Spatial Biotech Glassmorphism
- **Icons:** Lucide React
- **Animations & Canvas:** Custom HTML5 Canvas Interactive Spatial Cartography Simulator
- **Routing:** React Router v7

---

## 📂 Repository Structure

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
├── docs/                        # Architecture & Design specifications
│   ├── DESIGN_SPEC.md           # Visual design tokens & interactions
│   └── ARCHITECTURE.md          # Project blueprint & workflows
│
├── public/                      # Static assets
│   ├── images/
│   │   ├── team/                # Headshots (B&W by default -> Color on hover)
│   │   ├── research/            # MIBI multiplex microscopy & diagrams
│   │   ├── logos/               # IBEC, PCB, ERC, AECC, HFSP logos
│   │   └── hero/                # Hero banners
│   └── resources/               # Downloadable PDFs, posters, flyers
│
├── src/                         # React Application Source
│   ├── components/              # Modular UI components
│   ├── pages/                   # Application views (Home, Research, Team, etc.)
│   ├── data/                    # Type-safe datasets loaded by React
│   ├── types/                   # TypeScript interfaces
│   ├── styles/                  # Tailwind & global CSS
│   ├── App.tsx                  # Main router setup
│   └── main.tsx                 # Entry point
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 🖼️ Adding Team Photos
Place member LinkedIn headshots in `public/images/team/`:
- `xavier-rovira-clave.jpg`
- `sergi-casellas.jpg`
- `michela-marini.jpg`
- `jarmila-stankova.jpg`
- `jaime-casado.jpg`
- `oscar-espana.jpg`
- `michela-lain.jpg`
- `carles-verdaguer.jpg`
- `hugo-jal.jpg`

> **Note:** The UI automatically applies a sleek **black & white** filter by default that smoothly transitions to **full color on mouse hover**.
