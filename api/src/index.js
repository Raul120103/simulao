import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

app.get('/matricula', async (req, resp) =>  {
    try {
        let resultados = await db.tb_matricula.findAll();
        resp.send(resultados)
    } catch (e) {
        resp.send({ errp: 'Ocrreu um Erro!'})
    }
})

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let del = atob db.tb_matricula.destroy ({where { id_matricula: req.params.id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})



app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))