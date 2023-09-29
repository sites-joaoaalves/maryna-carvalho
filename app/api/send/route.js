import { EmailTemplate } from "../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  const { name, email, phone, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "contato@marynacarvalhoadvocacia.com.br",
      to: ["marynacndsantos@gmail.com"],
      subject: "Contato pelo site",
      react: EmailTemplate({ name, email, phone, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
