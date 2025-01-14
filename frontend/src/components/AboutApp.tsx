import { Button, Link, Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BiWindow } from "react-icons/bi";
import { BsMicrosoft } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { FaDownload, FaUpload } from "react-icons/fa6";
import { LiaLinux } from "react-icons/lia";

export default function AboutApp() {


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
                    <p>
                        E uma <strong>ferramenta </strong> que permite a{" "}
                        <strong>edição de etiquetas de música</strong>, oferecendo uma maneira fácil de{" "}
                        <strong>organizar e gerenciar informações importantes</strong> relacionadas às suas músicas.
                    </p>
                    <Spacer y={1} />
                    <p>
                        Com ela você pode <strong>personalizar e aprimorar</strong> as etiquetas das suas músicas como{" "}
                        <strong>título</strong>, <strong>artista</strong>, <strong>álbum</strong>, <strong>ano de lançamento</strong>,{" "}
                        <strong>gênero</strong>, <strong>compositor</strong>, <strong>grupo</strong>, <strong>BPM</strong>,{" "}
                        <strong>copyright</strong> {""}
                        adicionar, remover ou atualizar a  <strong> capa (cover)</strong> da música.
                    </p>
                </p>

            </div>

        </motion.div>
    )
}
