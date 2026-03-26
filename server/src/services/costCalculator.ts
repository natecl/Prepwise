/**
 * Cost Calculator
 *
 * Handles ingredient-level pricing, per-meal and per-week cost breakdowns.
 */

export interface IngredientCost {
  ingredientId: string;
  name: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalCost: number;
}

export function calculateMealCost(_recipeId: string): number {
  // TODO: Sum ingredient costs for a recipe
  return 0;
}

export function calculateWeeklyCost(_mealIds: string[]): number {
  // TODO: Sum costs across all meals in a week
  return 0;
}
