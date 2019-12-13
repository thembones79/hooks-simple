import { useState, useEffect } from "react";
import jsonPlaceholder from "../apis/jsonPlaceholder";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await jsonPlaceholder(resource);
    setResources(response);
    //console.log({ state: this.state });
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  return resources;
};

export default useResources;
