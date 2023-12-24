import React, { Component } from "react";
const HocComponent = ({ entity, Cmp }) => {
  // Give your inner class a name
  class WrappedComponent extends Component {
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
          return name.toLowerCase().indexOf(term) >= 0;
        } else if (entity === "todos") {
          const { title } = d;
          return title.toLowerCase().indexOf(term) >= 0;
        }
      });
      return (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
          <input style={{height:"30px",width:"50%",paddingInline:"20px",fontStyle:"italic"}}
            onChange={(e) => {
              this.setState({ ...this.state, term: e.target.value.toLowerCase() });
            }}
          />
          <Cmp filterData={filterData} />
        </div>
      );
    }
  }

  return WrappedComponent;
};

export default HocComponent;
