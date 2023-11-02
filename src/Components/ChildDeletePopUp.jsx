import React from 'react'
import {Modal} from 'react-bootstrap'
import { useContext } from 'react';
import { context } from '../Pages/Home';
const ChildDeletePopUp = () => {


    const { childrenTable, setChildrenTable,deleteModal,setDeleteModal,indexOfEditDelete,setIndexOfEditDelete } = useContext(context);
    const deleteChild = ()=> {
        const newChildrenTable = [...childrenTable]
        newChildrenTable.splice(indexOfEditDelete,1)
        setChildrenTable(newChildrenTable)
        setDeleteModal(false)
    }
  return (
    <div>
        <Modal show={deleteModal} onHide={()=>setDeleteModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Child</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Etes vous sur de supprimer lenfant ?</p>
                <button className=' btn  btn-danger' onClick={deleteChild}> Supprimer </button>
                <button className='btn  ms-4'> Annuler </button>
                


            </Modal.Body>
        </Modal>
             
            
    </div>
  )
}

export default ChildDeletePopUp