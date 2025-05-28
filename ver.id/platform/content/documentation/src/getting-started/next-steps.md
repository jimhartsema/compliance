# Getting started

Congratulations on completing our Getting Started guide by setting up a basic onboarding flow :tada:! Now that you have a foundation, your next steps will likely involve expanding your basic onboarding by including additional identity apps or credentials. You may want to integrate this flow into your platform to fully leverage its capabilities and streamline your processes.

## Expand the onboarding

You can now return to the disclosure to add more identity apps if desired. Before proceeding, it's crucial to familiarize yourself with the `Mapping` feature in our dashboard. Mappings enable you to use credentials and attributes from multiple identity apps and map them into a single claim, simplifying your integration. By using mappings, the resulting output token will consolidate different attributes and credentials from all identity apps into a single predefined claim as specified in your mapping. For instance, if you intend to use the 'Full name' attribute across three different identity apps, you may encounter discrepancies, as each identity app may label this credential differently, and the attribute names may vary. Additionally, they might be identified by different URNs, complicating the understanding and acceptance of resulting JWT tokens on your platform.

> [!TIP]
> For example, imagine configuring a disclosure with two identity apps: Yivi and Datakeeper. From Yivi, you might query the Personal Records Database (BRP) for the attribute 'First names', whereas from Datakeeper, you query the Passport credential for the attribute 'First name', (note the additional "s" in the attribute key in the Yivi app). To get a harmonized output token, you would create a mapping with a single claim: `firstName`. This claim key can then be configured to link to both credentials in both apps. The resulting attested output token will then include a mapping property. This property features a key name that holds values either from the Yivi app or the Datakeeper app, depending on which was used to complete the flow.

Mappings allow you to define specific claim values that are mapped to different credentials in different identity apps. Mappings can be created in the navigation under `Mapping` and need to be explicitly added to a flow in the `Mappings` tab.

## Integrate the onboarding

Whenever you are happy with the configured flow you can integrate it technically in your platform. For this please refer to our integration guide.

## Additional settings

Finally, as you look towards further optimizing your experience, consider exploring the setup of notifications within the studio. Notifications can greatly enhance your operational awareness by alerting you via email whenever a flow is deactivated, or by providing critical billing notifications such as alerts for insufficient funds or other essential infrastructure messages. Additionally, in the billing overview section, you have the option to manage your billing account, select a suitable plan, and link a payment method to the platform.
