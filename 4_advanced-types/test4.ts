interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {  // TypeGuard
    if (res.status === PaymentStatus.Success) {
        return true;
    } else {
        return false;
    }
}

function getIdFromData(res: Res): number {
    if (isSuccess(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}

// Asserts
interface recievedUser {
    name: string;
}

const recievedSomething = {};

assertUser(recievedSomething);
recievedSomething.name = 'Serhii';

function assertUser(obj: unknown): asserts obj is recievedUser {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error("Not User")
}



