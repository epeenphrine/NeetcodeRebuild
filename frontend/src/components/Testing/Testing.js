import React, { useState, useEffect } from "react";
import Search from "./Search";
import testing123 from "./testing123"

export default function Testing() {
  const [api, setApi] = useState({
    data: [],
  });
  const [search, setSearch] = useState("");

  function getAPI() {
    const res = ["united states", "china", "korea", "japan", "china"];

    console.log(res);
    setApi({
      data: res,
    });
  }

  useEffect(() => {
    getAPI();
    console.log("something happen");
  }, []);

  const items = api.data.map((item) => {
    return <h1>{item}</h1>;
  });
  const filter = api.data
    .filter((item) => item.includes(search))
    .map((filtereditem) => <li>{filtereditem}</li>);
  const handleCllick = (e) => {
    console.log(e.target.vgialue);
  };
  const handleSubmit = (e) => {
    console.log("submit receieved");
    console.log(e);
  };

  testing123()  

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={() => setSearch("")}
          >
            reset 
          </button>
        </div>
      </div>
      <input
        type="text"
        values={search}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={(e) => setSearch(e.target.value)}
      />
      <ul onClick={handleCllick}>{filter}</ul>
    </div>
  );
}
