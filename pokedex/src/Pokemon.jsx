import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './App.css'

const Pokemon = ({ id, name, src, number, abilities, height, weight, type, weakness}) => {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Datos de {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-danger rounded-bottom bg-gradient">
          <div className="d-block d-lg-flex align-items-center p-2 justify-content-evenly">
            <div
              className="d-flex flex-column rounded"
              style={{ backgroundColor: "#fee8b7" }}
            >
              <h4 className="text-center bg-light p-2 m-3 mb-2 rounded">
                {name}
              </h4>
              <img
                src={src}
                alt=""
                className="img-fluid bg-light p-3 m-3"
                style={{ borderRadius: "50%" }}
              />
              <h4 className="text-center bg-light p-2 m-5 mt-2 mb-3 rounded">
                #{number}
              </h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="bg-light m-2 p-2 rounded">
                <h4 className="text-center">Habilidades</h4>
                <div className="d-flex flex-column flex-lg-row">
                  {abilities.map((a) => {
                    return (
                      <h5
                        className="bg-info m-2 text-center p-1 rounded"
                        style={{ width: "8rem" }}
                      >
                        {a}
                      </h5>
                    );
                  })}
                </div>
              </div>

              <div className="d-block d-lg-flex text-center rounded">
                <div className="bg-light m-3 p-2 rounded">
                  <h4>Altura</h4>
                  <h5
                    className="bg-primary m-2 text-center p-2 rounded"
                    style={{ width: "8rem" }}
                  >
                    {height} m
                  </h5>
                </div>
                <div className="bg-light m-3 p-2 rounded">
                  <h4>Peso</h4>
                  <h5
                    className="bg-success m-2 text-center p-2 rounded"
                    style={{ width: "8rem" }}
                  >
                    {weight} kg
                  </h5>
                </div>
                <div className="bg-light m-3 p-2 rounded">
                  <h4>Tipo</h4>
                  <div>
                    {type.map((a) => {
                      return (
                        <h5
                          className="bg-secondary m-2 text-center p-2 rounded"
                          style={{ width: "8rem" }}
                        >
                          {a}
                        </h5>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-light m-2 p-2 rounded">
                <h4 className="text-center">Debilidades</h4>
                <div className="d-flex flex-column justify-content-center flex-lg-row flex-wrap">
                  {weakness.map((a) => {
                    return (
                      <>
                        <h5
                          className="bg-warning m-2 text-center p-1 rounded"
                          style={{ width: "8rem" }}
                        >
                          {a}
                        </h5>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  
  return (
    <>
    <Card key={id} style={{ width: "15rem", cursor: "pointer", backgroundColor: "#fee8b7" }} onClick={() => setModalShow(true)} className= "p-4 mb-4 shadow ">
      <Card.Img variant="top" src={src} style={{ borderRadius: "50%"}} className="bg-light p-4"/>
      <Card.Body>
        <Card.Title className='text-center text-dark'><h4>{name}</h4></Card.Title>
        <Card.Text className='text-center mt-3'>
            <div className='bg-light rounded-pill text-dark'>
             <h5>#{number}</h5>
            </div>
        </Card.Text>
        </Card.Body>
    </Card>
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    </>
  );
};

export {Pokemon};

