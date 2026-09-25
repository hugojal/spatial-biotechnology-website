import { ResearchLine } from '../types';

export const researchLines: ResearchLine[] = [
  {
    id: 'clonal-cooperation',
    number: 1,
    title: 'Clonal Cooperation & In Vivo Tumor Evolution',
    shortQuestion: 'How is clonal cooperation established and maintained?',
    fullQuestion: 'How is clonal cooperation established and maintained in heterogeneous solid tumors?',
    summary: 'Interrogating molecular signatures of tens of genetically engineered cancer cell clones in native tissue context using genome editing, pooled screens, and super-resolution multiplexed imaging.',
    background: 'Widespread clonal heterogeneity in human tumors implies that multiple ecological interactions are in play alongside clonal competition. Tumor evolution is frequently driven by clonal cooperation, where growth equilibrium of two or more distinct subclones achieves optimal overall fitness.',
    methodology: [
      'Genome editing & high-complexity pooled genomic barcoding',
      'In vivo murine models tracking clonal populations in native tissue',
      'Super-resolution multiplexed microscopy & sub-cellular MIBI imaging',
      'Spatial point-pattern analysis of clonal interface boundaries'
    ],
    impact: 'Provides a causal understanding of how genetically unique clones arrange within a tumor and cooperatively regulate tumor growth, opening avenues for disruption therapies.',
    technologies: ['CRISPR Pooled Screens', 'In Vivo Barcoding', 'Super-Resolution Imaging', 'MIBI'],
    imagePlaceholderTitle: 'In Vivo Clonal Tracing & Cooperation Analysis',
    accentColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
  },
  {
    id: 'metabolite-accessibility',
    number: 2,
    title: 'Metabolite Accessibility & 3D Microenvironments',
    shortQuestion: 'How does metabolite access regulate neighbouring clone growth?',
    fullQuestion: 'How does metabolite accessibility regulate the growth and competition of neighbouring cancer cell clones?',
    summary: 'Characterizing clonal cancer cell behaviors in hundreds of in vitro 3D tumors growing in metabolically defined conditions using robotic automation and highly multiplexed imaging.',
    background: 'Distinct biochemical microenvironments simultaneously arise in multiple regions of a solid tumor, providing localized selective pressure to variable cancer cell populations. Metabolic reprogramming creates micro-niches that radically alter clonal pool composition.',
    methodology: [
      'High-throughput automated liquid handling & robotic culture platforms',
      '3D in vitro tumor organoids & spheroids in defined metabolic media',
      'Multiplexed spatial imaging of nutrient transporters & metabolic markers',
      'Quantitative image segmentation & high-content clonal tracking'
    ],
    impact: 'Identifies subclonal signatures in specific metabolic microenvironments, revealing environmental vulnerabilities to inform metabolic targeted therapies.',
    technologies: ['Assay Automation', '3D Tumor Organoids', 'Multiplex Imaging', 'Metabolic Profiling'],
    imagePlaceholderTitle: '3D Organoid Robotic Screening Platform',
    accentColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
  },
  {
    id: 'clonal-microenvironments-primary',
    number: 3,
    title: 'Clonal Populations & Primary Tumor Microenvironments',
    shortQuestion: 'How do clonal populations and microenvironments evolve in primary tumors?',
    fullQuestion: 'How do clonal populations and stromal microenvironments evolve in human primary tumors?',
    summary: 'Correlating molecular and spatial features predictive of clonal growth across diverse clinical patient cohorts using spatial transcriptomics and histopathology-grade proteomics.',
    background: 'The complex tumor microenvironment—comprising resident immune cells, cancer-associated fibroblasts (CAFs), vascular beds, and dense extracellular matrix—co-evolves with malignant subclones, creating physical and biochemical barriers to therapy.',
    methodology: [
      'Single-cell spatial pharmacobiology (SSP) in patient clinical cohorts',
      'Histopathology-grade Multiplexed Ion Beam Imaging (MIBI, 40+ antibodies)',
      'Spatial transcriptomics & deep phenotyping of stroma barriers (periostin, FAP+ CAFs)',
      'Collaborations with clinical oncology departments and pathology biobanks'
    ],
    impact: 'Identifies conserved stromal barriers and spatial prognostic biomarkers in human tumors, advancing precision oncology and therapeutic antibody delivery.',
    technologies: ['Single-cell Spatial Pharmacobiology', 'Histopathology MIBI', 'Spatial Transcriptomics', 'Clinical Cohorts'],
    imagePlaceholderTitle: 'Histopathology-Grade MIBI in Human Carcinomas',
    accentColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
  },
  {
    id: 'adoptive-t-cell-therapies',
    number: 4,
    title: 'Engineered Adoptive T-Cell Transfer Therapies',
    shortQuestion: 'How can adoptive T-cell therapies be improved for solid tumors?',
    fullQuestion: 'How could adoptive T-cell transfer therapies be improved for solid tumor treatment?',
    summary: 'Tracking the tumor infiltration, persistence, and functional fitness of engineered adoptive T-cell therapies in native tissue environments using immune cell engineering and highly multiplexed imaging.',
    background: 'Major hurdles limiting adoptive T-cell transfer therapies (CAR-T, TCR-T) in solid tumors are poor penetration, physical stromal exclusion, and rapid loss of effector functionality inside the immunosuppressive tumor core.',
    methodology: [
      'Synthetic immune cell engineering & receptor optimization',
      'In situ single-cell spatial tracking of infused T cells in tissue-permissive models',
      'Multiplexed profiling of exhaustion, activation, and memory markers',
      'High-dimensional spatial interaction modeling with tumor cells and myeloid stroma'
    ],
    impact: 'Uncovers molecular and architectural determinants of productive T-cell fitness to guide the design of resilient, next-generation cell therapies.',
    technologies: ['Immune Cell Engineering', 'Adoptive T-Cell Transfer', 'In Situ Fitness Tracking', 'High-Plex Proteomics'],
    imagePlaceholderTitle: 'In Situ Multiplexed T-Cell Infiltration Tracking',
    accentColor: 'border-rose-500/40 text-rose-400 bg-rose-500/10'
  }
];
