import Cabecalho from '../../components/cabecalho/index'
import Menu from '../../components/navegação/index'


import { Containerconteudo, Conteudo } from './styled'
import { useEffect, useState } from 'react';


import Api from '../../service/api';
const api = new Api();

export default function index() {

    const [alunos, SetAlunos] = useState([]);
    const [nome, SetNome] = useState('');
    const [chamada, SetChamada] = useState('');
    const [turma, SetTurma] = useState('');
    const [curso, SetCurso] = useState('');


    async function listar() {
        let r = await api.listar();
        SetAlunos(r);
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
                    <td>{item.nm_aluno}</td>
                    <td>{item.nr_chamada}</td>
                    <td>{item.nm_turma}</td>
                    <td>{item.nm_curso}</td>
                    <td><button><img src="/assets/images/edit.svg" alt="" />  </button></td>
                    <td class="b"><button><img src="/assets/images/vector (5).svg" alt="" /></button></td>
                </tr>

                 )} 
              </tbody>

            </div>
          </div>
          </ Conteudo>
       </Containerconteudo>
    )
}