import React from "react";
import ModalComponent from "../ModalComponent";
import AUDButton from "../Buttons/AUDButton";
import TextComponent from "../Texts/TextComponent";

const ExitModal = ({ setIsExit, handleExit, handleSave, isView }) => {
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
          <AUDButton text='Exit' handleOnClick={handleExit} width='100px' />
          {isView ? "" : <AUDButton text='Save' handleOnClick={handleSave} width='100px' />}
        </div>
      </div>
    </ModalComponent>
  );
};

export default ExitModal;
