import React, { useRef } from "react";

function MovieSearch({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => handleSearch();

  return (
    <div className="youtube__search">
      <h2>검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요!"
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
}

export default MovieSearch;
