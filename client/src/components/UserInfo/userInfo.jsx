import React from "react";
import style from "../UserInfo/UserInfo.module.css";

function UserInfo() {
  return (
    <div>
      <div>
        <h3>Personal information</h3>
      </div>
      <div>
        <label for="imagen">Select a image:</label>
        <input type="file" id="imagen" name="imagen" />
      </div>
      <div className={style.tp1}>
        <div className={style.tp2}>
          <label className={style.labels}>Name</label>
          <input type="text" />
        </div>
        <div className={style.tp2}>
          <label className={style.labels}>Lastname</label>
          <input type="text" />
        </div>
      </div>
      <div className={style.tp1}>
        <div className={style.tp2}>
          <label className={style.labels}>Email Adress</label>
          <input type="text" />
        </div>
        <div className={style.tp2}>
          <label className={style.labels}>Document</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
