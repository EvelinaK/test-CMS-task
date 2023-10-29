import React from "react";
import s from "./DummyTable.module.css";

const DummyTable = ({ title }) => (
  <div className={s.tableBox}>
    <table>
      <thead>
        <tr>
          <td>{title?.split(" ")[0]}</td>
          <td>{title?.split(" ")[1]}</td>
        </tr>
      </thead>
    </table>
  </div>
);

export default DummyTable;
