"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Physics = void 0;
var Physics = /** @class */ (function () {
    function Physics() {
    }
    Physics.box_box = function (pos1, size1, pos2, size2) {
        return pos1.x < pos2.x + size2.x
            && pos1.x + size1.x > pos2.x
            && pos1.y < pos2.y + size2.y
            && pos1.y + size1.y > pos2.y;
    };
    return Physics;
}());
exports.Physics = Physics;
