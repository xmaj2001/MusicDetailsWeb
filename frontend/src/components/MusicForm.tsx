import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Image, Input, Modal, ModalBody, ModalContent, ModalHeader, Spacer, useDisclosure } from "@nextui-org/react";
import logo from '../assets/imgs/logo.jpeg'

function MusicForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmitfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage('Por favor, selecione um arquivo de áudio.');
      return;
    }
    setLoading(true);
    setMessage(null);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log(response.json());
        setMessage('Arquivo enviado e modificado com sucesso!');
      } else {
        const errorMessage = await response.json();
        setMessage(`Erro: ${errorMessage}`);
      }
    } catch (error) {
      setMessage('Erro na comunicação com a API.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center gap-8 p-8">
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmitfile}>
                  <Input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.item(0) || null)}
                    accept="audio/*"
                    label="Selecione um arquivo de áudio"
                    fullWidth
                  />
                  <Spacer y={2} />
                  <Button type="submit" color="primary" disabled={loading} fullWidth>
                    {loading ? 'Enviando...' : 'Enviar'}
                  </Button>
                  {message && <p>{message}</p>}
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="w-1/5 md:w-1/2 lg:w-1/3 space-y-4">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Editor</h3>
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
              <Button onPress={onOpen}>Open Modal</Button>
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
