import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, Button, InputGroup, FormControl } from "react-bootstrap"
import { addTask, toggle } from "../JS/actions/actionTask";

const AddItem = () => {
  const [myInput, setMyInput] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    if (myInput) {
      dispatch(addTask({ text: myInput, isDone: false, id: Date.now() }));
      setMyInput("");
    } else {
      alert("non");
    }
  };

  return (
    <Card bg="primary">
      <Card.Body>
        <h1 className={"text-white"}>To-Do-App !</h1>

        <Form>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setMyInput(e.target.value)}
                value={myInput}
              />
              <InputGroup.Append>
                <Button variant="success" onClick={add}>
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <Button variant="info" className="mr-3" onClick={()=>dispatch(toggle())} >
          isDone
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddItem;