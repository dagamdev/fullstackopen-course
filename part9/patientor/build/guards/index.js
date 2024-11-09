"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = void 0;
exports.isString = isString;
function isString(text) {
    return typeof text === 'string' || text instanceof String;
}
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
exports.isDate = isDate;
