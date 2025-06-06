import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const numberOfColumns = 2;

  function renderCategoryItem(itemData) {
    const pressHandler = () => {
        navigation.navigate("MealsOverview" , {
            categoryId : itemData?.item.id
        })
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item?.id}
      renderItem={renderCategoryItem}
      numColumns={numberOfColumns}
      key={numberOfColumns.toString()}
    />
  );
};

export default CategoriesScreen;
