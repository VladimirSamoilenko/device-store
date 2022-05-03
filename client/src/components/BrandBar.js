import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex row row-cols-auto">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="mt-2 p-2 col"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
