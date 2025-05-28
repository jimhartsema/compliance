# Yivi

The [Yivi app](../../../overview/apps/yivi) is available as identity app for this service.

## Scopes

Yivi supports the following scopes:

| Scope         | Description                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| profile       | A custom scope that includes `family_name`, `given_name`, `middle_name` and `name` claims from the BRP.                            |
| phone         | Follows the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) specification section 5.1             |
| email         | Follows the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) specification section 5.1             |
| address       | Follows the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) specification section 5.1.1           |
| company       | A custom scope that includes `identifier`, `identifier_type` and `name` claims from the Chamber of Commerce (KVK) credential.      |
| test-profile  | A custom profile scope that uses the Municipality Personal Data from the BRP test scheme instead of the production scheme.         |
| nin           | A custom scope that includes the `identifier` and `identifier_type` claim from the Dutch National identification (BSN) credential. |
| birthdate     | Follows the [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) specification section 5.1             |
| birth-country | A custom scope that includes the `birth_country` claim.                                                                            |
