import React from "react";
import jsonPlaceholder from "../apis/jsonPlaceholder";

class ResourceList extends React.Component {
  state = { resources: [] };

  async componentDidMount() {
    const response = await jsonPlaceholder(this.props.resource);
    this.setState({ resources: response });
    console.log({ state: this.state });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await jsonPlaceholder(this.props.resource);
      this.setState({ resources: response });
      console.log({ state: this.state });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
