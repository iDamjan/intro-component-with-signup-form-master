import React from "react";
import {
  FormContainer,
  Input,
  ButtonSubmit,
  Container,
  ButtonTry,
  InvalidTag
} from "./formDetails.styled";

const Form = () => {
  return (
    <Container>
      <ButtonTry className="free-try">
        <span>Try it free 7 days</span>Then $20/mo. thereafter
      </ButtonTry>
      <FormContainer>
        <Input type="text" placeholder="Name" required></Input>
        <InvalidTag>First Name cannot be empty</InvalidTag>
        <Input type="text" placeholder="Last Name" required></Input>
        <InvalidTag>Last Name cannot be empty</InvalidTag>
        <Input type="text" placeholder="Email Address" required></Input>
        <InvalidTag>This doesn't look like an email</InvalidTag>
        <Input type="password" placeholder="Password" required></Input>
        <InvalidTag>Password cannot be empty</InvalidTag>
        <ButtonSubmit type="submit">CLAIM YOUR FREE TRIAL</ButtonSubmit>
        <label htmlFor="ButtonSubmit">
          By clicking the button you are agreeing to our{" "}
          <span>Terms and Service</span>
        </label>
      </FormContainer>
    </Container>
  );
};

export default Form;
