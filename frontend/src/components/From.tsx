import { Button, Input, Modal, ModalBody, ModalContent, Spacer } from "@nextui-org/react";
import Itags from "../interfaces/Itags";
import { useState } from "react";
import { FaDownload, FaUpload } from "react-icons/fa6";
import Icover from "../interfaces/Icover";

interface IFormProps {

    settags: React.Dispatch<React.SetStateAction<Itags>>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    tags: Itags;
}

const isUpload = (status: StatusSubmit): boolean => {
    if (status == StatusSubmit.UPLOAD)
        return (true)
    return (false)
}

enum StatusSubmit {
    NONE,
    UPLOAD,
    DOWNLOAD
}

function Form({ onChange, settags, tags }: IFormProps) {
    const [statu, setStatus] = useState<StatusSubmit>(StatusSubmit.UPLOAD)
    const [file, setFile] = useState<File | null>(null);
    const [capa, setcapa] = useState<Icover | null>(null);
    const [raw, setRaw] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);

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
            const response = await fetch(`https://musicdetailsweb.onrender.com/api/uploadfile`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const result = await response.json();

                setcapa(result.image);
                let coverUrl = "/src/assets/imgs/logo.jpeg";
                if (result.image) {
                    const cover = new Blob([new Uint8Array(result.image.imageBuffer.data)], { type: result.image.mime });
                    coverUrl = URL.createObjectURL(cover);
                    setRaw(result.raw);
                }
                settags(prevtags => ({
                    ...prevtags,
                    ...result,
                    raw: result.raw,
                    image: capa,
                    cover: coverUrl
                }));
                setStatus(StatusSubmit.DOWNLOAD);
                setOpenModal(false);
            } else {
                const errorMessage = await response.json();
                setMessage(`Erro: ${errorMessage}`);
            }
        } catch (error) {
            setMessage('A comunicação com a API Falhou.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.item(0) || null);
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        if (!file) {
            setMessage('Por favor, selecione um arquivo de áudio.');
            return;
        }
        console.log(tags);
        formData.append('file', file);
        formData.append('tags', JSON.stringify(tags));
        formData.append('cover', JSON.stringify(capa));
        formData.append('raw', JSON.stringify(raw));
        try {
            const response = await fetch('https://musicdetailsweb.onrender.com/api/downloadfile', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);

                // Cria um link temporário para download
                const link = document.createElement('a');
                link.href = url;
                link.download = tags.title;
                link.click();
                URL.revokeObjectURL(url);
            } else {
                alert(response);
            }
        } catch (error) {
            console.error(error);
        }
        //setStatus(StatusSubmit.UPLOAD)
    }

    return (
        <>
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
            <form className="space-y-2 flex flex-wrap w-2/1 lg:w-2/3" onSubmit={onSubmit}>
                <Input isDisabled={isUpload(statu)} name='title' onChange={onChange} label="Título" placeholder="Digite o título" value={tags.title} fullWidth size='sm' />
                <Input isDisabled={isUpload(statu)} name='artist' onChange={onChange} label="Artista" placeholder="Digite o artista" value={tags.artist} fullWidth size='sm' />
                <Input isDisabled={isUpload(statu)} name='album' onChange={onChange} label="Álbum" placeholder="Digite o álbum" value={tags.album} fullWidth size='sm' />
                <Input isDisabled={isUpload(statu)} name='year' onChange={onChange} label="Ano" type="number" placeholder="2023" value={tags.year} fullWidth size='sm' />
                <Input isDisabled={isUpload(statu)} name='genre' onChange={onChange} label="Gênero" placeholder="Digite o gênero" value={tags.genre} fullWidth size='sm' />
                <Input isDisabled={isUpload(statu)} name='composer' onChange={onChange} label="Compositor" placeholder="Digite o compositor" value={tags.composer} fullWidth size='sm' />
                <Input isDisabled={isUpload(statu)} name='producer' onChange={onChange} label="Produtora" placeholder="Digite a produtora" value={tags.producer} fullWidth size='sm' />
                <Input isDisabled={isUpload(statu)} name='bpm' onChange={onChange} label="BPM" type="number" placeholder="80" value={tags.bpm} fullWidth size='sm' />
                <Input isDisabled={isUpload(statu)} name='copyright' onChange={onChange} label="Copyright" placeholder="Digite o copyright" value={tags.copyright} fullWidth size='sm' />
                <Spacer y={1} />
                <Button color="warning" className={statu == StatusSubmit.DOWNLOAD ? `bg-neutral-900 text-orange-400` : ``} type="submit" fullWidth>
                    {isUpload(statu) ? <FaUpload /> : <FaDownload />}
                    {isUpload(statu) ? "UPLOAD FILE" : "DOWNLOAD"}
                </Button>
            </form>
        </>
    );
}

export default Form;