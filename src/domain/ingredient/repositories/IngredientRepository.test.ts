import IngredientToSaveDTO from '../dtos/IngredientToSaveDTO';
import Ingredient from '../entities/Ingredient';
import IngredientRepositoryMock from './IngredientRepositoryMock';

describe('Ingredient Repository', () => {
  it('Should return Ingredient entity', async () => {
    const sutIngredientRepository = new IngredientRepositoryMock();

    const currentDate = new Date();

    const ingredientToSave: IngredientToSaveDTO = {
      Name: 'Chesse',
      Calories: 300,
      Created_At: currentDate,
      Updated_At: currentDate
    };

    const ingredientSaved = await sutIngredientRepository.save(ingredientToSave);

    expect(ingredientSaved).toEqual<Ingredient>({
      Id: 1,
      Name: 'Chesse',
      Calories: 300,
      Created_At: currentDate,
      Updated_At: currentDate,
    });
  });
});
