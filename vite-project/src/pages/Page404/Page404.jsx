import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router";
import { path } from "../../constants/path";

export default function Page404() {

    const navigate = useNavigate();
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={() => navigate(path.cocoon)}>Back Home</Button>}
      />
    </>
  );
}
