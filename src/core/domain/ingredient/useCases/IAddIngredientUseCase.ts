import AppError from '../../../shared/interfaces/AppError';
import IngredientToSaveDTO from '../dtos/IngredientToSaveDTO';
import Ingredient from '../entities/Ingredient';
import IIngredientRepository from '../repositories/IIngredientRepository';

interface IAddIngredientUseCase {
    getRepository(): IIngredientRepository,
    perform(ingredientToSave: IngredientToSaveDTO): Promise<Ingredient | AppError>
}

export default IAddIngredientUseCase;
