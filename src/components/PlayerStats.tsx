import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PlayerStats = () => {
  const stats = [
    { label: "Уровень агента", value: 40, max: 40, color: "bg-orange-500" },
    { label: "Уровень мира", value: 5, max: 5, color: "bg-blue-500" },
    { label: "Прогресс сезона", value: 75, max: 100, color: "bg-purple-500" },
    {
      label: "Опыт специализации",
      value: 340,
      max: 500,
      color: "bg-green-500",
    },
  ];

  const achievements = [
    {
      name: "Освободитель Вашингтона",
      description: "Завершить основную кампанию",
      completed: true,
    },
    {
      name: "Мастер Темной Зоны",
      description: "Достичь ранга 50 в ТЗ",
      completed: true,
    },
    {
      name: "Легенда рейдов",
      description: "Пройти рейд на легендарной сложности",
      completed: false,
    },
    {
      name: "Коллекционер",
      description: "Собрать все экзотические предметы",
      completed: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-oswald animate-neon-flicker">
            ДОСЬЕ УБИЙЦЫ
          </h2>
          <p className="text-xl text-red-400 max-w-2xl mx-auto font-bold">
            Отслеживай свои достижения в искусстве войны
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Stats Card */}
          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white font-oswald flex items-center">
                <Icon
                  name="Crosshair"
                  className="mr-2 text-red-500"
                  size={24}
                />
                Боевая статистика
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">
                      {stat.label}
                    </span>
                    <span className="text-red-400 font-bold">
                      {stat.value}/{stat.max}
                    </span>
                  </div>
                  <Progress
                    value={(stat.value / stat.max) * 100}
                    className="h-2 bg-slate-700"
                  />
                </div>
              ))}

              <div className="pt-4 border-t border-slate-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-500 animate-neon-flicker">
                      247
                    </div>
                    <div className="text-sm text-gray-400 font-semibold">
                      ЧАСОВ ВОЙНЫ
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-500 animate-neon-flicker">
                      1,847
                    </div>
                    <div className="text-sm text-gray-400 font-semibold">
                      ПОДТВЕРЖДЕННЫХ УБИЙСТВ
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements Card */}
          <Card className="bg-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white font-oswald flex items-center">
                <Icon name="Skull" className="mr-2 text-red-500" size={24} />
                Боевые награды
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800/50"
                >
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      achievement.completed ? "bg-green-600" : "bg-slate-600"
                    }`}
                  >
                    <Icon
                      name={achievement.completed ? "Check" : "Lock"}
                      size={14}
                      className="text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4
                        className={`font-semibold ${
                          achievement.completed ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {achievement.name}
                      </h4>
                      {achievement.completed && (
                        <Badge className="bg-red-600 text-white text-xs font-bold animate-pulse">
                          ПОЛУЧЕНО
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-center pt-4 border-t border-slate-700">
                <div className="text-sm text-gray-400">
                  Прогресс достижений:{" "}
                  <span className="text-red-400 font-bold">2/4</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlayerStats;
