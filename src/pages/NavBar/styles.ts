import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 100px;
    background-color: rgb(0, 0, 0);
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;

    @media (max-width: 900px) {
        padding: 20px 50px;
    }
    
    @media (max-width: 800px) {
        padding: 20px 20px;
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;


export const ImagemLogo = styled.img`
    width: 200px;

    @media (max-width: 700px) {
        width: 150px;
    }

    @media (max-width: 600px) {
        width: 125px;
    }
`;

export const TextoBar = styled.p`
    color: white;
    font-size: 20px;
    font-family: "Nunito", sans-serif;

    @media (max-width: 700px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 13px;
    }

    @media (max-width: 340px) {
        font-size: 10px;
    }
`;

export const ImagemIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;