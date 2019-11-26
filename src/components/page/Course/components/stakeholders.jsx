import React, { Component, Fragment } from "react";
import { Card, Row, Col, Avatar } from "antd";

const data = [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1];

class Stakeholders extends Component {
  render() {
    const { owners } = this.props;
    return (
      <Fragment>
        <Card>
          {owners && (
            <Row type="flex" justify="space-around">
              {owners.map(x => {
                return (
                  <Col span={10}>
                    <div
                      style={{ margin: "10px", display: "flex" }}
                      className="atbd_avatar_wrapper"
                    >
                      <div className="atbd_review_avatar">
                        <Avatar
                          size="large"
                          src={x.tenantName ? x.logoPath : x.profileImgPath}
                        />
                      </div>
                      <div
                        style={{ marginLeft: "10px" }}
                        className="atbd_name_time"
                      >
                        <h4>
                          {x.tenantName ? x.tenantName : x.educatorName}
                          <span
                            className="verified"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Verified"
                          ></span>
                        </h4>
                        <span className="review_time">
                          {x.tenantName ? "" : x.profession}
                        </span>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          )}
        </Card>
      </Fragment>
    );
  }
}
export default Stakeholders;
