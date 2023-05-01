import React from "react";

const statement = () => {
  const style = {
    margin: "0 auto",
    marginTop: 50,
  };
  return (
    <div style={style}>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white">
        ソサイチ関東リーグ1部所属{" "}
        <span class="text-blue-600 dark:text-blue-500">新世界制覇</span>
      </h1>
      <p class="text-lg font-normal text-white-500 lg:text-xl dark:text-gray-400">
        さいたま・西大宮を拠点に2017年から7人制サッカーソサイチリーグに加盟。
        現在、チーム発足7シーズン目に突入！youtubeチャンネルも開設！
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default statement;
