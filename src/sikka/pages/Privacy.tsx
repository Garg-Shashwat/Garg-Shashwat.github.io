import { sikka } from "@/sikka/config";
import { A, H2, List, Note, P, PageTitle } from "@/sikka/Prose";
import Support from "@/sikka/Support";

export default function Privacy() {
  return (
    <>
      <PageTitle sub="Effective 17 October 2026">Privacy policy</PageTitle>
      <Note>
        In short: Sikka stores the expenses you record so you can see them on
        your devices and share them with people you choose. There are no ads, no
        analytics or tracking, and we never sell your data.
      </Note>

      <H2>Who we are</H2>
      <P>
        Sikka is an expense tracking app made by {sikka.developer} (“we”).
        Questions or requests: <Support />.
      </P>

      <H2>What we collect</H2>
      <List
        items={[
          "Account: your email address, your password (stored only as a secure hash by our authentication provider) and the name you set.",
          "What you record: expenses, settlements, transfers and refunds (amounts, dates, descriptions, notes), the people and groups you add (names, and phone numbers if you enter them), and your categories and tags.",
          "Receipt photos you choose to attach. The app asks for camera or photo access only when you add a receipt.",
          "Connections: email addresses you send connection requests to, invite codes, and who is connected with whom.",
          "Edit history of shared expenses: who changed what and when.",
          "Technical logs kept by our hosting provider for security and reliability (for example IP address and time of requests).",
        ]}
      />
      <P>
        The people you add (for example “Mom”) are names in your own records;
        Sikka doesn't contact them, and connection requests aren't emailed.
        Please only add details about others that you're entitled to record.
      </P>

      <H2>How we use it</H2>
      <List
        items={[
          "To run the app: store your records, sync them across your devices and work out who owes whom.",
          "To share expenses with people you connect with, when you choose to.",
          "To send sign-up and password-reset codes by email.",
          "To keep the service secure: limiting abuse and controlling who can sign up.",
        ]}
      />

      <H2>Who can see your data</H2>
      <List
        items={[
          "Only you, for anything you don't share: personal expenses, your categories and tags.",
          "People you connect with, for what you share with them: expenses you're both part of, groups you're both in, the names of the people and categories on those, their notes and receipts, and their edit history. Connecting always needs both sides to agree, and either side can disconnect.",
          <>
            Service providers that run Sikka for us, only to provide the
            service: <strong>Supabase</strong> (database, sign-in and file
            storage) and <strong>Google</strong> (sending sign-in emails). They
            don't use your data for their own purposes.
          </>,
        ]}
      />
      <P>
        We don't sell or rent your data, and we don't share it with advertisers
        or data brokers.
      </P>

      <H2>Security</H2>
      <P>
        Data is encrypted in transit (HTTPS) and at rest on our provider's
        servers, which may be outside India. Access is controlled on the server,
        so each account can read only its own data and what others have shared
        with it. A copy of your data is also kept on your phone so the app works
        offline; deleting your account or uninstalling the app removes it.
      </P>
      <P>
        If a security breach affects your data, we'll tell you and the
        authorities as the law requires.
      </P>

      <H2>How long we keep it</H2>
      <P>
        Until you delete it or delete your account. Deleting your account
        removes your account and everything you recorded straight away (see{" "}
        <A href="/sikka/delete-account/">how to delete your account</A>).
        Expenses other people recorded with you stay in their accounts, showing
        you only as a plain name. Any backups our provider keeps are overwritten
        within 7 days, and its security logs are kept for a short period and
        then deleted.
      </P>

      <H2>Your choices and rights</H2>
      <List
        items={[
          "See and correct your data in the app at any time.",
          "Delete individual records, disconnect from people, or delete your whole account in the app.",
          <>
            Ask us about your data, or for a copy of it, at{" "}
            <Support subject="My Sikka data" />.
          </>,
        ]}
      />
      <P>
        If you are in India, you have rights under the Digital Personal Data
        Protection Act, 2023: to get a summary of your data, to have it
        corrected or erased, to withdraw consent (by deleting your account), to
        nominate someone to act for you, and to have grievances addressed. Our
        grievance officer is {sikka.developer}, at{" "}
        <Support subject="Sikka grievance" />. If you're not satisfied with our
        answer, you can complain to the Data Protection Board of India.
      </P>

      <H2>Children</H2>
      <P>
        Sikka is not meant for children under 18: you confirm you're 18 or older
        when you create an account, and we don't knowingly collect children's
        data. If you believe a child has an account, tell us and we'll delete
        it.
      </P>

      <H2>Changes</H2>
      <P>
        If this policy changes, we'll update the date above, and tell you in the
        app if the change is significant.
      </P>
    </>
  );
}
