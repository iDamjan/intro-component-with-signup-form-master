import React, { useEffect, useState } from "react";
import {
  FormContainer,
  Input,
  ButtonSubmit,
  Container,
  ButtonTry,
  } from "./formDetails.styled";

const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target; // e.target.name and e.target.value
    setFormValues({ ...formValues, [name]: value });
    // setFormValues({...formValues,[e.target]:e.target.value});
  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsValid(true);
  };

 

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "first name is required";
    }
    if (!values.lastName) {
      errors.lastName = "last name is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    if (!values.email) {
      errors.email = "This is not an email";
    }
    return errors;
  };
  const resetFormHandler = () => {
    setFormErrors({});
  };
  return (
    <>
      <Container>
        <ButtonTry onClick = {resetFormHandler} className="free-try">
          {" "}
          
          <span>Try it free 7 days</span>Then $20/mo. thereafter
        </ButtonTry>
        <FormContainer onSubmit={onSubmitHandler}>
          <Input
            onChange={onChangeHandler}
            type="text"
            placeholder="First Name"
            name="firstName"
            style={{ border: formErrors.firstName ? "2px solid red" : "" }}
          />
          <p>{formErrors.firstName}</p>
          <Input
            onChange={onChangeHandler}
            type="text"
            placeholder="Last Name"
            name="lastName"
            style={{ border: formErrors.lastName ? "2px solid red" : "" }}
          ></Input>
          <p>{formErrors.lastName}</p>
          <Input
            onChange={onChangeHandler}
            type="text"
            placeholder="Email Address"
            name="email"
            style={{ border: formErrors.email ? "2px solid red" : "" }}
          ></Input>
          <p>{formErrors.email}</p>
          <Input
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            name="password"
            style={{ border: formErrors.password ? "2px solid red" : "" }}
          ></Input>
          <p>{formErrors.password}</p>
          <ButtonSubmit type="submit">CLAIM YOUR FREE TRIAL</ButtonSubmit>
          <label htmlFor="ButtonSubmit">
            By clicking the button you are agreeing to our{" "}
            <span>Terms and Service</span>
          </label>
        </FormContainer>
      </Container>
    </>
  );
};

export default Form;
