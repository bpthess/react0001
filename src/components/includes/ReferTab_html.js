import axios from "axios";
import React from "react";
import ReferCont from "../includes/ReferCont";

class ReferTab_html extends React.Component {
  state = {
    refers: [],
  };

  getRefershtml = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/react2022/src/assets/json/refer.json"
    );

    console.log(htmlRefer);
    this.setState({ refers: htmlRefer });
  };

  componentDidMount() {
    this.getRefershtml();
  }

  render() {
    const { refers } = this.state;

    console.log(refers);

    return (
      <ul className="refer__list">
        {refers.map((refer) => (
          <ReferCont
            key={refer.id}
            id={refer.id}
            title={refer.title}
            desc={refer.desc}
            use={refer.use}
          />
        ))}
      </ul>
    );
  }
}

// function ReferTab_html() {
//   return (
//     <div>ReferTab_html</div>
//   )
// }

export default ReferTab_html;
