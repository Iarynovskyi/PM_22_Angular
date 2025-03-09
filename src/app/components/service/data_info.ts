import {Contact, Skill, Education, Experience, Hobie, Language, Reference, Header} from './dto_interfaces';

export const education: Education[] = [
  {
    institution: 'Stanford University',
    duration: '2011 - 2013',
    degree: 'Master Degree in Design',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text...' +
      'Lorem Ipsum has been the industry\'s standard dummy text...' +
      'Lorem Ipsum has been the industry\'s standard dummy text...' +
      'Lorem Ipsum has been the industry\'s standard dummy text...',
  },
  {
    institution: 'Chicago University',
    duration: '2007 - 2010',
    degree: 'Bachelor Degree in Design',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text...' +
      'Lorem Ipsum has been the industry\'s standard dummy text...' +
      'Lorem Ipsum has been the industry\'s standard dummy text...' +
      'Lorem Ipsum has been the industry\'s standard dummy text...' +
      'Lorem Ipsum has been the industry\'s standard dummy text...',
  }
];


export const contact: Contact[] = [
  {
    telephone: 'telephone',
    site: 'youtube',
    map: 'google map'
  }
];


export const experience: Experience[] = [
  {
    company: 'Creative Agency',
    location: 'Chicago',
    duration: '2020 - Present',
    position: 'Senior Web Designer',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    company: "Creative Market",
    location: "United Kingdom",
    duration: "2015 - 2020",
    position: "Graphic Designer",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    company: "Marketing Agency",
    location: "United Kingdom",
    duration: "2013 - 2015",
    position: "Marketing Manager",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];


export const hobie: Hobie[] = [
  { name: 'Book Reading', level: '90', animatedLevel: 0 },
  { name: 'Travelling', level: '65', animatedLevel: 0 },
  { name: 'Playing Chess', level: '80', animatedLevel: 0 },
  { name: 'Painting', level: '70', animatedLevel: 0 },
];


export const language: Language[] = [
  { name: 'English', level: 85 },
  { name: 'German', level: 65 },
  { name: 'Spanish', level: 45 },
];


export const reference: Reference[] = [
  { name: 'Darwin B. Magana', address: '2813 Shobe Lane, Mancos, CO.', phone: '+1-970-533-3393', email: 'darwin@example.com' },
  { name: 'Jane Doe', address: '914 Ivy Street, Centennial, CO.', phone: '+1-908-987-5103', email: 'jane@example.com' }
];


export const skill: Skill[] = [
  { name: 'Adobe Photoshop', level: '90', animatedLevel: 0  },
  { name: 'Adobe Illustrator', level: '65', animatedLevel: 0  },
  { name: 'Microsoft Word', level: '85', animatedLevel: 0  },
  { name: 'HTML5/CSS3', level: '80', animatedLevel: 0  },
];


export const header: Header[] = [
  { name: 'RALPH S. GARCIA', position: 'Graphic & Web Designer ', main_text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', text: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."'}
]
