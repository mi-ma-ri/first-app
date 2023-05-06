import React from "react";

const Statement = () => {
  const style = {
    margin: "0 auto",
    marginTop: 80,
  };
  return (
    <div style={style}>
      <h1 class="text-5xl font-mono dark:text-white text-aqua-500">
        ソサイチ関東リーグ1部所属
        <small class="ml-2 font-mono text-purple-500 dark:text-purple-400">
          新世界制覇
        </small>
      </h1>

      <div style={style}>
        <h1 class="font-mono mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white">
          Youtubeチャンネル「Official新世界」
        </h1>
        <p class="mb-6 text-lg font-normal text-red-500 lg:text-xl sm:px-1 xl:px-1 dark:text-gray-400">
          チーム創設から7年、ついにYoutubeチャンネルを開設！サッカーにダンスに、、、幅広く挑戦中！乞うご期待
        </p>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>投稿日</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>2023/05/01</td>
                <td>https://www.youtube.com/watch?v=e79hxewCWkQ&t=471s</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>2023/05/01</td>
                <td>https://www.youtube.com/watch?v=e79hxewCWkQ&t=471s</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>2023/05/01</td>
                <td>https://www.youtube.com/watch?v=e79hxewCWkQ&t=471s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statement;
