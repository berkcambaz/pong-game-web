"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signal = void 0;
var Signal = /** @class */ (function () {
    function Signal() {
        this.listeners = [];
    }
    Signal.prototype.add = function (receiver) {
        this.listeners.push(receiver);
    };
    Signal.prototype.remove = function (receiver) {
        for (var i = 0; i < this.listeners.length; ++i) {
            if (this.listeners[i] === receiver) {
                this.listeners.splice(i, 1);
                return;
            }
        }
    };
    Signal.prototype.dispatch = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < this.listeners.length; ++i) {
            (_a = this.listeners)[i].apply(_a, __spreadArray([], __read(args), false));
        }
    };
    Signal.prototype.clear = function () {
        this.listeners = [];
    };
    return Signal;
}());
exports.Signal = Signal;
