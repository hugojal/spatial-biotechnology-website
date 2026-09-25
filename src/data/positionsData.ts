import { JobPosition } from '../types';

export const jobPositions: JobPosition[] = [
  {
    id: 'pos-postdoc-spatial',
    title: 'Postdoctoral Researcher in Spatial Multi-Omics & Tumor Ecology',
    reference: 'Ref: PD_XR',
    category: 'Postdoc',
    deadline: 'Open until filled',
    description: 'We are looking for an exceptional postdoctoral scientist to spearhead projects in spatial proteomics (MIBI), in vivo clonal barcoding, and single-cell tumor tissue dynamics.',
    requirements: [
      'PhD in Bioengineering, Molecular Biology, Biochemistry, Bioinformatics, or Biophysics',
      'Solid experience in high-plex tissue imaging (MIBI, CODEX/PhenoCycler, IMC, MERFISH) or spatial omics',
      'Track record of publications in peer-reviewed international journals',
      'High motivation to drive independent and collaborative translational projects'
    ],
    active: true
  },
  {
    id: 'pos-phd-spatial-cartography',
    title: 'Predoctoral Researcher (PhD Candidate) in Computational Tissue Cartography',
    reference: 'Ref: PhD_XR',
    category: 'PhD',
    deadline: 'Competitive calls ongoing',
    description: 'Join our team to develop spatial computational algorithms, graph neural networks, and mathematical models of clonal interaction in solid tumors.',
    requirements: [
      'MSc degree in Bioinformatics, Computational Biology, Data Science, Biomedical Engineering, or Physics',
      'Proficiency in Python/R, spatial statistics, image processing, or machine learning',
      'Strong interest in oncology, cellular ecosystems, and translational biology'
    ],
    active: true
  },
  {
    id: 'pos-technician-automation',
    title: 'Laboratory Assistant / Junior Technician in Assay Automation & 3D Cultures',
    reference: 'Ref: LA_XR',
    category: 'Technician',
    deadline: 'Rolling applications',
    description: 'Support high-throughput 3D tumor organoid culture, robotic liquid handling pipelines, and multiplexed staining workflows.',
    requirements: [
      'BSc or Higher Technical Degree (CFGS) in Biotechnology, Biomedical Sciences, or related fields',
      'Experience in cell culture, sterile technique, and immunohistochemistry',
      'Organized, detail-oriented mindset with interest in laboratory robotics'
    ],
    active: true
  },
  {
    id: 'pos-internship-undergrad',
    title: 'Undergraduate Research Internships & Master Thesis (TFM / TFG)',
    reference: 'Ref: INT_XR',
    category: 'Internship',
    deadline: 'Continuous intake',
    description: 'Undergraduate and Master students are warmly encouraged to conduct their final thesis or extracurricular research stays in our laboratory.',
    requirements: [
      'Enrolled in a relevant University Bachelor or Master program (Biomedical Engineering, Biotechnology, Data Science, Biochemistry)',
      'Enthusiasm for hands-on experimental bioengineering or computational biology'
    ],
    active: true
  }
];
