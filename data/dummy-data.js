import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'), 
  new Category('c5', 'Light & Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_-_rezepte_frontend.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_-_rezepte_frontend.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Salt',
      'Pepper'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Heat some olive oil in a large pot.',
      'Add the chopped tomatoes and onion to the pot.',
      'Cook for 10 minutes, stirring occasionally.',
      'Add the spaghetti to a pot of boiling water and cook for 8-10 minutes.',
      'Drain the spaghetti and add it to the tomato sauce.',
      'Season with salt and pepper to taste.',
      'Serve hot.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm2',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Toast_Hawaii.jpg/800px-Toast_Hawaii.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Place ham, pineapple and cheese on the buttered side',
      'Bake the toast in the oven at 200°C (390°F) for 10 minutes'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm3',
    ['c3'],
    'Classic Hamburger',
    'fairly-priced',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28stack%29.jpg/800px-Hamburger_%28stack%29.jpg',
    45,
    [
      '300g Ground Beef',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for ~4 minutes on each side',
      'Quickly fry the buns for ~1 minute on each side',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Wiener_Schnitzel_Brez_06.jpg/800px-Wiener_Schnitzel_Brez_06.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Breadcrumbs',
      '100g Flour',
      '300ml Butter',
      '1 Lemon'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally coat in breadcrumbs.',
      'Heat the butter in a large pan to almost sizzling and fry the schnitzels until golden brown on both sides.',
      'Make sure to turn the schnitzels several times while frying.',
      'Serve hot, with lemon slices.'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm5',
    ['c5'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Salad_with_smoked_salmon_and_avocado.jpg/800px-Salad_with_smoked_salmon_and_avocado.jpg',
    15,
    [
      'Arugula',
      'Lamb\'s Lettuce',
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt',
      'Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Mix mustard, vinegar and olive oil',
      'Add salmon to salad',
      'Dressing the salad'
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'challenging',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Orange_Mousse.jpg/800px-Orange_Mousse.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yogurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot with orange juice and 60g sugar',
      'Add yogurt and mix well',
      'Chill for 15 minutes',
      'Whip cream and 20g sugar until stiff',
      'Fold cream into mousse',
      'Chill again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pancakes_with_berries.jpg/800px-Pancakes_with_berries.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'fairly-priced',
    'challenging',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chicken_Curry.jpg/800px-Chicken_Curry.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add coconut milk and simmer for 20 minutes',
      'Serve with rice'
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Chocolate_Souffl%C3%A9.jpg/800px-Chocolate_Souffl%C3%A9.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '1 Tablespoon white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 Tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C (375°F). Brush a 6 ounce ramekin with melted butter and sprinkle with sugar. Place on a baking sheet.',
      'In a double boiler, melt chocolate and 1 tablespoon butter. Stir until smooth. Remove from heat.',
      'In a saucepan, whisk flour and cold milk until smooth. Bring to a boil over medium heat, stirring constantly, until thick. Remove from heat.',
      'Whisk in salt, cayenne pepper and egg yolk. Stir in melted chocolate. Pour into a large bowl.',
      'In a clean glass or metal bowl, whip egg whites with cream of tartar until stiff. Gradually add 1 tablespoon sugar, continue whipping until very stiff.',
      'Gently fold 1/3 of the egg whites into the chocolate mixture. Fold in the remaining egg whites until no streaks remain. Pour into prepared ramekin.',
      'Bake for 30-35 minutes, or until puffed and set. Serve immediately with whipped cream or ice cream, if desired.'
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Asparagus_Salad_with_Cherry_Tomatoes.jpg/800px-Asparagus_Salad_with_Cherry_Tomatoes.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water for 10 minutes',
      'Roast the pine nuts',
      'Halve the cherry tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve'
    ],
    true,
    true,
    true,
    true
  )
];