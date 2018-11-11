// https://leetcode.com/problems/unique-email-addresses/

var numUniqueEmails = function(emails) {
  const stripped = emails.map(email => {
    const localName = email
      .split('@')[0]
      .replace(/\./gi, '')
      .split('+')[0];
    return localName + '@' + email.split('@')[1];
  }, []);

  return new Set(stripped).size;
};
