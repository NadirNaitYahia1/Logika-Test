const errors = {
    status: '', 
    name: 'Le nom et le prenom  doit contenir entre 3 et 20 caractères',
    birthplace: 'Le lieu de naissance doit contenir entre 3 et 20 caractères',
    birthdate: 'L\'âge doit être compris entre 3 et 6 ans',
    matricule: 'Le Matricule Doit Etre Unique ',
    }



const returnErrors = {status:'',name: '' , birthplace: '', birthdate: ''}



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