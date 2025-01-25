import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BsMicrosoft } from "react-icons/bs";
import { FaLinux } from "react-icons/fa6";


export default function About() {

    return (
        <motion.div initial={
            {
                scale: 0,
                y:'100%'
            }
        }
            animate={{
                scale: 1,
                y:0
            }}
            transition={{
               duration:'1',
               type:"tween",
               easings:5
            }}
            className="hidden header-sobre sm:block">

            <div className="px-4 mt-3 text-sm text-center sobre md:text-justify md:px-0 md:text-medium">
                <h3> Download</h3>
                <motion.h2>Music Details</motion.h2>
                <h3> Editor de Etiquetas de Música </h3>
                <hr className="my-2" />
                <p className="max-w-[500px] text-left">
                    O Music Details é uma ferramenta prática e intuitiva para gerenciar e editar informações de suas músicas.<br />
                    Disponível <b>versão desktop</b>,
                    projetada especialmente para o sistema operacional: <span className="">
                        <Link href="https://github.com/xmaj2001/MusicDetails" className="font-bold text-orange-500">Window </Link>
                        <span className="mx-1">e</span>
                        <Link href="https://github.com/xmaj2001/musictag" className="font-bold text-orange-500"> Linux</Link>.
                    </span>
                </p>

                <Link href="https://github.com/xmaj2001/musictag/archive/refs/tags/v1.0.0.zip">
                    <Button className="mx-2 text-orange-500 bg-white hover:bg-orange-500 hover:text-white" >
                        <FaLinux /> Baixar
                    </Button>
                </Link>

                <Link href="https://github.com/xmaj2001/MusicDetails/archive/refs/tags/v1.0.0.zip">
                    <Button className="mx-2 text-white bg-orange-500 hover:bg-orange-500 hover:text-white" >
                        <BsMicrosoft /> Baixar
                    </Button>
                </Link>
                
            </div>

        </motion.div>
    )
}
