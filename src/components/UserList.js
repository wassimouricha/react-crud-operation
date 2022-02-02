import React from 'react';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button

} from 'reactstrap';

export const UserList = () => {
  return (
      <ListGroup className='mt-4'>
          <ListGroupItem className='d-flex'> 
              <strong>Utilisateur un </strong>
          <div className='ms-auto'>
              <Link className="btn btn-warning mr-1" to="/edit/1"> Editer </Link>
              <Button color='danger'>Supprimer</Button>
          </div>  
          
          </ListGroupItem>
          <ListGroupItem className='d-flex'> 
              <strong>Utilisateur deux </strong>
          <div className=' ms-auto'>
              <Link className="btn btn-warning mr-1" to="/edit/2"> Editer </Link>
              <Button color='danger'>Supprimer</Button>
          </div>  
          
          </ListGroupItem>
       
       
      </ListGroup>
    );
};
