import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const weapons = [
  {
    category: "Штурмовое вооружение",
    icon: "Zap",
    count: 25,
    description: "Смертоносное оружие для ближнего уничтожения",
    examples: ["AK-74 УБИЙЦА", "M4A1 ХИЩНИК", "SCAR-L ТЕРМИНАТОР"],
    damage: "СМЕРТЕЛЬНЫЙ",
    range: "Средний",
    accuracy: "КРИТИЧЕСКАЯ",
  },
  {
    category: "Снайперские орудия",
    icon: "Target",
    count: 18,
    description: "Оружие бесшумного истребления на расстоянии",
    examples: ["M700 ПАЛАЧ", "SVD ЖНЕЦ", "Hunting M44 ОХОТНИК"],
    damage: "МГНОВЕННАЯ СМЕРТЬ",
    range: "ЭКСТРЕМАЛЬНЫЙ",
    accuracy: "АБСОЛЮТНАЯ",
  },
  {
    category: "Тяжелая артиллерия",
    icon: "Flame",
    count: 15,
    description: "Орудия массового подавления противника",
    examples: ["M60 РАЗРУШИТЕЛЬ", "MG5 ДЕМОН", "M249 БУРЯ"],
    damage: "КАТАСТРОФИЧЕСКИЙ",
    range: "Средний",
    accuracy: "ПОДАВЛЯЮЩАЯ",
  },
  {
    category: "Скорострельное оружие",
    icon: "Zap",
    count: 20,
    description: "Быстрое орудие ближнего истребления",
    examples: ["Vector МОЛНИЯ", "MP5 ШТОРМ", "UMP-45 ФУРИЯ"],
    damage: "ВЫСОКИЙ",
    range: "БЛИЖНИЙ",
    accuracy: "ТОЧНАЯ",
  },
];

const WeaponCategories = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-oswald animate-neon-flicker">
            АРСЕНАЛ СМЕРТИ
          </h2>
          <p className="text-xl text-red-400 max-w-2xl mx-auto font-bold">
            Более 100 орудий уничтожения для любого стиля ликвидации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weapons.map((weapon, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-red-700 hover:border-red-500 transition-all duration-300 group hover:animate-pulse-glow"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-red-600/30 flex items-center justify-center group-hover:bg-red-600/50 transition-colors animate-pulse">
                  <Icon
                    name={weapon.icon as any}
                    size={28}
                    className="text-red-500"
                  />
                </div>
                <CardTitle className="text-lg text-white font-oswald">
                  {weapon.category}
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-red-600/30 text-red-400 border-red-600/50 font-bold"
                >
                  {weapon.count} ТИПОВ
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm">{weapon.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Урон:</span>
                    <span className="text-red-400 font-bold">
                      {weapon.damage}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Дальность:</span>
                    <span className="text-red-400 font-bold">
                      {weapon.range}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Точность:</span>
                    <span className="text-red-400 font-bold">
                      {weapon.accuracy}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Примеры:</p>
                  <div className="flex flex-wrap gap-1">
                    {weapon.examples.map((example, exampleIndex) => (
                      <Badge
                        key={exampleIndex}
                        variant="outline"
                        className="text-xs border-slate-600 text-gray-400"
                      >
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaponCategories;
