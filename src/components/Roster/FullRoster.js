import React from "react";
import PlayerAPI from "./api";
import { Link } from "react-router-dom";
import "./roster.css";

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => {
   const clsName = "list-ul";
  return (
    <div className="">
      <ul className={clsName}>
        {PlayerAPI.all().map(p => (
          <li key={p.number} className="list-li">
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
      }

export default FullRoster;
