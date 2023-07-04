/* import { render, screen , fireEvent, within} from "@testing-library/react";
import App from "./App";
import { useState } from "react"; */

/* ABAICO TEMOS UMA ESCRITA PADRÃO PARA TESTES, NO DESCRIBE COLOCANOS O COMPONENTE
QUE VAI SER TESTADO, ENTÃO PASSANDO UMA FUNÇÃO E DENTRO DELA COLOCAMOS UM IT.
O IT SIGNIFICA OQUE ESPERAMOS QUE O TESTE NOS RETORNE, EXEMPLO: */

//dados que vão ser testados:
/* const sum = (x,y) =>{
  return x + y;
};
 */
// TESTE DOS DADOS:
// O TESTE ESPERA QUE A SOMA DOS DADOS SEJA FEITA CORRETAMENTE, NESTE EXEMPLO,
// ESPERAMOS QUE A SOMA DE 4 + 4 SEJA 8, SE O RESULTADO NAO FOR O ESPERADO, O TESTE
// VAI DAR COMO UM ERRO;
// O COMANDO .ToBe, SIGNIFICA OQUE ESPERAMOS QUE A SOMA RETORNE, OU SEJA,
// 4 + 4 DEVE SER 8;


// O TESTE 'should render App whit hello message' NOS DIZ QUE 
// É ESPERADO QUE O APP SEJA RRENDERIZADO E QUE TENHA A MSG HELLO WORLD:
// O COMANDO  screen.getByText('Hello world'); VAI ANALIZAR O DOM QUE ESTAMOS
// TESTANDO, VER SE O APP ESTA SENDO RENDERIZADO E SE NELE TEM A MSG HELLO WORLD
// screen.getByText('Hello world') É UM COMANDO DO REACT TEST LIBRARY, ELE VAI
// PASSAR PELO NOSSO COMPONENTE E BUSCAR O TEXTO 'HELLO WORLD', SE O TEXTO EXISTIR
// O TESTE VAI PASSAR, CASO O TEXTO NAO EXISTA, O TESTE VAI DAR ERRO;

/* describe('App Component',()=>{
  it('should sum correctly',()=>{
    expect(sum(4, 4)).toBe(8);
  }); */
  /* o teste acima é um exemplo */
 /*  it('should render App whit Hello message',()=>{
    render(<App/>);
    const helloElement = screen.getByText(/Hello world/i);
    expect(helloElement).toBeInTheDocument();
  })
  it("should change text when button click", ()=>{
    render (<App/>) */
    /* SEMPRE QUE FORMOS BUSCAR ALGO NO DOM, PRECISAMOS RENDERIZAR O COMPONENTE QUE CONTEM OQUE
    VAI SER TESTADO, POR ISSO RENDERIZEI APP NOVAMENTE; */
    /* const initialTextElement = screen.getByText("Quer alterar texto? Clique no botão...");
    expect(initialTextElement).toBeInTheDocument(); */
    /*
      ACIMA CRIEI UMA VARIAVEL E COMO VALOR PASSEI O SCREEN,GETBYTEXT() QUE VAI ENTRAR NO MEU DOM
      E PEGAR O TEXTO QUE PASSEI COMO PARAMETRO; 
      LOGO EM SEGUIDA, PASSEI O METDDO QUE ESPERA QUE MEU TEXTO ESTEJA NO DOCUMENTO DOM: EXPECT().TOBEINTHEDOCUMENT...
      ESSE METODO PASSAMOS A VARIAVEK QUE TEM  BUSCA DO TEXTO COMO PARAMETRO, DESSA FORMA O EXPECT VAI UTILIZAR O 
      VALOR DA VARIAVEL PARA CHECAR SE OS ELEMENTO QYE ESTA SENDO TESTADO ESTA NO MEU DOM.
    */
   /*  const buttonTest = screen.getByText(/mudar o texto/i);
    fireEvent.click(buttonTest);

    screen.getByText("Mudou o texto, parabens.")
  })
}) */

import { render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect"; 

describe('App Component', () => {
  it('should change text and button color when button is clicked', () => {
    render(<App />);
    const button = screen.getByText(/MUDAR O TEXTO/i);

   
    expect(button).toHaveClass('blue-button');
    expect(button).toBeInTheDocument();
  
    
    fireEvent.click(button);
  
    
      const firstMessage = screen.queryByText('Voltou o texto (true). Clique novamente para mudar...');
      const secondMessage = screen.queryByText('Mudou o texto (false), parabens. Clique novamente para voltar...');
  
      expect(firstMessage).not.toBeInTheDocument();
      expect(secondMessage).toBeVisible();
  
  
      expect(button).toHaveClass('red-button');
    
      fireEvent.click(button);

        
        expect(button).toHaveClass('blue-button');
  
        expect(secondMessage).toBeVisible();
        expect(firstMessage).not.toBeInTheDocument();
     });

});