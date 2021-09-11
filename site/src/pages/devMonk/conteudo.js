import Cabecalho from '../../components/cabecalho/index'
import Menu from '../../components/navegação/index'

import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import { Containerconteudo, Conteudo } from './styled'
import { useEffect, useRef, useState } from 'react';


import Api from '../../service/api';
const api = new Api();

export default function Index() {

    const [alunos, SetAlunos] = useState([]);
    const [nome, SetNome] = useState('');
    const [chamada, SetChamada] = useState('');
    const [turma, SetTurma] = useState('');
    const [curso, SetCurso] = useState('');
    const [idAlterando, SetIdAlterando] = useState (0);

    let loading = useRef(null);
    async function listar() {
        loading.current.continuousStart();

        let r = await api.listar();
        SetAlunos(r);
        loading.current.complete();

    }


    async function inserir() {
        loading.current.continuousStart();
      if(nome == '' || chamada == '' || curso == '' || turma == '')  {
            toast.error('Todos Campos São Obrigatórios !')
      } else {
        if(chamada > 0) {
            if (idAlterando == 0) {
                let r = await api.inserir(nome, chamada, curso, turma);
                if (r.erro) 
                    toast.dark(r.erro)
                else
                    toast.dark('Aluno Inserido, Com Sucesso!');

                } else {
                    let r = await api.alterar(idAlterando, nome, chamada, curso, turma);
                    toast.dark('Aluno alterado, Com Sucesso!');
    
              
                }

        } else (
            toast.error('chamada negativa')
        )
    }
        SetNome('');
        SetChamada('');
        SetCurso('');
        SetTurma('');
        SetIdAlterando(0);
        loading.current.complete();

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
        loading.current.continuousStart();
confirmAlert({
    title: 'Remoção de Aluno',
    message: 'Tem Certeza que Deseja remover o Aluno ?',
    buttons: [
      {
        label: 'Sim',
        onClick: async () => {  let r = await api.deletar(id);
            if(r.erro)
            toast.error(r.erro);
            else {
            toast.dark('Aluno removido, Com Sucesso!');
            listar();
         }
        }
      


      },
      {
        label: 'Não',
        onClick: () => toast.dark('Aluno não Removido !')
      }
    ]
  })
  loading.current.complete();

        listar();
    }


    useEffect (() => {
        loading.current.continuousStart();
        listar();
        loading.current.complete();

    }, [])

   
    return (
       <Containerconteudo>
            <LoadingBar color="#EA10C7" ref={loading} />
           <ToastContainer />
           <Menu />
        <Conteudo>
            <Cabecalho />
          <div className="box-cadastrar"> 
                <div className="mo"></div>
                <div style={{fontFamily: "", fontStyle: "normal", fontWeight: "bold", color: "#3C3939", fontSize: '32px', marginLeft: "50px"}}>  {idAlterando == 0 ? 'Novo Aluno' : 'Alterando Aluno do id ' + idAlterando }  </div>
            <div className="box-input">
                <div className="cada-inputs" > Nome: 
                <input type="text" value={nome} onChange={e => SetNome(e.target.value)} />
                </div>
                <div className="cada-inputs"> Curso:  <input type="text" value={curso} onChange={e => SetCurso(e.target.value)} /> 
                </div>
            </div>
            <div className="box-input2">
                <div className="cada-inputs"> Chamada:  <input type="text" value={chamada} onChange={e => SetChamada(e.target.value)} /> 
                </div>
                <div className="cada-inputs">Turma:  <input type="text" value={turma} onChange={e => SetTurma(e.target.value)} />  
                </div>
                <button onClick={inserir}> {idAlterando == 0 ? 'Cadastrar' : 'Alterar'}</button>
            </div>
          </div>
          <div className="matriculados">
              <div style={{ position: "relative", border: "#986CDF solid", backgroundColor: "#986CDF",  borderRadius: "20px", width: ".1em", height: "1.6em", top: "60px", left: "2px" }}> </div>
              <div style={{fontFamily: "", fontStyle: "normal", fontWeight: "bold", color: "#3C3939", fontSize: '32px', marginLeft: "44px"}}> Alunos Matriculados </div> 
         
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
                 {alunos.map((item, i) =>
                    
                    <tr className={i % 2 == 0 ? "linha" : " "}> 
                    <td>{item.id_matricula}</td>
                    <td title={item.nm_aluno}> {item.nm_aluno != null && item.nm_aluno.length >= 25 ? item.nm_aluno.substr(0, 25) + '...' : item.nm_aluno}</td>
                    <td>{item.nr_chamada}</td>
                    <td>{item.nm_turma}</td>
                    <td>{item.nm_curso}</td>
                    <td><button style={{cursor:'pointer'}} onClick={() => editar(item)}><img src="/assets/images/edit.svg" alt="" />  </button></td>
                    <td><button style={{cursor:'pointer'}} onClick={() => remover(item.id_matricula)}><img src="/assets/images/vector (5).svg" alt="" /></button></td>
                </tr>

                 )} 
              </tbody>

            </div>
          </div>
          </ Conteudo>
       </Containerconteudo>
    )
}