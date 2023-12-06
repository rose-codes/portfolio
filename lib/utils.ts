export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false;
    }
    return true;
}

export const getErrorMessage = (error: unknown) => {
    let message: string;
    if (error instanceof Error) { // check if Error class
        message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) { // check if error is an object that has a 'message' property
        message = String(error.message);
    } else if (typeof error === "string") { // check if error is a string
        message = error;
    } else {
        message = "Something went wrong";
    }
    return message

}