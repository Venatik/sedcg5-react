"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralMiddleware = void 0;
class GeneralMiddleware {
    use(req, res, next) {
        console.info('General middleware.');
        const info = {
            method: req.method,
            url: req.url,
            timeOnRequest: Date.now(),
        };
        console.info(info);
        next();
    }
}
exports.GeneralMiddleware = GeneralMiddleware;
//# sourceMappingURL=general.middleware.js.map