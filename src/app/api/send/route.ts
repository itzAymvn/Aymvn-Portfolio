import { NextRequest, NextResponse } from "next/server"
import emailjs from "@emailjs/nodejs"

const EMAILJS_SERVICE_ID = process.env?.EMAILJS_SERVICE_ID || "service_1"
const EMAILJS_TEMPLATE_ID = process.env?.EMAILJS_TEMPLATE_ID || "template_1"
const EMAILJS_PUBLIC_KEY = process.env?.EMAILJS_PUBLIC_KEY || "user_1"
const EMAILJS_PRIVATE_KEY = process.env?.EMAILJS_PRIVATE_KEY || "user_1"

emailjs.init({
	publicKey: EMAILJS_PUBLIC_KEY,
	privateKey: EMAILJS_PRIVATE_KEY,
})

export async function POST(req: NextRequest, res: NextResponse) {
	const { email, subject, message } = await req.json()
	try {
		const data = await emailjs.send(
			EMAILJS_SERVICE_ID,
			EMAILJS_TEMPLATE_ID,
			{
				from_name: (email.split("@")[0] || "Anonymous") as string,
				email: email as string,
				message: message as string,
				from_subject: subject as string,
				reply_to: email as string,
			}
		)

		return new NextResponse(JSON.stringify(data), {
			headers: {
				"Content-Type": "application/json",
			},
		})
	} catch (error: Error | any) {
		console.error(error)
		return new NextResponse(error.message, {
			status: error.status,
		})
	}
}

export async function GET(req: NextRequest, res: NextResponse) {
	return new NextResponse("Not Found", { status: 404 })
}
