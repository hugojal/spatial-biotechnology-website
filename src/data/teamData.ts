import { TeamMember } from '../types';
import { publicUrl } from '../lib/publicUrl';

export const teamMembers: TeamMember[] = [
  {
    id: 'xavier-rovira-clave',
    name: 'Xavier Rovira-Clavé',
    degree: 'PhD',
    role: 'Principal Investigator',
    category: 'pi',
    email: 'xrovirac@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/xavierroviraclave/',
    photo: publicUrl('images/team/xavierrovira.jpg'),
    bio: 'Junior Group Leader & Principal Investigator'
  },
  {
    id: 'sergi-casellas-diaz',
    name: 'Sergi Casellas Díaz',
    degree: 'PhD',
    role: 'Lab Manager / Senior Technician',
    category: 'management',
    email: 'scasellas@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/sergi-casellas-d%C3%ADaz-phd-6b35b0214/',
    photo: publicUrl('images/team/sergicasellas.jpg'),
    bio: 'Lab Management & Senior Operations'
  },
  {
    id: 'michela-marini',
    name: 'Michela Marini',
    degree: 'PhD',
    role: 'Postdoctoral Researcher',
    category: 'postdoc',
    email: 'mmarini@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/michela-marini-bb813517a/',
    photo: publicUrl('images/team/michelamarini.jpg'),
    bio: 'Postdoctoral Researcher'
  },
  {
    id: 'jarmila-stankova',
    name: 'Jarmila Stanková',
    degree: 'PhD',
    role: 'Postdoctoral Researcher',
    category: 'postdoc',
    email: 'jstankova@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/jarmila-stankova/',
    photo: publicUrl('images/team/jarmilastankova.jpg'),
    bio: 'Postdoctoral Researcher'
  },
  {
    id: 'jaime-casado-garcia-consuegra',
    name: 'Jaime Casado García-Consuegra',
    role: 'PhD Candidate',
    category: 'phd',
    email: 'jcasado@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/jaime-casado-garc%C3%ADa-consuegra-bioinf/',
    photo: publicUrl('images/team/jaimecasado.jpg'),
    bio: 'PhD Candidate'
  },
  {
    id: 'oscar-espana-romera',
    name: 'Òscar España Romera',
    role: 'PhD Candidate',
    category: 'phd',
    email: 'oespana@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/%C3%B2scar-espa%C3%B1a-romera-747794250/',
    photo: publicUrl('images/team/oscarespana.jpg'),
    bio: 'PhD Candidate'
  },
  {
    id: 'michela-lain-contato',
    name: 'Michela Lain Contato',
    role: 'PhD Candidate',
    category: 'phd',
    email: 'mlain@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/michela-lain-contato-ab5698215/',
    photo: publicUrl('images/team/michelalain.jpg'),
    bio: 'PhD Candidate'
  },
  {
    id: 'carles-verdaguer-geronimo',
    name: 'Carles Verdaguer Gerónimo',
    role: 'PhD Candidate',
    category: 'phd',
    email: 'cverdaguer@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/carles-verdaguer-73663132b/',
    photo: publicUrl('images/team/carlesverdaguer.jpg'),
    bio: 'PhD Candidate'
  },
  {
    id: 'enric-ariza-ortiz',
    name: 'Enric Ariza',
    role: 'Laboratory Assistant',
    category: 'intern',
    email: '',
    linkedIn: 'https://www.linkedin.com/in/enricarizaortiz/',
    photo: publicUrl('images/team/enricariza.png'),
    bio: 'Laboratory Assistant'
  },
  {
    id: 'hugo-jal-hernandez',
    name: 'Hugo Jal Hernández',
    role: 'Research Intern',
    category: 'intern',
    email: 'hjal@ibecbarcelona.eu',
    linkedIn: 'https://www.linkedin.com/in/hugo-jal/',
    photo: publicUrl('images/team/hugojal.jpg'),
    bio: 'Research Intern / Undergraduate Intern'
  }
];
