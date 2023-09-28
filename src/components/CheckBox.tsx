import { Checkbox } from "antd";

interface ICheckBox {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<ICheckBox> = () => {
  return <Checkbox />;
};

export default CheckBox;
