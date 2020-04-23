import React, { useState } from "react";
import { Input, Row, Col, Container } from "reactstrap";
import UserMenu from "./UserMenu";

const Header = ({ title }) => {
  const [headerSearch, setHeaderSearch] = useState("");
  const onChangeSearch = (value) => setHeaderSearch(value);
  return (
    <header className="header">
      <Container>
        <Row>
          <Col
            xs={{ size: 8, offset: 0, order: 3 }}
            sm={{ size: 2, offset: 0, order: 3 }}
            md={{ size: 2, offset: 0, order: 1 }}
          >
            <h2 className="header__title">{title}</h2>
          </Col>
          <Col
            xs={{ size: 8, offset: 0, order: 2 }}
            sm={{ size: 4, offset: 1, order: 2 }}
            md={{ size: 4, offset: 1 }}
            lg={{ size: 3, offset: 4 }}
          >
            <Input
              className="header__search"
              type="text"
              value={headerSearch}
              name="search"
              placeholder="Найти..."
              onChange={({ target: { value } }) => onChangeSearch(value)}
            />
          </Col>
          <Col
            xs={{ size: 8, offset: 3, order: 1 }}
            md={{ size: 4, offset: 0, order: 3 }}
            lg={{ size: 3, order: 3 }}
          >
            <UserMenu />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
