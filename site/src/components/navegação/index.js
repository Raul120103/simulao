import { Containernavegador } from './styled'

export default function navegar() {

    return (
       <Containernavegador>
            <div className="dev"> <img src="/assets/images/vector (4).svg" alt="" /> <img src="/assets/images/DevSchool.svg" alt="" /> </div>
            <div style={{ border: ' #262626 solid', height:'40px', backgroundColor: '#262626', marginTop: '35px'}} > </div>
            <div style={{color: 'white', margin: '15px 0px 5px 70px'}}>Gerenciamento</div>
            <div className="sub">
                <div className="barra"> <img src="/assets/images/Rectangle 14.svg" alt="" /> </div>
                <div style={{margin: '0px 0px 0px 70px'}}>Alunos</div>    
            </div>
       </Containernavegador>
    )
}