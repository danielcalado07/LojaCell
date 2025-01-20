import { Container, ImagemIcon, ImagemLogo, TextoBar } from './styles';
import { instagram, logoNeutra, whatsapp } from '../../assets';

function NavBar() {
  return (
    <Container>
      <ImagemLogo src={logoNeutra} alt="Logo Marca" />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ImagemIcon src={whatsapp} alt="Whatsapp" />
        <TextoBar>{'(99) 99999-9999'}</TextoBar>

        <a style={{ color: 'white', margin: '0 20px' }}>|</a>

        <ImagemIcon src={instagram} alt="Instagram" />
        <TextoBar>{'@seu_usuario'}</TextoBar>
      </div>
    </Container>
  );
} 

export default NavBar;