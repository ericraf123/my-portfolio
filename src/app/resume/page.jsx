'use client';

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,} from "react-icons/fa";
import { SiTailwindcss,SiNextdotjs } from "react-icons/si"

//about data
const about = {
    title :'À propos de moi',
    description: `👋 Bonjour, je m'appelle Eric Raf.
     Je suis Développeur Front-End passionné, avec plus de 2 ans d'expérience dans la création d'interfaces web modernes, esthétiques et centrées sur l'utilisateur. Je transforme les idées en sites web et applications performants, à la fois beaux et fonctionnels. Je maîtrise les technologies HTML, CSS, JavaScript, ainsi que les frameworks React.js, Next.js et Tailwind CSS. Ma priorité est de concevoir des interfaces intuitives, fluides et engageantes,
     qui offrent une excellente expérience utilisateur.`,
    info:[
        {
            fieldName:"Nom",
            fieldValue:"Eric Raf"
        },
        {
            fieldName:"Téléphone",
            fieldValue:"+261 33 21 929 14"
        },
        {
            fieldName:"Expérience",
            fieldValue:"2+ years"
        },
        {
            fieldName:"Nationalité",
            fieldValue:"Malagasy"
        },
        {
            fieldName:"Indépendant",
            fieldValue:"Available"
        },
        {
            fieldName:"Courriel",
            fieldValue:"rafanomezantsoaeric31@gmail.com"
        },
        {
            fieldName:"Langue",
            fieldValue:"Malagasy,Francais,Anglais",
        },
    ]
}
//experience data
const experience = {
    title:'Expérience',
    description:"En tant que développeur web freelance et formateur avec plus de 2 ans d'expérience, je suis spécialisé dans la création d'applications web attractives et conviviales. Mon expertise repose sur le développement front-end avec des technologies modernes comme React.js, Next.js et Tailwind CSS. Je travaille en étroite collaboration avec mes clients pour comprendre leurs besoins et fournir des solutions qui dépassent leurs attentes.",
    items:[
        {
            company:"Upwork/Freelance",
            position:"Développeur Front-end",
            duration:"2023 - présent",
        },
        {
            company:"Freelance",
            position:"Instructeur Web",
            duration:"2021 - présent",
        },
        {
            company:"Frelance",
            position:"Designer",
            duration:"2022 - présent",
        },
    ]
}
// eduction data
const eduction = {
    icon:'',
    title:'Ma formation',
    description:"J'ai étudié sur OpenClassrooms et obtenu une licence (Bac+3) à l'Université CNTEMAD.",
    items:[
       {
         institution:"Plateforme de cours en ligne (OpenClassrooms)",
         degre:"Full Stack web ",
         duration:"2018-présent",
       },
       {
        institution:"Université CNTEMAD",
        degre:"Licence",
        duration:"2021-2024",
      },
      {
        institution:"Plateforme de cours en ligne (OpenClassrooms)",
        degre:"cours de programmation",
        duration:"2018-présent",
      },
    ]
}
// skills data

const skills = {
    title:"Mes compétences",
    description:"Passionné par le développement web, j'ai acquis une solide expertise dans plusieurs technologies et outils modernes. Voici un aperçu de mes compétences :",
    skillList:[
        {
            icon:<FaHtml5/>,
            name:"html 5",
        },
        {
            icon:<FaCss3/>,
            name:"css 3",
        },
        {
            icon:<FaJs/>,
            name:"Javascript",
        },
        {
            icon:<FaReact/>,
            name:"react.js",
        },
        {
            icon:<SiNextdotjs/>,
            name:"next.js",
        },
        {
            icon:<SiTailwindcss/>,
            name:"tailwind css",
        },
        {
            icon:<FaNodeJs/>,
            name:"node.Js",
        },
        
    ]
}
import { Tabs,TabsContent,TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return(
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1, transition:{delay:2.4, duration: 0.4, ease:"easeIn"}}}
          className="min-h-[80vh] flex items-center justify-center py-12  xl:py-0" 
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Expérience</TabsTrigger>
                        <TabsTrigger value="education">Formation</TabsTrigger>
                        <TabsTrigger value="skills">Compétences</TabsTrigger>
                        <TabsTrigger value="about" >À propos de moi</TabsTrigger>
                    </TabsList>
                     {/**content */}
                     <div className="min-h-[70vh] w-full">
                        {/**experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index) => {
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                                                items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/**dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/**education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold ">{eduction.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{eduction.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {eduction.items.map((item,index) => {
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                                                items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degre}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/**dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/**Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3  className="text-4xl font-bold ">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((item,index) => {
                                        return(
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center 
                                                        items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-500">{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            
                        </TabsContent>
                        {/**about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl fond-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index) => {
                                        return(
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                     </div>

                </Tabs>
               

            </div>

        </motion.div>
    )
}

export default Resume;