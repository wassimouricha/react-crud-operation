import React from 'react';
import { Link } from 'react-router-dom';
import {  
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";


export const EditUser = () => {
  return (
    <Form>
    <FormGroup>
        <Label>Nom</Label>
        <Input type='text' placeholder='Entrez voter nom'></Input>
    </FormGroup>
    <Button type='Submit' >Editer le Nom</Button>
    <Link to="/" className="btn btn-danger  ms-auto">Annuler</Link>
</Form>
  );
};
