"use client";
import { Button } from "@/components/ui/button";
import  { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const infos = [
    {
        icon:<FaPhoneAlt/>,
        title:"téléphone",
        description:"+261 33 21 929 14",
    },
    {
        icon:<FaEnvelope/>,
        title:"Courriel",
        description:"rafanomezantsoaeric31@gmail.com",
    },
    {
        icon:<FaMapMarkerAlt/>,
        title:"Adresse",
        description:"II E 2ZFC Ambatokaranana",
    },

];


import { motion } from "framer-motion";


const Contact = () => {
    return(
        <motion.section  
            initial={{opacity:0}}
            animate={{opacity:1,transition:{delay:2.4, duration:0.4, ease:'easeIn'},}}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/**form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
                            <p className="text-white/60">Que vous ayez un projet spécifique en tête ou que vous ayez besoin de conseils pour donner vie à votre vision, je suis là pour vous aider. Je propose des solutions créatives adaptées à vos besoins uniques. Collaborons ensemble pour concrétiser vos idées.</p>
                            {/**input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Nom"/>
                                <Input type="lastname" placeholder="Prenom"/>
                                <Input type="email" placeholder="Courriel"/>
                                <Input type="phone" placeholder="téléphone"/>
                            </div>
                            {/**select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Sélectionnez un service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                         <SelectLabel>Sélectionnez un service</SelectLabel>
                                         <SelectItem value="est">Web Development</SelectItem>
                                         <SelectItem value="cst">UI/UX Design</SelectItem>
                                         <SelectItem value="mst">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/**textarea */}
                            <Textarea className="h-[200px]" placeholder="tapez votre message ici."/>
                            {/**btn */}
                            <Button size="md" className="max-w-40">Envoyer</Button>
                        </form>
                    </div>
                    {/**info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10 ">
                            {infos.map((item,index) => {
                                return(
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        
                    </div>
                </div>
            </div>

        </motion.section>
    )
}

export default Contact;