import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const classes = [
  {
    name: "Подрывник",
    description: "Специалист по взрывчатым веществам и тяжелому вооружению",
    icon: "Bomb",
    color: "from-red-600 to-orange-600",
    skills: ["Гранатомет", "Кластерные мины", "Артиллерийский удар"],
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
  {
    name: "Снайпер",
    description: "Мастер дальнего боя и точных выстрелов",
    icon: "Crosshair",
    color: "from-blue-600 to-cyan-600",
    skills: ["TAC-50 винтовка", "Дрон-разведчик", "Маркировка целей"],
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
  },
  {
    name: "Техник",
    description: "Эксперт по боевым дронам и технологиям",
    icon: "Settings",
    color: "from-green-600 to-emerald-600",
    skills: ["Штурмовая турель", "Ремонтный дрон", "Химический пуск"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
  },
];

const AgentClasses = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-oswald">
            СПЕЦИАЛИЗАЦИИ АГЕНТОВ
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Выберите свой стиль игры и развивайте уникальные навыки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((agentClass, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${agentClass.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={agentClass.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-2xl text-white font-oswald">
                  {agentClass.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div
                  className="w-full h-48 mb-6 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${agentClass.image})` }}
                />
                <p className="text-gray-400 mb-6">{agentClass.description}</p>
                <div className="space-y-2">
                  <h4 className="text-orange-500 font-semibold mb-3">
                    Ключевые навыки:
                  </h4>
                  {agentClass.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentClasses;
