const errors = {
    status: '', 
    name: 'Le nom et le prenom  doit contenir entre 3 et 20 caractères',
    birthplace: 'Le lieu de naissance doit contenir entre 3 et 20 caractères',
    birthdate: 'L\'âge doit être compris entre 3 et 6 ans',
    matricule: 'Le Matricule Doit Etre Unique ',
    }



const returnErrors = {status:'',name: '' , birthplace: '', birthdate: ''}


// cheakName_FirstName_Birthplace_Parent est une fonction qui prend en parametre le nom, le prenom, le lieu de naissance et le nom du parent
// est verifie si les champs sont valides ou non
// si les champs sont valides la fonction retourne true sinon elle retourne false
// si la fonction retourne false elle ajoute un message d'erreur dans le tableau returnErrors
const cheakName_FirstName_Birthplace_Parent = (data,dataProprities) =>{

    const namePattern = /^[a-zA-Z\s]+$/;
    if ( namePattern.test(data) && data.length > 3 && data.length < 20){
        return true
    }   
    else{
        returnErrors[dataProprities] = errors[dataProprities]
        return returnErrors
    } 
}
// cheak_Birthdate est une fonction qui prend en parametre la date de naissance
// est verifie si la date est valide ou non
// si la date est valide la fonction retourne true sinon elle retourne false
// si la fonction retourne false elle ajoute un message d'erreur dans le tableau returnErrors
const cheak_Birthdate = (data,dataProprities) =>{
    
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; 
    const age = new Date().getFullYear() - new Date(data).getFullYear()
    if ( datePattern.test(data) && age > 0 && age < 10   ){
        return true 
    }
    else{
        returnErrors[dataProprities] = errors[dataProprities]
        return true
    }
}
// cheak_Matricule est une fonction qui prend en parametre le tableau des enfants, les données de l'enfant et le nom de la propriété
// est verifie si le matricule est unique ou non
// si le matricule est unique la fonction retourne true sinon elle retourne false
// si la fonction retourne false elle ajoute un message d'erreur dans le tableau returnErrors
const cheak_Matricule = (childrenTable, data, dataProperties) => 
{
    for (const child of childrenTable) {
      if (child.matricule === data.matricule) {
        returnErrors[dataProperties] = errors[dataProperties];
        return false; 
      }
    }
    return true;  
  };
  



// errorHandling est une fonction qui prend en parametre le tableau des enfants et les données de l'enfant
// est verifie si les données sont valides ou non
// si les données sont valides la fonction retourne true sinon elle retourne false
// si la fonction retourne false elle ajoute un message d'erreur dans le tableau returnErrors
// si la fonction retourne true elle mit l'attribut status de returnErrors à true

export const errorHandling = (childrenTable,child) =>{

    const cheakName =cheakName_FirstName_Birthplace_Parent(child.name,'name')
    const cheakFirstName =cheakName_FirstName_Birthplace_Parent(child.firstname,'name')
    const cheakBirthplace =cheakName_FirstName_Birthplace_Parent(child.birthplace,'birthplace')
    const cheakBirthdate= cheak_Birthdate(child.birthdate,'birthdate')
    const cheakMatricule = cheak_Matricule(childrenTable,child,'matricule')

    if (cheakName===true && cheakFirstName===true && cheakBirthplace===true && cheakBirthdate ===true  && cheakMatricule ===true ){
        returnErrors.status=true
        return returnErrors
    }else
    {
        returnErrors.status=false
        return returnErrors
    }

 


}