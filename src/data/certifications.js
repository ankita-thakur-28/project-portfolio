import istqbImg from '../assets/istqb.jpg';
import postmanImg from '../assets/postman.jpg';

export const certifications = [
  {
    id: 'istqb',
    badge: 'ISTQB · 2025',
    icon: '🏆',
    title: 'Foundation Level Certificate in Software Testing',
    org: 'International Software Testing Qualifications Board',
    certId: 'CTFL-149724 · India',
    tags: ['Software Testing', 'QA', 'Test Design'],
    image: istqbImg,
    verifyUrl: null,
    accent: 'teal',
  },
  {
    id: 'postman',
    badge: 'Postman · 2025',
    icon: '📮',
    title: 'API Beginner Learning Path',
    org: 'Postman Academy',
    certId: 'Issued: Nov 3, 2025',
    tags: ['API Testing', 'REST', 'Postman'],
    image: postmanImg,
    verifyUrl: 'https://verify.skilljar.com/c/2n5vv8tkva3h',
    accent: 'orange',
  },
];
