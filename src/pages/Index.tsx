import HeroSection from "@/components/HeroSection";
import AgentClasses from "@/components/AgentClasses";
import WeaponCategories from "@/components/WeaponCategories";
import GameModes from "@/components/GameModes";
import PlayerStats from "@/components/PlayerStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <AgentClasses />
      <WeaponCategories />
      <GameModes />
      <PlayerStats />
    </div>
  );
};

export default Index;
