import WebmecanikImg from './img/projects/webmecanik.png';
import FrenchTechImg from './img/projects/campus.png';
import SteadxpImg from './img/projects/steadxp.png';
import LoveboxImg from './img/projects/lovebox.jpg';
import SerreCheImg from './img/projects/serreche.png';
import ClickToPicImg from './img/projects/clicktopic.png';

const projects = [
  {
    title: 'Lovebox mobile application.',
    description: `Lovebox needed both iOS and android applications to allow the configuration and use of their connected object.
    An MVP had to be done which is now used by more than a thousand person. I have also helped Lovebox to manage the following evolutions internally.
    `,
    technos: ['Ionic', 'MeteorJs'],
    link: 'http://lovebox.love',
    quote: {
      content: '',
      who: 'Jean Gregoire',
      position: 'CEO',
    },
    image: LoveboxImg,
  },
  {
    title: 'Campus skills.',
    description: `Campus numerique in the Alps needed a way to follow their students progress along the year.
    I built campus skills in few days which is a full success and is about to be deploy in two more schools.`,
    technos: ['MeteorJs', 'React'],
    link: 'http://campus-skills.meteorapp.com',
    quote: {
      content: 'His ability to work quickly really made a big difference for our project ! I would recommend Victor without hesitation.',
      who: 'François Albrieux',
      position: 'Director',
    },
    image: FrenchTechImg,
  },
  {
    title: 'Grand prix de Serre Chevalier.',
    description: `Serre Chevalier ski resort wanted to develop an application for participants in their new 'Grand prix de Serre Chevalier'.
    It allows challengers to chat, be notified when they finish a challenge and follow their ranking in real time.
    It was done in a matter of days, providing a stunning end user experience.`,
    technos: ['MeteorJs', 'React', 'React Native'],
    link: 'https://grandprix-serrechevalier.com/',
    quote: {
      content: '',
      who: 'Laurent Beauvisage',
      position: 'CEO',
    },
    image: SerreCheImg,
  },
  {
    title: 'Webmecanik training and coaching',
    description: `Webmecanik wanted to improve their processes for `,
    technos: ['PHP', 'Symfony', 'CI', 'RabbitMQ'],
    link: 'https://www.webmecanik.com/en/',
    quote: {
      content: `Les conseils apportés par victor nous ont aidé à nous professionnaliser dans le métier de l'édition logiciel en adaptant nos infrastructures serveur.
                Sa maîtrise multi technologique nous a également apportée beaucoup en termes de développement`,
      who: 'Norman Pracht',
      position: 'CMO & Product Owner',
    },
    image: WebmecanikImg,
  },
  {
    title: 'ClickToPic.',
    description: `Web application for selling photos online plus a backend for tagging those photos.`,
    technos: ['MeteorJs', 'AWS', 'Lambda', 'S3'],
    link: 'https://clicktopic.mod.bz/',
    quote: {
      content: `Victor allow us to have a working platform in a month that fits our constaints : be able to handle peak load over a specified period of time.
               Plus Victor is a passionate and always available person. I would definitely recommend.`,
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
