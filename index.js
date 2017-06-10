"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var bugsnag = require("bugsnag");
var winston_1 = require("winston");
var BugsnagTransport = (function (_super) {
    __extends(BugsnagTransport, _super);
    function BugsnagTransport(_a) {
        var level = (_a === void 0 ? { level: 'silly' } : _a).level;
        var _this = _super.call(this) || this;
        _this.name = 'bugsnag';
        _this.level = level;
        return _this;
    }
    BugsnagTransport.prototype.log = function (level, msg, meta, callback) {
        // map of winston:bugsnag log levels
        // @see https://github.com/winstonjs/winston#logging-levels
        // @see https://bugsnag.com/docs/notifiers/node#severity
        var levelMapping = {
            debug: 'info',
            error: 'error',
            warn: 'warning',
            info: 'info',
            silly: 'info',
            verbose: 'info'
        };
        if (level in levelMapping) {
            bugsnag.notify(msg, {
                metaData: meta,
                severity: levelMapping[level],
                userId: meta.userId
            });
        }
        callback(null, true);
    };
    return BugsnagTransport;
}(winston_1.Transport));
exports.BugsnagTransport = BugsnagTransport;
//# sourceMappingURL=index.js.map