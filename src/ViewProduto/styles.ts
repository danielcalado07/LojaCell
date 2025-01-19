import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 1145.78px;
    margin: 0 auto;
    gap: 10px;
    flex-direction: column;
    
`;

export const ContainerProduto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const DivProduto = styled.div`
    height: 500px;
    margin-top: 150px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ImagemProduto = styled.div`
    margin-top: 150px;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
`;

export const ImagemSeletor = styled.img<{ select?: string }>`
    height: 70px;
    max-width: 70px;
    background-color: #ffffff;
    padding: 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border-left: ${(props) =>
        props.select === "1" ? "5px solid #C51414" : "none"};
`;

export const H2 = styled.h2`
    font-size: 24px;
    color: #000000;
    font-family: "Nunito", sans-serif;
    margin: 0;
`;

export const P = styled.p`
    font-size: 18px;
    color:#058f00;
    font-family: "Nunito", sans-serif;
    margin: 0;
    margin-top: 10px;
    font-weight: bold;
`;

export const P1 = styled.p`
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #C51414;
    margin: 0;
    margin-bottom: 20px;
`;

export const P2 = styled.p`
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color:#777777;
    margin: 0;
    margin-bottom: 20px;
    text-decoration: line-through;
`;

export const P3 = styled.p`
    font-size: 14px;
    color: #777777;
    font-family: "Nunito", sans-serif;
`;

export const PagamentoAvista = styled.div`
    width: 100%;
    padding: 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #9b9b9b;
`;

export const PagamentoParcelado = styled.div`
    width: 100%;
    padding: 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #9b9b9b;
`;

export const Button = styled.button`
    background-color: #C51414;
    color: #ffffff;
    font-size: 18px;
    font-family: "Nunito", sans-serif;
    border: none;
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 20px;
`;