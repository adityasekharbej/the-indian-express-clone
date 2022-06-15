import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
  p: 4,
};

const Wrapper = styled.div`
  border-radius: 3px;
  box-sizing: border-box;
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -80px;
  margin-left: -225px;
  width: 450px;

  & input:focus{
      border: none;
      outline:none;
  }
`;

const Input = styled.input`
  background: #fff;
  box-sizing: border-box;
  border: 0;
  font-size: 15px;
  padding: 15px;
  height: 56px;
  width: 350px;
  float: left;
  box-shadow: 0 0 65px rgb(0 0 0 / 50%);
  border-radius: 4px 0 0 4px;
`;

const Btn = styled.button`
  background: #000;
  box-sizing: border-box;
  border: 0;
  color: #fff;
  font-size: 15px;
  padding: 15px;
  height: 56px;
  width: 100px;
  float: left;
  box-shadow: 0 0 65px rgb(0 0 0 / 50%);
  border-radius: 0 4px 4px 0;

`;

const I = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 7px;
  margin-bottom: 10px;
  height: 18px;
  width: 18px;
  color: #000;
  font-size: 15px;
//   font-weight: bold;
  cursor: pointer;
`;

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{color:"#efefef"}}><i class="fa-solid fa-magnifying-glass"></i></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Wrapper>
              <I onClick={handleClose}>
                <i class="fa-solid fa-xmark"></i>
              </I>
              <div>
                <Input type="text" />
                <Btn>Search</Btn>
              </div>
            </Wrapper>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
