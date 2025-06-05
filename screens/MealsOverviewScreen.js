import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect } from "react";
import MealList from "../components/MealsList/MealList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;
  // console.log(categoryTitle);

  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

 return <MealList items={displayedMeals} />
};

export default MealsOverviewScreen;


