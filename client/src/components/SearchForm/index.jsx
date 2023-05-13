import { useState } from "react";

const SearchForm = () => {
    const [data, setData] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter name of city"
            value={data}
            onChange={(e) => setData(e.target.value)}
            />
            <input type="submit" />
      </form>
    </>
  );
};

export default SearchForm;