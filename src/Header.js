import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">ShinsekaOfficial</a>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/shinsekalogo.jpeg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">チームメンバー</a>
            </li>
            <li>
              <a>Youtubeリンク投稿</a>
            </li>
            <li>
              <a>試合結果</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
