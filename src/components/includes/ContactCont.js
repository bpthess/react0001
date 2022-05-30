import React from "react";

function ContactText({ text }) {
  return <div>{text}</div>;
}

const contactText = [
  { text: "YOU ARE" },
  { text: "ALREADY" },
  { text: "DOING WELL." },
  {
    desc: "밥을 안먹을 정도로 코딩에 미쳐있는 남자 이태용입니다. '꾸준함'을 바탕으로 성장해 나가는 개발자가 되겠습니다.",
  },
];

function ConactCont() {
  return (
    <section className="contact__cont">
      <div className="container">
        <div className="contact__inner">
          <div className="text">
            {contactText.map((txt) => (
              <ContactText text={txt.text} key={txt.text} />
            ))}
          </div>
          <p className="desc">
            {contactText.map((txt) => (
              <ContactText text={txt.desc} key={txt.desc} />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ConactCont;
