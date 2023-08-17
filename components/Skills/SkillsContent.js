import { FaLaptopCode, FaPencilRuler } from 'react-icons/fa'
import { AiOutlineCodepen } from 'react-icons/ai'

export const SkillsContent  = [
    {
        icon: <FaLaptopCode className="skillsIcon"/>,
        title: 'Web Development',
        body: 'I love coding from scratch and bringing new ideas to the web.',
        sub: 'Languages I speak:',
        skills: [
            'HTML',
            'CSS',
            'Javascript',
            'React',
            'Next.js',
            'Node.js'
        ]
    },
    {
        icon: <FaPencilRuler className="skillsIcon"/>,
        title: 'UI/UX Design',
        body: 'Clean and simple design, with thoughtful interactions and animations.',
        sub: 'Design tools:',
        skills: [
            'Adobe XD',
            'Figma',
            'Bootstrap Studio',
            'Pen & Paper',
            'Illustrator',
            'Photoshop',
        ]
    },
    {
        icon: <AiOutlineCodepen className="skillsIcon"/>,
        title: 'Extra Skills',
        body: "I've also explored a number of different content systems and custom backends.",
        sub: "What I've used:",
        skills: [
            'Express',
            'Sanity.io',
            'Firebase',
            'MongoDB',
            'SQL Databases',
            'Restful APIS'
        ]
    },
]
  
export default {
    SkillsContent,
}