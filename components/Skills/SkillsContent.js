import { FaLaptopCode, FaPencilRuler } from 'react-icons/fa'
import { AiOutlineCodepen } from 'react-icons/ai'

export const SkillsContent  = [
    {
        icon: <FaLaptopCode className="skillsIcon"/>,
        title: 'Web Development',
        body: 'I really enjoy coding from scratch and bringing new ideas to the web',
        sub: 'Languages I speak:',
        skills: [
            'HTML',
            'CSS',
            'Sass',
            'Javascript',
            'React',
            'Next.js'
        ]
    },
    {
        icon: <FaPencilRuler className="skillsIcon"/>,
        title: 'UI/UX Design',
        body: 'Clean and simple design, with thoughtful interactions',
        sub: 'Design tools:',
        skills: [
            'Adobe XD',
            'Figma',
            'Bootstrap Studio',
            'Sketch',
            'Pen & Paper',
        ]
    },
    {
        icon: <AiOutlineCodepen className="skillsIcon"/>,
        title: 'Extra Skills',
        body: 'I also love to explore different technologies and design patterns',
        sub: "Apps I've used:",
        skills: [
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Adobe Indesign',
            'Figma',
            'Canva'
        ]
    },
]
  
export default {
    SkillsContent,
}