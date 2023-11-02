import React, { useState, useContext } from 'react';
import { context } from '../Pages/Home';
import parents from '../Data/Parents.json';
import { Modal } from 'react-bootstrap';
import { errorHandling } from '../Utils/utils';

const ChildForm = () => {
  
  // deja expliqué dans Home.jsx
  const { childrenTable, setChildrenTable } = useContext(context); 
  
  // show est un boolean qui permet de savoir si le pop up  --affiche les erreurs de validation -- est ouvert ou non
  const [show, setShow] = useState(false); 
  
  // childAdded est un boolean qui permet de savoir si le pop up  --enfant ajouté avec succés -- est ouvert ou non
  const [childAdded, setChildAdded] = useState(false);

  // childAdded2 est un objet qui contient les informations de l'enfant qui vient d'être ajouté
  const [childAdded2, setChildAdded2] = useState({
    name: '',
    firstname: '',
    birthdate: '',
    matricule: '',
    birthplace: '',
    photo: '',
    parent: '',
  });

  // child est un objet qui contient les informations de l'enfant qui est en train d'être ajouté
  const [child, setChild] = useState({
    name: '',
    firstname: '',
    birthdate: '',
    matricule: '',
    birthplace: '',
    photo: '',
    parent: '',
  });

  // errors est un objet qui contient les erreurs de validation
  const [errors, setErrors] = useState({
    name: '',
    firstname: '',
    birthdate: '',
    matricule: '',
    birthplace: '',
    photo: '',
    parent: '',
  });

  // handleChange est une fonction qui permet de changer les valeurs de l'objet child
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChild({ ...child, [name]: value });
  };


  // handleSubmit est une fonction qui permet de valider les données de l'enfant et de les ajouter au tableau childrenTable
  // newErrors est un objet qui contient les erreurs de validation
  //errorHandling est une fonction qui permet de valider les données de l'enfant et de retourner les erreurs de validation
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = errorHandling(childrenTable, child);
    setErrors(newErrors);

    if (newErrors.status) {
      setChildrenTable([...childrenTable, child]);
      setChildAdded(true);
      setChildAdded2(child);
      setChild({
        name: '',
        firstname: '',
        birthdate: '',
        matricule: '',
        birthplace: '',
        photo: '',
        parent: '',
      });
    } else {
      setShow(true);
    }
  };

  
  return (
    <div className="childform titre col-lg-6 col-12 mx-auto justify-content-center align-items-center mt-2">
      <p className='text-center titre2 mt-5 mb-4 mb-md-1 mt-md-1'>Ajouter Un Enfant :</p>

      {show ? (
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              <p className='text-danger'>Erreurs de Validation</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
      
      <ul className='text-danger' >            
        {errors.name !== ''       && <li>{errors.name}</li>}
        {errors.firstname !== ''  && <li>{errors.firstname}</li>}
        {errors.birthdate !== ''  && <li>{errors.birthdate}</li>}
        {errors.matricule !== ''  && <li>{errors.matricule}</li>}
        {errors.birthplace !== '' && <li>{errors.birthplace}</li>}   
      </ul>
          </Modal.Body>
        </Modal>
      ) : null}

      {childAdded ? (
        <Modal show={childAdded} onHide={() => setChildAdded(false)}>
          <Modal.Header closeButton>
            <Modal.Title  >
              <p className=' text-success ' >
                L'Enfant {childAdded2.name} {childAdded2.firstname} Est Ajouté Avec Succés!cd
              </p>
            </Modal.Title>
          </Modal.Header>
        </Modal>
      ) : null}

      <form className='mx-auto' onSubmit={handleSubmit}>
        <div className='col-md-12 mx-auto mt-5 mt-md-1'>
          <label htmlFor='name' className='form-label ms-2'>
            Nom et Prénom
          </label>

          <div className='input-group col-12 mt-2 mt-md-1 '>
            <input
              type='text'
              className='form-control ms-1'
              id='name'
              name='name'
              value={child.name}
              onChange={handleChange}
              placeholder='Entrer Le Nom'
              required
            />

            <input
              type='text'
              className='form-control ms-1'
              id='firstname'
              name='firstname'
              value={child.firstname}
              onChange={handleChange}
              placeholder='Entrer Le Prénom'
              required
            />
          </div>

          <label htmlFor='birthdate' className='form-label ms-2 mt-4 mt-md-1'>
            Date Et Lieu De Naissance
          </label>
          <div className='input-group col-12 mt-2 mt-md-1'>
            <input
              type='date'
              className='form-control ms-1'
              id='birthdate'
              name='birthdate'
              value={child.birthdate}
              onChange={handleChange}
              placeholder='Entrer La Date De Naissance'
              required
            />
            <input
              type='text'
              className='form-control ms-1'
              id='birthplace'
              name='birthplace'
              value={child.birthplace}
              onChange={handleChange}
              placeholder='Entrer Le Lieu De Naissance'
              required
            />
          </div>

          <label htmlFor='matricule' className='form-label ms-2 mt-4 mt-md-1'>
            Matricule
          </label>
          <input
            type='text'
            className='form-control'
            id='matricule'
            name='matricule'
            value={child.matricule}
            onChange={handleChange}
            placeholder='Entrer Le Matricule'
            required
          />

          <label htmlFor='photo' className='form-label ms-2 mt-4 mt-md-1'>
            Photo
          </label>
          <input
            type='file'
            className='form-control'
            id='photo'
            name='photo'
            value={child.photo}
            onChange={handleChange}
            placeholder='Ajoouter Une Photo'
            required
          />

          <label htmlFor='parent' className='form-label ms-2 mt-4 mt-md-1'>
            Parent
          </label>

          <select className='form-select' id='parent' name='parent' onChange={handleChange} required>
            <option>Choisi le Parent</option>
            {parents.map((parent, index) => (
              <option key={index} value={parent}>
                {parent}
              </option>
            ))}
          </select>

          <div className='col-12 text-center mb-3 mt-4'>
            <button className='btn btn-submit mt-1' type='submit' onClick={handleSubmit}>
              Submit form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChildForm;
