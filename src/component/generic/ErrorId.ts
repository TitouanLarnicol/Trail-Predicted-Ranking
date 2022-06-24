export enum ErrorId {
    WRONG_URL = "WRONG_URL",
    WRONG_RACE_NAME = "WRONG_RACE_NAME",
    FORBIDDEN = "FORBIDDEN",
}

export function getErrorLabel(errorId: ErrorId): string {
    let errorLabel: string = "";
    switch (errorId) {
        case ErrorId.WRONG_URL:
            errorLabel = "Unknown URL. Only url from Live trail or Track trail are working for now."
            break;
        case ErrorId.WRONG_RACE_NAME:
            errorLabel = "The race does not exist. Please check the spelling and try again or contact us."
            break;
        case ErrorId.FORBIDDEN:
            errorLabel = "Access forbidden"
            break;
        default:
            break;
    }
    return errorLabel;
}