// api/airtable.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, message } = req.body as {
    fullName: string;
    email: string;
    message?: string;
  };

  if (!fullName || !email) {
    return res.status(400).json({ error: "Missing name or email" });
  }

  try {
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "Full Name": fullName,
            "Email Address": email,
            "Comment / Question": message || "",
          },
        }),
      }
    );

    const data = await airtableRes.json();

    if (!airtableRes.ok) {
      return res.status(airtableRes.status).json({ error: data });
    }

    res.status(200).json({ success: true, data });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
