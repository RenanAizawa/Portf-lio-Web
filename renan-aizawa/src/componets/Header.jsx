import Nav from 'react-bootstrap/Nav';

function Header () {
  return (
    <header className="">
        <div>
            <h3>
              Portifolio Web
            </h3>            
        </div>
        <Nav>
            <Nav.Item>
                <Nav.Link>Home</Nav.Link>
            </Nav.Item>
        </Nav>
    </header>
  );
}

export default Header;