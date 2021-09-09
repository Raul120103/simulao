import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

app.get('/matricula', async (req, resp) =>  {
    try {
        let resultados = await db.tb_matricula.findAll();
        resp.send(resultados)
    } catch (e) {
        resp.send({ errp: 'Ocorreu um Erro!'})
    }
})

app.post('/matricula', async (req, resp) => {
    try {
        let usuParam = req.body;
        const aluno = req.body.aluno;
        const chamada = req.body.chamada;
        const curso = req.body.curso;
        const turma = req.body.turma;

        let u = await db.tb_matricula.findOne({ 
            where: { 
                nm_aluno: aluno,
                nr_chamada: chamada,
                nm_curso: curso, 
                nm_turma: turma

            } });
        
    } catch (e){
        return resp.send({ erro: 'Ocorreu um Erro' });

    }
})

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let del = await db.tb_matricula.destroy ({where: { id_matricula: req.params.id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})



app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))