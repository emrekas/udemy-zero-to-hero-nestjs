import { TaskStatus } from "../task.model";
import { IsOptional, IsIn } from "class-validator";

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn(Object.values(TaskStatus))
    status: TaskStatus;

    @IsOptional()
    search: string;
}