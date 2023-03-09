import { Request, Response } from "express";
import { DocumentService } from '../service/document.service';
import { HttpResponse } from '../../shared/response/http-response';

export class DocumentController{

    constructor(
        private readonly documentService:DocumentService = new DocumentService(),
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ){}

    async findAll(_req: Request, res: Response) {
        try {
            const example = await this.documentService.findAll();
            (example?.length === 0)
                ? this.httpResponse.NotFound(res, `no registered documents yet`)
                : this.httpResponse.Ok(res, example);
        } catch (error) {
            this.httpResponse.Error(res, error);
        }
    }
}