import React, { useState, useEffect } from "react";
import jsonPlaceholder from "../apis/jsonPlaceholder";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await jsonPlaceholder(resource);
    setResources(response);
    //console.log({ state: this.state });
  };

  useEffect(() => {
    fetchResource(resource);
  }, []);

  return <div>{resources.length}</div>;
};

export default ResourceList;
