import { Manufacturer } from './manufacturer.interface';
import { Location } from './location.interface';
import { Lot } from './lot.interface';


export interface QualityInspection {

}

export interface StorageInstruction
{
    id: string;
    name: string;

}

export interface Item {
    id: string;
    name: string;
    MFG: Manufacturer;
    locationMfg: Location;
    dateOfMFg: Date;
    expiryDate: Date;
    lotNumber: Lot;
    storageInstruction: StorageInstruction;
    lastQCDate: Date;
    QC: QualityInspection;
};
