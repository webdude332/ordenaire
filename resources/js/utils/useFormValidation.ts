// useFormValidation.ts
import { useState, useCallback } from 'react';
import { ValidationRule } from './validationRules';

export interface FieldConfig {
    value: string;
    validators?: ValidationRule[];
}

export interface FormConfig {
    [key: string]: FieldConfig;
}

export const useFormValidation = (initialConfig: FormConfig) => {
    // Extract initial values
    const initialValues = Object.keys(initialConfig).reduce((acc, key) => {
        acc[key] = initialConfig[key].value;
        return acc;
    }, {} as Record<string, string>);

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, string | undefined>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    // Validate a single field
    const validateField = useCallback(
        (fieldName: string, value: string) => {
            const validators = initialConfig[fieldName]?.validators;
            if (!validators || validators.length === 0) return undefined;

            for (const validator of validators) {
                const error = validator(value);
                if (error) return error;
            }
            return undefined;
        },
        [initialConfig]
    );

    // Handle input change
    const handleChange = useCallback(
        (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const newValue = e.target.value;
            
            setValues((prev) => ({ ...prev, [fieldName]: newValue }));

            // Validate on change (only if field has been touched or has a value)
            if (touched[fieldName] || newValue.length > 0) {
                const error = validateField(fieldName, newValue);
                setErrors((prev) => ({ ...prev, [fieldName]: error }));
            }
        },
        [touched, validateField]
    );

    // Handle blur
    const handleBlur = useCallback(
        (fieldName: string) => () => {
            setTouched((prev) => ({ ...prev, [fieldName]: true }));
            const error = validateField(fieldName, values[fieldName]);
            setErrors((prev) => ({ ...prev, [fieldName]: error }));
        },
        [values, validateField]
    );

    // Validate all fields
    const validateAll = useCallback(() => {
        const newErrors: Record<string, string | undefined> = {};
        let isValid = true;

        Object.keys(initialConfig).forEach((fieldName) => {
            const error = validateField(fieldName, values[fieldName]);
            newErrors[fieldName] = error;
            if (error) isValid = false;
        });

        setErrors(newErrors);
        setTouched(
            Object.keys(initialConfig).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {} as Record<string, boolean>)
        );

        return isValid;
    }, [initialConfig, values, validateField]);

    // Reset form
    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }, [initialValues]);

    // Set a specific field value programmatically
    const setValue = useCallback(
        (fieldName: string, value: string) => {
            setValues((prev) => ({ ...prev, [fieldName]: value }));
            
            if (touched[fieldName]) {
                const error = validateField(fieldName, value);
                setErrors((prev) => ({ ...prev, [fieldName]: error }));
            }
        },
        [touched, validateField]
    );

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        validateAll,
        resetForm,
        setValue,
    };
};