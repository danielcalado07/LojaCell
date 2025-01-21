import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 1145.78px;
    margin: 0 auto;
    gap: 10px;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 950px;
    }

    @media (max-width: 1000px) {
        width: 780px;
    }

    @media (max-width: 825px) {
        width: 500px;
    }

    @media (max-width: 540px) {
        width: 300px;
    }

    @media (max-width: 350px) {
        width: 300px;

    }
    
`;

export const ContainerProduto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 825px) {
        flex-direction: column;
    }
`;

export const DivProduto = styled.div`
    height: 500px;
    margin-top: 150px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 825px) {
        margin-top: 10px;
        height: auto;
    }

    @media (max-width: 350px) {
        width: 300px;
    }
`;

export const ImagemProduto = styled.div`
    margin-top: 150px;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 10px;
    }
    
    @media (max-width: 400px) {
        padding: 0px;
    }
`;

export const DivItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-right: 20px;

    @media (max-width: 1000px) {
        flex-direction: row;
        margin-top: 10px;
        margin-right: 0px;
        gap: 10px;
    }

    @media (max-width: 400px) {
        margin-right: 0px;
    }
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

    @media (max-width: 1000px) {
        height: 60px;
        width: 80px;
        max-width: 80px;
    }

    @media (max-width: 400px) {
        height: 50px;
        width: 70px;
        max-width: 70px;
    }

    @media (max-width: 350px) {
        height: 40px;
        width: 60px;
        max-width: 60px;
    }
`;

export const DivImagem = styled.div`
    height: 500px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 1200px) {
        width: 350px;
    }

    @media (max-width: 400px) {
        width: 300px;
        height: 400px;
    }

    @media (max-width: 350px) {
        width: 250px;
        
`;

export const Imagem = styled.img`
    height: 100%;
    max-width: 600px;
    border-radius: 5px;

    @media (max-width: 1200px) {
        max-width: 380px;
    }

    @media (max-width: 400px) {
        max-width: 330px;
    }

    @media (max-width: 350px) {
        max-width: 300px;
    }
`;

export const H2 = styled.h2`
    font-size: 24px;
    color: #000000;
    font-family: "Nunito", sans-serif;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 20px;
    }
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

    @media (max-width: 1000px) {
        font-size: 20px;
    }
`;

export const P2 = styled.p`
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color:#777777;
    margin: 0;
    margin-bottom: 20px;
    text-decoration: line-through;

    @media (max-width: 1000px) {
        font-size: 20px;
    }
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

export const DivInforesTecnicas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    display: grid;
    grid-template-columns:  33% 33% 33%;

    @media (max-width: 800px) {
        grid-template-columns:  48% 48%;
    }

    @media (max-width: 500px) {
        grid-template-columns:  100%;
    }
`;

export const InformacoesTecnicas = styled.div`
    padding: 5px;
    margin: 10px;
    display: flex;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    font-weight: bold;
    flex-direction: column;

    @media (max-width: 800px) {
        margin: 5px;
    }
`;

export const PInfo = styled.p`
    font-size: 18px;
    color: #000000;
    font-family: "Nunito", sans-serif;
    margin: 0;
    margin-top: 10px;
    margin-left: 45px;

    @media (max-width: 1000px) {
        font-size: 14px;
    }

    @media (max-width: 825px) {
        margin-left: 10px;
    }
`;

export const H3Info = styled.h3`
    font-size: 20px;
    color: #000000;
    font-family: "Nunito", sans-serif;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 16px;
    }
`;

export const PInfo02 = styled.p`
    font-size: 15px;
    color: #696969;
    font-family: "Nunito", sans-serif;
    margin: 0;
    margin-top: 10px;

    @media (max-width: 1000px) {
        font-size: 12px;
    }
`;