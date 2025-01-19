import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: 60px;
    margin-top: 50px;
    margin-bottom: 0px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    @media (max-width: 1700px) {
        font-size: 50px;
    }
    
    @media (max-width: 1600px) {
        font-size: 40px;
    }

    @media (max-width: 1450px) {
        font-size: 35px;
    }
`;

export const ContainerProduto = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 50px 150px;

    @media (max-width: 1700px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin: 50px 100px;
    }

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        margin: 50px 50px;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        margin: 50px 20px;
    }

    @media (max-width: 500px) {
        margin: 50px 20px;
    }
`;

export const DivProduto = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
    justify-content: center;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    text-align: center;

    @media (max-width: 500px) {
    flex-direction: row;
    padding: 5px;
    }
`;

export const ImagemProduto = styled.img`
    max-width: 250px;
    height: 300px; 
    border-radius: 20px;

    @media (max-width: 500px) {
        max-width: 100px;
        height: 150px;
        margin-right: 5px;
    }
`;

export const H2 = styled.h2`
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 12px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    
`;

export const P2 = styled.p`
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color:#777777;
    margin: 0;
    margin-bottom: 20px;
    text-decoration: line-through;

    @media (max-width: 500px) {
        font-size: 13px;
        margin-bottom: 5px;
    }
`;

export const P = styled.p`
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #C51414;
    margin: 0;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        font-size: 13px;
        margin-bottom: 5px;
    }
`;

export const P3 = styled.p`
    font-size: 15px;
    font-family: 'Nunito', sans-serif;
    color: #777777;
    margin: 0;
    margin-bottom: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 0px;

    span {
        color: #C51414;
    }

    @media (max-width: 500px) {
        font-size: 10px;
        margin-bottom: 0px;
        margin-top: 5px;
    }
`;

export const Button = styled.button`
    background-color: #C51414;
    color: white;
    padding: 5px 40px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: rgb(50, 50, 50);
    }

    @media (max-width: 500px) {
        font-size: 15px;
        padding: 5px 20px;
    }
`;