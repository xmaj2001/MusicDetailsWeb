import multer from "multer";
import NodeID3 from "node-id3";
import MusicData from "../entities/MusicData";
import Edetails from "../entities/Edetails";
export default class Cdetails {

    private storage: multer.StorageEngine;
    private upload: multer.Multer;
    public file: Edetails | null;
    public filex: Blob | null;

    constructor() {
        this.storage = multer.memoryStorage();
        this.upload = multer({ storage: this.storage });
        this.file = null;
        this.filex = null;
    }

    private getData = (tags: MusicData | any): Edetails => {
        return {
            title: tags.title,
            artist: tags.artist,
            album: tags.album,
            year: tags.year,
            genre: tags.genre,
            bpm: tags.bpm,
            cover: tags.image ? tags.image.imageBuffer : null,
            composer: tags.composer,
            producer: tags.producer,
            group: tags.group,
            copyright: tags.copyright,
        };
    }

    public getDetails = async (req: any, res: any) => {
        this.upload.single('file')(req, res, (err: any) => {
            if (err) {
                return res.status(400).send({ error: err.message });
            }
            if (!req.file) {
                return res.status(400).send({ error: 'Arquivo não encontrado' });
            }
            const tags = NodeID3.read(req.file.buffer);
            this.file = this.getData(tags);
            console.log(this.file);
            this.filex = req.file;
            res.status(200).json(this.file);
            console.log('Arquivo recebido com sucesso!');
        });
    }

    public setDetails = async (req: any, res: any) => {
        if (this.filex) {
            const newfile = NodeID3.update(req.body, (this.filex as any).buffer);
            res.setHeader('Content-Disposition', `attachment; filename=modified_${req.file.originalname}`);
            res.setHeader('Content-Type', req.file.mimetype);
            console.log(this.filex);
            res.send(newfile);
        } else {
            res.status(400).send({ error: 'No file available to update' });
        }
    }
}