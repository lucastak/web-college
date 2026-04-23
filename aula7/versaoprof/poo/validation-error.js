export class ValidationError extends Error {

    constructor( mensagem ) {
        super( mensagem );
        this.name = 'ValidationError';
    }
}