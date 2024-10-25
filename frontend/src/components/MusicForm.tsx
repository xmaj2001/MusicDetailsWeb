import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Image, Input, Spacer } from "@nextui-org/react";
import logo from '../assets/img/logo.jpeg'
const MusicForm: React.FC = () => {


  return (
    <div className="flex items-center justify-center gap-8 p-8">
      <div className="w-1/5 md:w-1/2 lg:w-1/3 space-y-4">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Music Details</h3>
          </CardHeader>
          <CardBody>
            <form className="space-y-2 flex flex-wrap">
              <Input label="Título" placeholder="Digite o título" fullWidth size='sm' />
              <Input label="Artista" placeholder="Digite o artista" fullWidth size='sm' />
              <Input label="Álbum" placeholder="Digite o álbum" fullWidth size='sm' />
              <Input label="Ano" type="number" placeholder="2023" fullWidth size='sm' />
              <Input label="Gênero" placeholder="Digite o gênero" fullWidth size='sm' />
              <Input label="Compositor" placeholder="Digite o compositor" fullWidth size='sm' />
              <Input label="Produtora" placeholder="Digite a produtora" fullWidth size='sm' />
              <Input label="Grupo" placeholder="Digite o grupo" fullWidth size='sm' />
              <Input label="BPM" type="number" placeholder="80" fullWidth size='sm' />
              <Input label="Copyright" placeholder="Digite o copyright" fullWidth size='sm' />
              <Spacer y={1} />
              <Button color="warning" type="submit" fullWidth >
                Salvar
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>

      <div className="w-2/5 md:w-1/2 lg:w-2/4 relative ">
        <Card style={{ backgroundImage: `url(${logo})` }} className='bg-transparent bg-center bg-no-repeat bg-cover lg:h-[650px]'>
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
              src={logo}
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

export default MusicForm;
