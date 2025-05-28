# Overview

<script setup lang="ts">
import Authentication from '@vp/components/diagrams/Authentication.vue'
</script>

**Ver.iD Authentication** is an advanced OpenID Connect Identity Provider (IdP) designed to streamline secure authentication processes for modern web applications that want to incorporate identity apps into their authentication flows. This service utilizes OpenID Connect Core 1.0 (errata set 2) as its primary protocol, with OAuth 2.1 as the underlying authorization protocol. These established protocols enable seamless integration of decentralized identity apps into your platform, leveraging standards that have reliably and securely served the online community for years.

Below is a list of features, sequence diagrams, standards, protocols, and recommendations to provide a comprehensive overview of all technical options available in this service.

## Features

- **Client Types**: Supports both confidential and public clients, providing flexibility to meet diverse application needs.
- **Access Tokens**: Generates JSON-Web-Tokens (JWTs) that are fully compliant with OpenID Connect specifications, ensuring secure and standard-compliant access tokens.
- **Security**: Enhances security for public clients by implementing Proof Key for Code Exchange (PKCE).
- **Discovery**: All IdP metadata is published and available through OpenID Connect Discovery.
- **Interoperability**: Seamlessly integrates with on-premise providers like [Keycloak](https://www.keycloak.org/) and [Ory Hydra](https://www.ory.sh/hydra/), as well as third-party IAM providers such as [Auth0](https://auth0.com) and [Ping Identity](https://pingidentity.com), or identity brokers such as [Signicat](https://signicat.com).
- **Stateless**: Designed for ease of integration into web applications without requiring any backend, including popular frontend frameworks like [React](https://react.dev) and [VueJS](https://vuejs.org).

## Sequence diagram

The sequence diagram below provides a detailed walkthrough of a standard OpenID Connect interaction, between your customer, your platform, our IdP and the identity app. The diagram offers a basic understanding of all technical steps involved in the authentication process.

### Diagram

<Authentication/>

### Actors

- **Customer**: This is your customer.
- **Client**: This is your platform.
- **Ver.iD**: This is our IdP.
- **App**: This is an identity app in control of the Customer.

### Steps

1. The customer initiates the login process by clicking the `login` button on your website.
2. The client application (your front-end or back-end) receives the login request and begins an OAuth authorization request by redirecting the customer to the `authorization_endpoint` of the IdP.
3. The IdP presents the customer with a secure hosted page and provides options such as a QR code, Universal Link (iOS), or App Link (Android) for different identity apps.
4. The customer selects an identity app and gets forwarded to the app by QR code, Universal Link or App Link.
5. The identity app guides the customer through the authentication process:
   - If necessary, the identity app will obtain missing credentials from appropriate issuers.
6. The identity app sends the authentication result back to the customer's browser.
7. The customer provides consent for data sharing and optionally agrees with additional data policies of the client.
8. The IdP returns an authorization code or an error to the client application.
9. The client application (either front-end or back-end) requests an access token by initiating an OAuth grant request.
10. The IdP verifies either the `client_secret` for confidential clients or the PKCE `code_verifier` for public clients in conjunction with the `authorization_code`.
11. The IdP responds with an `access_token` or an error to the client application.

## Supported web specifications

The following web specifications are implemented in this service:

- [OpenID Connect Core 1.0 incorporating errata set 2](https://openid.net/specs/openid-connect-core-1_0.html)
- [OAuth 2.1 Authorization Framework (draft)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-10)
- [OAuth 2.0 Authorization Server Metadata](https://www.rfc-editor.org/rfc/rfc8414.html)
- [Proof Key for Code Exchange by OAuth Public Clients](https://datatracker.ietf.org/doc/html/rfc7636)
- [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414)
- [JSON Web Token (JWT) RFC7519](https://datatracker.ietf.org/doc/html/rfc7519)
- [JSON Web Algorithms (JWA) RFC7518](https://datatracker.ietf.org/doc/html/rfc7518)
- [JSON Web Key (JWK) RFC7517](https://datatracker.ietf.org/doc/html/rfc7517)
- [JSON Web Signature (JWS) RFC7515](https://www.rfc-editor.org/rfc/rfc7515.html)
- [OpenID Connect Discovery 1.0 incorporating errata set 2](https://openid.net/specs/openid-connect-discovery-1_0.html)

## Supported OAuth clients

The following OAuth client types are available:

| Client type         | supported | additional constraints |
| ------------------- | --------- | ---------------------- |
| Public client       | Yes       | PKCE                   |
| Confidential client | Yes       |                        |

## Supported OAuth responses

The following OAuth response types are available:

| Response type      | supported | additional constraints | client type  |
| ------------------ | --------- | ---------------------- | ------------ |
| authorization code | Yes       | PKCE                   | Public       |
| authorization code | Yes       |                        | Confidential |

## Supported OAuth scopes

The following OAuth scopes are available:

| Scope         | supported | Description                                                                                                                        |
| ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| openid        | Mandatory |                                                                                                                                    |
| profile       | Depends*  | A custom scope that includes `family_name`, `given_name`, `middle_name` and `name` claims from the BRP.                            |
| phone         | Depends*  | Follows the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) specification section 5.1             |
| email         | Depends*  | Follows the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) specification section 5.1             |
| address       | Depends*  | Follows the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) specification section 5.1.1           |
| company       | Depends*  | A custom scope that includes `identifier`, `identifier_type` and `name` claims from the Chamber of Commerce (KVK) credential.      |
| test-profile  | Depends*  | A custom profile scope that uses the Municipality Personal Data from the BRP test scheme instead of the production scheme.         |
| nin           | Depends*  | A custom scope that includes the `identifier` and `identifier_type` claim from the Dutch National identification (BSN) credential. |
| birthdate     | Depends*  | Follows the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) specification section 5.1             |
| birth-country | Depends*  | A custom scope that includes the `birth_country` claim.                                                                            |

*: See supported apps section in the navigation for detailed information if this scope is available for the designated identity app.

## Supported OAuth grants

The following OAuth grant types are available:

| Grant              | supported | additional constraints | client type  |
| ------------------ | --------- | ---------------------- | ------------ |
| authorization code | Yes       | PKCE                   | Public       |
| client credentials | Yes       |                        | Confidential |
| implicit           | No        |                        |              |

## Supported OAuth tokens

Below is a list of supported access tokens:

| media type                             | key type | supported algorithms | uses    | opts                        | default |
| -------------------------------------- | -------- | -------------------- | ------- | --------------------------- | ------- |
| ver&#x2011;id/ssi/output/openid/v1+JWT | EC       | ES384, ES512         | sig enc | sign verify encrypt decrypt | yes     |

## Compliance recommendations

Following the following recommendations are applied.

| Standards                                                          | Applied      | Description                                                            |
| ------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------- |
| [NIST FIPS PUB 186-5](https://csrc.nist.gov/pubs/fips/186-5/final) | cryptography | Recommendations in algorithms that are used to sign the access tokens. |
