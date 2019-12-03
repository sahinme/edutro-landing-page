import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Avatar, Card } from "antd";

const data = [1, 1, 1, 1];

class CustomerStakeholders extends Component {
  render() {
    const { stakeholders } = this.props;
    return (
      <Fragment>
        <Card>
          <Row type="flex" justify="flex-start">
            {stakeholders.map(x => {
              return (
                <Col span={10}>
                  <div
                    style={{ marginBottom: "10px", display: "flex" }}
                    className="atbd_avatar_wrapper"
                  >
                    <div className="atbd_review_avatar">
                      <Avatar
                        size="large"
                        src="https://abayakademi.com/wp-content/uploads/2019/03/ssdgsdfg.png"
                      />
                    </div>
                    <div
                      style={{ marginLeft: "10px" }}
                      className="atbd_name_time"
                    >
                      <a>
                        <h4>
                          {x.educatorName}
                          <span
                            className="verified"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Verified"
                          ></span>
                        </h4>
                      </a>
                      <span className="review_time">
                        Egitim ve Danismanlik Merkezi
                      </span>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Card>
      </Fragment>
    );
  }
}

export default CustomerStakeholders;
