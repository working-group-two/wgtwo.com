module.exports = {
  validEmail: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
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
