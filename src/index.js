import "dotenv/config";
import app from "./app";

const port = process.env.NODE_PORT;

app.listen(port, () => console.info(`Está rodando na porta ${port}`));
