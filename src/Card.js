import React from "react";
import Member from "./Member";

const members = [
  {
    name: "中島 聡志",
    number: 13,
    position: "GK/Captain",
    image: "/nakajima.jpeg",
  },
  { name: "星子 雅典", number: 18, position: "GK", image: "/hoshiko.jpeg" },
  { name: "内田 航介", number: 2, position: "DF", image: "/uchida.jpeg" },
  { name: "岡田 翔", number: 3, position: "DF", image: "/okada.jpeg" },
  { name: "島村 貴大", number: 4, position: "DF", image: "/shimamura.jpeg" },
  { name: "前島 一慶", number: 5, position: "DF", image: "/maejima.jpeg" },
  { name: "近藤 誠", number: 6, position: "DF/MF/FW", image: "/kondo.jpeg" },
  { name: "繁田 秀斗", number: 8, position: "DF/MF", image: "/shigeta.jpeg" },
  { name: "礒部 裕基", number: 10, position: "FW", image: "/isobe.jpeg" },
  { name: "柳川 雄太", number: 14, position: "DF/FW", image: "/yanagawa.jpeg" },
  { name: "田中 熙仁朗", number: 16, position: "FW", image: "/tanaka.jpeg" },
  {
    name: "毛利 元訓",
    number: 17,
    position: "DF/Captain",
    image: "/mouri.jpeg",
  },
  { name: "阿部 祐希", number: 18, position: "FW", image: "/abe.jpeg" },
  { name: "福島 慶太", number: 21, position: "MF", image: "/fukushima.jpeg" },
  { name: "谷之口 寛斗", number: 22, position: "DF/MF", image: "/tani.jpeg" },
  { name: "鈴木 大貴", number: 24, position: "MF", image: "/suzuki.jpeg" },
  { name: "清水 道浩", number: 44, position: "MF/FW", image: "/shimizu.jpeg" },
];

const Card = () => {
  return (
    <div className="card">
      <h1 className="text-center font-mono text-5xl">
        2023シーズン所属メンバー
      </h1>
      <div className="flex flex-wrap justify-center">
        {" "}
        {/* フレックスボックスを適用 */}
        {members.map((item) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            {" "}
            {/* カラム幅を設定 */}
            <Member member={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
