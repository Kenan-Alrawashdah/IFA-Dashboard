export class ApiResponse<T = undefined>
{
    data : T; 
    success: boolean;
    errors:string[];
    
}