import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";

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
                <h3> Download</h3>
                <motion.h2>Music Details</motion.h2>
                <h3> Editor de Etiquetas de Música </h3>
                <hr className="my-2" />
                <p className="max-w-[500px] text-left">
                    O Music Details é uma ferramenta prática e intuitiva para gerenciar e editar informações de suas músicas.<br />
                    Disponível tanto na versão web, que você pode acessar diretamente pelo navegador,
                    quanto na <Link href="https://github.com/xmaj2001/MusicDetails" className="text-orange-500 font-bold">versão  desktop</Link>, projetada especialmente para o sistema operacional Windows e linux.
                </p>

                <Link href="https://github.com/xmaj2001/MusicDetails/archive/refs/tags/v1.0.0.zip">
                    <Button className="bg-white hover:bg-orange-500 hover:text-white text-orange-500 mx-2" >
                        <FaDownload /> Baixar 1.0.0
                    </Button>
                </Link>

                <Link href="https://github.com/xmaj2001/musictag/archive/refs/tags/v1.0.0.zip">
                    <Button className="bg-white hover:bg-orange-500 hover:text-white text-orange-500 mx-2" >
                        <FaDownload /> Baixar 1.0.0
                    </Button>
                </Link>

            </div>

        </motion.div>
    )
}
