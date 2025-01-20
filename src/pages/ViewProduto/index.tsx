import { useState } from "react";
import { cartao, dinheiro, iconInfo, img01, img02, img03, img04, infoTecnica } from "../../assets";
import NavBar from "../NavBar";
import { Container, DivProduto, PagamentoAvista, PagamentoParcelado, H2, ImagemProduto, ImagemSeletor, P, P1, P3, Button, P2, ContainerProduto, InformacoesTecnicas, DivInforesTecnicas, DivImagem, DivItens, PInfo, H3Info, PInfo02, Imagem } from "./styles";

function ViewProduto() {
  const [select, setSelect] = useState([1, 0, 0, 0]);
  const [produto] = useState({
    nome: '',
    descricao: '',
    preco: 0,
    parcelas: 0,
    valorParcela: 0,
    imagens: [
      {
        imagem: img01,
      },
      {
        imagem: img02,
      },
      {
        imagem: img03,
      },
      {
        imagem: img04,
      }

    ]
  });
  const [imagem, setImagem] = useState(0);

  function handleSelectImage(imagem: number) {
    if (imagem === 1) {
      setSelect([1, 0, 0, 0]);
      setImagem(0);
    }
    if (imagem === 2) {
      setSelect([0, 1, 0, 0]);
      setImagem(1);
    }
    if (imagem === 3) {
      setSelect([0, 0, 1, 0]);
      setImagem(2);
    }
    if (imagem === 4) {
      setSelect([0, 0, 0, 1]);
      setImagem(3);
    }
  }

  return (
    <>
      <NavBar />
      <Container>
        <ContainerProduto>
          <ImagemProduto>
            <DivItens>
              <ImagemSeletor src={produto?.imagens[0].imagem} select={select[0].toString()} onClick={() => handleSelectImage(1)} />
              <ImagemSeletor src={produto?.imagens[1].imagem} select={select[1].toString()} onClick={() => handleSelectImage(2)} />
              <ImagemSeletor src={produto?.imagens[2].imagem} select={select[2].toString()} onClick={() => handleSelectImage(3)} />
              <ImagemSeletor src={produto?.imagens[3].imagem} select={select[3].toString()} onClick={() => handleSelectImage(4)} />
            </DivItens>
            <DivImagem>
              <Imagem src={produto?.imagens[imagem].imagem} alt="Produto 01"/>
            </DivImagem>
          </ImagemProduto>
          <DivProduto>
            <H2>Apple iPhone 13 (128 GB) - Estelar</H2>
            <P>Em estoque</P>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '20px' }}>
              <P2>R$ 7.599,00</P2>
              <P1>R$ 7.599,00</P1>
            </div>

            <P3>Metodos de pagamento</P3>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <PagamentoAvista>
                <img src={dinheiro} alt="Dinheiro" style={{ height: '30px', maxWidth: '30px', marginRight: '10px' }} />
                <P3>À vista</P3>
              </PagamentoAvista>
              <PagamentoParcelado>
                <img src={cartao} alt="Cartão" style={{ height: '30px', maxWidth: '30px', marginRight: '10px' }} />
                <P3>Parcelado</P3>
              </PagamentoParcelado>
            </div>
            <Button>Falar com o vendedor</Button>
          </DivProduto>
        </ContainerProduto>
        <div style={{ border: '1px solid rgb(196, 196, 196)', width: '100%', height: '0.5px', marginTop: '20px' }}></div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '20px', alignItems: 'center' }}>
          <img src={iconInfo} alt="Elemento 03" style={{ height: '35px', width: '35px' }} />
          <h2 style={{ fontSize: '24px', color: '#000000', fontFamily: 'Nunito', margin: '0' }}
          >Descrição do produto</h2></div>
        <PInfo>
          Descubra a combinação perfeita de design, desempenho e inovação com o iPhone 13. Com acabamento na elegante cor Estelar,
          este smartphone oferece um visual sofisticado e moderno.<br /><br />

          🔹 Armazenamento de 128 GB: Espaço de sobra para guardar suas fotos, vídeos e aplicativos sem preocupações.<br />
          🔹 Tela Super Retina XDR de 6,1": Cores vivas, brilho impressionante e uma experiência visual imersiva.<br />
          🔹 Chip A15 Bionic: Desempenho ultrarrápido e eficiente, perfeito para multitarefas e jogos exigentes.<br />
          🔹 Câmera avançada: Capture momentos incríveis com o sistema de câmera dupla, incluindo Modo Noturno e gravação em 4K.<br />
          🔹 Bateria de longa duração: Fique conectado o dia todo com maior autonomia.<br />
          🔹 Resistência à água e poeira (IP68): Perfeito para acompanhar sua rotina sem preocupações.<br /><br />

          Ideal para quem busca potência, qualidade e estilo em um só dispositivo. Garanta o seu iPhone 13 (128 GB) -
          Estelar e eleve sua experiência tecnológica a outro nível!</PInfo>

        <div style={{ border: '1px solid rgb(196, 196, 196)', width: '100%', height: '0.5px', marginTop: '20px' }}></div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '20px', alignItems: 'center' }}>
          <img src={infoTecnica} alt="Elemento 03" style={{ height: '35px', width: '35px' }} />
          <h2 style={{ fontSize: '24px', color: '#000000', fontFamily: 'Nunito', margin: '0' }}
          >Informações tecnicas</h2></div>

        <DivInforesTecnicas>
          <InformacoesTecnicas>
            <H3Info >Características:</H3Info>
            <PInfo02 >
              - Velocidade de rotação: 800 a 2000 RPM (dependendo do modelo)<br/>
              - Nível de ruído: 18 a 32 dBA<br/>
              - Material: Plástico de alta qualidade, lâminas de ventilador otimizadas
            </PInfo02>
          </InformacoesTecnicas>
          <InformacoesTecnicas>
            <H3Info >Características:</H3Info>
            <PInfo02 >
              - Velocidade de rotação: 800 a 2000 RPM (dependendo do modelo)<br/>
              - Nível de ruído: 18 a 32 dBA<br/>
              - Material: Plástico de alta qualidade, lâminas de ventilador otimizadas
            </PInfo02>
          </InformacoesTecnicas>
          <InformacoesTecnicas>
            <H3Info >Características:</H3Info>
            <PInfo02 >
              - Velocidade de rotação: 800 a 2000 RPM (dependendo do modelo)<br/>
              - Nível de ruído: 18 a 32 dBA<br/>
              - Material: Plástico de alta qualidade, lâminas de ventilador otimizadas
            </PInfo02>
          </InformacoesTecnicas>
          <InformacoesTecnicas>
            <H3Info >Características:</H3Info>
            <PInfo02 >
              - Velocidade de rotação: 800 a 2000 RPM (dependendo do modelo)<br/>
              - Nível de ruído: 18 a 32 dBA<br/>
              - Material: Plástico de alta qualidade, lâminas de ventilador otimizadas
            </PInfo02>
          </InformacoesTecnicas>
          <InformacoesTecnicas>
            <H3Info >Características:</H3Info>
            <PInfo02 >
              - Velocidade de rotação: 800 a 2000 RPM (dependendo do modelo)<br/>
              - Nível de ruído: 18 a 32 dBA<br/>
              - Material: Plástico de alta qualidade, lâminas de ventilador otimizadas
            </PInfo02>
          </InformacoesTecnicas>
        </DivInforesTecnicas>
      </Container>
    </>
  );
}

export default ViewProduto;