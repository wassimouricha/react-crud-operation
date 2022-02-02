import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button

} from 'reactstrap';

export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
  return (
      <ListGroup className='mt-4'>
          {users.map(user => (
                 <ListGroupItem className='d-flex'> 
                 <strong> {user.name}</strong>
             <div className='ms-auto'>
                 <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}> Editer </Link>
                 <Button onClick={() => removeUser(user.id)} color='danger'>Supprimer</Button>
             </div>  
             </ListGroupItem>
          ))}
         
      </ListGroup>
    );
};
