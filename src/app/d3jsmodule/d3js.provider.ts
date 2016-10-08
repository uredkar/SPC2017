import {Injectable } from '@angular/core';
@Injectable()
export class GetUserMenuService {
    getMenu = () => [
        { id: 1, name: 'BMW' },
        { id: 2, name: 'Suzuki' },
        { id: 3, name: 'Volkswagen' }
    ];
}