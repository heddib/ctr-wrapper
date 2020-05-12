import * as Request from "request-promise-native";
declare class CTRAPIWrapper {
    private BASE_URL;
    private OPTIONS;
    constructor(options?: Request.RequestPromiseOptions);
    request(path: string, options?: Request.RequestPromiseOptions): Promise<any>;
}
export = CTRAPIWrapper;
//# sourceMappingURL=main.d.ts.map