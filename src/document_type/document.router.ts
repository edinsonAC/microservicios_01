import { BaseRouter } from '../shared/router/router';
import { DocumentController } from './controller/document.controller';
import { DocumentMiddleware } from './middleware/document.middleware';

export class DocumentRouter extends BaseRouter<DocumentController, DocumentMiddleware>{

    constructor() {
        super(DocumentController, DocumentMiddleware)
    }

    routes(): void {
        this.router.get(
            "/documents",
            (req, res) => this.controller.findAll(req, res))

        this.router.post(
            "/document/create",
            (req, res, next) => this.middleware.validateDocument(req, res, next),
            (req, res) => this.controller.create(req, res)
        )
    }
}