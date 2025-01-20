import { useState } from "react";
import { certificado, chaveInglesa, configuracao, diagnostico, escudo2, ferramentas, preventiva, suporteRemoto, suporteTecnico, vendas } from "../../assets";
import { Button, Container, Container2, DivNotificacao, H2, H3, ImgNotificacao } from "./styles";

function InfoLoja() {
    const [showMore, setShowMore] = useState(false);
  return (
    <Container>
      <H3>SERVIÇOS DE ASSISTÊNCIA TÉCNICA</H3>
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
            {window.innerWidth > 500 || showMore ? (
                <>
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
                </>
            ):(
                <>
                <Button onClick={() => setShowMore(true)}>Ver mais</Button>
                </>
            )}
            {showMore && <Button onClick={() => setShowMore(false)}>Ver menos</Button>}
        </Container2>
    </Container>
  );
}

export default InfoLoja;