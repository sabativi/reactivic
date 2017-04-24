import WebmecanikImg from './img/projects/webmecanik.png';
import FrenchTechImg from './img/projects/campus.png';
import SteadxpImg from './img/projects/steadxp.jpg';
import LoveboxImg from './img/projects/lovebox.png';
import SerreCheImg from './img/projects/serreche.png';
import ClickToPicImg from './img/projects/clicktopic.png';
import GitImg from './img/projects/git.jpg';

const projects = [
  // {
  //   title: 'Lovebox mobile application',
  //   description: `Lovebox needed both an iOS and an android application to allow the configuration and use of their connected object.
  //   An MVP had to be done which is now used by more than a thousand people. I have also helped Lovebox to manage the following evolutions internally.
  //   `,
  //   technos: ['Ionic', 'MeteorJs'],
  //   link: 'http://lovebox.love',
  //   quote: {
  //     content: '',
  //     who: 'Jean Gregoire',
  //     position: 'CEO',
  //   },
  //   image: LoveboxImg,
  // },
  {
    title: 'Campus skills',
    description: `Campus numerique in the Alps wanted to follow the progress of their students along the year.
    I built Campus Skills in few days which is a full success and is about to be deploy in two more schools.`,
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
    title: 'Grand prix de Serre Chevalier',
    description: `Serre Chevalier ski resort wanted to develop an application for participants in their new 'Grand prix de Serre Chevalier'.
    It allows to follow their ranking in real time. It was done in a matter of days, providing a stunning end user experience.`,
    technos: ['MeteorJs', 'React', 'React Native'],
    link: 'https://grandprix-serrechevalier.com/',
    quote: {
      content: `As a developper, working with Victor was a pleasure. He truly masters what he does. It is someone that you can count on.
                I wait for the opportunity to work with him again.`,
      who: 'Laurent Beauvisage',
      position: 'CEO',
    },
    image: SerreCheImg,
  },
  {
    title: 'Webmecanik training and coaching',
    description: `Webmecanik wanted to improve their processes as a software publisher. I joined their team for a few times
                  helping them to tackle technical difficulties.`,
    technos: ['PHP', 'Symfony', 'CI', 'RabbitMQ'],
    link: 'https://www.webmecanik.com/en/',
    quote: {
      content: `Victor's advices helped us professionalize as a software publisher by adapting our server infrastructures.
                His multi-technological mastery has also brought us a lot in terms of development`,
      who: 'Norman Pracht',
      position: 'CMO & Product Owner',
    },
    image: WebmecanikImg,
  },
  {
    title: 'ClickToPic',
    description: `Web application for selling photos online plus a backend for tagging those photos.`,
    technos: ['MeteorJs', 'AWS', 'Lambda', 'S3'],
    link: 'https://www.clicktopic.com/',
    quote: {
      content: `Victor allows us to have a working platform in a month that fits our constaints : be able to handle peak load over a specified period of time.
               Plus Victor is a passionate and always available person. I would definitely recommend.`,
      who: 'Ludovic Griboval',
      position: 'Director',
    },
    image: ClickToPicImg,
  },
  {
    title: 'Git trainer',
    description: `I give git training for more than three years with great successes.`,
    technos: ['Git'],
    link: 'http://www.elephorm.com/apprendre-git-fondamentaux',
    quote: {
      content: `Simple and complete training on the principles of Git. Practical work is a good point that allows to quickly implement the commands previously seen.
                A trainer who has mastered his subject, and who is a pedagogue. I recommend.`,
      who: 'A student',
      position: '',
    },
    image: GitImg,
  },
  {
    title: 'SteadXP',
    description: `Software for videos stabilization and web server for managing licenses.`,
    technos: ['MeteorJs', 'React', 'Docker', 'C++', 'Qt'],
    link: 'http://steadxp.com/',
    quote: {
      content: `Victor’s talent and experience proved immensely valuable for our project.
                He was involved from the very beginning, providing advice and know a high number of technologies that allow him to solve many problems we faced`,
      who: 'Adrien Farrugia',
      position: 'CEO',
    },
    image: SteadxpImg,
  },
];

export default projects;
