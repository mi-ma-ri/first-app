import React from "react";

const LinkPost = () => {
  return (
    <div>
      <h1 className="font-mono text-5xl mb-10">Youtubeリンク投稿</h1>
      <form>
        <div class="mb-6">
          <label
            for="date"
            class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
          >
            投稿日 ※数字を入れると西暦・月・日が反映されます。
          </label>
          <input
            type="date"
            id="date"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
          >
            投稿テキスト文 (例:#20 試合ハイライト。そして重大告知あり！？)
          </label>
          <input
            type="text"
            id="PostText"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
          >
            投稿URL
          </label>
          <input
            type="url"
            id="TextUrl"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-5"
            required
          ></input>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10"
        >
          投稿！
        </button>
      </form>
    </div>
  );
};

export default LinkPost;
