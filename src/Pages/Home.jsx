import React from 'react';
import ChildForm from '../Components/ChildForm';
import ChildTable from '../Components/ChildTable';
import { useState } from 'react';
import ChildEditForm from '../Components/ChildEditForm';
import ChildDeletePopUp from '../Components/ChildDeletePopUp';
import { data } from '../Data/ChildrenTable';

export const context = React.createContext();

const Home = () => {
  // editModal est un boolean qui permet de savoir si le pop up --editModal -- est ouvert ou non
  const [editModal, setEditModal] = useState(false); 

  // deleteModal est un boolean qui permet de savoir si le pop up --deleteModal -- est ouvert ou non
  const [deleteModal, setDeleteModal] = useState(false); 

  // indexOfEditDelete est un nombre qui permet de savoir quel enfant est en train d'être modifié ou supprimé
  const [indexOfEditDelete, setIndexOfEditDelete] = useState(); 

  // childrenTable est un tableau qui contient les enfants et leurs informations sont 
  //  stockées dans un tableau d objets dans le fechier ChildrenTable.js 
  const [childrenTable, setChildrenTable] = useState(Array.isArray(data) ? data : []);
  
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        <context.Provider value={{ childrenTable, setChildrenTable, editModal, setEditModal, deleteModal, setDeleteModal,indexOfEditDelete,setIndexOfEditDelete }}>
          {editModal ? <ChildEditForm /> : null}
          {deleteModal ? <ChildDeletePopUp /> : null}
          <ChildForm />
          <ChildTable />
        </context.Provider>
      </div>
    </div>
  );
}

export default Home;
