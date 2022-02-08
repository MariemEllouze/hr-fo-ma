import React, { Fragment, useState, useEffect } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm, message } from 'antd';
import AddDrawer from '../../shared/addDrawer/AddDrawer.js';
import PosteForm from '../../shared/posteForm/PosteForm.js'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostes, loadPostes } from '../../../redux/actions/postesAction'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PosteUpdateForm from '../../shared/posteUpdateForm/PosteUpdateForm.js'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);





function Postes() {

  const [showDrawer, setShowerDrawer] = useState(false)
  const [showDrawerupdate, setShowerDrawerupdate] = useState(false)
  const classes = useStyles();
  let dispatch = useDispatch();
  const { postes, isLoading, errorMessage } = useSelector(state => state.data)
  useEffect(() => {
    dispatch(loadPostes());
    console.log("load poste",postes)
  }, []);

  const confirm = (id) => {

    dispatch(deletePostes(id))
    message.success('deleted poste');

  }
  const cancel = (e) => {
    console.log(e);
  }



  return (
    <Fragment>
      <div style={{ display: 'flex', marginBottom: 20 }} >
        <div></div>
        <div>
          <Button type="primary" onClick={() => setShowerDrawer(true)}>
            <PlusCircleOutlined />New Poste
          </Button>
        </div>
      </div>


      <AddDrawer show={showDrawer} handleClose={() => setShowerDrawer(false)} title={'Create Poste'}>
        <PosteForm />
      </AddDrawer>

      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">City</StyledTableCell>
                <StyledTableCell align="center">PositionType</StyledTableCell>
                <StyledTableCell align="center">Condidat</StyledTableCell>
                <StyledTableCell align="center">Time</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading && <h3>Loading..</h3>}
              {errorMessage && <h3>{errorMessage}</h3>}
              {postes && postes.map((poste) => (

                <TableRow key={poste.id}>

                  <TableCell align="center" component="th" scope="row">
                    <Link to={`/poste/${poste.id}`} >
                      {poste.title}
                    </Link>
                  </TableCell>

                  <TableCell align="center">{poste.city}</TableCell>
                  <TableCell align="center">{poste.positionType}</TableCell>
                  <TableCell align="center">{0}</TableCell>
                  <TableCell align="center">{poste.createdAt}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup >
                      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No"
                        onConfirm={() => confirm(poste.id)}
                        onCancel={() => cancel} >
                        <IconButton>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Popconfirm>

                      <AddDrawer show={showDrawerupdate} handleClose={() => setShowerDrawerupdate(false)} title={'Update Poste'}>
                        <PosteUpdateForm postData={showDrawerupdate} />
                      </AddDrawer>
                      <Link onClick={() => { setShowerDrawerupdate(poste) }} >
                        <IconButton >
                          <EditIcon fontSize="small"  />
                        </IconButton>
                      </Link>
                    </ButtonGroup>
                  </TableCell>

                </TableRow>


              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Fragment>

  );

  ;
}
export default Postes;