import { motion } from 'framer-motion'
import { Image, Spacer } from '@nextui-org/react'
import { useState } from 'react'
import NavbarC from '../components/NavbarC'
import Form from '../components/From'
import Idetails from '../interfaces/Idetails'
import '../assets/css/Home.css'
import ModalUpload from '../components/ModalUpload'

function EditorPage() {
    const [details, setDetails] = useState<Idetails>({
        title: 'Music',
        artist: '',
        album: '',
        year: '0',
        genre: '',
        composer: '',
        producer: '',
        group: '',
        cover: 'src/assets/imgs/logo.jpeg',
        bpm: '0',
        copyright: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        alert("Subimit");
        try {
            const response = await fetch('http://localhost:3000/downloadfile', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            });

            if (response.ok) {
                console.log(response.json());
                console.log('Arquivo enviado e modificado com sucesso!');
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
                <motion.div className="flex flex-col lg:flex-row w-full ">
                    <motion.div style={{ backgroundImage: `url(${details.cover})` }} className="w-full relative bg-center bg-cover bg-no-repeat bg-white flex flex-col h-full items-center justify-center p-8">
                        <div className='bg-black/45 w-full h-full absolute'></div>
                        <motion.div className='h-[250px] flex justify-center items-center'>
                            <Image
                                isBlurred
                                radius="lg"
                                isZoomed
                                src={details.cover}
                                alt="I"
                                className="w-[150px]  lg:w-[250px]"
                            />
                        </motion.div>
                        <Spacer y={1} />
                        <motion.h2 className="text-white font-mono text-2xl z-20">
                            {details.title}
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
