import React from "react";
import ModalComponent from "../ModalComponent";
import AUDButton from "../Buttons/AUDButton";
import TextComponent from "../Texts/TextComponent";

const ExitModal = ({ setIsExit, handleExit, handleSave }) => {
  return (
    <ModalComponent
      // width='40rem'

      onClose={() => setIsExit(false)}
    >
      <div className='exit-container'>
        <TextComponent
          text='You are about to leave the page without saving the details. Do you wish to exit or save?'
          size='18px'
          font='500'
        />
        <div className='d-flex gap-1'>
          <AUDButton text='Exit' handleOnClick={handleExit}/>

          <AUDButton text='Save' handleOnClick={handleSave} />
        </div>
      </div>
    </ModalComponent>
  );
};

export default ExitModal;