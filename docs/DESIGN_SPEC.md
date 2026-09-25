# Design Specification: Spatial Biotechnology Website

## 1. Aesthetic Vision
The visual identity fuses **high-precision bioengineering**, **spatial multi-omics imagery**, and **modern minimalist academic elegance**.

### Color Palette
- **Background Deep:** `#070b14` (Slate-950 / Deep Spatial Space)
- **Surface Dark:** `#0b1329` (Card / Section Surface)
- **Surface Highlight:** `#162244` (Card Borders / Hover Overlays)
- **Primary Biotech Accent:** `#abb330` (IBEC Olive-Lime Brand Accent)
- **Secondary Neon Accents (Multiplex Imaging Channels):**
  - Cyan (`#06b6d4` - Channel 1 / DAPI / Cell Nuclei)
  - Emerald (`#10b981` - Channel 2 / CD3 / T-cell infiltration)
  - Amber (`#f59e0b` - Channel 3 / PanCK / Tumor Epithelial Clones)
  - Rose (`#f43f5e` - Channel 4 / SMA / CAF Stroma)
- **Text Primary:** `#f8fafc` (Slate-50)
- **Text Secondary:** `#94a3b8` (Slate-400)
- **Text Muted:** `#64748b` (Slate-500)

### Typography
- **Headings & Body:** `Inter`, sans-serif (Clean, modern, highly legible).
- **Scientific Identifiers / DOIs / Code:** `Fira Code`, monospace.

---

## 2. Interactive Team Headshot Behavior
As specifically configured:
- **Default State:** Grayscale filter applied (`filter: grayscale(100%)`, opacity `0.85`), giving a cohesive, elegant monochromatic gallery look.
- **Hover State:** Smooth transition (`transition: all 0.5s ease`) to full vibrant color (`filter: grayscale(0%)`, opacity `1.0`, subtle scale `1.03`), highlighting the researcher.
- **Interactive Badges:** Direct LinkedIn icon link, email copy button, and role tag.

---

## 3. Spatial Cartography Interactive Canvas
- A dynamic animated canvas rendering multiplexed spatial points (representing tumor clones, stromal CAFs, and infiltrating T cells) interconnected with Delaunay triangulation edges, illustrating the group's core spatial computational cartography focus.

---

## 4. Component Hierarchy
1. **Header / Navbar:** Sticky, frosted glass blur (`backdrop-blur-md bg-slate-950/80`), quick links, mobile hamburger drawer.
2. **Hero Section:** High-impact heading, spatial biology visualizer, key metrics (40+ MIBI channels, high-impact papers, ERC/HFSP funded).
3. **Research Axis Explorer:** Interactive tabs / card grid for the 4 core research questions.
4. **Team Grid:** Role-categorized cards with B&W-to-color hover transition and LinkedIn links.
5. **Publications Explorer:** Search input, category filter, expandable abstracts, DOI redirect links.
6. **Grants & Collaborations Marquee / Grid:** Logos and consortium cards.
7. **Careers / Open Positions Accordion:** Clean callout with email submission trigger.
8. **Footer:** Location address, IBEC affiliation links, copyright.
