import React from 'react'
import '../style/privacy.css'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="privacy-page">
      <nav className='privacy-nav'>
        <div className="left-side">
          <h1>Lexora</h1>
          <p>Privacy Policy</p>
        </div>
        <div className="right-side">
          <Link to="/">Back to lexora.com</Link>
        </div>
      </nav>

      <div className="privacy-content">
        <header className="privacy-header">
          <h1>Lexora Privacy Policy</h1>
          <p className="last-updated">You can see our previous Privacy Policy here.</p>
        </header>

        <div className="privacy-intro">
          <p>
            This Privacy Policy explains how A Lexora Corporation ("Lexora," "we," or "us") collects, uses, and discloses information about you. This Privacy Policy applies when you use our websites, mobile applications, and other online products and services that link to this Privacy Policy (collectively, our "Services"), contact our customer service team, engage with us on social media, or otherwise interact with us.
          </p>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of this policy and, in some cases, we may provide you with additional notice (such as adding a statement to our website or providing you with a notification). We encourage you to review this Privacy Policy regularly to stay informed about our information practices and the choices available to you.
          </p>
        </div>

        <div className="table-of-contents">
          <h2>CONTENTS</h2>
          <ul>
            <li><a href="#collection">Collection of Information</a></li>
            <li><a href="#use">Use of Information</a></li>
            <li><a href="#sharing">Sharing of Information</a></li>
            <li><a href="#embeds">Third-Party Embeds</a></li>
            <li><a href="#transfer">Transfer of Information to the United States and Other Countries</a></li>
            <li><a href="#choices">Your Choices</a></li>
            <li><a href="#california">Your California Privacy Rights</a></li>
            <li><a href="#europe">Additional Disclosures for Individuals in Europe</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <section id="collection" className="privacy-section">
          <h2>COLLECTION OF INFORMATION</h2>
          
          <h3>Information You Provide to Us</h3>
          <p>
            We collect information you provide directly to us. For example, you share information directly with us when you create an account, fill out a form, submit or post content through our Services, purchase a membership, communicate with us via third-party platforms, request customer support, or otherwise communicate with us. The types of personal information we may collect include your name, display name, username, bio, email address, business information, your content, including your avatar image, photos, posts, responses, and series published by you, and any other information you choose to provide.
          </p>
          <p>
            In some cases, we may also collect information you provide about others, such as when you purchase a Lexora membership as a gift for someone. We will use this information to fulfill your request and will not send communications to your contacts unrelated to your request, unless they separately consent to receive communications from us or otherwise engage with us.
          </p>
          <p>
            We do not collect payment information through our Services. We rely on third parties to process payments in connection with our Services. Any information you provide to facilitate such a payment is subject to the third-party payment processor's privacy policy, and we encourage you to review this policy before you provide any information to the payment processor.
          </p>

          <h3>Information We Collect Automatically When You Interact with Us</h3>
          <p>In some instances, we automatically collect certain information, including:</p>
          <ul>
            <li><strong>Activity Information:</strong> We collect information about your activity on our Services, such as your reading history and when you share links, follow users, highlight posts, and clap for posts.</li>
            <li><strong>Transactional Information:</strong> When you purchase a membership, we collect information about the transaction, such as subscription details, purchase price, and the date of the transaction.</li>
            <li><strong>Device and Usage Information:</strong> We collect information about how you access our Services, including data about the device and network you use, such as your hardware model, operating system version, mobile network, IP address, unique device identifiers, browser type, and app version. We also collect information about your activity on our Services, such as access times, pages viewed, links clicked, and the page you visited before navigating to our Services.</li>
            <li><strong>Information Collected by Cookies and Similar Tracking Technologies:</strong> We use tracking technologies, such as cookies and web beacons, to collect information about you. Cookies are small data files stored on your hard drive or in device memory that help us improve our Services and your experience, see which areas and features of our Services are popular, and count visits.</li>
          </ul>

          <h3>Information We Collect from Other Sources</h3>
          <p>
            We obtain information from third-party sources. For example, we may collect information about you from social networks, accounting services providers and data analytics providers. Additionally, if you create or log into your Lexora account through a third-party platform (such as Apple, Facebook, Google, or Twitter), we will have access to certain information from that platform, such as your name, lists of friends or followers, birthday, and profile picture, in accordance with the authorization procedures determined by such platform.
          </p>

          <h3>Information We Derive</h3>
          <p>
            We may derive information or draw inferences about you based on the information we collect. For example, we may make inferences about your location based on your IP address or infer reading preferences based on your reading history.
          </p>
        </section>

        <section id="use" className="privacy-section">
          <h2>USE OF INFORMATION</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our Services, which includes publishing and distributing user-generated content, personalizing the posts you see and operating our metered paywall. We also use the information we collect to:
          </p>
          <ul>
            <li>Create and maintain your Lexora account;</li>
            <li>Process transactions and send related information, such as confirmations, receipts, and user experience surveys;</li>
            <li>Send you technical notices, security alerts, and support and administrative messages;</li>
            <li>Respond to your comments and questions and provide customer service;</li>
            <li>Communicate with you about new content, products, services, and features offered by Lexora and provide other news and information we think will interest you;</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services;</li>
            <li>Detect, investigate, and prevent security incidents and other malicious, deceptive, fraudulent, or illegal activity and protect the rights and property of Lexora and others;</li>
            <li>Debug to identify and repair errors in our Services;</li>
            <li>Comply with our legal and financial obligations; and</li>
            <li>Carry out any other purpose described to you at the time the information was collected.</li>
          </ul>
        </section>

        <section id="sharing" className="privacy-section">
          <h2>SHARING OF INFORMATION</h2>
          <p>We share personal information in the following circumstances or as otherwise described in this policy:</p>
          <ul>
            <li>We share personal information with other users of the Services. For example, if you use our Services to publish content, post comments or send private notes, certain information about you will be visible to others, such as your name, photo, bio, other account information you may provide, and information about your activities on our Services.</li>
            <li>We share personal information with vendors, service providers, and consultants that need access to personal information in order to perform services for us, such as companies that assist us with web hosting, storage, and other infrastructure, analytics, payment processing, fraud prevention and security, customer service, communications, and marketing.</li>
            <li>We may disclose personal information if we believe that disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements.</li>
            <li>We may share personal information if we believe that your actions are inconsistent with our user agreements or policies, if we believe that you have violated the law, or if we believe it is necessary to protect the rights, property, and safety of Lexora, our users, the public, or others.</li>
            <li>We share personal information with our lawyers and other professional advisors where necessary to obtain advice or otherwise protect and manage our business interests.</li>
            <li>We may share personal information in connection with, or during negotiations concerning, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
            <li>Personal information is shared between and among Lexora and our current and future parents, affiliates, and subsidiaries and other companies under common control and ownership.</li>
            <li>We share personal information with your consent or at your direction.</li>
            <li>We also share aggregated or de-identified information that cannot reasonably be used to identify you.</li>
          </ul>
        </section>

        <section id="embeds" className="privacy-section">
          <h2>THIRD-PARTY EMBEDS</h2>
          <p>
            Lexora does not host some of the content displayed on our Services. Users have the ability to post content that is actually hosted by a third party, but is embedded in our pages (an "Embed"). When you interact with an Embed, it can send information about your interaction to the hosting third party just as if you were visiting the third party's site directly. For example, when you load a Lexora post page with a YouTube video Embed and watch the video, YouTube receives information about your activity, such as your IP address and how much of the video you watch. Lexora does not control what information third parties collect through Embeds or what they do with the information. This Privacy Policy does not apply to information collected through Embeds. The privacy policy belonging to the third party hosting the Embed applies to any information the Embed collects, and we recommend you review that policy before interacting with the Embed.
          </p>
        </section>

        <section id="transfer" className="privacy-section">
          <h2>TRANSFER OF INFORMATION TO THE UNITED STATES AND OTHER COUNTRIES</h2>
          <p>
            Lexora is headquartered in the United States, and we have operations and service providers in the United States and other countries. Therefore, we and our service providers may transfer your personal information to, or store or access it in, jurisdictions that may not provide levels of data protection that are equivalent to those of your home jurisdiction. For example, we transfer personal data to Amazon Web Services, one of our service providers that processes personal information for us in various data center locations across the globe. We will take steps to ensure that your personal information receives an adequate level of protection in the jurisdictions in which we process it.
          </p>
        </section>

        <section id="choices" className="privacy-section">
          <h2>YOUR CHOICES</h2>
          
          <h3>Account Information</h3>
          <p>
            You may access, correct, delete and export your account information at any time by logging into the Services and navigating to the Settings page. Please note that if you choose to delete your account, we may continue to retain certain information about you as required by law or for our legitimate business purposes.
          </p>

          <h3>Cookies</h3>
          <p>
            Most web browsers are set to accept cookies by default. If you prefer, you can usually adjust your browser settings to remove or reject browser cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Services.
          </p>

          <h3>Communications Preferences</h3>
          <p>
            You may opt out of receiving certain communications from us, such as digests, newsletters, and activity notifications, by following the instructions in those communications or through your account's Settings page. If you opt out, we may still send you administrative emails, such as those about your account or our ongoing business relations.
          </p>

          <h3>Mobile Push Notifications</h3>
          <p>
            With your consent, we may send push notifications to your mobile device. You can deactivate these messages at any time by changing the notification settings on your mobile device.
          </p>
        </section>

        <section id="california" className="privacy-section">
          <h2>YOUR CALIFORNIA PRIVACY RIGHTS</h2>
          <p>
            The California Consumer Privacy Act or "CCPA" (Cal. Civ. Code § 1798.100 et seq.) affords consumers residing in California certain rights with respect to their personal information. If you are a California resident, this section applies to you.
          </p>
          <p>
            In the preceding 12 months, we have collected the following categories of personal information: identifiers, commercial information, internet or other electronic network activity information, and inferences. For details about the precise data points we collect and the categories of sources of such collection, please see the Collection of Information section above.
          </p>
          <p>
            Lexora does not sell your personal information.
          </p>
          <p>
            Subject to certain limitations, you have the right to (1) request to know more about the categories and specific pieces of personal information we collect, use, and disclose about you, (2) request deletion of your personal information, (3) opt out of any sales of your personal information, if we engage in that activity in the future, and (4) not be discriminated against for exercising these rights. You may make these requests by emailing us at privacy@lexora.com or by completing this webform.
          </p>
        </section>

        <section id="europe" className="privacy-section">
          <h2>ADDITIONAL DISCLOSURES FOR INDIVIDUALS IN EUROPE</h2>
          <p>
            If you are located in the European Economic Area ("EEA"), the United Kingdom, or Switzerland, you have certain rights and protections under applicable law regarding the processing of your personal data, and this section applies to you.
          </p>

          <h3>Legal Basis for Processing</h3>
          <p>When we process your personal data, we will do so in reliance on the following lawful bases:</p>
          <ul>
            <li>To perform our responsibilities under our contract with you (e.g., providing the products and services you requested).</li>
            <li>When we have a legitimate interest in processing your personal data to operate our business or protect our interests (e.g., to provide, maintain, and improve our products and services, conduct data analytics, and communicate with you).</li>
            <li>To comply with our legal obligations (e.g., to maintain a record of your consents and track those who have opted out of non-administrative communications).</li>
            <li>When we have your consent to do so (e.g., when you opt in to receive non-administrative communications from us). When consent is the legal basis for our processing your personal data, you may withdraw such consent at any time.</li>
          </ul>

          <h3>Data Retention</h3>
          <p>
            We store personal data associated with your account for as long as your account remains active. If you close your account, we will delete your account data within 14 days. We store other personal data for as long as necessary to carry out the purposes for which we originally collected it and for other legitimate business purposes, including to meet our legal, regulatory, or other compliance obligations.
          </p>

          <h3>Data Subject Requests</h3>
          <p>Subject to certain limitations, you have the right to request access to the personal data we hold about you and to receive your data in a portable format, the right to ask that your personal data be corrected or erased, and the right to object to, or request that we restrict, certain processing. To exercise your rights:</p>
          <ul>
            <li>If you sign up for a Lexora account, you may at any time request an export of your personal information from the Settings page, or by going to Settings and then selecting Account within our app.</li>
            <li>You may correct information associated with your account from the Settings page, or by going to Settings and then selecting Account within our app, and the Customize Your Interests page to update your interests.</li>
            <li>You may withdraw consent by deleting your account at any time through the Settings page, or by going to Settings and then selecting Account within our app (except to the extent Lexora is prevented by law from deleting your information).</li>
            <li>You may object at any time to the use of your personal data by contacting privacy@lexora.com.</li>
          </ul>

          <h3>Questions or Complaints</h3>
          <p>
            If you have a concern about our processing of personal data that we are not able to resolve, you have the right to lodge a complaint with the Data Protection Authority where you reside.
          </p>
        </section>

        <section id="contact" className="privacy-section">
          <h2>CONTACT US</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="contact-info">
            <p>Email: privacy@lexora.com</p>
            <p>Support: <Link to="/help">Help Center</Link></p>
          </div>
        </section>
      </div>
    </div>
  )
}
