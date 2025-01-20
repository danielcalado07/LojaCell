import { useNavigate } from "react-router-dom";
import { fone, fone2, fone3, fone4, img01, img02, img03, img04 } from "../assets";
import { Button, Container, ContainerProduto, DivDescricao, DivProduto, H1, H2, ImagemProduto, P, P2, P3 } from "./styles";
import { useState } from "react";

function CatalogoAcessorios() {
    const navigate = useNavigate();

    const [produto] = useState([
        {
            id: 1,
            nome: 'Produto 01 Produto 01 Produto 01 Produto 01',
            preco: 1000.00,
            imagem: fone,
            descricao: 'Produto 01 Produto 01 Produto 01 Produto 01',
            parcelas: 10,
            valorParcela: 1166.67
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
            parcelas: 10,
            valorParcela: 1166.67
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
                <H1>Acessórios</H1>
            </Container>

            <ContainerProduto>
                {produto.map((item) => (
                    <DivProduto key={item.id}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '30%' }}>
                            <ImagemProduto src={item.imagem} alt={item.nome} />
                        </div>
                        <DivDescricao>
                            <H2>{item.nome}</H2>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                                <P2>R$ {item.preco}</P2>
                                <P>R$ {item.preco}</P>
                            </div>
                            <Button onClick={() => navigate('/Produto')}>Visualizar</Button>
                            <P3>Em até {item.parcelas}x de <span>R$ {item.valorParcela}</span> sem juros</P3>
                        </DivDescricao>
                    </DivProduto>
                ))}
            </ContainerProduto>
        </>

    );
}

export default CatalogoAcessorios;