import React from "react";
import TextComponent from "../../Texts/TextComponent";
import BulletedText from "../../Texts/BulletedText";

const SubmitText = () => {
  const submitTexts = [
    {
      text: "Official transcripts for all secondary or high schools, colleges, and universities you have attended.",
    },
    {
      text: "Official copies are issued directly by your school, college, or university as etranscripts or in a sealed envelope.",
    },
    {
      text: "If your transcripts are not in English, please send a copy in the original language and provide a certified translation in an envelope sealed by the certified translator.",
    },
  ];

  return (
    <div className="submittext-container">
      <TextComponent text='Please submit' size='18px' font='800' />
      <BulletedText items={submitTexts} size='18px' font='600' />
    </div>
  );
};

export default SubmitText;
