import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export const onClickOkNotification = (title, desc) => {
  notification.open({
    message: title,
    description: desc,
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};
