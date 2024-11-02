import { motion } from 'framer-motion'
import { Image, Spacer } from '@nextui-org/react'
import { useState } from 'react'
import NavbarC from '../components/NavbarC'
import Form from '../components/From'
import Idetails from '../interfaces/Idetails'
import logo from '../assets/imgs/logo.jpeg'
import '../assets/css/Home.css'
import ModalUpload from '../components/ModalUpload'

function EditorPage() {
    const [details, setDetails] = useState<Idetails>({
        title: '',
        artist: '',
        album: '',
        year: '0',
        genre: '',
        composer: '',
        producer: '',
        group: '',
        bpm: '0',
        copyright: '',
        cover: null
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: JSON.stringify(details),
            });

            if (response.ok) {
                console.log(response.json());
            } else {
                console.error(response);
            }
        } catch (error) {
            console.error(error);
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    }

    return (
        <div className="h-screen text-white scroll-smooth overflow-y-auto bg-neutral-800">
            <NavbarC bg='bg-transparent' />
            <ModalUpload setDetails={setDetails} />
            <motion.section className="-my-16 h-screen flex justify-center">
                <motion.div  className="flex flex-col lg:flex-row w-full ">
                    <motion.div style={{ backgroundImage: `url(${logo})` }}  className="w-full relative bg-center bg-cover bg-no-repeat bg-white flex flex-col h-full items-center justify-center p-8">
                    <div className='bg-black/45 w-full h-full absolute'></div>
                        <motion.div className='h-[250px] flex justify-center items-center'>
                            <Image
                                isBlurred
                                radius="lg"
                                isZoomed
                                src={logo}
                                alt="I"
                                className="w-[150px]  lg:w-[250px]"
                            />
                        </motion.div>
                        <Spacer y={1} />
                        <motion.h2 className="text-white font-mono text-2xl z-20">
                            Music
                        </motion.h2>
                    </motion.div>
                    <motion.div className="flex flex-col items-center justify-center mx-5 my-5 ">
                        <Form onSubmit={handleSubmit} onChange={handleChange} details={details} />
                    </motion.div>
                </motion.div>
            </motion.section>
        </div >
    )
}
export default EditorPage
