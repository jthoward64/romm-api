import { RequestContext } from "../http/http.js";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies http authentication to the request context.
 */
export class HTTPBasicAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param username username for http basic authentication
     * @param password password for http basic authentication
     */
    public constructor(
        private username: string,
        private password: string
    ) {}

    public getName(): string {
        return "HTTPBasic";
    }

    public applySecurityAuthentication(context: RequestContext) {
        let comb = Buffer.from(this.username + ":" + this.password, 'binary').toString('base64');
        context.setHeaderParam("Authorization", "Basic " + comb);
    }
}

/**
 * Applies oauth2 authentication to the request context.
 */
export class OAuth2PasswordBearerAuthentication implements SecurityAuthentication {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    public constructor(private accessToken: string) {}

    public getName(): string {
        return "OAuth2PasswordBearer";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "HTTPBasic"?: SecurityAuthentication,
    "OAuth2PasswordBearer"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };
export type HttpSignatureConfiguration = unknown; // TODO: Implement

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "HTTPBasic"?: HttpBasicConfiguration,
    "OAuth2PasswordBearer"?: OAuth2Configuration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["HTTPBasic"]) {
        authMethods["HTTPBasic"] = new HTTPBasicAuthentication(
            config["HTTPBasic"]["username"],
            config["HTTPBasic"]["password"]
        );
    }

    if (config["OAuth2PasswordBearer"]) {
        authMethods["OAuth2PasswordBearer"] = new OAuth2PasswordBearerAuthentication(
            config["OAuth2PasswordBearer"]["accessToken"]
        );
    }

    return authMethods;
}