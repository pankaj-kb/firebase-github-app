/* eslint-disable no-unused-vars */
import React from "react";

import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  // const url = "https://api.github.com/users/";

  return (
    <Card className="text-center mt-3 mb-4">
      <img src={user.avatar_url} className="img-thumbnail" />
      <CardBody>
        <div className="text-primary"> {user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-primary">
          <a href={user.html_url}>Profile Link</a>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
