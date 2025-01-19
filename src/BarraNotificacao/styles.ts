import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    display: grid;
    grid-template-columns:  24% 24% 24% 24%;

    @media (max-width: 800px) {
        grid-template-columns:  48% 48%;
    }
`;

export const DivNotificacao = styled.div`
    background-color:rgb(0, 0, 0);
    color: white;
    padding: 10px;
    margin: 20px;
    height: 70px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 800px) {
        margin: 5px;
    }
`;

export const ImgNotificacao = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;

    @media (max-width: 1150px) {
        width: 40px;
        height: 40px;
    }
`;

export const H2 = styled.h2`
    font-size: 20px;
    text-align: center;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    @media (max-width: 1150px) {
        font-size: 15px;
    }
`;