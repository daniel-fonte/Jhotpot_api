import AppError from '../../../shared/interfaces/AppError';
import IngredientToSaveDTO from '../dtos/IngredientToSaveDTO';
import Ingredient from '../entities/Ingredient';
import IngredientRepositoryMock from '../repositories/IngredientRepositoryMock';
import AddIngredientUseCase from './AddIngredinetUseCase';

describe('Add Ingredient', () => {
  it('Should return Ingredient add', async () => {
    const ingredientRepositoryMock = new IngredientRepositoryMock();

    const sut = new AddIngredientUseCase(ingredientRepositoryMock);

    const currentDate = new Date();

    const ingredient: IngredientToSaveDTO = {
      Name: 'Chesse',
      Calories: 400,
      Created_At: currentDate,
      Updated_At: currentDate,
    };

    const ingredientAdded = await sut.perform(ingredient);

    expect(ingredientAdded).toHaveProperty('Id');
    expect(ingredientAdded).toEqual<Ingredient>({
      Id: 1,
      Name: 'Chesse',
      Calories: 400,
      Created_At: currentDate,
      Updated_At: currentDate,
    });
  });

  it('Should Ingredient name required', async () => {
    const ingredientRepositoryMock = new IngredientRepositoryMock();

    const sut = new AddIngredientUseCase(ingredientRepositoryMock);

    const currentDate = new Date();

    const ingredient: IngredientToSaveDTO = {
      Name: '',
      Calories: 400,
      Created_At: currentDate,
      Updated_At: currentDate,
    };

    await expect(sut.perform(ingredient)).rejects.toThrow(new AppError('Ingredient Name is required.', 400));
  });
});
