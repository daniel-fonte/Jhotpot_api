import IngredientToSaveDTO from '../dtos/IngredientToSaveDTO';
import Ingredient from '../entities/Ingredient';
import IIngredientRepository from './IIngredientRepository';

class IngredientRepositoryMock implements IIngredientRepository {
  private database: Ingredient[] = [];

  async save(ingredient: IngredientToSaveDTO): Promise<Ingredient | null> {
    this.database.push({
      Id: 1,
      Name: ingredient.Name,
      Calories: ingredient.Calories,
      Created_At: ingredient.Created_At,
      Updated_At: ingredient.Updated_At
    })

    return this.database[0]
  }
}

export default IngredientRepositoryMock;
