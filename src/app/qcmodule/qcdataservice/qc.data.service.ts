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

let qcPlanningForQuality = [
    { step: "1", action: "Identify who are the customers of the new product or process" },
    { step: "2", action: "Determine the needs of those customers." },
    { step: "3", action: "Translate the needs into technical terms." },
    { step: "4", action: "Develop a product or process that can respond to those needs." },
    { step: "5", action: "Optimize the product of process so that it meets the needs of the customers including economic and performance goals." },
    { step: "6", action: "Develop the process required to actually produce the new product or to install the new process." },
    { step: "7", action: "Optimize that process." },
    { step: "8", action: " production or implement the new process." }];

let plan1 = "sample size 5 collected every 15 minutes";

let infoQ = `1. Data resolution: This is determined by measurement scale, measurement uncertainty and level of data aggregation,
    relative to the task at hand.The concept of rational sample is such an example.
2. Data structure: This relates to the data sources available for the specific analysis.Comprehensive data sources combine
structured quantitative data with unstructured, semantic based data.
3. Data integration: Properly combining data sources is not a trivial task.Information system experts apply ETL (Extract -
    Transform - Load) technologies to integrate data sources with aliased nomenclature and varying time stamps.
4. Temporal relevance: A data set contains information collected during a certain time window.The degree of relevance
of the data in that time window to the current goal at hand must be assessed.Data collected a year ago might no
longer be relevant in characterizing process capability.
5. Generalizability: Statistical generalizability refers to inferring from a sample to a target population.Proper sampling
of a batch implies that decisions based on the sample apply to the whole batch.
6. Chronology of data and goal: This is obvious.If a control chart is updated once a month, proper responsive process
control cannot be conducted.
7. Construct operationalization: Findings derived from analyzing data need to be translated into terms that can drive
concrete actions, and vice versa.Quoting W.Edwards Deming, “An operational definition is a procedure agreed
upon for translation of a concept into measurement of some kind.”
8. Communication: If the information does not reach the right person at the right time, then the quality of information
is necessarily poor.Data visualization is directly related to the quality of information.Poor visualization of findings
can lead to degradation of the information quality contained in the analysis performed on the data.`;

@Injectable()
export class QcDataService {

    getQcSchedule()
    {
        return qcScheduleList;
    }
 
}
