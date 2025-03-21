import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UploadFileForm from './UploadFileForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px ',
  boxShadow: 24,
  p: 4,
};

export default function UploadFileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div>
      <button className=' bg-black text-white px-4 py-2 rounded-md shadow ' onClick={handleOpen}>Upload File</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <UploadFileForm />
        </Box>
      </Modal>
    </div>
  );
}
