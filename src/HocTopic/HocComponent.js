import React, {Component } from "react";
const HocComponent = ({ entity, Cmp }) => {
  return class extends Component {
    state = {
      data: [],
      term: "",
    };

    componentDidMount() {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const data = await response.json();
        this.setState({ ...this.state, data: data });
      };
      fetchData();
    }

    render() {
      let { data, term } = this.state;
      const filterData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        } else if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <>
          <input
            onChange={(e) => {
              this.setState({ ...this.state, term: e.target.value });
            }}
          />
          <Cmp filterData={filterData} />
        </>
      );
    }
  };
};

export default HocComponent;
