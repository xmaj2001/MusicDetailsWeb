import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, Spacer } from "@nextui-org/react";
import Idetails from '../interfaces/Idetails';

interface ModalUploadProps {
  setDetails: React.Dispatch<React.SetStateAction<Idetails>>;
}

function ModalUpload({ setDetails }: ModalUploadProps) {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setOpenModal(true);
  }, []);

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
        const result = await response.json();
        const cover = new Blob([new Uint8Array(result.cover.data)], { type: 'image/jpeg' });
        console.log(result);
        setDetails(prevDetails => ({ ...prevDetails, ...result, cover: cover }));
        setOpenModal(false);
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
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0) || null);
  }
  return (
    <Modal
      backdrop="opaque"
      isOpen={openModal}

      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/70"
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody>
              <form onSubmit={handleSubmitfile}>
                <Input className='text-white'
                  onChange={handleFileChange}
                  type="file"
                  accept="audio/*"
                  label="Selecione um arquivo de áudio"
                  fullWidth
                />
                <Spacer y={2} />
                <Button type="submit" className='bg-orange-500 ' disabled={false} fullWidth>
                  {loading ? 'Enviando...' : 'UPLOAD FILE'}
                </Button>
                {message && <p className='p-4'>{message}</p>}
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalUpload;
