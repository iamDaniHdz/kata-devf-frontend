import { useState, useEffect } from 'react'
import axios from 'axios'
import { Pokemon } from './Pokemon';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css'

const ListPokemon = () => {

    const [pokemones, setPokemones] = useState([]);
    const [resultados, setResultados] = useState([]);
  
    useEffect(()=>{
      axios.get(`https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json`)
        .then(function (response) {
          const pokeData = response.data;
          setPokemones(pokeData);
          setResultados(pokeData);
        })
        .catch(function (error) {
          console.log(error);
        })
    },[]);
  
    const buscar = (event) =>{
      let q = event.currentTarget.value;
      
      let resultado = pokemones.filter((pokemon)=>{
        return pokemon.name.toLowerCase().includes(q.toLowerCase());
      });
      setResultados(resultado);
    }
  
    const searchByType = (type) =>{
      let resultado = pokemones.filter((pokemon)=>{
        return (
          pokemon.type.includes(type)
        )
      });
      setResultados(resultado);
    }

    const OffcanvasExample = () => {
        return (
          <>
            {['xl'].map((expand) => (
              <Navbar key={expand} bg="danger" expand={expand} className="mb-3 p-3 text-light">
                <Container fluid>
                  <Navbar.Brand href="#">
                    <img style={{ width: "10rem"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt=""/>
                    </Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton className='bg-danger'>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <h3 className='text-light'>Tipos</h3>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='bg-danger'>
                      <Nav className="justify-content-end flex-grow-1 pe-3 links ">
                        <Nav.Link onClick={() => searchByType("electric")}>Electric</Nav.Link>
                        <Nav.Link onClick={() => searchByType("normal")}>Normal</Nav.Link>
                        <Nav.Link onClick={() => searchByType("water")}>Water</Nav.Link>
                        <Nav.Link onClick={() => searchByType("ice")}>Ice</Nav.Link>
                        <Nav.Link onClick={() => searchByType("rock")}>Rock</Nav.Link>
                        <Nav.Link onClick={() => searchByType("flying")}>Flying</Nav.Link>
                        <Nav.Link onClick={() => searchByType("grass")}>Grass</Nav.Link>
                        <Nav.Link onClick={() => searchByType("psychic")}>Psychic</Nav.Link>
                        <Nav.Link onClick={() => searchByType("ghost")}>Ghost</Nav.Link>
                        <Nav.Link onClick={() => searchByType("bug")}>Bug</Nav.Link>
                        <Nav.Link onClick={() => searchByType("poison")}>Poison</Nav.Link>
                        <Nav.Link onClick={() => searchByType("ground")}>Ground</Nav.Link>
                        <Nav.Link onClick={() => searchByType("dragon")}>Dragon</Nav.Link>
                        <Nav.Link onClick={() => searchByType("steel")}>Steel</Nav.Link>
                        <Nav.Link onClick={() => searchByType("fighting")}>Fighting</Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </>
        );
      }

    return (
      <div className="App">
        <OffcanvasExample></OffcanvasExample>
        <input
          type="text"
          id="valor"
          placeholder="Buscar Pokémon"
          onChange={buscar}
          autocomplete="off"
          className="w-100 form-control mb-3 container text-dark"
        />

        <div className="bg-transparent d-flex flex-row flex-wrap justify-content-evenly container">
          {resultados.map((pokemon) => {
            return (
              <>
                <Pokemon
                  key={pokemon.id}
                  abilities={pokemon.abilities}
                  number={pokemon.number}
                  id={pokemon.id}
                  src={pokemon.ThumbnailImage}
                  name={pokemon.name}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  type={pokemon.type}
                  weakness={pokemon.weakness}
                ></Pokemon>
              </>
            );
          })}
        </div>
        <footer className="text-light fixed-bottom">
          <div className="bg-danger m-0 text-center p-1 d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <a
              href="https://iamdanihdz.github.io/kata-devf-frontend/"
              target={"_blank"}
              className="p-2 text-light link-warning footer text-decoration-none fw-light"
            >
              iamDaniHdz
            </a>
            |
            <a
              href="https://github.com/iamDaniHdz/kata-devf-frontend"
              target={"_blank"}
              className="p-2 text-light link-warning footer text-decoration-none fw-light"
            >
              Pokédex
            </a>
          </div>
        </footer>
      </div>
    );
    

}
  
export { ListPokemon }
