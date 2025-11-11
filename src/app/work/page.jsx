"use client"
import { motion } from "framer-motion";
import React,{ useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight,BsGithub } from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
    {
        num:'1',
        category:"frontend",
        title:"Financier",
        description:"Financial Marketing est une plateforme web moderne développée avec Next.js et Tailwind CSS, conçue pour offrir des analyses des tendances financières, des stratégies d’investissement et des solutions marketing. Le projet propose une interface épurée et responsive, permettant aux utilisateurs d’accéder facilement aux ressources financières, aux études de cas et aux conseils d’experts.",
        stack:[
            {
                name:"Next.js"
            },
            {
                name:"Tailwind.css"
            },
        ],
        image:'/photo/fin.jpg',
        live:"https://financial-bice.vercel.app/",
        github:"https://github.com/ericraf123/Financial",
    },
    {
        num:'2',
        category:"frontend",
        title:"Voyage",
        description:"Travel UI/UX est une application web moderne développée avec Next.js et Tailwind CSS, offrant une interface intuitive et visuellement attrayante permettant aux utilisateurs d’explorer des destinations de voyage, réserver des séjours et trouver toutes les informations liées au voyage.",
        stack:[
            {
                name:"Next.js"
            },
            {
                name:"Tailwind.css"
            },
        ],
        image:"/photo/travelone.jpg",
        live:"https://travel-ui-ux-rho.vercel.app/",
        github:"https://github.com/ericraf123/travel_ui_ux",
    },
     {
        num:'3',
        category:"frontend",
        title:"Chat",
        description:"Il s'agit d'une application de chat interactive construite avec React et Next.js. L'utilisateur peut envoyer des messages texte et des fichiers, utiliser des emojis, et interagir avec un bot qui répond automatiquement. Les messages sont sauvegardés dans localStorage pour être persistants entre les sessions. Le projet inclut également la possibilité d'éditer et de supprimer des messages.",
        stack:[
            {
                name:"Next.js"
            },
            {
                name:"Tailwind.css"
            },
        ],
        image:"/photo/chat.png",
        live:"https://chat-app-loua.vercel.app/",
        github:"https://github.com/ericraf123/chatApp",
    },
         {
        num:'4',
        category:"frontend",
        title:"Snake Game",
        description:"Ce projet est une version interactive du jeu Snake, développée avec React et Next.js. Le jeu s'affiche sur un canvas HTML et permet à l'utilisateur de contrôler le serpent à l'aide des touches fléchées ou des boutons de direction. Le score actuel et le meilleur score sont affichés, et l'utilisateur peut redémarrer la partie après une défaite. L'état du jeu (serpent, nourriture, score) est mis à jour en temps réel, et les contrôles sont gérés via un hook personnalisé useSnakeGame.",
        stack:[
            {
                name:"Next.js"
            },
            {
                name:"Tailwind.css"
            },
        ],
        image:"/photo/snake.png",
        live:"https://snake-update.vercel.app/",
        github:"https://github.com/ericraf123/snakeUpdate",
    },
        {
        num:'5',
        category:"frontend",
        title:"Dev Jobs",
        description:"Le projet permet d'afficher une liste d'offres d'emploi filtrées, triées et paginées, avec un champ de recherche, des filtres de type de contrat, et des options de tri par titre, entreprise et type de contrat. La page utilise une grille de cartes pour afficher chaque offre, et permet à l'utilisateur de naviguer entre les pages des résultats.",
        stack:[
            {
                name:"Next.js"
            },
            {
                name:"Tailwind.css"
            },
        ],
        image:"/photo/dev.png",
        live:"https://job-board-two-gamma.vercel.app/",
        github:"https://github.com/ericraf123/jobBoard",
    },
        {
        num:'6',
        category:"frontend",
        title:"Flashcards",
        description:"Ce projet permet de créer, gérer et supprimer des decks de flashcards, chaque deck ayant un titre, une description et un ensemble de cartes. Les utilisateurs peuvent également consulter les statistiques de chaque deck et passer des quiz sur chaque deck.",
        stack:[
            {
                name:"Next.js"
            },
            {
                name:"Tailwind.css"
            },
        ],
        image:"/photo/decks1.png",
        live:"https://flashcards-app-flame.vercel.app/",
        github:"https://github.com/ericraf123/Flashcards-app",
    },
        {
        num:'7',
        category:"frontend",
        title:"Music App",
        description:"L'application permet d'écouter de la musique en streaming, avec un lecteur audio interactif, une playlist filtrable et des contrôles pour jouer, mettre en pause, changer de chanson, ajuster le volume, et visualiser l'état de la musique.",
        stack:[
            {
                name:"Next.js"
            },
            {
                name:"Tailwind.css"
            },
        ],
        image:"/photo/music.png",
        live:"https://music-app-alpha-one.vercel.app/",
        github:"http://github.com/ericraf123/Music-App",
    },

];



const Work = () => {
    const [project,setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        {/**get current slide index */}
        const currentIndex = swiper.activeIndex;
        // update  project state based on current slide index 
        setProject(projects[currentIndex]);

    }
    return(
        <motion.section 
            initial={{opacity:0}}
            animate={{opacity:1,transition:{delay:2.4, duration:0.4, ease:'easeIn'},}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto ">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/**outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/**project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white
                             group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/**project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/**stack */}
                            <ul className="flex gap-4">
                                {
                                    project.stack.map((item,index) => {
                                        return(
                                            <li key={index} className="text-xl text-accent">
                                                 {item.name}
                                                 {/**remove the last comma */}
                                                 {index !== project.stack.length -1 && ","}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            {/**border */}
                            <div className="border border-white/20"></div>
                            {/**buttons */}
                           <div className="flex items-center gap-4">
                              {/**live project */}
                                <Link href={project.live}>
                                     <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group" >
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipTrigger>
                                                <p>Live project</p>
                                            </TooltipTrigger>
                                        </Tooltip>
                                     </TooltipProvider>
                                </Link>
                              {/**github project */}
                                <Link href={project.github}>
                                     <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group" >
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipTrigger>
                                                <p>Github repository</p>
                                            </TooltipTrigger>
                                        </Tooltip>
                                     </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {
                                projects.map((project,index) => {
                                    return(
                                        <SwiperSlide key={index} className="w-full">
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                  {/**overlay */}
                                                   <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                                                      <Image src={project.image} fill className="object-cover" alt="" />
                                                         
                                                      
                                                   </div>
                                                   {/**image */}
                                                 
                                                   <div className="relative w-ful h-full">
                                                     
                                                   </div>

                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            {/**slider buttons*/}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                            xl:w-max xl:justify-none"  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center
                            items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
       
    )
}

export default  Work;