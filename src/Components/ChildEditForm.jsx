import React, { useState } from 'react'
import {Modal} from 'react-bootstrap' 
import { useStaten,useContext } from 'react'
import { context } from '../Pages/Home';
import parents from '../Data/Parents.json'
const ChildEditForm = () => {

  const { childrenTable, setChildrenTable,editModal,setEditModal,indexOfEditDelete } = useContext(context);

  // childToEdit est un objet qui contient les informations de l'enfant qui est en train d'être modifié
  const [childToEdit,setChildToEdit] = useState(childrenTable[indexOfEditDelete])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildToEdit({...childToEdit,[name]:value})
  };

  // handleSubmit est une fonction qui permet de valider les données de l'enfant et de les ajouter au tableau childrenTable  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateChildrenTable = [...childrenTable]
    updateChildrenTable[indexOfEditDelete] = childToEdit
    setChildrenTable(updateChildrenTable)
    setEditModal(false)
    }  

  

  return (
<div  >
  <Modal show={editModal} onHide={()=> setEditModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Child</Modal.Title>
    </Modal.Header>

    <Modal.Body>

    
    <form className='mx-auto '  onSubmit={handleSubmit}>

<div className='col-md-12 mx-auto '>

  <label htmlFor='name ' className='form-label ms-2'>
  Nom et Prénom
  </label>
  <div className='input-group col-12'>
    <input
      type='text'
      className='form-control ms-1'
      id='name' name='name'
      value={childToEdit.name}
      onChange={handleChange}
 
      placeholder='Entrer Le Nom' required />

    <input
      type='text'
      className='form-control ms-1'
      id='firstname' name='firstname'
      value={childToEdit.firstname}
      onChange={handleChange}
 
      placeholder='Entrer Le Prénom' required />
  </div>

  <label htmlFor='birthdate' className='form-label mt-3  ms-2'>
    Date Et Lieu De Naissance
  </label>
  <div className='input-group col-12'>
    <input
      type='date'
      className='form-control ms-1'
      id='birthdate' name='birthdate'
      value={childToEdit.birthdate}
      onChange={handleChange}
 
      placeholder='Entrer La Date De Naissance' required />

    <input
      type='text'
      className='form-control ms-1'
      id='birthplace' name='birthplace'
      value={childToEdit.birthplace}
      onChange={handleChange}
      placeholder='Entrer Le Lieu De Naissance' required />
  </div>

  <label htmlFor='matricule' className='form-label mt-3   ms-2'>
    Matricule
  </label>
  <input
    type='text'
    className='form-control'
    id='matricule'
    name='matricule'
    value={childToEdit.matricule}
    onChange={handleChange}
 
    placeholder='Entrer Le Matricule'
    required
  />

  <label htmlFor='photo' className='form-label    ms-2'>
    Photo
  </label>
  <input
    type='file'
    className='form-control'
    id='photo'
    name='photo'
    placeholder='Ajoouter Une Photo'
    onChange={handleChange}
  
     
  />
  {childToEdit.photo && (
  <p>Selected file: {childToEdit.photo}</p>
)}

  <label htmlFor='parent' className='form-label mt-3  ms-2'>
    Parent
  </label>

  <select className='form-select' id='parent' name='parent' value={childToEdit.parent}  onChange={handleChange} required>
      <option  >Choisir </option>
      {parents.map((parent, index) => (
              <option key={index} value={parent}>{parent}</option>
            ))} 


  </select>

  <div className='col-12 text-center mt-2 mb-3 d-flex ms-auto'>
    <button className='btn btn-submit' type='submit' onclick={handleSubmit}> 
      Save Changes
    </button>
    <button className='btn ms-3'  onclick={()=> setEditModal(false) }>
      Close
    </button>
  </div>

</div>
</form>







    </Modal.Body>
    </Modal>
 
</div>
  )
}

export default ChildEditForm