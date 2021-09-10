import styled from 'styled-components'

const Containercabecalho = styled.div`
display: flex;
justify-content: space-between;
background-color: white;
font-family: Roboto;
font-size: 12px;


.cabe-usuario {
    padding: 15px  17px 0px 18px;
    display: flex; 
    flex-direction: row;
    align-items: center;
}

.cabe-nome {
    margin-bottom: 0.84em;
    margin-left: 14px;

}

.cabe-notifi {
    position: relative;
    bottom: 60px;
    left: 43px;

    border: 2px solid;
    border-color: #FFFFFF;
    border-radius: 20px;
    width: 15px;
    height: 15px;
    background-color: #DB21BD;

    
}

p {
    position: absolute;
    top: -11px;
    left: 4px;
    color: white;

}

.cabe-botoes {
    padding: 25px  17px 10px 0px;
    display: flex; 
    flex-direction: row;
}

.cabe-atualizar, .cabe-sair {
    border: solid 986CDF;
    background-color: #986CDF;
    border-radius: 90px;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    align-items: center;



}

.cabe-atualizar > img, .cabe-sair img {
    margin: 10px 8px;
}

`


export { Containercabecalho }
