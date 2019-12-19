import React from 'react'
import styled from 'styled-components/macro'

export default function Form() {
  return (
    <FormWrapper>
      <FormTitle>Orte hinzufügen</FormTitle>
      <FormQuestion>Name</FormQuestion>
      <FormInput
        name="name"
        placeholder="Füge hier den Namen des Ortes ein"
        required="name"
      ></FormInput>
      <FormQuestion>Straße</FormQuestion>
      <FormInput
        name="street"
        placeholder="Straße"
        required="street"
      ></FormInput>
      <FormQuestion>Hausnummer</FormQuestion>
      <FormInput
        name="number"
        placeholder="Hausnummer"
        required="number"
      ></FormInput>
      <FormQuestion>Postleitzahl</FormQuestion>
      <FormInput
        name="zip_code"
        placeholder="PLZ"
        required="zip_code"
      ></FormInput>
      <FormQuestion>Stadt</FormQuestion>
      <FormInput name="city" placeholder="Stadt" required="city"></FormInput>
      <FormQuestion>Beschreibung</FormQuestion>
      <FormTextarea
        name="description"
        rows="4"
        placeholder="Bitte beschreibe den Ort. Welche Art von Ort ist es? Wem kommen die Spenden zugute?"
        required="description"
      ></FormTextarea>
      <FormQuestion>Telefon</FormQuestion>
      <FormInput name="phone" placeholder="Telefonnummer"></FormInput>
      <FormQuestion>Email</FormQuestion>
      <FormInput name="mail" placeholder="E-Mail-Adresse"></FormInput>
      <FormQuestion>Website</FormQuestion>
      <FormInput name="websiteURL" placeholder="Website"></FormInput>
      <FormButton>Ort hinzufügen</FormButton>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
`
const FormTitle = styled.h2`
  font-family: 'Noto Serif JP';
  color: #b77373;
  text-transform: uppercase;
  font-size: 1.4rem;
  margin: 0;
`
const FormQuestion = styled.p`
  font-family: 'Julius Sans One';
  color: #b77373;
  margin: 0;
  padding: 0;
`

const FormInput = styled.input`
  -webkit-appearance: none;
  margin: 0px;
  border: 1px solid #6c6c63;
  border-radius: 0;
  padding: 4px;
  background: #f7f7f7;
  color: #6c6c63;
  font-family: 'Noto Serif JP';
  font-size: 0.8rem;
`

const FormTextarea = styled.textarea`
  -webkit-appearance: none;
  margin: 0px;
  border: 1px solid #6c6c63;
  border-radius: 0;
  padding: 4px;
  background: #f7f7f7;
  color: #6c6c63;
  font-family: 'Noto Serif JP';
  font-size: 0.8rem;
`
const FormButton = styled.button`
  -webkit-appearance: none;
  border-radius: none;
  border: 1px solid #6c6c63;
  background: #f7f7f7;
  font-family: 'Noto Serif JP';
  color: #b77373;
  text-transform: uppercase;
  margin: 10px 0px 0px 0px;
`
