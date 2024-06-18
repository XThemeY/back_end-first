import express from 'express';
import cors from 'cors';
import { SETTINGS } from './config/constants';
import mainRouter from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(SETTINGS.PATH.GLOBALURL, mainRouter);

app.get('/', (req, res) => {
	res.status(200).json({ version: '1.0' });
});

export default app;
// app.get(SETTINGS.PATH.VIDEOS, getVideosController);
// app.use(SETTINGS.PATH.VIDEOS, videosRouter);
