import React from "react";
import "./sigin.css";

export default function Sigin() {
  return (
    //  registar sigin in
    <div className="registar">
      <form>
        <label>
          <p>Entir fristname*</p>
          <input required type="text" placeholder="entir fristname" />
        </label>
        <label>
          <p>Entir username*</p>
          <input required type="text" placeholder="entir username" />
        </label>
        <label>
          <p>Entir email*</p>
          <input required type="text" placeholder="entir email" />
        </label>

        <label>
          <p>Entir password*</p>
          <input required type="password" placeholder="entir password" />
        </label>
        <button>Saqlash</button>
      </form>
    </div>
  );
}
