import React from "react";

function ContactText({ text }) {
  return <div>{text}</div>;
}

const contactText = [
  { text: "YOU ARE" },
  { text: "ALREADY" },
  { text: "DOING WELL." },
  {
    desc: "같은 목표를 위해 달려갈 웹 퍼블리셔 & 프론트 앤드 개발자를 모집합니다. 관심 있는 분들은 카카오톡 또는 카페에 문의해주세요.",
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
