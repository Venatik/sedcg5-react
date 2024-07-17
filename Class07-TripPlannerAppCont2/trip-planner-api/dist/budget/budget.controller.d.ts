import { UpdateBudgetDTO } from './dto/budget.dto';
import { BudgetService } from './budget.service';
export declare class BudgetController {
    private budgetService;
    constructor(budgetService: BudgetService);
    updateBudget(id: string, requestBody: UpdateBudgetDTO): Promise<{
        message: string;
    }>;
}
