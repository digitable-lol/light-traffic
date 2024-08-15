import React from "react";
import "./styles.css";

interface CreateProjectButtonProps {
  onClick: () => void;
}

const CreateProjectButton: React.FC<CreateProjectButtonProps> = ({
  onClick,
}) => {
  return (
    <button className="create-project-button" onClick={onClick}>
      Создать проект
    </button>
  );
};

export default CreateProjectButton;
