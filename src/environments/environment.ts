// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { KeycloakConfig } from "keycloak-js";

let keycloakConf: KeycloakConfig = {
  clientId: 'sample_keyclock_js_1',    // Your `clientId` from Keycloak Admin Console
  realm: 'master',               // Your `realm` from Keycloak Admin Console
  url:    '<keycloak server url>'   // URL of your keycloak installation till 
}

export const environment = {
  production: false,
  keycloak: keycloakConf
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
