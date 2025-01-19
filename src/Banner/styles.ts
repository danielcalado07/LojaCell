import styled from "styled-components";
import { banner01 } from "../assets";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Banner = styled.div`
    background-image: url(${banner01});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 50vh;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1400px) {
        height: 40vh;
    }
    
    @media (max-width: 1100px) {
        height: 35vh;
    }
    
    @media (max-width: 900px) {
        height: 30vh;
    }

    @media (max-width: 700px) {
        margin-top: 80px;
    }

    @media (max-width: 500px) {
        margin-top: 90px;
    }
    @media (max-width: 650px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 65vh;  
    }

    @media (max-width: 550px) {
        height: 60vh;
    }

    @media (max-width: 450px) {
        height: 55vh;
    }

    @media (max-width: 350px) {
        height: 50vh;
`;

export const DivTitulo = styled.div`
    margin-left: 50px;
    margin-right: 20px;
    @media (max-width: 1700px) {
        margin-left: 20px; 
    }

    @media (max-width: 650px) {
        margin-left: 0px;
        margin-right: 0px;
        text-align: center;
`;

export const H1 = styled.h1`
    font-size: 80px;
    margin-bottom: 20px;

    @media (max-width: 1700px) {
        font-size: 70px;
    }

    @media (max-width: 1600px) {
        font-size: 60px;
    }

    @media (max-width: 1450px) {
        font-size: 55px;
    }

    @media (max-width: 1275px) {
        font-size: 45px;
    }

    @media (max-width: 1185px) {
        font-size: 40px;
    }

    @media (max-width: 350px) {
        font-size: 30px;
        margin-top: 35px;
    }
`;

export const P = styled.p`
    font-size: 30px;
    margin: 0;

    @media (max-width: 1700px) {
        font-size: 25px;
    }

    @media (max-width: 1600px) {
        font-size: 20px;
    }

    @media (max-width: 350px) {
        font-size: 18px;
    }
`;

export const Button = styled.button`
    background-color:rgb(255, 0, 0);
    color: #FFFFFF;
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-color:rgb(255, 79, 79);
    }
`;

export const ImagemElement03 = styled.img`
    padding: 20px;
    margin-right: 50px;

    @media (max-width: 1700px) {
        margin-right: 20px;
    }

    @media (max-width: 650px) {
        width: 50%;
    }
`;