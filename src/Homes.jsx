import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { DELETE_HOME, UPDATE_HOME } from "./GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const Homes = ({ homes, deletedItem, setHomes }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //useMutation for DELETE /remove Home
  const [deleteHome] = useMutation(DELETE_HOME);
  //useMutation for UPDATE /Update Homes
  const [updateItem] = useMutation(UPDATE_HOME);
  const [id, setId] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateContact, setUpdateContact] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");

  const deleteHandler = async (id) => {
    await deleteHome({
      variables: {
        id: id,
      },
    });
    deletedItem(id);
  };

  const confirmedUpdate = async (e) => {
    e.preventDefault();
    await updateItem({
      variables: {
        id: id,
        contact: updateContact,
        name: updateName,
        location: updateLocation,
      },
    });

    let updatedHomeDetails = [...homes];
    const index = homes.findIndex((data) => id === data.id);

    let temp = {
      id: id,
      location: updateLocation,
      contact: updateContact,
      name: updateName,
    };

    updatedHomeDetails[index] = temp;
    setHomes(updatedHomeDetails);

    setId("");
    setUpdateContact("");
    setUpdateLocation("");
    setUpdateName("");

    handleClose();
  };
  const updateHandler = (id) => {
    const index = homes.findIndex((data) => id === data.id);
    const toUpdateHome = homes[index];
    setId(id);
    setUpdateName(toUpdateHome.name);
    setUpdateLocation(toUpdateHome.location);
    setUpdateContact(toUpdateHome.contact);
    handleShow();
  };
  return (
    <>
      {homes.map(({ id, contact, name, location }) => (
        //   return (
        <Card style={{ width: "80%", height: "20%" }} key={id}>
          <Card.Body
            style={{
              padding: "0px",
            }}
          >
            <Row>
              <Col xs={0} md={2} lg={3} style={{ padding: "0px" }}>
                <Card.Img
                  variant="top"
                  src="/images/house-placeholder.jpeg"
                  style={{ width: "200px" }}
                />
              </Col>
              <Col xs={12} md={9} lg={9}>
                <div style={{ padding: "20px" }}>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{location}</Card.Text>
                  <Card.Text>{contact}</Card.Text>
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      left: "80%",
                      bottom: "0%",
                    }}
                  >
                    <Button
                      variant="primary"
                      size="sm"
                      style={{ margin: "1%" }}
                      onClick={() => {
                        updateHandler(id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      style={{ margin: "1%" }}
                      onClick={() => {
                        deleteHandler(id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Home Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={confirmedUpdate}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Location
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  value={updateLocation}
                  onChange={(e) => setUpdateLocation(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Contact
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Contact"
                  value={updateContact}
                  onChange={(e) => setUpdateContact(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" variant="primary">
                  Update Details
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Homes;
