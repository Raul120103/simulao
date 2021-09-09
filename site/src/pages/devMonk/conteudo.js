import { Containerconteudo } from './styled'

export default function conteudo() {

    return (
       <Containerconteudo>
           
          <div className="box-cadastrar"> 
            <div style={{fontFamily: "", fontStyle: "normal", fontWeight: "bold", color: "#3C3939", fontSize: '32px', marginLeft: "38px"}}> Novo Alunos </div>
            <div className="box-input">
                <div className="cada-inputs" > Nome: <div class="input" > <input /> </div>  
                </div>
                <div className="cada-inputs"> Curso:  <div class="input"> <input /> </div> 
                </div>
            </div>
            <div className="box-input2">
                <div className="cada-inputs"> Chamada:  <div class="input"> <input /> </div>  
                </div>
                <div className="cada-inputs">Turma:  <div class="input"> <input /> </div>  
                </div>
                <button>cadastrar</button>
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
                  <tr>
                      <td>1 </td>
                      <td> Fulaõ</td>
                      <td> 15 </td>
                      <td> InfoA</td>
                      <td>informatica</td>
                      <td><button>xxx</button></td>
                      <td class="b"><button>sss</button></td>
                  </tr>
              </tbody>
            </div>
          </div>
       </Containerconteudo>
    )
}