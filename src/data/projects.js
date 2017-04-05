import WebmecanikImg from './img/projects/webmecanik.png';
import FrenchTechImg from './img/projects/campus.png';
import SteadxpImg from './img/projects/steadxp.png';
import LoveboxImg from './img/projects/lovebox.jpg';
import SerreCheImg from './img/projects/serreche.png';
import ClickToPicImg from './img/projects/clicktopic.png';

const projects = [
  {
    title: 'Lovebox mobile application.',
    description: `blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq`,
    technos: ['Ionic', 'MeteorJs'],
    link: 'http://lovebox.love',
    quote: {
      content: 'I am so happy',
      who: 'Jean Gregoire',
      position: 'CEO',
    },
    image: LoveboxImg,
  },
  {
    title: 'Campus skills.',
    description: `blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq`,
    technos: ['MeteorJs', 'React'],
    link: 'http://campus-skills.meteorapp.com',
    quote: {
      content: 'His ability to work quickly really made a big difference for our project',
      who: 'François Albrieux',
      position: 'Director',
    },
    image: FrenchTechImg,
  },
  {
    title: 'Grand prix de Serre Chevalier.',
    description: `Mobile application both iOS and Android plus registration systems.`,
    technos: ['MeteorJs', 'React', 'React Native'],
    link: 'https://grandprix-serrechevalier.com/',
    quote: {
      content: 'Victor is simply the best',
      who: 'Laurent Beauvisage',
      position: 'CEO',
    },
    image: SerreCheImg,
  },
  {
    title: 'Webmecanik training and coaching',
    description: `Help webmecanik to be better blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq blablq`,
    technos: ['PHP', 'Symfony', 'CI', 'RabbitMQ'],
    link: 'https://www.webmecanik.com/en/',
    quote: {
      content: 'Victor is the best',
      who: 'Norman Pracht',
      position: 'Product Owner',
    },
    image: WebmecanikImg,
  },
  {
    title: 'ClickToPic.',
    description: `Web application for selling photos online plus a backend for tagging those photos.`,
    technos: ['MeteorJs', 'AWS', 'Lambda', 'S3'],
    link: 'https://clicktopic.mod.bz/',
    quote: {
      content: 'Victor is the best',
      who: 'Ludovic Griboval',
      position: 'Director',
    },
    image: ClickToPicImg,
  },
  {
    title: 'SteadXP license server.',
    description: ``,
    technos: ['MeteorJs', 'React', 'Docker', 'Bootstrap'],
    link: 'http://steadxp.com/',
    quote: {
      content: 'Really polyvalent',
      who: 'Adrien Farrugia',
      position: 'CEO',
    },
    image: SteadxpImg,
  },
];

export default projects;
