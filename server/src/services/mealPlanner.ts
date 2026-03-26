/**
 * Meal Planner
 *
 * Composes weekly plans and generates aggregated grocery lists.
 */

export interface WeeklyPlan {
  id?: string;
  userId: string;
  meals: PlannedMeal[];
  totalCost: number;
  totalCalories: number;
  totalProtein: number;
}

export interface PlannedMeal {
  recipeId: string;
  dayOfWeek: number;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
}

export interface GroceryItem {
  ingredientId: string;
  name: string;
  totalQuantity: number;
  unit: string;
  estimatedCost: number;
}

export function composePlan(
  _userId: string,
  _selectedMeals: any[]
): WeeklyPlan {
  // TODO: Assemble meals into a weekly plan
  return { userId: _userId, meals: [], totalCost: 0, totalCalories: 0, totalProtein: 0 };
}

export function generateGroceryList(_plan: WeeklyPlan): GroceryItem[] {
  // TODO: Aggregate ingredients across all meals
  return [];
}
