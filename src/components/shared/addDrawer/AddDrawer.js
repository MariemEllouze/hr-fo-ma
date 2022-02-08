import React from 'react';
import propTypes from 'prop-types';
import'./AddDrawer.scss' ;
import { Drawer } from 'antd';




function AddDrawer ({show,handleClose,children,title}){
 
    return (
      <>
       
        <Drawer className="draw"
          title={title}
          visible={show} 
          onClose={handleClose}
          bodyStyle={{ paddingBottom: 80 }}
          closable={true}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
          
           
           
           > 
              
            </div>
          }
        > 
        {children}
        </Drawer>
      </>
    );
  
} ;
AddDrawer.propTypes={
  show: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired
} ;
 export default AddDrawer