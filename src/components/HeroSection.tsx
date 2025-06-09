import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-mono border border-orange-500/30 rounded">
              TACTICAL SHOOTER
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-oswald tracking-tight">
            THE DIVISION
            <span className="block text-orange-500">2</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Вашингтон находится на грани коллапса. Как агент Дивизии, вы —
            последняя надежда на восстановление порядка в хаосе.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать миссию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Найти отряд
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">2.4M+</div>
              <div className="text-sm text-gray-400">Активных агентов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">15+</div>
              <div className="text-sm text-gray-400">Районов Вашингтона</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">100+</div>
              <div className="text-sm text-gray-400">Видов оружия</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <Icon name="ChevronDown" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
