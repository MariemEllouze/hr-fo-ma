import { ActionsTypes  } from "../constants/actions-types";
const intialState={
  postes:[],
  poste:{},
  isLoading:false,
  errorMessage:'',
}
const posteReducer=(state=intialState,action)=>{
  switch(action.type) {
  default:
      case ActionsTypes.GET_POSTES_SUCCESS:
      return {...state,
       postes: action.payload,
       isLoading:false,

      } ;
      case ActionsTypes.GET_POSTES_FAILED:
      return{
         ...state,
         isLoading:false,
         errorMessage:action.payload,
        
      };

      case ActionsTypes.DELETE_POSTE:
      case ActionsTypes.ADD_POSTES:
      case ActionsTypes.UPDATE_POSTE:
        return {
          ...state,
          isLoading:false,
  
        } 
      
      case ActionsTypes.GET_SINGLE_POSTE:
        return{
           ...state,
           poste :action.payload,
           isLoading:false,
          
          
        }; 
      }
};
export default posteReducer ;
