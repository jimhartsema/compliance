# Create an onboarding

This section allows you to create an onboarding for your customers, typically used for advanced Know-Your-Customer (KYC) or Know-Your-Business (KYB) procedures using decentralized identity apps, please refer to [onboarding use-cases](../../overview/platform/use-cases/onboarding.md) for more information on this.

In the dashboard under `Flows` menu on the left side, there is an section called `Disclosures`. You can create multiple disclosures, each flow with its own specific setup on what identity apps, credentials, attributes or settings you may want to have in your onboarding. In the playground (free plan), the default billing plan, you can have only one flow active.

## Create a disclosure

To create a new disclosure, click the `Create disclosure` button found in the `Disclosures` section. This action will open a dialog modal prompting you to enter a flow name. This name is only used for your own administration purposes and will not be shown to your customers. Once you've entered the name, click `Create disclosure` within the modal. This takes you to the disclosure page where you can configure your newly created disclosure.

## Add identity apps to a disclosure

The first step in configuring the disclosure is to define which identity apps, also called wallets, you want to accept for this onboarding and which corresponding credentials and attributes you would like to query. This can be done in the `Wallets` tab on the disclosure page. Press `Add wallet` button above the table to add a wallet provider you want to configure for this disclosure.

For illustrative purposes of this getting-started guide please press `Add wallet` button above the table, hereafter select the Yivi wallet and press `Add wallet` to add this wallet to the disclosure.

### Groups

After adding a wallet you will be redirected to a subpage within the disclosure for the wallet where you can configure logical groups. Logical groups are an abstract way to design an onboarding query using conjunctions and disjunctions of credentials. Logical connectives like these allow you to configure to facilitate most, if not all, complex use-cases. For example:

- **Using disjunctions**: Sometimes, you might want customers to choose between two credentials, and it's okay if they provide only one instead of both.

- **Using conjunctions**: Other times, you might require both credentials from the customer ensuring they meet all specified conditions.

All disjunctions fall under a single logical group, wheras conjunctions are multiple logical groups.

> [!TIP]
> Logical groups allow you to configure advanced queries. For example you might want to get either a passport **OR** an ID-card **OR** a driving license on the one hand, **AND** always want to query the address information from your customers on the other hand. To configure this case, you need two logical groups:
>
> - **Personal Data Group**: One logical group named "Personal Data Group" that includes:
>   - The passport credential
>   - The driving license credential
>   - The ID-card credential
> - **Address Data Group**: Another logical group named "Address Data Group" that includes
>   - An address credential
>
> This query will ask your customers to provide either a passport, driving licence or ID-card and it will on top always ask the address information during the onboarding.

To make matters simple for this guide, we will for illustrative purposes just add a single logical group. To this end, please press `Add logical group` button above the table, hereafter fill in 'Personal Data Group' as name and press `Add logical group` to add that logical group.

### Credentials

After adding a logical group, you need to add an credential that you want to query within that group.

For illustrative purposes of this getting-started guide please press `Add credential` button above the table, hereafter select the following credential in the modal:

- **Scheme**: 'Privacy by design foundation'. This is the Yivi production scheme.
- **Issuer**: 'Your municipality'. This is the municipality Nijmegen who officially issues personal data in the Yivi wallet.
- **Credential**: 'Personal data'. This credential contains all personal data attributes.

Then press `Add credential` to add the credential to this logical group.

### Attributes

As last step you need to select attributes of this credential.

For illustrative purposes of this getting-started guide please press `Add attribute` button above the table, hereafter select the following attribute in the modal 'Full name'. After selecting this attribute, please go back to the toplevel disclosure by clicking `Disclosure` in the breadcrumbs.

## Add Redirect URIs to a disclosure

After configuring the wallet section, we will now continue by configuring a Redirect URI. This can be done in the `Redirect URIs` tab on the disclosure page. The Redirect URI is the place where the customer will be returned after disclosing his credentials or whenever the onboarding fails. This is an endpoint on your side that receives an authorization code that can be used to obtain the credentials from our API.

For illustrative purposes of this getting-started guide please press `Add Redirect URI` button above the table and fill in the following settings:

- **Protocol**: https
- **Domain name**: spas.merle.ver.id
- **Port**: 443
- **Path**: /disclosure/callback

This Redirect URI will allow us to test the disclosure using our testing rails in the next section.

Please note that for authentication and signing flows, the path is to be changed to /authentication/callback or /signature/callback.

## Add Brands to a disclosure

Finally, you need to add a brand to the disclosure. This can be done in the `Brands` tab on the disclosure page. The branding is displayed to customers at the start of the onboarding process, providing essential information and building trust by reassuring them that they are sharing their data with the correct party. While you can associate multiple brands with a single disclosure, only one will be set as the default brand. This default brand is used by the system if no specific branding reference is provided when initiating the onboarding flow.

For illustrative purposes of this getting-started guide please press `Add Brand` button above the table and pick the brand that you have configured in the [add branding](../organization/add-brand.md) when you configured your organization.

## Activate a disclosure

You now finished configuring a basic onboarding flow. In order to use or test this disclosure you must first activate it. Click the `Activate` button in the top right corner of the disclosure page.

## Good to know

Flows may also be configured automatically using our API, this may be interesting for use-cases where you need a lot of customized flows for your platform.
