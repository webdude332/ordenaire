// validationRules.ts
// Define all your validation rules in one place

export type ValidationRule = (value: string) => string | undefined;

export const validationRules = {
    required: (fieldName: string = 'This field'): ValidationRule => {
        return (value: string) => {
            if (!value || value.trim().length === 0) {
                return `${fieldName} is required.`;
            }
            return undefined;
        };
    },

    minLength: (min: number, fieldName: string = 'This field'): ValidationRule => {
        return (value: string) => {
            if (value.length > 0 && value.trim().length < min) {
                return `${fieldName} must be at least ${min} characters.`;
            }
            return undefined;
        };
    },

    maxLength: (max: number, fieldName: string = 'This field'): ValidationRule => {
        return (value: string) => {
            if (value.length > max) {
                return `${fieldName} must not exceed ${max} characters.`;
            }
            return undefined;
        };
    },

    email: (): ValidationRule => {
        return (value: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.length > 0 && !emailRegex.test(value)) {
                return 'Please enter a valid email address.';
            }
            return undefined;
        };
    },

    phone: (exactLength: number = 8): ValidationRule => {
        return (value: string) => {
            if (value.length > 0 && value.length < exactLength) {
                return `Phone number must be at least ${exactLength} digits.`;
            }
            return undefined;
        };
    },

    numeric: (): ValidationRule => {
        return (value: string) => {
            if (value.length > 0 && !/^[0-9]+$/.test(value)) {
                return 'Only numbers are allowed.';
            }
            return undefined;
        };
    },

    alphanumeric: (): ValidationRule => {
        return (value: string) => {
            if (value.length > 0 && !/^[a-zA-Z0-9]+$/.test(value)) {
                return 'Only letters and numbers are allowed.';
            }
            return undefined;
        };
    },

    pattern: (regex: RegExp, errorMessage: string): ValidationRule => {
        return (value: string) => {
            if (value.length > 0 && !regex.test(value)) {
                return errorMessage;
            }
            return undefined;
        };
    },

    custom: (validatorFn: (value: string) => boolean, errorMessage: string): ValidationRule => {
        return (value: string) => {
            if (value.length > 0 && !validatorFn(value)) {
                return errorMessage;
            }
            return undefined;
        };
    },
};

// Helper to combine multiple validation rules
export const combineValidators = (...validators: ValidationRule[]): ValidationRule => {
    return (value: string) => {
        for (const validator of validators) {
            const error = validator(value);
            if (error) return error;
        }
        return undefined;
    };
};