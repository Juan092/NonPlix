import express from 'express';
import cors from 'cors';
import peliculasRoutes from './routes/peliculasRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(peliculasRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));