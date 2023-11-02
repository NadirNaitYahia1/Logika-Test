import React from 'react';
import ChildForm from '../Components/ChildForm';
import ChildTable from '../Components/ChildTable';
import { useState } from 'react';
import ChildEditForm from '../Components/ChildEditForm';
import ChildDeletePopUp from '../Components/ChildDeletePopUp';
import { data } from '../Data/ChildrenTable';

export const context = React.createContext();

const Home = () => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [indexOfEditDelete, setIndexOfEditDelete] = useState();
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
