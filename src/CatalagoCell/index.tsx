import { useNavigate } from "react-router-dom";
import { element03, fone, fone2, fone3, fone4 } from "../assets";
import { Button, Container, ContainerProduto, DivProduto, H1, H2, ImagemProduto, P, P2, P3 } from "./styles";

function CatalogoCell() {
    const navigate = useNavigate();
    
    return (
        <>
            <Container>
                <H1>Smartphones</H1>
            </Container>

            <ContainerProduto>
                <DivProduto>
                    <ImagemProduto src={fone} alt="Produto 01" />
                    <H2>Produto 01 Produto 01 Produto 01 Produto 01</H2>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                        <P2>R$ 1000,00</P2>
                        <P>R$ 1000,00</P>
                    </div>
                    <Button onClick={() => navigate('/Produto')}>Visualizar</Button>
                    <P3>Em até 6x de <span>R$ 166,67</span> sem juros</P3>
                </DivProduto>
                <DivProduto>
                    <ImagemProduto src={fone2} alt="Produto 01" />
                    <H2>Produto 01 Produto 01</H2>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                        <P2>R$ 1000,00</P2>
                        <P>R$ 1000,00</P>
                    </div>
                    <Button>Visualizar</Button>
                    <P3>Em até 6x de <span>R$ 166,67</span> sem juros</P3>
                </DivProduto>
                <DivProduto>
                    <ImagemProduto src={fone3} alt="Produto 01" />
                    <H2>Produto 01 Produto 01</H2>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                        <P2>R$ 1000,00</P2>
                        <P>R$ 1000,00</P>
                    </div>
                    <Button>Visualizar</Button>
                    <P3>Em até 6x de <span>R$ 166,67</span> sem juros</P3>
                </DivProduto>
                <DivProduto>
                    <ImagemProduto src={fone4} alt="Produto 01" />
                    <H2>Produto 01 Produto 01</H2>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                        <P2>R$ 1000,00</P2>
                        <P>R$ 1000,00</P>
                    </div>
                    <Button>Visualizar</Button>
                    <P3>Em até 6x de <span>R$ 166,67</span> sem juros</P3>
                </DivProduto>
                <DivProduto>
                    <ImagemProduto src={element03} alt="Produto 01" />
                    <H2>Produto 01 Produto 01</H2>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                        <P2>R$ 1000,00</P2>
                        <P>R$ 1000,00</P>
                    </div>
                    <Button>Visualizar</Button>
                    <P3>Em até 6x de <span>R$ 166,67</span> sem juros</P3>
                </DivProduto>
            </ContainerProduto>
        </>

    );
}

export default CatalogoCell;