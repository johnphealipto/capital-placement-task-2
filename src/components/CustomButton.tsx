import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message } from "antd";

const CustomButton: React.FC<{ text: string }> = ({ text }) => (
  <Dropdown.Button
    // className="bg-black"
    size="large"
    icon={<DownOutlined />}
    onClick={() => message.info(text)}
  >
    <span>{text}</span>
  </Dropdown.Button>
);

export default CustomButton;
