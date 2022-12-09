import { CustomBtn } from "./quantity-btn.style";

export interface QuantityBtnProps {
  btnText: string;
  onClick: () => void;
}

export const QuantityBtn = ({ btnText, onClick }: QuantityBtnProps) => {
  return <CustomBtn onClick={onClick}>{btnText}</CustomBtn>;
};
