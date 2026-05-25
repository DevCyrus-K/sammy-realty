import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const Search = ({ spaceBottom, setQuery, initialValue = "" }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(value.toLowerCase());
    }, 250);

    return () => clearTimeout(timeout);
  }, [setQuery, value]);

  return (
    <div className={`ltn__search-widget ${spaceBottom}`}>
      <form action="#" onSubmit={(event) => event.preventDefault()}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name="search"
          placeholder="Search by area, property, or keyword"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
