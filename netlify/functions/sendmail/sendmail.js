const client = require("@sendgrid/mail")
const { SENDGRID_APIKEY } = process.env

exports.handler = async function (event, context, callback) {
  const { message, senderEmail, senderName } = event.queryStringParameters
  //client.setApiKey(SENDGRID_APIKEY)

  const data = {
    to: "lalomaf902@mliok.com",
    from: "noreply@wgtwo.com",
    subject: `New message from ${senderName} (${senderEmail})`,
    html: message,
  }

  try {
    //await client.send(data)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}
