import { useEffect, useState } from "react";

export default function Home() {
  const [ish, setIsh] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setIsh(data));
  }, []);
  return (
    <div className="mt-[50px]">
      <div className="justify-center h-[150px]  items-center flex">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="w-[400px] inp outline-none h-[50px] px-8 border"
          placeholder="Search country"
          type="text"
        />
      </div>
      <div className="item justify-between">
        {ish
          .filter((ishla) => {
            return search.toLowerCase() === ""
              ? ishla
              : ishla.name.common.toLowerCase().includes(search);
          })
          .map((ishla) => {
            return (
              <li className="list border bg-gray-200">{ishla.name.common}</li>
            );
          })}
      </div>
    </div>
  );
}
