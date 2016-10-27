import { User } from './user.interface';
import { Comment } from './comment.interface';

enum TestType {
    Up = 1,
    Down,
    Left,
    Right
}

enum ResultType {
    resultNumber = 1,
    resultString = 2
}

export interface Disposition
{

}

export interface Result
{
    resultType : ResultType;
    resultNumber : number;
    resultString : string;
}

export interface Test {
    id: string;
    name: string;
    comment : Comment;
    user: User;
    testType:  TestType;
    lowerSpec: ResultType;
    upperSpec: ResultType;
    disposition : Disposition;
};


export interface SingleResultTest extends Test
{
    
}


export interface MultipleResultTest extends Test
{
    tests: SingleResultTest[];
}

export interface CalculatedResults extends Test
{
    tests: SingleResultTest[];

}


export interface BatchOnlyResults extends Test
{
    tests: SingleResultTest[];

}

