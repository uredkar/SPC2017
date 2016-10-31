
import { Theme } from './theme.interface';

export interface User {
    id: string;
    name: string;
    age?: number;
    gender?: string;
    role?: string;
    theme?: Theme;
    isActive?: boolean;
    topics?: string[];
    toggle?: boolean;
}
