import { ActionsTypes } from "../constants/actions-types";
import axios from 'axios';


 

 const getPostes=(postes)=> ({
     type:ActionsTypes.GET_POSTES_SUCCESS, 
     payload:postes ,
    });
    const  getPostesFailled=(errorMessage)=>({
      type:ActionsTypes.GET_POSTES_FAILED,
      payload:errorMessage
    })
    const postesDeleted=()=> ({
      type:ActionsTypes.DELETE_POSTE ,

     });
     const addpostes=()=> ({
      type:ActionsTypes.ADD_POSTES ,

     });
     const getsingleposte=(poste)=> ({
      type:ActionsTypes.GET_SINGLE_POSTE ,
      payload:poste,
    

     });
     const postesUpdated=()=> ({
      type:ActionsTypes.UPDATE_POSTE ,

     });
     

 
  export const loadPostes = () => {
   
    return function(dispatch) {
     
      return axios.get(`${process.env.REACT_APP_API_GET}`).then((response) =>{
        
            dispatch(getPostes(response.data) );
          
   
        }).catch((err) =>dispatch( getPostesFailled(err.message))) ;
   

  };

  }
  export const deletePostes = (id) => {
    return function(dispatch) {
        axios.delete(`${process.env.REACT_APP_API_DEL}/${id}`).then((response) =>{
            console.log("resp",response)
            dispatch(postesDeleted(id) );
            dispatch(loadPostes()) ;
          
   
        }).catch((err) =>console.log("erreur")) ;
   

  };

  }

  
  export const addPostes = (poste) => {
    return function(dispatch) {
       return axios.post(`${process.env.REACT_APP_API_ADD}`, poste).then((response) =>{
            console.log("resp",response)
            dispatch(addpostes());
            dispatch(loadPostes()) ;
        
          
   
        }).catch((err) =>console.log("erreur")) ;
   

  };
  
} 
export const getSinglePoste = (id) => {
  return function(dispatch) {
      axios.get(`${process.env.REACT_APP_API_GET_SINGLE_POSTE}/${id}`).then((resp) =>{
          console.log("resp",resp)
          dispatch(getsingleposte(resp.data));
         
        
 
      }).catch((err) =>console.log("erreur get single poste")) ;
 

};

}
export const updatePoste = (poste,id) => {
  return function(dispatch) {
      axios.patch(`${process.env.REACT_APP_API_UPDATE}/${id}`,poste).then((resp) =>{
          console.log("resp",resp)
          dispatch(getsingleposte(resp.data));
          dispatch(postesUpdated());
          dispatch(loadPostes()) ;
         
        
 
      }).catch((err) =>console.log("erreur update user")) ;
 

};

}