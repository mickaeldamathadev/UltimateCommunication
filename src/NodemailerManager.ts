import mailer, { SendMailOptions, SentMessageInfo } from 'nodemailer'

/**
 * @description A class to send mail using nodemailer
 * @param host -> process.env.NODEMAILER_HOST
 * @param user -> process.env.NODEMAILER_USER
 * @param pass -> process.env.NODEMAILER_PASS
 */

export class Mail {
  /**
   * @description A function to send mail using nodemailer
   * @param {string} receiver - target mail
   * @param {string} subject - mail subject
   * @param {string} body - mail content
   * @param {string} attachment - attachment: { filename, path, contentType }
   */

  static async send(
    receiver: string,
    subject: string,
    body: string,
    attachment?: {
      filename: string
      path: string
      contentType: 'application/pdf' | 'application/image'
    },
  ) {
    try {
      const transporter = mailer.createTransport({
        secure: true,
        port: 465,
        host: process.env.NODEMAILER_HOST,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
      })
      const mailOptions: SendMailOptions = {
        from: process.env.NODEMAILER_USER, // sender address
        to: receiver, // list of receivers
        subject: subject, // Subject line
        html: body, // plain text body
        attachments: attachment ? [attachment] : null,
      }

      const mail = await new Promise((res, rej) => {
        transporter.sendMail(
          mailOptions,
          function (err: Error | null, info: SentMessageInfo) {
            if (err) {
              rej(err)
              throw new Error(err.message)
            }

            res(info)
          },
        )
      })

      return { success: true, mail }
    } catch (error: any) {
      return { error: error.message }
    }
  }
}
