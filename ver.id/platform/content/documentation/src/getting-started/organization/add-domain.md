# Add your domain

If you already created and activated domains in the dashboard, you may skip this step and proceed to the next. If not, please continue reading to learn how to add more domains to your organization in our dashboard.

In the `Settings` menu on the left side of the dashboard, there is a section titled `Domains`. This section allows you to add your organizational domains, which can later be associated with specific onboarding, authentication, or signing flows as Redirect URIs. You can create multiple domains, but only those that are activated and approved can be utilized in a flow. The maximum number of domains you can have active and approved depends on your organization's current billing plan. In the playground plan (free plan), the default billing plan, you can only have one domain active.

## Create a domain

To create a new domain, click the `Create domain` button found in the `Domains` section. This will open a dialog modal prompting you to enter the domain of your company or website intended for future onboarding flows. The domain name will undergo manual verification by our compliance team as part of the approval process. After entering the domain name, click `Create domain` within the modal to proceed to the dedicated domain page.

For development purposes, you must also whitelist development domains. Note that development domains (domains that do not include a dot or the domain `spas.merle.ver.id`) are free of charge and will be automatically approved and activated without any additional cost.

**Please make sure to add the following domains**:

- localhost
- spas.merle.ver.id

## Approve a domain

On the domain page, click the `Request approval` button found in the right menu to begin the approval process for the domain. We currently do not have an automated domain approval process using DNS checks. In the future, we plan to implement this feature, but currently, compliance requirements mandate explicit verification to ensure the domain is associated with your organization to prevent misuse. Optionally, you can set up a notification in the notification center to receive email updates about the approval status. If you do not configure notifications, please regularly check the status of your domain, which will be listed as either *approved* or *unapproved* with an explanation should it be rejected. Approval typically takes up to two working days, though it is often quicker.

For development domains, after pressing `Request approval` they will be automatically approved as stated above.

## Activate a domain

Once your domain is approved, you must activate it to use it within a flow. Click the `Activate` button in the top right corner of the domain page. This button is only visible once the domain has been approved by our compliance team. If the domain is not yet approved, you must wait until approval is granted. Note again that for development domains, activation is cost-free, and such domains are not counted as production domains.

## Good to know

For some organizations, based on contractual agreements, we can automatically approve domains, streamlining the process for those needing to rapidly add multiple domains. Furthermore, domains may also be added using our API, that allows for even more advanced use-cases.
