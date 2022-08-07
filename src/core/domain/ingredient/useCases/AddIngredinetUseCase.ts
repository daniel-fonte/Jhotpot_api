import AppError from '../../../shared/interfaces/AppError';
import IngredientToSaveDTO from '../dtos/IngredientToSaveDTO';
import Ingredient from '../entities/Ingredient';
import IIngredientRepository from '../repositories/IIngredientRepository';
import IAddIngredientUseCase from './IAddIngredientUseCase';

class AddIngredientUseCase implements IAddIngredientUseCase {
  private ingredientRepository: IIngredientRepository;

  constructor(ingredientRepository: IIngredientRepository) {
    this.ingredientRepository = ingredientRepository;
  }

  getRepository(): IIngredientRepository {
    return this.ingredientRepository;
  }

  async perform(ingredientToSave: IngredientToSaveDTO): Promise<Ingredient | AppError> {
    if (ingredientToSave.Name === '') throw new AppError('Ingredient Name is required.', 400);

    const ingredientSaved = await this.ingredientRepository.save(ingredientToSave);

    if (!ingredientSaved) throw new AppError('There was an error saving Ingredient', 400);

    return ingredientSaved;
  }
}

export default AddIngredientUseCase;
