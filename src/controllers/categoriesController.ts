import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";
import { getPaginationParams } from "../helpers/getPaginetionParams";

export const categoriesController = {
    index: async (req: Request, res: Response ) => {
        const [page, perPage] = getPaginationParams(req.query)

        try {
            const paginatedCategories = await categoryService.findAllPaginated(page, perPage)

            return res.json(paginatedCategories)

        } catch (err) {
            if (err instanceof Error){
                return res.status(400).json({ message: err.message})
            }
        }     
    }
}