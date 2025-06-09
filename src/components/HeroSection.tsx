import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-red-950/40 to-slate-900 overflow-hidden">
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
            <span className="inline-block px-4 py-2 bg-red-600/30 text-red-400 text-sm font-mono border border-red-500/50 rounded animate-pulse-glow">
              ⚠️ АКТИВНАЯ ЗОНА БОЕВЫХ ДЕЙСТВИЙ ⚠️
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 font-oswald tracking-tight animate-neon-flicker">
            DIVISION
            <span className="block text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
              OPERATIVE
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl font-semibold">
            Вашингтон пал. Цивилизация уничтожена. Как элитный боец Дивизии, ты
            — последний щит между хаосом и полным истреблением человечества.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3 text-lg font-bold border border-red-500 animate-pulse-glow hover:animate-battle-shake"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              НАЧАТЬ ЗАЧИСТКУ
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-red-600 text-red-400 hover:bg-red-900/50 px-8 py-3 text-lg font-bold backdrop-blur-sm"
            >
              <Icon name="Crosshair" className="mr-2" size={20} />
              СОБРАТЬ ОТРЯД
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 animate-neon-flicker">
                2.4M+
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                УБИТЫХ ВРАГОВ
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 animate-neon-flicker">
                15+
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                ЗАЧИЩЕННЫХ СЕКТОРОВ
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 animate-neon-flicker">
                100+
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                ОРУДИЙ СМЕРТИ
              </div>
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
