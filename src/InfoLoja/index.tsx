import { certificado, chaveInglesa, configuracao, diagnostico, escudo2, ferramentas, preventiva, suporteRemoto, suporteTecnico, vendas } from "../assets";
import { Container, Container2, DivNotificacao, H2, ImgNotificacao } from "./styles";

function InfoLoja() {
  return (
    <Container>
      <h3 style={{ color: '#ffffff', marginTop: '100px'}}>SERVIÇOS DE ASSISTÊNCIA TÉCNICA</h3>
      <Container2>
            <DivNotificacao>
                <ImgNotificacao src={diagnostico} alt="icone de check"/>
                <H2>Diagnóstico e Avaliação</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={ferramentas} alt="icone de check"/>
                <H2>Manutenção e Reparos</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={chaveInglesa} alt="icone de check"/>
                <H2>Instalação de Equipamentos</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={preventiva} alt="icone de check"/>
                <H2>Manutenção Preventiva</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={suporteTecnico} alt="icone de check"/>
                <H2>Consultoria Técnica</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={suporteRemoto} alt="icone de check"/>
                <H2>Suporte Técnico Remoto</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={configuracao} alt="icone de check"/>
                <H2>Configuração e Otimização de Sistemas</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={vendas} alt="icone de check"/>
                <H2>Venda e Instalação de Peças e Acessórios</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={escudo2} alt="icone de check"/>
                <H2>Garantia e Pós-venda</H2>
            </DivNotificacao>
            <DivNotificacao>
                <ImgNotificacao src={certificado} alt="icone de check"/>
                <H2>Treinamento e Capacitação</H2>
            </DivNotificacao>
        </Container2>
    </Container>
  );
}

export default InfoLoja;