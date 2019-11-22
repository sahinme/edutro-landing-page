import React, { Component, Fragment } from "react";
import { Comment, Avatar, Tooltip, Icon } from "antd";
import moment from "moment";

class CommentCard extends Component {
  state = {
    likes: 13,
    dislikes: 5,
    action: null
  };

  like = () => {
    let likes = this.state.likes;
    likes++;
    this.setState({
      likes,
      action: "liked"
    });
  };

  dislike = () => {
    let dislikes = this.state.dislikes;
    dislikes = dislikes + 1;
    this.setState({
      dislikes,
      action: "disliked"
    });
  };

  render() {
    const { replies } = this.props;
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Beğen">
          <Icon
            type="like"
            theme={action === "liked" ? "filled" : "outlined"}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === "disliked" ? "filled" : "outlined"}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Yanitla</span>
    ];

    return (
      <Fragment>
        <Comment
          actions={actions}
          author={<a>Ali Sahin</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              Tüm edutro ailesine selamlar. Benim sorum şöyle: canlılar ilk
              yarandığı zaman, hücreler nasıl canlılık özelliliyi kazanmışdır?
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span style={{ color: "gray", fontSize: "12px" }}>
                {moment().fromNow()}
              </span>
            </Tooltip>
          }
        >
          {replies &&
            replies.map(x => {
              return <CommentCard></CommentCard>;
            })}
        </Comment>
      </Fragment>
    );
  }
}
export default CommentCard;
