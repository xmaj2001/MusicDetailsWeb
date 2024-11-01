import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";

export default function About() {
    

    return (
        <motion.div initial={
            {
                scale: 0
            }
        }
            animate={{
                scale: 1
            }}
            transition={{
                delay: 1
            }}
            className="header-sobre hidden sm:block">

            <div className="sobre mt-3">
                <motion.h2>Music Details</motion.h2>
                <h3> Editor de Etiquetas de Música</h3>
                <hr className="my-2" />
                <p className="max-w-[500px] text-left">
                    É um ferramenta que permite a edição de etiquetas de música,
                    proporcionando uma maneira fácil e eficiente de organizar e gerenciar informações
                    importantes relacionadas a f musicais.
                    Com este programa , você pode personalizar e aprimorar as informações das suas músicas favoritas,
                    como título, artistas, álbum, ano de lançamento, gênero, compositor, grupo, BPM, copyright, letra,
                    comentário e até mesmo adicionar, remover ou atualizar a cover da música.
                </p>
                <Button href="#" className="bg-orange-500" variant="shadow">
                    <FaUpload /> Upload File
                </Button>

                <Button href="#" className="bg-white text-orange-500 mx-4" variant="shadow">
                    <FaDownload /> Baixar
                </Button>
            </div>

        </motion.div>
    )
}
