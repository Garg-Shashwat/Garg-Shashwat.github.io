import { sikka } from "@/sikka/config";
import { H2, List, Note, P, PageTitle } from "@/sikka/Prose";
import Support from "@/sikka/Support";

export default function DeleteAccount() {
  return (
    <>
      <PageTitle
        sub={`Sikka is an expense tracking app by ${sikka.developer}.`}
      >
        Delete your Sikka account
      </PageTitle>

      <H2>Delete it in the app</H2>
      <List
        ordered
        items={[
          "Open Sikka and sign in.",
          "Go to Settings.",
          "Tap Delete account and confirm.",
        ]}
      />
      <P>Your account is deleted immediately.</P>

      <H2>Can't use the app?</H2>
      <P>
        Email <Support subject="Delete my Sikka account" /> from the email
        address you use for Sikka, with the subject “Delete my Sikka account”.
        We'll delete the account within 30 days and reply to confirm.
      </P>

      <H2>What is deleted</H2>
      <List
        items={[
          "Your account and login (email and password).",
          "Your profile name.",
          "Everything you recorded: expenses, settlements, refunds, people, groups, categories, tags and notes.",
          "Receipt photos you added.",
          "Your connections to other Sikka users.",
        ]}
      />

      <H2>What is kept</H2>
      <Note>
        Expenses that other people recorded with you stay in their own accounts,
        with you shown only as a plain name (for example “Asha”). Your email and
        account are no longer linked to them.
      </Note>
      <P>
        Nothing else is kept. Sikka doesn't keep backups of deleted accounts.
      </P>
    </>
  );
}
