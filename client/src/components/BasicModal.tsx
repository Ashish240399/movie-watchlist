"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { clearModal } from '@/redux/slices/modalSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  color:"black"
};

export default function BasicModal() {
  const modal = useAppSelector((state)=>state.modal);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(clearModal())
  }

  return (
    <div>
      <Modal
        open={modal.content.length>0?true:false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modal.contentHead}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modal.content}
          </Typography>
          <div className='mt-5'>
            {modal.actions.map((el) => (
                <Button sx={{
                    marginRight:"10px"
                }} variant='outlined' onClick={(event) => el.fn(event)} key={el.name}>
                    {el.name}
                </Button>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}