import React, { useRef } from "react";

function YoutubeSearch({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = function () {
    // input박스의 데이터를 받아옴
    const value = inputRef.current.value;
    onSearch(value);
  };
  // Enter키를 눌렀을때 검색가능
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("onKeyPress");
      handleSearch();
    }
  };

  const onClick = () => {
    console.log("onClick");
    handleSearch();
  };

  return (
    <div className="container">
      <div className="youtube__search">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색하세요."
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          검색
        </button>
      </div>
    </div>
  );
}

export default YoutubeSearch;
