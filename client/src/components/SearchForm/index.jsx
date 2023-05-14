import { useState } from "react";

const SearchForm = () => {
    const [data, setData] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)

        setData("")
    }
  return (
    <>
      <form style={{display: "flex", padding: '.5rem'}} onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter name of city"
            value={data}
            onChange={(e) => setData(e.target.value)}
            />
            <button style={{marginLeft: '5px', padding: '.5rem'}}>
              Search
            </button>
      </form>
    </>
  );
};

export default SearchForm;