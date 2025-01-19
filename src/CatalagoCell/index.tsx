import { useNavigate } from "react-router-dom";
import { banner01, fone, fone2, fone3, fone4 } from "../assets";
import { Button, Container, ContainerProduto, DivProduto, H1, H2, ImagemProduto, P, P2, P3 } from "./styles";
import { useState } from "react";

function CatalogoCell() {
    const navigate = useNavigate();

    const [produto] = useState([
        {
            id: 1,
            nome: 'Produto 01 Produto 01 Produto 01 Produto 01',
            preco: 1000.00,
            imagem: fone,
            descricao: 'Produto 01 Produto 01 Produto 01 Produto 01',
            parcelas: 6,
            valorParcela: 166.67
        },
        {
            id: 2,
            nome: 'Produto 02 Produto 02 Produto 02 Produto 02',
            preco: 1000.00,
            imagem: fone2,
            descricao: 'Produto 02 Produto 02 Produto 02 Produto 02',
            parcelas: 6,
            valorParcela: 166.67
        },
        {
            id: 3,
            nome: 'Produto 03',
            preco: 1000.00,
            imagem: fone3,
            descricao: 'Produto 03 Produto 03 Produto 03 Produto 03',
            parcelas: 6,
            valorParcela: 166.67
        },
        {
            id: 4,
            nome: 'Produto 04',
            preco: 1000.00,
            imagem: fone4,
            descricao: 'Produto 04 Produto 04 Produto 04 Produto 04',
            parcelas: 6,
            valorParcela: 166.67
        },
    ]);


    return (
        <>
            <Container>
                <H1>Smartphones</H1>
            </Container>

            <ContainerProduto>
                {produto.map((item) => (
                    <DivProduto key={item.id}>
                        <ImagemProduto src={item.imagem} alt={item.nome} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <H2>{item.nome}</H2>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                                <P2>R$ {item.preco}</P2>
                                <P>R$ {item.preco}</P>
                            </div>
                            <Button onClick={() => navigate('/Produto')}>Visualizar</Button>
                            <P3>Em até {item.parcelas}x de <span>R$ {item.valorParcela}</span> sem juros</P3>
                        </div>
                    </DivProduto>
                ))}
            </ContainerProduto>
        </>

    );
}

export default CatalogoCell;