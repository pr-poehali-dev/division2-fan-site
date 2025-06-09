import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const classes = [
  {
    name: "ДЕМОЛИТОР",
    description: "Мастер массового уничтожения и тяжелой артиллерии",
    icon: "Bomb",
    color: "from-red-700 to-crimson-800",
    skills: ["Гранатомет М32", "Кластерные боеголовки", "Огневой шторм"],
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
  {
    name: "СНАЙПЕР-УБИЙЦА",
    description: "Элитный ликвидатор дальнего действия",
    icon: "Crosshair",
    color: "from-red-600 to-red-900",
    skills: ["TAC-50 убийца", "Боевой дрон-охотник", "Метка смерти"],
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
  },
  {
    name: "ТЕХНО-ВОИН",
    description: "Киберспециалист боевых технологий будущего",
    icon: "Zap",
    color: "from-crimson-600 to-red-800",
    skills: ["Плазменная турель", "Дрон-убийца", "Химическая атака"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
  },
];

const AgentClasses = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-oswald animate-neon-flicker">
            КЛАССЫ УБИЙЦ
          </h2>
          <p className="text-xl text-red-400 max-w-2xl mx-auto font-bold">
            Выбери свой путь уничтожения врагов человечества
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((agentClass, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-red-700 hover:border-red-500 transition-all duration-300 group hover:scale-105 animate-pulse-glow"
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
                  <h4 className="text-red-400 font-bold mb-3 animate-neon-flicker">
                    БОЕВОЙ АРСЕНАЛ:
                  </h4>
                  {agentClass.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Icon
                        name="Target"
                        size={16}
                        className="text-red-500 mr-2 flex-shrink-0"
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
