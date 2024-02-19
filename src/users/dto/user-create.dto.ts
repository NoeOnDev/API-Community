import { IsEmail, IsNotEmpty, MinLength, MaxLength, Matches } from 'class-validator';

export class UserCreateDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    birthday: Date;

    @MinLength(10)
    @MaxLength(10)
    phone: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    @Matches(/^[a-z]+$/, { message: 'username must contain only lowercase letters' })
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, { message: 'password must contain at least one uppercase letter, one lowercase letter and one number' })
    password: string;
}