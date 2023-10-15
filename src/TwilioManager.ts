import twilio, { Twilio } from "twilio";

/**
 * @description A class to send SMS using twilio client
 * @param TwilioAccountSSID -> process.env.TWILIO_ACCOUNT_SSID
 * @param TwilioAuthToken -> process.env.TWILIO_AUTH_TOKEN
 * @param TwilioAccountNumber process.env.TWILIO_ACCOUNT_NUMBER
 */


export class SMS {
  

  /**
 * @description A function to send SMS using twilio client
 * @param {string} phone - target phone number
 * @param {string} payload - text message
 */
  static async send(phone: string, payload: string) {
    try {
        
      const client: Twilio = twilio(
        process.env.TWILIO_ACCOUNT_SSID,
        process.env.TWILIO_AUTH_TOKEN);


      const message = await client.messages.create({
        body: payload,
        from: process.env.TWILIO_ACCOUNT_NUMBER,
        to: phone,
      });

      return message;
    } catch (error) {
      return { error: error };
    }
  }
}

