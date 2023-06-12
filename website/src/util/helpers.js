module.exports = {
  validEmail: email =>
    /^[^\s@]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|zoho\.com|protonmail\.com|gmx\.com|yandex\.com|mail\.com|temp-mail\.org|guerrillamail\.com|10minutemail|mailinator\.com|yopmail\.com|throwawaymail\.com|fakemailgenerator\.com|getnada\.com|tempinbox\.com|mintemail\.com|mailcatch\.com|owlymail\.com|fakeinbox\.com|mytempemail\.com|trashmail\.com|spamgourmet\.com|jetable\.org|mailnesia\.com|inboxbear\.com|mailtemp\.org|mailslurp\.com|33mail\.com|guerrillamail\.net|maildrop\.cc|sharklasers\.com|tempail\.com|spamgourmet\.net|dispostable\.com|tempmailo\.com|mailnesia\.com|getairmail\.com|inboxalias\.com|email\.tst|oastify\.com)[^\s@]+\.[^\s@]+$/i.test(
      email
    ),
  containsAngleBrackets: string => /[<>]+/.test(string),
  slugify: text =>
    text
      .toString()
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-"),
}
