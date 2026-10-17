import { sikka } from "@/sikka/config";
import { A, H2, List, Note, P, PageTitle } from "@/sikka/Prose";

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
          "Sign-up may be limited to invited email addresses, and we can choose who uses the app.",
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

      <H2>Information about other people</H2>
      <P>
        The people you add (names, phone numbers) and the email addresses you
        send connection requests to are about other people. Only record what
        you're entitled to, keep it accurate, and remove it if they ask you to.
      </P>

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

      <H2>The app</H2>
      <P>
        The app, its design and its code belong to us. We give you a personal,
        non-transferable right to use it for yourself, under these terms.
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
        errors. We may change, pause or stop the app or these terms; the date
        above shows when these terms last changed, and you can always delete
        your account.
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
      <P>
        These terms are governed by the laws of India, and disputes are handled
        by{" "}
        {sikka.jurisdictionCity
          ? `the courts at ${sikka.jurisdictionCity}`
          : "the courts of India"}
        .
      </P>

      <H2>General</H2>
      <List
        items={[
          "These terms and the privacy policy are the whole agreement between you and us about Sikka.",
          "If a part of these terms can't be enforced, the rest still applies.",
          "If we don't enforce a term straight away, we can still enforce it later.",
          "You can't transfer your account or these terms to someone else.",
        ]}
      />
    </>
  );
}
