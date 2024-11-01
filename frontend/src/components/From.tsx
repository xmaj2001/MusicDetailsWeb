import { Button, Input, Spacer } from "@nextui-org/react";
import Idetails from "../interfaces/Idetails";

interface IFormProps {

    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    details: Idetails;
}

function Form({ onSubmit, onChange, details }: IFormProps) {
    return (
        <form className="space-y-2 flex flex-wrap w-2/1 lg:w-2/3" onSubmit={onSubmit}>
            <Input name='title' onChange={onChange} label="Título" placeholder="Digite o título" value={details.title} fullWidth size='sm' />
            <Input name='artist' onChange={onChange} label="Artista" placeholder="Digite o artista" value={details.artist} fullWidth size='sm' />
            <Input name='album' onChange={onChange} label="Álbum" placeholder="Digite o álbum" value={details.album} fullWidth size='sm' />
            <Input name='year' onChange={onChange} label="Ano" type="number" placeholder="2023" value={details.year} fullWidth size='sm' />
            <Input name='genre' onChange={onChange} label="Gênero" placeholder="Digite o gênero" value={details.genre} fullWidth size='sm' />
            <Input name='composer' onChange={onChange} label="Compositor" placeholder="Digite o compositor" value={details.composer} fullWidth size='sm' />
            <Input name='producer' onChange={onChange} label="Produtora" placeholder="Digite a produtora" value={details.producer} fullWidth size='sm' />
            <Input name='group' onChange={onChange} label="Grupo" placeholder="Digite o grupo" value={details.group} fullWidth size='sm' />
            <Input name='bpm' onChange={onChange} label="BPM" type="number" placeholder="80" value={details.bpm} fullWidth size='sm' />
            <Input name='copyright' onChange={onChange} label="Copyright" placeholder="Digite o copyright" value={details.copyright} fullWidth size='sm' />
            <Spacer y={1} />
            <Button color="warning" type="submit" fullWidth >
                Salvar
            </Button>
        </form>
    );
}

export default Form;