import { sikka } from "@/sikka/config";
import { A, H2, List, Note, P, PageTitle } from "@/sikka/Prose";
import Support from "@/sikka/Support";

export default function Terms() {
  return (
    <>
      <PageTitle sub="Effective 17 October 2026">Terms of use</PageTitle>
      <Note>
        In short: Sikka is a free app to keep track of expenses with family and
        friends. Use it honestly, keep your account safe, and check the numbers
        before you rely on them. The app is provided as it is.
      </Note>

      <H2>About these terms</H2>
      <P>
        These terms are between you and {sikka.developer} (“we”), who makes
        Sikka. By creating an account or using the app you agree to them. Our{" "}
        <A href="/sikka/privacy/">privacy policy</A> explains what data we keep
        and why.
      </P>

      <H2>Who can use Sikka</H2>
      <List
        items={[
          "You must be at least 18 years old.",
          "Sign-up may be limited to invited email addresses, and we may decide who can use the app.",
          "One account per person. Keep your password private; you're responsible for what happens in your account.",
        ]}
      />

      <H2>Using the app</H2>
      <List
        items={[
          "Sikka helps you record expenses and work out who owes whom. It does not move money, make payments or hold funds.",
          "Balances, splits and reports are calculated from what you and the people you connect with record. Check them before you settle up; we aren't responsible for mistakes in what was entered.",
          "Sikka is not financial, tax or legal advice.",
        ]}
      />

      <H2>Sharing with others</H2>
      <P>
        When you connect with someone, expenses you share with them are visible
        to them and either of you can edit or delete them. Every change is kept
        in the expense's history. Only connect with people you trust, and
        disconnect at any time from the app.
      </P>

      <H2>Your content</H2>
      <P>
        What you record (expenses, notes, receipt photos and the rest) stays
        yours. You let us store and process it only to run Sikka for you and the
        people you share it with. Don't upload anything you don't have the right
        to share, or anything unlawful.
      </P>

      <H2>Things you must not do</H2>
      <List
        items={[
          "Break the law, or use Sikka to harass, defraud or mislead anyone.",
          "Try to access other people's accounts or data, or get around the app's security or limits.",
          "Overload, disrupt or reverse engineer the service, or use automated tools against it.",
        ]}
      />

      <H2>Availability and changes</H2>
      <P>
        Sikka is free and provided “as is”. We try to keep it working and your
        data safe, but we can't promise it will always be available or free of
        errors. We may change, pause or stop the app or these terms; if a change
        is significant we'll tell you in the app, and you can always delete your
        account.
      </P>

      <H2>Ending your use</H2>
      <P>
        You can stop using Sikka and{" "}
        <A href="/sikka/delete-account/">delete your account</A> at any time. We
        may suspend or close an account that breaks these terms.
      </P>

      <H2>Liability</H2>
      <P>
        To the extent the law allows, we aren't liable for indirect or
        consequential losses, or for losses caused by mistakes in recorded data,
        by people you shared with, or by the service being unavailable. Nothing
        in these terms limits rights you have under law that can't be limited.
      </P>

      <H2>Law</H2>
      <P>These terms are governed by the laws of India.</P>

      <H2>Contact</H2>
      <P>
        Questions about these terms: <Support subject="Sikka terms" />.
      </P>
    </>
  );
}
