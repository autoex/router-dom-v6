import React from 'react'
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const FormLayout = ({submitHandler, placeholder, btnText, name}) => {
    return (
        <Form onSubmit={submitHandler}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder={placeholder}
              aria-label={placeholder}
              aria-describedby="basic-addon2"
              name={name}
            />
            <Button variant="outline-secondary" type="submit">
              {btnText}
            </Button>
          </InputGroup>
        </Form>
    )
}

export default FormLayout
