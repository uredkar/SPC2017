export interface QcSampleStatus
{
    id: string;
    name: string;
}

export interface QcSample {
    id: string;
    name: string;
    status: QcSampleStatus;
    statusDateTime: Date;
    startDateTime: Date;
    endDateTime: Date;
    hoursOnTest: number;
    hoursOnStatus: number;
}
export interface QcSamplingPlan {
    id: string;
    name: string;
   
};

export interface QcSampleRetainLocation
{
    samplingPlan: QcSamplingPlan;
}

