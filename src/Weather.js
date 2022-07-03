import React from "react";
import axios from "axios";

export default function Weather() {
  let form = (
    <form>
      <input type="search" />
      <input type="submit" />
    </form>
  );

  return <div className="Weather">{form}</div>;
}
