import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">
              ShinsekaOfficial
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/LoginPage">
            <button className="btn btn-ghost mr-2 text-white">ログイン</button>
          </Link>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              onClick={toggleDropdown}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="/shinsekalogo.jpeg" />
              </div>
            </label>
            {isOpen && (
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/card" onClick={closeDropdown}>
                    チームメンバー
                  </Link>
                </li>
                <li>
                  <Link to="/LinkPost" onClick={closeDropdown}>
                    Youtubeリンク投稿
                  </Link>
                </li>
                <li>
                  <a>試合結果(今後実装予定)</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
