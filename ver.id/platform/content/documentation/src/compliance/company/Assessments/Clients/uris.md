# Redirect URIs

Clients may set specific Redirect URIs in our platform that can be used in [Authentication](../../../overview//platform/use-cases/authentication.md), [Onboarding](../../../overview//platform/use-cases/onboarding.md) or [Signing](../../../overview//platform/use-cases/signing.md) flows where their customers are redirected back to in case of success or failure.

## Review

OAuth2.1 requires the redirect URI to be specified in order to ensure the correct processing of a request. In our dashboard, the redirect URs are self-serviced and managed. We perform a review, automatically enforced, prior to a redirect URI can be applied in any flow. A client can have multiple Redirect URIs, the number of URIs are restricted based on the client tier.
