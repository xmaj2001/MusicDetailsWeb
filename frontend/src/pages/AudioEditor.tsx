import { motion } from 'framer-motion'
import { Image, Spacer } from '@nextui-org/react'
import NavbarC from '../components/NavbarC'
import '../assets/css/Home.css'
import React, { useState } from 'react'
import Itags from '../interfaces/Itags'
import Form from '../components/From'


function AudioEditor() {
    const [tags, setTags] = useState<Itags>({
        title: 'Music',
        artist: '',
        album: '',
        year: '0',
        genre: '',
        cover: '/src/assets/imgs/logo.jpeg',
        bpm: '0',
        copyright: ''
    });
    const changeTags = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTags({ ...tags, [name]: value });
    }
    
    return (
        <div className="h-screen text-white scroll-smooth overflow-y-auto bg-neutral-800">
            <NavbarC bg='bg-transparent' />
            <motion.section className="-my-16 h-screen flex justify-center">
                <motion.div className="flex flex-col lg:flex-row w-full ">
                    <motion.div style={{ backgroundImage: `url(${tags.cover})` }} className="w-full relative bg-center bg-cover bg-no-repeat bg-white flex flex-col h-full items-center justify-center p-8">
                        <div className='bg-black/45 w-full h-full absolute'></div>
                        <motion.div className='h-[250px] flex justify-center items-center'>
                            <Image
                                isBlurred
                                radius="lg"
                                isZoomed
                                src={tags.cover}
                                alt="I"
                                className="w-[150px]  lg:w-[250px]"
                            />
                        </motion.div>
                        <Spacer y={1} />
                        <motion.h2 className="text-white text-center font-mono text-2xl z-20">
                            {tags.title}
                        </motion.h2>
                    </motion.div>
                    <motion.div className="flex flex-col items-center justify-center mx-5 my-5 ">
                        <Form onChange={changeTags} settags={setTags} tags={tags} />
                    </motion.div>
                </motion.div>
            </motion.section>
        </div >
    )
}
export default AudioEditor
