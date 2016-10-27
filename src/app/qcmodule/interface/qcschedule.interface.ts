import { Team } from './team.interface';
import { Item } from './item.interface';
import { Lot } from './lot.interface';
import { PO } from './po.interface';
import { QcTestProtocol } from './qctestprotocol.interface';
import { QcSample } from './qcsamplingplan.interface';

export interface QcSchedule {
    id: string;
    testingTeam: Team;
    itemNo: Item;
    lot: Lot;
    po: PO;
    testingProtocol: QcTestProtocol;
    currentSampleNumber: QcSample;
};

