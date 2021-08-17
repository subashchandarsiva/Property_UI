import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_HOME } from "./GraphQL/Mutations";
import { Form } from "react-bootstrap";

const CreateHome = ({ addedHome }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  //useMutation for POST /Create Homes
  const [AddHome, { error }] = useMutation(ADD_HOME);

  const addHome = async () => {
    const { data } = await AddHome({
      variables: {
        name: name,
        location: location,
        contact: contact,
      },
    });

    addedHome({
      id: data.AddHome.id,
      name: name,
      location: location,
      contact: contact,
    });

    if (error) {
      console.log(error);
    }
    setContact("");
    setLocation("");
    setName("");
  };
  return (
    <div style={{ paddingBottom: "10%" }}>
      <h2>Create a new Home</h2>
      <Form onSubmit={addHome} style={{ width: "50%" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            required
          />
        </Form.Group>

        <button> Create Home</button>
      </Form>
    </div>
  );
};

export default CreateHome;
