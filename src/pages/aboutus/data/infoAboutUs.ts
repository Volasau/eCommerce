import { IAboutInfo } from '../interface/info.interfaces';
import photoRyhor from '../../../assets/photo/Ruhor.jpg';
import photoAzim from '../../../assets/photo/Azim.jpg';
import photoMikalai from '../../../assets/photo/Mikalai.jpg';

export const aboutInfo: IAboutInfo[] = [
    {
        fistName: 'Ryhor Volasau',
        role: 'Role/Position: developer',
        photo: photoRyhor,
        linkGitHub: 'https://github.com/Volasau/',
        description:
            'I am 41 years old. Married, I have two children (boys). I am from Belarus, from the city of Gomel, but now I live in Georgia in the city of Batumi. Graduated in 2006 from Gomel State Technical University. P.O. Sukhoi. Mechanical engineer by profession. After university,he had a small business, he sold auto parts on the market (17 years). In March 2022, I sold the entire business and moved to Georgia. I love sports, fishing, and hunting',
    },
    {
        fistName: 'Mikalai Rusakovich',
        role: 'Role/Position: developer',
        photo: photoMikalai,
        linkGitHub: 'https://github.com/rukalarukala',
        description:
            'I graduated from the Academy of the Ministry of Internal Affairs of the Republic of Belarus. My specialty is an expert, my qualification is a lawyer. At the moment I work in the field of security in a large company. I like to set goals and fight for results. I like development and new knowledge. I want to test myself in a new direction for me. Studying the profession of a developer fascinates me. I will make every effort to realize myself in this direction.',
    },
    {
        fistName: 'Azimkhan Abdulsatarov',
        role: 'Role/Position: developer',
        photo: photoAzim,
        linkGitHub: 'https://github.com/azimkhan93',
        description:
            'I am a finance professional and Power BI developer with more than 7 years experience. Well-versed in building Statement of Income, Statement of Financial position and Statement of Cash Flow, consolidation, proficient user of 1C Accounting software, experienced in M and DAX language, connecting databases. Excellent analytical skills and knowledge in reporting. Audited banks, F&B and chemical production companies. Built financial system in a logistics company and successfully developed financial reports dashboard in Power BI. Also, developed a dashboard for measuring performance of logist employees for forwarding lots.',
    },
];
