import { Transporter } from "nodemailer";
/**
 * @description A class to send mail using nodemailer
 * @param host -> process.env.NODEMAILER_HOST
 * @param user -> process.env.NODEMAILER_USER
 * @param pass -> process.env.NODEMAILER_PASS
 */
export declare class Mail {
    transporter: Transporter;
    constructor();
    /**
 * @description A function to send mail using nodemailer
 * @param {string} receiver - target mail
 * @param {string} subject - mail subject
 * @param {string} body - mail content
 * @param {string} attachment - attachment: { filename, path, contentType }
 */
    send(receiver: string, subject: string, body: string, attachment?: {
        filename: string;
        path: string;
        contentType: "application/pdf" | "application/image";
    }): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        error: any;
        success?: undefined;
    }>;
}
