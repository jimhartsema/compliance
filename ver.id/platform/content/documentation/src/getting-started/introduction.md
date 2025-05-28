# Getting started

<div class="flex justify-center pt-4">
  <div class="grid grid-cols-1 justify-items-center p-4 bg-white rounded-xl">
    <img src="/public/products/select-wallet.png" class="h-96">
    <div class="text-xs text-gray-800">Ver.iD allows your customers to choose their own identity app during onboarding, authentication or signing.</div>
  </div>
</div>

This guide is designed to swiftly help you integrate [decentralized identity apps](../concepts/coming-soon.md) into your online platform using [Ver.iD](../overview//platform/introduction.md). With our platform, you can enhance three critical customer identity interactions:

- **Authentication**: Use decentralized identity apps for your website’s authentication flows to provide a secure and modern login experience.
- **Onboarding**: Use decentralized identity apps to collect various types of customer information for onboarding purposes, such as for Know-Your-Customer (KYC) or Know-Your-Business (KYB) processes.
- **Signing**: Use decentralized identity apps to enable your customers to sign documents with their digital credentials, moving away from traditional handwritten signatures.

If you prefer to directly jump to integrating Ver.iD into your platform, please refer to our integration guide in the top menu.

In this getting started guide we will focus on how to quickly set up an [onboarding](../overview/platform/use-cases/onboarding.md) flow with a single identity app to query the 'Full name' attribute. As you become more familiar with the system, you'll have the opportunity to expand this onboarding flow by incorporating additional identity apps and credentials, customizing the process to better meet your specific needs. Furthermore, by the end of this guide you will be equipped to also create authentication and signing flows, which are based on similar principles.

In this guide, we will use the Ver.iD hosted identification page, as illustrated above, where your customers can select one of the configured identity apps to securely complete their onboarding in an optimized UX flow. This is currently the only available integration option. However, we plan to introduce an embedded option in the future that will allow seamless, compliant, and secure integration directly into your website for enterprise clients who prefer to have the full solution running in their own website instead of using our hosted solution.

## Getting Access

The first step is to become a client of Ver.iD and get access to our dashboard by [requesting an organizational account](./getting-access.md). The dashboard is your command center for managing your organization, creating flows for authentication, onboarding, or signing, and handle other technical configurations like mapping, billing, and API key generation. If you already have access to the dashboard, you can skip this step.

## Setup Your Organization

Once you have access to our dashboard, you will need to set up your organization. This section will explain the core concepts of domains and branding within our dashboard. It is essential to [whitelist domains](./organization/add-domain.md) to use them later in the onboarding process as Redirect URIs, ensuring a secure and compliant system while preventing data sharing with unauthorized domains and or parties. You must also add [branding](./organization/add-brand.md), such as your registered business name and an official logo, which will be visible to your customers during data transactions. Both domain and branding submissions require our approval to ensure compliance with platform regulations.

## Creating Your First Onboarding Flow

Once your organization is set up in the dashboard, you are ready to create your [first onboarding flow](./flow/create-flow.md), referred to as a `Disclosure`. Here, you will select the identity apps that you want to use use for the onboarding and determine which credentials you wish to obtain from the identity wallet of your customer. Additionally, you will configure essential technical settings such as Redirect URIs, decide which branding to apply in this onboarding, and in some cases, set up additional cryptographic secrets. After configuring and activating the flow, you can [test](./flow/test-flow.md) the flow using our testing environment, simulating a complete customer journey without any code.

## Next Steps

We will conclude the guide with the [next steps](./next-steps.md), designed to further enhance your platform's integration with Ver.iD. This section delves into implementation strategies, provides more technical details on how the platform operates, and showcases upcoming features.
