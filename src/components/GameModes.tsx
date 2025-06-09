import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const modes = [
  {
    title: "Темная Зона",
    type: "PvPvE",
    players: "1-12",
    description:
      "Опасная зона с лучшей добычей, где другие агенты могут стать врагами",
    features: ["Экстракция добычи", "PvP сражения", "Высокий риск-награда"],
    difficulty: "Экстремальная",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
    color: "from-red-600 to-orange-600",
  },
  {
    title: "Конфликт",
    type: "PvP",
    players: "4v4",
    description: "Структурированные PvP матчи с различными режимами",
    features: ["Доминирование", "Скирмиш", "Рейтинговые матчи"],
    difficulty: "Высокая",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop",
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "Миссии",
    type: "PvE",
    players: "1-4",
    description: "Кооперативные миссии по восстановлению Вашингтона",
    features: ["Сюжетная кампания", "Сложности", "Еженедельные задания"],
    difficulty: "Переменная",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
    color: "from-green-600 to-teal-600",
  },
  {
    title: "Рейды",
    type: "PvE",
    players: "8",
    description: "Масштабные операции для опытных отрядов",
    features: ["Сложная механика", "Командная работа", "Эксклюзивная добыча"],
    difficulty: "Легендарная",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
    color: "from-purple-600 to-pink-600",
  },
];

const GameModes = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-oswald">
            РЕЖИМЫ ИГРЫ
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            От кооперативных миссий до интенсивного PvP
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modes.map((mode, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden"
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
                  <h4 className="text-orange-500 font-semibold mb-3 flex items-center">
                    <Icon name="Star" size={16} className="mr-2" />
                    Особенности:
                  </h4>
                  <div className="space-y-2">
                    {mode.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-green-500 mr-2 flex-shrink-0"
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${mode.color} hover:opacity-90 text-white border-none`}
                >
                  <Icon name="Play" className="mr-2" size={16} />
                  Играть сейчас
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
