import { Injectable } from '@angular/core';

import { Team } from '../interface/team.interface';
import { Item } from '../interface/item.interface';
import { Lot } from  '../interface/lot.interface';
import { PO } from   '../interface/po.interface';
import { QcTestProtocol } from '../interface/qctestprotocol.interface';
import { QcSample } from '../interface/qcsamplingplan.interface';
import { QcSchedule } from '../interface/qcschedule.interface';


export interface QcSampleList {
    [index: string]: QcSample;
}


let qcSampleList = <QcSampleList>{};

qcSampleList["1"] = <QcSample>{ id: "sample1", name: "Lot1Plant1" };
qcSampleList["2"] = <QcSample>{ id: "Lot1", name: "Lot1Plant1" };
qcSampleList["3"] = <QcSample>{ id: "Lot1", name: "Lot1Plant1" };
qcSampleList["4"] = <QcSample>{ id: "Lot1", name: "Lot1Plant1" };

interface QcTestProtocolList {
    [index: string]: QcTestProtocol;
}
let qcTestProtocolList = <QcTestProtocolList>{};

qcTestProtocolList["1"] = <QcTestProtocol>{ id: "Lot1", name: "Lot1Plant1" };
qcTestProtocolList["2"] = <QcTestProtocol>{ id: "Lot1", name: "Lot1Plant1" };
qcTestProtocolList["3"] = <QcTestProtocol>{ id: "Lot1", name: "Lot1Plant1" };
qcTestProtocolList["4"] = <QcTestProtocol>{ id: "Lot1", name: "Lot1Plant1" };


interface QcPOList {
    [index: string]: PO;
}

let qcPOList = <QcPOList>{};
qcPOList["Lot1"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcPOList["Lot1"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcPOList["Lot1"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcPOList["Lot1"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcPOList["Lot1"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };

interface QcLotList {
    [index: string]: Lot;
}

let qcLotList = <QcLotList>{};
qcLotList["Lot1"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot2"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot3"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot4"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot5"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot6"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot7"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot8"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot9"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };
qcLotList["Lot10"] = <Lot>{ id: "Lot1", name: "Lot1Plant1" };


interface QcTeamList {
    [index: string]: Team;
}

let qcTeamList = <QcTeamList>{};
qcTeamList["T1"] = <Team>{ id: "TeamOne", name: "Plant1" };
qcTeamList["T2"] = <Team>{ id: "TeamOne", name: "Plant1" };
qcTeamList["T3"] = <Team>{ id: "TeamOne", name: "Plant1" };
qcTeamList["T4"] = <Team>{ id: "TeamOne", name: "Plant1" };

interface QcScheduleList {
    [index: string]: QcSchedule;
}


let qcScheduleList = <QcScheduleList>{};

qcScheduleList["1"] = <QcSchedule>{ id: "123", testingTeam: qcTeamList["TeamOne"], lot: qcLotList["Lot1"] };
qcScheduleList["2"] = <QcSchedule>{ id: "123", testingTeam: qcTeamList["TeamOne"], lot: qcLotList["Lot1"] };
qcScheduleList["3"] = <QcSchedule>{ id: "123", testingTeam: qcTeamList["TeamOne"], lot: qcLotList["Lot1"] };
qcScheduleList["4"] = <QcSchedule>{ id: "123", testingTeam: qcTeamList["TeamOne"], lot: qcLotList["Lot1"] };
qcScheduleList["5"] = <QcSchedule>{ id: "123", testingTeam: qcTeamList["TeamOne"], lot: qcLotList["Lot1"] };


@Injectable()
export class QcDataService {

    getQcSchedule()
    {
        return qcScheduleList;
    }
 
}
