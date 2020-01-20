import React, { useState, useEffect } from "react";

function useGiphy(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log({ query });
    async function fetchData() {
      const YOUR_API_KEY = "xl0vFOpbsfk4PPGFNnyQhB7F16GvEXv3";
      try {
        setLoading(true);
        const response = await fetch(
          `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${YOUR_API_KEY}&limit=10`
        );

        const json = await response.json();
        setResults(
          json.data.map(item => {
            return item.images.preview.mp4;
          })
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (query !== "") {
      fetchData();
    }
  }, [query]);

  return [results, loading];
}

export default function AsyncHooks() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [results, loading] = useGiphy(query);

  function onSubmit(e) {
    e.preventDefault();
    console.log(search);
    setQuery(search);
  }
  return (
    <div>
      <h1> Async React Hooks</h1>
      <form onSubmit={onSubmit}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for Gifs!"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {loading ? (
        <h1>Give me GIFs</h1>
      ) : (
        results.map(item => <video autoPlay loop key={item} src={item} />)
      )}
    </div>
  );
}
