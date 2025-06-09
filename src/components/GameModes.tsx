import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const modes = [
  {
    title: "ЗОНА СМЕРТИ",
    type: "PvPvE",
    players: "1-12",
    description:
      "Смертельная зона с элитной добычей, где каждый агент — потенциальная цель",
    features: ["Экстракция под огнем", "Битвы насмерть", "Максимальный риск"],
    difficulty: "СМЕРТЕЛЬНАЯ",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
    color: "from-red-700 to-crimson-800",
  },
  {
    title: "БОЕВАЯ АРЕНА",
    type: "PvP",
    players: "4v4",
    description: "Структурированные смертельные поединки элитных бойцов",
    features: ["Захват территории", "Королевская битва", "Рейтинг убийц"],
    difficulty: "ЭКСТРЕМАЛЬНАЯ",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop",
    color: "from-red-600 to-red-900",
  },
  {
    title: "ЗАЧИСТКА СЕКТОРОВ",
    type: "PvE",
    players: "1-4",
    description:
      "Кооперативные операции по освобождению захваченных территорий",
    features: ["Штурм укреплений", "Боссы-мутанты", "Еженедельные казни"],
    difficulty: "ПЕРЕМЕННАЯ",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
    color: "from-crimson-600 to-red-800",
  },
  {
    title: "ОПЕРАЦИИ ВОЗМЕЗДИЯ",
    type: "PvE",
    players: "8",
    description: "Масштабные военные операции для элитных эскадронов смерти",
    features: [
      "Сложнейшая тактика",
      "Командное истребление",
      "Легендарные трофеи",
    ],
    difficulty: "ЛЕГЕНДАРНАЯ",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
    color: "from-red-800 to-crimson-900",
  },
];

const GameModes = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-oswald animate-neon-flicker">
            РЕЖИМЫ ВОЙНЫ
          </h2>
          <p className="text-xl text-red-400 max-w-2xl mx-auto font-bold">
            От кооперативного истребления до смертельного PvP
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modes.map((mode, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-red-700 hover:border-red-500 transition-all duration-300 group overflow-hidden hover:animate-pulse-glow"
            >
              <div className="relative">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${mode.image})` }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${mode.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    className={`bg-gradient-to-r ${mode.color} text-white border-none`}
                  >
                    {mode.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white bg-black/30"
                  >
                    {mode.players} игроков
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl text-white font-oswald">
                    {mode.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-slate-700 text-gray-300"
                  >
                    {mode.difficulty}
                  </Badge>
                </div>
                <p className="text-gray-400">{mode.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-red-400 font-bold mb-3 flex items-center animate-neon-flicker">
                    <Icon name="Skull" size={16} className="mr-2" />
                    ОСОБЕННОСТИ БИТВЫ:
                  </h4>
                  <div className="space-y-2">
                    {mode.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <Icon
                          name="Target"
                          size={14}
                          className="text-red-500 mr-2 flex-shrink-0"
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${mode.color} hover:opacity-90 text-white border-none`}
                >
                  <Icon name="Zap" className="mr-2" size={16} />
                  ВСТУПИТЬ В БОЙ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;
