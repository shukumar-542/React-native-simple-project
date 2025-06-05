import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";

const MealsDetailsScreen = ({ route, navigation }) => {

  const favoriteMealsCtx = useContext(FavoriteContext);


  const mealId = route.params.mealId;


  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

  const headerToggleFavorite = ()=>{
    if(mealIsFavorite){
      favoriteMealsCtx.removeFavorite(mealId)
    }else{
      favoriteMealsCtx.addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight : ()=>{
            return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color={"white"}  onPress={headerToggleFavorite}/>
        }
    });
  }, [navigation, headerToggleFavorite]);

  // console.log(selectedMeal.imageUrl);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailsText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title={"Ingredients"} />
          <List data={selectedMeal.ingredients} />
          <Subtitle title={"Steps"} />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
