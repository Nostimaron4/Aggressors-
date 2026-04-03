import { Hero } from "../components/Hero";
import { LiveFeed } from "../components/LiveFeed";
import { TrustBar } from "../components/TrustBar";
import { GameGrid } from "../components/GameGrid";

export function Home() {
  return (
    <>
      <LiveFeed />
      <Hero />
      <TrustBar />
      <GameGrid />
    </>
  );
}
