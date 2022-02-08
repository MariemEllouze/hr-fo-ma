import React ,{Fragment,useState} from 'react';
import AddDrawer from '../../shared/addDrawer/AddDrawer.js';
import { PlusCircleOutlined  } from '@ant-design/icons';
import CandidatForm from '../../shared/candidatForm/candidatForm.js';
import {Button } from 'antd';
function Candidats(){
    const [showDrawer, setShowerDrawer] = useState(false)
    return (
    <Fragment>
      <div style={{display: 'flex', marginBottom: 20}} >
          <div></div>
          <div> 
          <Button  type="primary"  onClick={()=>setShowerDrawer(true)}>
          <PlusCircleOutlined />New candidat
          </Button>
          </div>
        </div>
     
          
          <AddDrawer show={showDrawer} handleClose={() => setShowerDrawer(false)} title={'Create Candidat'}>
           <CandidatForm></CandidatForm>
          </AddDrawer>
          
        <div></div>  
      
    </Fragment>)
        
    
} export default Candidats;