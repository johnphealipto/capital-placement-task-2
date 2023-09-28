import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, message } from "antd";

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
  },
];

const menuProps = {
  items,
  onClick: () => {},
};
const CustomButton: React.FC<{ text: string }> = ({ text }) => (
  <Dropdown.Button
    size="large"
    menu={menuProps}
    icon={<DownOutlined />}
    onClick={() => message.info(text)}
  >
    <span>{text}</span>
  </Dropdown.Button>
);

export default CustomButton;
