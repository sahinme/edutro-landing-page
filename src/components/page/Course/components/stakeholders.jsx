import React, { Component, Fragment } from "react";
import { Card, Row, Col, Avatar } from "antd";

const data = [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1];

class Stakeholders extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <Row type="flex" justify="space-around">
            {data.map(x => {
              return (
                <Col span={10}>
                  <div
                    style={{ margin: "10px", display: "flex" }}
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
                      <h4>
                        Abay Akademi{" "}
                        <span
                          className="verified"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Verified"
                        ></span>
                      </h4>
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
export default Stakeholders;
