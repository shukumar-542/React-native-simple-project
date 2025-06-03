import React from "react";
import { Pressable, StyleSheet, Text, View , Platform } from "react-native";

const CategoryGridTile = ({ title, color , onPress }) => {
  return (
    <View style={[styles.girdItem , {backgroundColor : color}]}>
      <Pressable android_ripple={{color : '#ccc'}} style={({pressed})=> [styles.button , pressed ? styles.buttonPressed : null]}
        onPress={onPress}
        >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  girdItem: {
    flex: 1,
    margin: 24,
    height: 180,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow : Platform.OS === "android" ?  'hidden' : "visible"
  },
  button: {
    flex: 1,
  },
  buttonPressed : {
    opacity : 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title :  {
    fontWeight : "bold",
    fontSize : 18
  }
});
