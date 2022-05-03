import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"ligth"}>
        <Image width={150} height={150} src={device.img} />
        <div className="mt-1 d-flex text-black-50 justify-content-between   ">
          <div>Samsung...</div>
          <div className="d-flex aling-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
