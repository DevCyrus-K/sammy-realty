import { FaSearch } from "react-icons/fa";
const Search = ({ spaceBottom }) => {
  return (
    <div className={`ltn__search-widget ${spaceBottom} mb-30`}>
      <form action="#">
        <input
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          type="text"
          name="search"
          placeholder="Search your keyword..."
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
