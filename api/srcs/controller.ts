import { Request, Response, NextFunction } from 'express'
import multer from 'multer';
import NodeID3 from 'node-id3';

const local = multer.memoryStorage();
const upload = multer({ storage: local });

const index = (req: Request, res: Response) => {
    res.send("<h1>X-MAJ</h1>");
}

const uploadfile = async (req: Request, res: Response) => {
    upload.single('file')(req, res, (err: any) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        if (!req.file) {
            return res.status(400).send({ error: 'Arquivo não encontrado' });
        }
        const file = NodeID3.read(req.file.buffer);
        return res.status(200).json(file);
    });
}

const downloadfile = async (req: Request, res: Response) => {
    upload.single('file')(req, res, (err: any) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        if (!req.file) {
            return res.status(400).send({ error: 'Arquivo não encontrado' });
        }
        const tags = JSON.parse(req.body.tags);
        const cover = JSON.parse(req.body.cover);
        const raw = JSON.parse(req.body.raw);
        if (cover) {
            tags.image = {
                imageBuffer: Buffer.from(cover.imageBuffer.data)
            }
            tags.raw.APIC.imageBuffer = Buffer.from(cover.imageBuffer.data)
           console.log(tags);
        }
        const updatedFile = NodeID3.update(tags, req.file.buffer);
        const fileName = `updated-file.mp3`;
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        res.setHeader('Content-Type', 'audio/mpeg');
        res.send(updatedFile);
    });
}

export = { index, downloadfile, uploadfile };