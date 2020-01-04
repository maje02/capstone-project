import React from 'react'
import styled from 'styled-components/macro'

export default function Form() {
  return (
    <FormWrapper>
      <FormTitle>Neuer Make it stay-Ort</FormTitle>
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
      <FormQuestion>Öffnungszeiten</FormQuestion>
      <FormInput name="opening_times" placeholder="Öffnungszeiten"></FormInput>
      <FormQuestion>Was kann hier abgegeben werden?</FormQuestion>
      <FormSelect name="categories[]" multiple="multiple" size="3">
        {/* <option value="">--Kategorien auswählen--</option> */}
        <option value="Bücher">Bücher</option>
        <option value="Elektronik">Elektronik</option>
        <option value="Fahrräder">Fahrräder</option>
        <option value="Haushaltsgegenstände">Haushaltsgegenstände</option>
        <option value="Heimwerkerbedarf">Heimwerkerbedarf</option>
        <option value="Kleidung">Kleidung</option>
        <option value="Kunst">Kunst</option>
        <option value="Möbel">Möbel</option>
        <option value="Schlafsäcke">Schlafsäcke</option>
        <option value="Spielzeug">Spielzeug</option>
      </FormSelect>
      <FormButton>Ort hinzufügen</FormButton>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
const FormTitle = styled.h2`
  font-family: 'Noto Serif JP';
  color: #b77373;
  text-transform: uppercase;
  font-size: 1.4rem;
  margin: 0;
`
const FormQuestion = styled.label`
  align-self: start;
  font-family: 'Julius Sans One';
  color: #b77373;
  margin: 8px 0 0 0;
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
  min-height: 80px;
  background: #f7f7f7;
  color: #6c6c63;
  font-family: 'Noto Serif JP';
  font-size: 0.8rem;
`

const FormSelect = styled.select`
  -webkit-appearance: none;
  margin: 0px;
  border: 1px solid #6c6c63;
  border-radius: 0;
  padding: 4px;
  min-height: 80px;
  background: #f7f7f7;
  color: #6c6c63;
  font-family: 'Noto Serif JP';
  font-size: 0.8rem;
`

const FormButton = styled.button`
  -webkit-appearance: none;
  border-radius: none;
  border: 1px solid #6c6c63;
  background: #b77373;
  font-family: 'Noto Serif JP';
  font-size: 0.8rem;
  color: #f7f7f7;
  text-transform: uppercase;
  margin: 10px 0px 0px 0px;
  padding: 4px;
`
