import IngredientToSaveDTO from "../dtos/IngredientToSaveDTO";
import Ingredient from "../entities/Ingredient";
import IIngredientRepository from "../repositories/IIngredientRepository";

interface IAddIngredientUseCase {
    getRepository(): IIngredientRepository,
    perform(ingredientToSave: IngredientToSaveDTO): Promise<Ingredient | null>
}

export default IAddIngredientUseCase;