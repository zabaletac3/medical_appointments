import { ValidationError } from "class-validator/types/validation/ValidationError";
import { Response } from "express";

export enum HttpStatus {
    OK = 200,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
}


export class HttpResponse {


    static Ok(res: Response, data?: any): Response {
        return res.status(HttpStatus.OK).json({
            success: true,
            data: data,
        });
    }

    static ValidationError(res: Response, errors: any): Response {
        return res.status(HttpStatus.BAD_REQUEST).json({
            success: false,
            errors: errors,
        });
    }

    static NotFound(res: Response, message?: string): Response {

        return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            error: message,
        });
    }

    static Unauthorized(res: Response, data?: ValidationError): Response {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            success: false,
            statusMsg: "Unauthorized",
            error: data,
        });
    }

    static Forbidden(res: Response, data?: any): Response {
        return res.status(HttpStatus.FORBIDDEN).json({
            success: false,
            statusMsg: "Forbidden",
            error: data,
        });
    }

    static Error(res: Response, data?: any): Response {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusMsg: "Internal server error",
            error: data,
        });
    }
}
