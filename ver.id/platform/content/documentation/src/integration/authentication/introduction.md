# Authentication

<script setup lang="ts">
import MarkdownImage from '@vp/components/image/Markdown.vue'
</script>

<MarkdownImage
  url="/products/authentication-using-wallets.gif"
  caption="Example logging in at a fictional company SphereCart using Ver.iD."
/>

*Ver.iD Authentication* allows your customers to use decentralized identity apps to login to your platform, not to be confused with [*Ver.iD Onboarding*](../onboarding/coming-soon.md) or [*Ver.iD Signing*](../signing/coming-soon.md).

This solution acts as an OpenID Connect Identity Provider (IdP), allowing you to seamlessly integrate it with your existing OpenID Connect (OIDC) infrastructure. We do not replace your current OIDC infrastructure, but merely add a new login flow to your current options. Your customers can continue using familiar methods like password-based login or third-party identity providers such as Google, GitHub, or Microsoft. Additionally, using this service, your customers can now also authenticate using decentralized identity apps, providing a modern, secure and easy alternative.

Currently we only support authentication through our hosted identification page, as seen in the example above. In other words, your customers will be redirected temporary to our secure environment to do their authentication seamlessly after which they are redirected back to finish the authorization flow in your own OIDC infrastructure. While we plan to introduce an embedded option for enterprise clients who prefer a more integrated solution, we strongly recommend using our hosted identification page for the majority of use cases due to its security, compliance, and ease of implementation.

This solution does not support SAMLv1 or SAMLv2 based authentication infrastructure.

> [!TIP]
> If you do not have an existing OIDC infrastructure in your platform to handle authentication or authorization, we recommend to first migrate to an Identity and Access Management (IAM) service provider such as [Auth0](https://auth0.com) or use open-source alternatives like [Keycloak](https://www.keycloak.org/) to organize your authentication and authorization on your platform. We note however that this is not a strict requirement, it makes integration a lot easier. If you do not run an OIDC infrastructure, you can still utilize one of the many open-source, browser-based SDKs that support authentication with an IdP using OAuth 2.1 with PKCE (Proof Key for Code Exchange) enabled for use in [VueJS](https://vuejs.org) or [React](https://react.dev) applications in standalone mode.
