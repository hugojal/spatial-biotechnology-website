import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 'lu-2026-natbiotech',
    title: 'Single-cell spatial pharmacobiology identifies conserved stromal barriers to therapeutic antibody delivery in human solid tumors',
    authors: 'Lu G, Hickey JW, Haist M, Qin X, Zhao E, Naveed A, Forgo E, Baertsch MA, Mani L, Rovira-Clavé X, Finegersh A, Goltsev Y, Caraccio C, van den Berg NS, Hom M, Colburg DR, Martin BA, Kong CS, Lui NS, Fisher GA, Colevas AD, West RB, Thurber GM, Poultsides GA, Nolan GP, Rosenthal EL',
    journal: 'Nature Biotechnology',
    year: 2026,
    doi: '10.1038/s41587-026-03152-x',
    abstract: 'The development of effective antibody therapeutics has been hampered by a lack of methods to measure drug delivery and activity within tumors at single-cell resolution. Here we introduce single-cell spatial pharmacobiology (SSP), an experimental and analytical framework that integrates in situ imaging of a systemically infused, fluorescently labeled therapeutic antibody with high-plex spatial proteomics to quantify antibody distribution, target engagement and tumor microenvironment (TME) architecture. We applied SSP to tumor tissues from participants with head and neck squamous cell carcinoma and pancreatic ductal adenocarcinoma who received the antibody panitumumab-IRDye800 in phase 1 trials. SSP identified pronounced spatial heterogeneity in single-cell drug delivery and target engagement, shaped by conserved stromal barriers, including periostin-rich extracellular matrix assemblies and fibroblast-activation-protein-positive cancer-associated fibroblast neighborhoods, which were associated with reduced antibody delivery in both tumor types.',
    keywords: ['Spatial Pharmacobiology', 'Cancer', 'Monoclonal Antibodies', 'Tumor Microenvironment', 'Fibroblasts', 'Drug Delivery', 'Multiplexed Imaging'],
    featured: true,
    openAccess: true
  },
  {
    id: 'drainas-2025-natbiomedeng',
    title: 'High-throughput multiplexed serology via the mass-spectrometric analysis of isotopically barcoded beads',
    authors: 'Drainas AP, McIlwain DR, Dallas A, Chu T, Delgado-González A, Baron M, Angulo-Ibáñez M, Trejo A, Bai Y, Hickey JW, Lu G, Lu S, Pineda-Ramirez J, Anglin K, Richardson ET, Prostko JC, Frias E, Servellita V, Brazer N, Chiu CY, Peluso MJ, Martin JN, Wirz OF, Pham TD, Boyd SD, Kelly JD, Sage J, Nolan GP, Rovira-Clavé X',
    journal: 'Nature Biomedical Engineering',
    year: 2025,
    volume: '9',
    pages: '1117-1128',
    doi: '10.1038/s41551-025-01349-0',
    abstract: 'In serology, each sample is typically tested individually, one antigen at a time. This is costly and time-consuming. Serology techniques should ideally allow recurrent measurements in parallel in small sample volumes and be inexpensive and fast. Here we show that mass cytometry can be used to scale up multiplexed serology testing by leveraging polystyrene beads uniformly loaded with combinations of stable isotopes. We generated 18,480 unique isotopically barcoded beads to simultaneously detect, in a single tube with 924 serum samples, the levels of immunoglobulins G and M against 19 proteins from SARS-CoV-2 (a total of 36,960 tests in 400 nl of sample volume and 30 µl of reaction volume).',
    keywords: ['High-Throughput Screening', 'Mass Cytometry', 'Isotopic Barcoding', 'Microspheres', 'Serology', 'Multiplex Assays'],
    featured: true,
    openAccess: true
  },
  {
    id: 'zhu-2025-natcommun',
    title: 'A multi-omics spatial framework for host-microbiome dissection within the intestinal tissue microenvironment',
    authors: 'Zhu BK, Bai YH, Yeo YY, Lu XW, Rovira-Clavé X, Chen H, Yeung J, Nkosi D, Glickman J, Delgado-Gonzalez A, Gerber GK, Angelo M, Shalek AK, Nolan GP, Jiang SZ',
    journal: 'Nature Communications',
    year: 2025,
    volume: '16',
    pages: '1230',
    doi: '10.1038/s41467-025-56237-7',
    abstract: 'The intricate interactions between the host immune system and its microbiome constituents undergo dynamic shifts in response to perturbations to the intestinal tissue environment. Our ability to study these events on the systems level is significantly limited by in situ approaches capable of generating simultaneous insights from both host and microbial communities. Here, we introduce Microbiome Cartography (MicroCart), a framework for simultaneous in situ probing of host and microbiome across multiple spatial modalities. We demonstrate MicroCart by investigating gut host and microbiome changes in a murine colitis model, using spatial proteomics, transcriptomics, and glycomics.',
    keywords: ['Multiomics', 'Microbiome Cartography', 'Spatial Proteomics', 'Glycomics', 'Tissue Microenvironment', 'Host-Pathogen Interactions'],
    featured: true,
    openAccess: true
  }
];
