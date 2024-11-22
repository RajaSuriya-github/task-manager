import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary2" style={{backgroundColor:"#17b9cf"}}>
        {/* <Container> */}
          <Navbar.Brand className='p-2'>Task Management Application</Navbar.Brand>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default NavBar