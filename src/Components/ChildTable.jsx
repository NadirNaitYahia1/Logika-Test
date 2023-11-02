import React, { useState, useContext } from 'react';
import '../Styles/global.css';
import { context } from '../Pages/Home';
import updateIcon from '../Assets/updateIcon.png';
import deleteIcon from '../Assets/deleteIcon.png'

const ChildTable = () => {





  const { childrenTable,setEditModal,setDeleteModal,indexOfEditDelete,setIndexOfEditDelete} = useContext(context);
 
  // cuurentPage est un entier qui permet de savoir la page courante
  // recordsPerPage est un entier qui permet de savoir le nombre d'enfants par page
  // indexOfLastRecord est un entier qui permet de savoir l'index du dernier enfant de la page courante
  // indexOfFirstRecord est un entier qui permet de savoir l'index du premier enfant de la page courante
  // record est un tableau qui contient les enfants de la page courante
  // nbPage est un entier qui permet de savoir le nombre de pages
  // numbers est un tableau qui contient les nombres de pages

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const record = childrenTable.slice(indexOfFirstRecord, indexOfLastRecord);
  const nbPage = Math.ceil(childrenTable.length / recordsPerPage);

  const numbers = [...Array(nbPage + 1).keys()].slice(1);

  // prev est une fonction qui permet de passer à la page précédente
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  // next est une fonction qui permet de passer à la page suivante
  const next = () => {
    if (currentPage < nbPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // clickEdit est une fonction qui permet d'ouvrir le pop up --editModal -- et de stocker l'index de l'enfant qui est en train d'être modifié
  const clickEdit = (index) =>
  {
    setEditModal(true)
    setIndexOfEditDelete(index)  
  }




  return (

    <div className="childtable col-lg-6 col-12  " id="table">
      <div className="col-12 text2 text-center mt-2 ">
        <p className="   titre3">Liste Des Enfants :</p>
      </div>

      <div className="col-12  ">
        <div className="mb-2 bg-light border-right vh-80" id="sidebar-wrapper">
          <div className="list-group list-group-flush overflow-auto h-100">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th scope="col">Nom et Prénom</th>
                  <th scope="col">Date de naissance</th>
                  <th scope="col">Matricule</th>
                  <th scope="col">Lieu de naissance</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Parent</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {
                  record.length !==0 ?
                  record.map((child, index) => (
                    <tr key={index}>
                      <td >{child.name} {child.firstname} </td>
                      <td >{child.birthdate}</td>
                      <td >{child.matricule}</td>
                      <td >{child.birthplace}</td>
                      <td > <img src={child.photo} className="img-fluid" alt="child" /> </td> 
                      <td >{child.parent}</td>
                      <td  ><button onClick={()=>clickEdit(index)} ><img  src={updateIcon} className='icons ms-auto align-items-center' alt='icon'/></button></td>
                      <td  ><button onClick={()=> setDeleteModal(true)}><img  src={deleteIcon} className='icons ms-auto align-items-center' alt='icon'/></button></td>
                    </tr>
                  )): 
                    <tr>
                      <td colSpan={8}>Aucun Enfant</td>
                    </tr>


                }

              </tbody>
            </table>


            <nav className="mx-auto ">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#table" className="page-link" onClick={prev}>
                    Prev
                  </a>
                </li>
                {numbers.map((number) => (
                  <li
                    className={`page-item ms-2 ${currentPage === number ? ' active' : ''}`}
                    key={number}
                  >
                    <a
                      href="#table"
                      className="page-item"
                      onClick={() => setCurrentPage(number)}
                    >
                      {number}
                    </a>
                  </li>
                ))}
                <li className="page-item ms-1">
                  <a href="#table" className="page-link" onClick={next}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildTable;
