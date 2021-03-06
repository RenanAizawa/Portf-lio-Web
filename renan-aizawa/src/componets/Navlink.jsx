import Nav from 'react-bootstrap/Nav';

function Navlink() {
  return (
    <Nav
      as="ul"
      variant="pills"
      className="justify-content-end"
    >
            <Nav.Item  as="li">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item  as="li">
                <Nav.Link href="/tecnologias">Tecnologias</Nav.Link>
            </Nav.Item>
            <Nav.Item  as="li">
                <Nav.Link href="/projetos">Projetos</Nav.Link>
            </Nav.Item>
            <Nav.Item  as="li">
                <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav.Item>
        </Nav>
  );
}

export default Navlink;