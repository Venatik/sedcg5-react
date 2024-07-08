"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Currency = void 0;
var Currency;
(function (Currency) {
    Currency["MKD"] = "MKD";
    Currency["EUR"] = "EUR";
    Currency["USD"] = "USD";
    Currency["GBP"] = "GBP";
})(Currency || (exports.Currency = Currency = {}));
var Status;
(function (Status) {
    Status["PLANNING"] = "PLANNING";
    Status["BOOKED"] = "BOOKED";
    Status["ONGOING"] = "ONGOING";
    Status["COMPLETED"] = "COMPLETED";
    Status["CANCELED"] = "CANCELED";
})(Status || (exports.Status = Status = {}));
//# sourceMappingURL=trip.interface.js.map