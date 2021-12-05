import React from 'react';
import axios from 'axios';

const HOC = (Wrapper, entity) => {
  return class HOC extends React.Component {
    state = {
      data: [],
      search: '',
    };

    componentDidMount() {
      axios
        .get(`https://jsonplaceholder.typicode.com/${entity}`)
        .then((response) => {
          console.log(response);
          this.setState({ ...this.state, data: response.data });
        })
        .catch((error) => console.log(error));
    }

    render() {
      let { search, data } = this.state;
      let filteredData = data.slice(0, 10).filter((d) => {
        if (entity === 'users') {
          const { name } = d;
          return name.indexOf(search) >= 0;
        }
        if (entity === 'todos') {
          const { title } = d;
          return title.indexOf(search) >= 0;
        }
      });

      return (
        <div>
          <input
            type='text'
            value={this.state.search}
            onChange={(e) =>
              this.setState({ ...this.state, search: e.target.value })
            }
          />
          <Wrapper data={filteredData}> </Wrapper>
        </div>
      );
    }
  };
};

export default HOC;
