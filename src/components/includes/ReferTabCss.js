import axios from "axios";
import React from "react";
import ReferCont from "./ReferCont";

class ReferTabCss extends React.Component {
  state = {
    refers: [],
  };

  getRefersCss = async () => {
    const {
      data: {
        data: { cssRefer },
      },
    } = await axios.get(
      "https://raw.githubusercontent.com/bpthess/react0001/master/src/assets/json/ReferDetail.json"
    );

    console.log(cssRefer);
    this.setState({ refers: cssRefer });
  };

  componentDidMount() {
    this.getRefersCss();
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

export default ReferTabCss;
