import React, { useState, useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import reducer from "../reducers";

const App = () => {
  // const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = (e) => {
    // e.preventDefault();
    console.log({ title, body });
  };
  return (
    <>
      <div className="container-fruid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventBody">タイトル</label>
            <input
              className="form-control"
              id="formEventTitle"
              value={title}
              onchange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ボディ
            </label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              value={body}
              onchange={(e) => setBody(e.target.value)}
            />
          </div>

          <button onClick={addEvent} className="btn btn-primary">
            イベントを作成する
          </button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
          <button className="btn btn-danger"> 全ての操作ログを削除する</button>
        </form>
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default App;
