const client = require("@sendgrid/mail")
const { SENDGRID_APIKEY } = process.env

exports.handler = async function (event, context, callback) {
  const { message, senderEmail, senderName } = event.queryStringParameters
  client.setApiKey(SENDGRID_APIKEY)

  const htmlTemplate = `
    Utform mail-malen her ved bruk av HTML.<br>
    <b>Fet skrift</b>, <i>Kursiv</i>, <u>Understreket</u>. Og denne for å lage linjeskift: <br>
    <br>
    Hele navnet til innsenderen kan fås tak i slik: ${senderName} (inkludert dollar og krøllparantesene).<br>
    Mailen til innsenderen fås tak i slik: ${senderEmail}<br>
    Og selve meldingen som ble skrevet av innsenderen slik: ${message}<br>
    <br>
    Eksempel (generert fra enginemailer.com):<br>
    <br>
    <br>
    <!DOCTYPE html><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><style>
    *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none} @media (max-width:720px){.social_block.desktop_hide .social-table{display:inline-block!important}.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}
    </style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff"><tbody><tr><td><table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tbody><tr><td><table 
    class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:30px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="image_block block-1" width="100%" 
    border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad" style="width:100%;padding-right:0;padding-left:0"><div class="alignment" align="center" style="line-height:10px"><a href="https://www.enginemailer.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://www.wgtwo.com/img/logo.svg" style="display:block;height:auto;border:0;max-width:140px;width:100%" width="140" 
    alt="Enginemailer logo" title="Enginemailer logo"></a></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#b3e5fc;background-size:auto"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:35px;padding-top:35px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:30px"><div style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#000050;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px">
    <strong><span style="font-size:20px;">
    Thanks for reaching out to us, ${senderName}!
    </span></strong></p><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:14.399999999999999px">&nbsp;</p><p style="margin:0;font-size:14px;text-align:left;mso-line-height-alt:16.8px"><span style="font-size:20px;">We have received your message and will respond to you as soon as possible.</span></p></div></div></td></tr></table><table class="text_block block-2" width="100%" border="0" cellpadding="25" 
    cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:18px;color:#000050;line-height:1.5"><p style="margin:0;text-align:left;mso-line-height-alt:24px"><span style="font-size:16px;">Here's the message you sent:</span></p><p style="margin:0;text-align:left;mso-line-height-alt:18px">&nbsp;
    </p><p style="margin:0;text-align:left;mso-line-height-alt:24px"><span style="font-size:16px;">
    "${message}"
    </span></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-3" align="center" width="100%" border="0" 
    cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
    style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:40px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="button_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center">
    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://portal.enginemailer.com/Account/Register" style="height:48px;width:240px;v-text-anchor:middle;" arcsize="105%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
    <a href="https://portal.enginemailer.com/Account/Register" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#3AAEE0;border-radius:50px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:8px;padding-bottom:8px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>Call-to-Action Button</strong></span></span></a>
    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" 
    style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:25px;padding-top:25px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="social_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
    <tr><td class="pad"><div class="alignment" align="center"><table class="social-table" width="208px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block"><tr><td style="padding:0 10px 0 10px"><a href="https://www.linkedin.com/company/enginemailer" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-gray/linkedin@2x.png" width="32" height="32" alt="LinkedIn" 
    title="LinkedIn" style="display:block;height:auto;border:0"></a></td><td style="padding:0 10px 0 10px"><a href="https://twitter.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-gray/twitter@2x.png" width="32" height="32" alt="Twitter" title="Twitter" style="display:block;height:auto;border:0"></a></td><td style="padding:0 10px 0 10px">
    <a href="https://www.youtube.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-gray/youtube@2x.png" width="32" height="32" alt="YouTube" title="YouTube" style="display:block;height:auto;border:0"></a></td><td style="padding:0 10px 0 10px"><a href="mailto:" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/circle-gray/mail@2x.png" width="32" height="32" 
    alt="E-Mail" title="E-Mail" style="display:block;height:auto;border:0"></a></td></tr></table></div></td></tr></table><table class="text_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class 
    style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"><p dir="ltr" style="margin:0;text-align:center;mso-line-height-alt:14.399999999999999px"><strong>Working Group Two</strong></p><p dir="ltr" style="margin:0;text-align:center;mso-line-height-alt:14.399999999999999px">
    <a href="https://wgtwo.com/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #3f91d4;">https://wgtwo.com</a></p><p dir="ltr" style="margin:0;text-align:center;mso-line-height-alt:14.399999999999999px"><a href="tel://+4799090872" target="_blank" style="text-decoration: underline; color: #3f91d4;" rel="noopener">+47 9909 0872</a></p><p 
    style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:14.399999999999999px">&nbsp;</p><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><span style="font-size:12px;"><strong>Our mailing address:</strong></span></p><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><a href="mailto:contact@wgtwo.com" style="text-decoration: underline; color: #3f91d4;">contact@wgtwo.com</a></p></div></div></td>
    </tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!-- End --><div style="background-color:transparent;">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
            <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                <div class="col num12" style="min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->
    
    
                            <!--[if (!mso)&(!IE)]><!-->
                        </div><!--<![endif]-->
                    </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
    </div></body></html>
  `;

  const data = {
    to: senderEmail,
    from: "sales@wgtwo.com",
    subject: `New message from ${senderName} (${senderEmail})`,
    html: message,
  }

  try {
    await client.send(data)
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "Melding sendt" }),
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}
