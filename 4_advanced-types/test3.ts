interface Req3 {
    sum: number,
    from: number,
    to: number
}

const req3: Req3 = {
    sum: 10_000,
    from: 2,
    to: 4
}

enum RespStatus {
    Success = "success",
    Failed = "failed"
}

interface DataSuccess extends Req3 {
    databaseId: number
}

interface DataFailed {
    errorMessage: string,
    errorCode: number
}

interface ResponseSuccess {
    status: RespStatus.Success,
    data: DataSuccess
}

interface ResponseFailed {
    status: RespStatus.Failed,
    data: DataFailed
}
const responce: ResponseSuccess | ResponseFailed = {
    status: RespStatus.Success,
    data: {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
}