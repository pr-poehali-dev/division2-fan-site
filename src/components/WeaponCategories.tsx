import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const weapons = [
  {
    category: "Штурмовые винтовки",
    icon: "Zap",
    count: 25,
    description: "Универсальное оружие для средних дистанций",
    examples: ["AK-47", "M4A1", "SCAR-L"],
    damage: "Высокий",
    range: "Средний",
    accuracy: "Высокая",
  },
  {
    category: "Снайперские винтовки",
    icon: "Target",
    count: 18,
    description: "Точное оружие дальнего боя",
    examples: ["M700", "SVD", "Hunting M44"],
    damage: "Критический",
    range: "Дальний",
    accuracy: "Максимальная",
  },
  {
    category: "Пулеметы",
    icon: "Flame",
    count: 15,
    description: "Тяжелое вооружение для подавления",
    examples: ["M60", "MG5", "M249 Para"],
    damage: "Очень высокий",
    range: "Средний",
    accuracy: "Средняя",
  },
  {
    category: "Пистолеты-пулеметы",
    icon: "Zap",
    count: 20,
    description: "Быстрое оружие ближнего боя",
    examples: ["Vector", "MP5", "UMP-45"],
    damage: "Средний",
    range: "Ближний",
    accuracy: "Средняя",
  },
];

const WeaponCategories = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-oswald">
            АРСЕНАЛ АГЕНТА
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Более 100 видов оружия для любого стиля боя
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weapons.map((weapon, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-orange-600/20 flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                  <Icon
                    name={weapon.icon as any}
                    size={28}
                    className="text-orange-500"
                  />
                </div>
                <CardTitle className="text-lg text-white font-oswald">
                  {weapon.category}
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-orange-600/20 text-orange-400 border-orange-600/30"
                >
                  {weapon.count} видов
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm">{weapon.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Урон:</span>
                    <span className="text-orange-400">{weapon.damage}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Дальность:</span>
                    <span className="text-orange-400">{weapon.range}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Точность:</span>
                    <span className="text-orange-400">{weapon.accuracy}</span>
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
