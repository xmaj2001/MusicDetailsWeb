import { motion } from 'framer-motion'
import NavbarC from '../components/NavbarC'
import '../assets/css/Home.css'
import MusicForm2 from '../components/MusicForm2'

function EditorPage() {

    return (
        <div className="snap-y snap-mandatory h-screen text-white scroll-smooth overflow-y-auto">
            <NavbarC bg='bg-orange-500/50'/>
            <motion.section  className="snap-center h-screen bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 flex justify-center items-center">
                <MusicForm2 />
            </motion.section>
        </div>
    )
}
export default EditorPage
