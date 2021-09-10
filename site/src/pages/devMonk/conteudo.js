import Cabecalho from '../../components/cabecalho/index'
import Menu from '../../components/navegação/index'


import { Containerconteudo, Conteudo } from './styled'
import { useEffect, useState } from 'react';


import Api from '../../service/api';
const api = new Api();

export default function Index() {

    const [alunos, SetAlunos] = useState([]);
    const [nome, SetNome] = useState('');
    const [chamada, SetChamada] = useState('');
    const [turma, SetTurma] = useState('');
    const [curso, SetCurso] = useState('');
    const [idAlterando, SetIdAlterando] = useState (0);

    async function listar() {
        let r = await api.listar();
        SetAlunos(r);
    }


    async function inserir() {

        if(idAlterando == 0) {
            let r = await api.inserir(nome, chamada, curso, turma);
            alert('Aluno Inserido, Com Sucesso!');
        } else {
            let r = await api.alterar(nome, chamada, curso, turma);
            alert('Aluno alterado, Com Sucesso!');
            
            SetNome('');
            SetChamada('');
            SetCurso('');
            SetTurma('');
            SetIdAlterando(0)
        }
        listar();
        }
      

    async function editar(item) {
        SetNome(item.nm_aluno);
        SetChamada(item.nr_chamada);
        SetCurso(item.nm_curso);
        SetTurma(item.nm_turma);
        SetIdAlterando(item.id_matricula);
    }

    async function remover(id) {
        let r = await api.deletar(id);
        alert('Aluno removido, Com Sucesso!');

        listar();
    }


 




    useEffect (() => {
        listar();
    }, [])

    async function inserir() {
        let r = await api.inserir(nome, chamada, curso, turma);
        alert('aluno inserido');

        listar();
    }

    return (
       <Containerconteudo>
           <Menu />
        <Conteudo>
            <Cabecalho />
          <div className="box-cadastrar"> 
            <div style={{fontFamily: "", fontStyle: "normal", fontWeight: "bold", color: "#3C3939", fontSize: '32px', marginLeft: "38px"}}> Novo Alunos </div>
            <div className="box-input">
                <div className="cada-inputs" > Nome: <div class="input" type="text" value={nome} onChange={e => SetNome(e.target.value)}> <input /> </div>  
                </div>
                <div className="cada-inputs"> Curso:  <div class="input" type="text" value={curso} onChange={e => SetCurso(e.target.value)}> <input /> </div> 
                </div>
            </div>
            <div className="box-input2">
                <div className="cada-inputs"> Chamada:  <div class="input" type="text" value={chamada} onChange={e => SetChamada(e.target.value)}> <input /> </div>  
                </div>
                <div className="cada-inputs">Turma:  <div class="input" type="text" value={turma} onChange={e => SetTurma(e.target.value)}> <input /> </div>  
                </div>
                <button onClick={inserir}>cadastrar</button>
            </div>
          </div>
          <div className="matriculados">
              <div className="row-bar"> </div>
              <div className="ma-alu"> Alunos Matriculado </div> 
         
          <div className="tabela">
              <thead>
                  <th> ID </th>
                  <th> nome </th>
                  <th> Chamada </th>
                  <th> Turma </th>
                  <th> Curso </th>
                  <th className="a"> </th>
                  <th className="a"> </th>
              </thead>
              <tbody>
                 {alunos.map(item =>
                    
                    <tr> 
                    <td>{item.id_matricula}</td>
                    <td>{item.nm_aluno != null && item.nm_aluno.length >= 25 ? item.nm_aluno.substr(0, 25) + '...' : item.nm_aluno}</td>
                    <td>{item.nr_chamada}</td>
                    <td>{item.nm_turma}</td>
                    <td>{item.nm_curso}</td>
                    <td><button onClick={()=>editar(item)}><img src="/assets/images/edit.svg" alt="" />  </button></td>
                    <td class="b"><button onClick={()=>remover(item.id_matricula)}><img src="/assets/images/vector (5).svg" alt="" /></button></td>
                </tr>

                 )} 
              </tbody>

            </div>
          </div>
          </ Conteudo>
       </Containerconteudo>
    )
}