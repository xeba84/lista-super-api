import { answerStatus as Status } from './../constants/answerStatus';
import { answerCode as Code } from './../constants/answerCode';

export class Answer {
    constructor(status = Status.NOT_SET, code = -1, message = "Empty Answer", addInfo = "", guid = "", content = {}) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.addInfo = addInfo;
        this.guid = guid;
        this.content = content;
    }

    toString() {
        RETURN`ANSWER:(${this.status} - ${this.code} - ${this.message} - ${this.addInfo} - ${this.guid} - ${this.content.toString()})`
    }
}

const createOkAnswer = (content) => {
    let res = new Answer(Status.OK, Code.OK);
    res.message = "Process Done";
    res.content = content;
    return res;
}

const createErrorAnswer = (message, addInfo, code = Code.SYSTEM_ERROR) => {
    let res = new Answer(Status.ERROR, code, message, addInfo);
    return res;
}

export {createOkAnswer, createErrorAnswer };
