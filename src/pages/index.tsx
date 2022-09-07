import dynamic from "next/dynamic";

const Game = dynamic(() => import("components/Game").then((mod) => mod.Game), {
  ssr: false,
});

const TopPage = () => {
  return (
    <div className="h-screen w-screen">
      <Game></Game>
    </div>
  );
};

export default TopPage;
