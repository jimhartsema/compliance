# Test your onboarding

If you have not yet created a `Disclosure`, please first create an [create an onboarding](./create-flow.md). If you have, continue reading.

## Testing your disclosure

> [!TIP]
> Ensure that you have correctly added our OAuth debugging tool as the Redirect URI in the disclosure, as outlined in the [create an onboarding](./create-flow.md) section. Verify that `spas.merle.ver.id` is included with the correct port and callback path. If it is not, please configure these settings in your disclosure before continuing.

In an activated `Disclosure`, you have the ability to test your newly created flow. To do so, click the `Test` button in menu on the right side of the disclosure page. This action will open a new tab and direct you to our OAuth Debugging Tool, 'Merle'. All onboarding, signing, or authentication flows use Open Authorization (OAuth) as the primary protocol to extract the configured attributes from the identity app and securely deliver that to you as Relying Party. In our debugging tool, all settings are pre-filled, so you only need to press the `Send request` button to initiate the flow.

## Happy flow

When the flow finishes successfully, you will be redirected back to the OAuth Debugging Tool. Automatically, the resulting JSON Web Token (JWT) is obtained from the OAuth service and ready for your inspection. Depending on your settings in the disclosure, the OAuth grant endpoint will deliver a specific token. By default it is configured as an `attested` token. This is the most simple token format, as it includes a compact token with only precisely the information and mappings as configured in the dashboard.

To inspect the resulting access token containing the identity of your customer, press the `Switch to JWT` button at the bottom of the page. This allows you to toggle between the raw OAuth output and the actual contents of the JWT.

## Unhappy flow

Should the flow finish unsuccessfully, you will also be redirected back to the OAuth Debugging Tool as mandated by the OAuth standard. The page will automatically display the exact OAuth error that occurred. The error message is standardized according to the latest OAuth 2.1 draft and includes only basic error information intentionally. In the case of an error, no token is obtained from the OAuth service because the authorization is denied. For a full list of error codes, please refer to the official [OAuth specification](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/).

## Good to know

In the disclosure dashboard, you can change the resulting OAuth output JWT by selecting a different type. Several options are available, and more types, such as `VC-JWT` will be added soon. By default, it is set to an `attested output` token.
