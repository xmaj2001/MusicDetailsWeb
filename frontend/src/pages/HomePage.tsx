import { motion } from 'framer-motion'
import { Image, Link } from "@nextui-org/react"
import logo from '../assets/imgs/logo.jpeg'
import About from "../components/About"
import NavbarC from '../components/NavbarC'
import '../assets/css/Home.css'
import AboutApp from '../components/AboutApp'
import VideoEmbed from '../components/VideoEmbed'

function HomePage() {

  return (
    <div className="h-screen overflow-y-auto text-white snap-y snap-mandatory scroll-smooth">
      <NavbarC bg='bg-transparent' />
      <motion.section className="flex-col-reverse header bg-neutral-900/75 lg:flex-row">
        <About />
        <motion.div initial={{y:'50%', x:'-100%'}} 
                animate={{y:0, x:0}} transition={{duration:'1'}}
                className="flex flex-col items-center justify-center gap-8">
          <Image
            isBlurred
            isZoomed
            radius="lg"
            src={logo}
            alt="I"
            className="object-cover w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]"
          />
          <div className="titulo">
            <motion.h3 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
              Music Details
            </motion.h3>
            <motion.h4 initial={{ y: -10, scale: 0 }} animate={{ y: 0, scale: 1 }} transition={{ delay: 1.5 }}>
              Editor de Etiqueta
            </motion.h4>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="flex-col-reverse header bg-neutral-900 lg:flex-row">
        <AboutApp />
        <motion.div className="flex flex-col items-center justify-center gap-8">
          <Link href="/https://github.com/xmaj2001/MusicDetails" className="btn btn-primary">
            <VideoEmbed videoId="2IMXLBbJr3s" />
          </Link>
          <div className="titulo">
            <motion.h3 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
              Music Details
            </motion.h3>
            <motion.h4 initial={{ y: -10, scale: 0 }} animate={{ y: 0, scale: 1 }} transition={{ delay: 1.5 }}>
              Editor de Etiqueta
            </motion.h4>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
export default HomePage
