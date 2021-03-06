import { parse, UrlWithParsedQuery } from "url";

/* istanbul ignore next */
export class Utils {

    public static parseUrl(url: string): UrlWithParsedQuery {
        if(!url) throw new Error('Empty url');
        return parse(url, true);
    }

    public static toUpperCase(args: string): string {
        return args.toUpperCase();
    }
}
