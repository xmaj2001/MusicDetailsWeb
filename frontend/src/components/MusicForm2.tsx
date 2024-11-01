import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Image, Spacer } from "@nextui-org/react";
import Idetails from '../interfaces/Idetails';
import ModalUpload from './ModalUpload';
import logo from '../assets/imgs/logo.jpeg'
import Form from './From';

function MusicForm2() {
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

  const getCoverUrl = () => {
    if (details.cover && details.cover instanceof Blob) {
      return URL.createObjectURL(details.cover);
    }
    return logo;
  }

  return (
    <div className="flex items-center justify-center gap-8 p-8">
      <ModalUpload setDetails={setDetails} />
      <div className="w-1/5 md:w-1/2 lg:w-1/3 space-y-4">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Editor</h3>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit} onChange={handleChange} details={details} />
          </CardBody>
        </Card>
      </div>


      <div className="w-2/5 md:w-1/2 lg:w-2/4 relative ">
        <Card style={{ backgroundImage: `url(${getCoverUrl()})` }} className='bg-transparent bg-center bg-no-repeat bg-cover lg:h-[650px]'>
          <div className='bg-black/50  w-full h-full absolute'></div>
          <CardHeader>
            <h3 className="text-xl font-bold">Capa</h3>
          </CardHeader>
          <CardBody className="flex flex-col items-center justify-center p-8">
            <Image
              isBlurred
              radius="lg"
              height={300}
              width="350px"
              src={getCoverUrl()}
              alt="I"
              className="object-cover"
            />
            <Spacer y={8} />
            <div className="flex gap-4">
              <Button variant='shadow' color="warning">
                Upload
              </Button>
              <Button variant='solid' className='bg-red-600'>
                Remover
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default MusicForm2;
