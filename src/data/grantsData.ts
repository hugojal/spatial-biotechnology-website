import { Grant } from '../types';

export const grants: Grant[] = [
  {
    id: 'erc-poc-evoaware',
    title: 'EVOaware: Anticipating and Overcoming Tumour Resistance to Targeted Therapies',
    acronym: 'EVOaware',
    fundingAgency: 'European Research Council (ERC) - Proof of Concept',
    role: 'Principal Investigator (Xavier Rovira-Clavé)',
    period: '2025 – 2027',
    summary: 'Developing the EVOaware technology platform to quantify subclonal evolutionary trajectories, predict resistance hotspots, and accelerate the development of adaptive cancer therapies.'
  },
  {
    id: 'aecc-2025',
    title: 'Spatial Interrogation and Disruption of Clonal Cooperation in Solid Tumours',
    fundingAgency: 'Asociación Española Contra el Cáncer (AECC) Grant Programme',
    role: 'Principal Investigator (Xavier Rovira-Clavé)',
    period: '2025 – 2028',
    summary: 'Interrogating clonal cooperative dynamics in clinical and in vivo tumor models to design combinatorial intervention strategies against therapy-resistant tumors.'
  },
  {
    id: 'hfsp-solfege',
    title: 'SOLFEGE: Dissecting Multicellular Soluble Factor Coordination in Tumors',
    acronym: 'SOLFEGE',
    fundingAgency: 'Human Frontier Science Program (HFSP) Research Grant',
    role: 'Co-Investigator / Consortium Partner (IBEC)',
    period: '2025 – 2028',
    partners: ['German Cancer Research Center (DKFZ, Germany - Lead)', 'Institute for Bioengineering of Catalonia (IBEC, Spain)', 'Duke University (USA)'],
    summary: 'An international collaborative endeavor combining spatial proteomics, microfluidics, and computational cartography to map how diverse cell types coordinate through soluble signaling gradients.'
  }
];
