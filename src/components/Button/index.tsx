import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";


const Button = ({ title, onClick,disabled }: IButtonProps) => {
  return <ButtonContainer><button  disabled={disabled} onClick={onClick}>{title}
   </button>
  
  </ButtonContainer>;
};

export default Button;
