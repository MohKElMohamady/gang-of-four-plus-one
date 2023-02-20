import {
  INutritionFactsBuilder,
  NutritionFacts,
  NutritionFactsBuilder,
} from "./nutrition-facts";

function main() {
  const mtnDew = new NutritionFactsBuilder()
    .servingSize(1)
    .servings(1)
    .calories(170)
    .carbohydrate(0)
    .fat(0)
    .sodium(60)
    .sugars(46)
    .build();
  console.log(mtnDew.toString());
}

main();
