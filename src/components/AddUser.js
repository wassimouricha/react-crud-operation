import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link,useHistory } from 'react-router-dom';
import {  
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

export const AddUser = () => {
    const [name, setName]= useState('');
    const {addUser} = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () =>{
        const newUser = {
            id: 4,
            name
        }
        addUser(newUser);
        history.push('/');
    }

    const onChange = (e) => {
        setName(e.target.value);
    }
 
  return (
      <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label>Nom</Label>
              <Input type='text'  value={name} onChange={onChange} placeholder='Entrez voter nom'></Input>
          </FormGroup>
          <Button type='Submit' >Envoyer</Button>
          <Link to="/" className="btn btn-danger ms-auto">Annuler</Link>
      </Form>
  )
};
