/**
 * @description A class to send SMS using twilio client
 * @param TwilioAccountSSID -> process.env.TWILIO_ACCOUNT_SSID
 * @param TwilioAuthToken -> process.env.TWILIO_AUTH_TOKEN
 * @param TwilioAccountNumber process.env.TWILIO_ACCOUNT_NUMBER
 */
export declare class SMS {
    /**
   * @description A function to send SMS using twilio client
   * @param {string} phone - target phone number
   * @param {string} payload - text message
   */
    static send(phone: string, payload: string): Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance | {
        error: any;
    }>;
}
