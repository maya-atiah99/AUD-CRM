import React from "react";
import ModalComponent from "../components/ModalComponent";
import TextBox from "../components/Inputs/TextBox";
import AUDButton from "../components/Buttons/AUDButton";
import LinkButton from "../components/Buttons/LinkButton";

const Login = ({ setShowLoginModal }) => {
  const handleLogin = () => {
    window.location.href = "/register";
  };
  return (
    <ModalComponent
      height='28rem'
      width='37rem'
      title='Login'
      onClose={() => setShowLoginModal(false)}
    >
      <div className='login-container'>
        <TextBox label='Email Address' required={true} />
        <TextBox label='Password' required={true} />
        <AUDButton width='100%' text='Login' handleOnClick={handleLogin} />
        <div className='test222'>
          <LinkButton
           handleOnClick={()=>setShowLoginModal(false)} 
            title='DON’T HAVE AN ACCOUNT? REGISTER NOW'
            underlined={true}
          />
        </div>
      </div>
    </ModalComponent>
  );
};

export default Login;
