import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsPast(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isPast',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return value instanceof Date && value < new Date();
                },
                defaultMessage(args: ValidationArguments) {
                    return 'Date cannot be in the future';
                }
            },
        });
    };
}