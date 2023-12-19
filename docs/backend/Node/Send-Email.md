# Send Email

- Send Simple Email Using Resend
- Only works in backend code
- Need to have verified domain you own and can only send from that domain

## Code

```JS
import { EmailTemplate } from "./emailTemplate";
import { Resend } from "resend";

export default async (req, res) => {
  const resend = new Resend(process.env["NEXT_PUBLIC_RESEND_API_KEY"]);
  console.log("sending email");
  try {
    const data = await resend.emails.send({
      from: "Melchor Tatlonghari <founder@make-time.net>",
      to: ["meltatlonghari3@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John", body: JSON.stringify(req.body) }),
    });

    console.log("done sending email");
    res.status(200).json(data);
  } catch (error) {
    console.log("error sending email", error);
    res.status(400).json(error);
  }
};
```

# Send Email w/ Attachments

```JS

import { EmailTemplate } from "./emailTemplate";
import { Resend } from "resend";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default async (req, res) => {
  const resend = new Resend(process.env["NEXT_PUBLIC_RESEND_API_KEY"]);

  console.log("generating PDF");
  const pdfContent = {
    content: [
      { text: "Hello, world!", fontSize: 16, bold: true },
      { text: "First name: John", fontSize: 14 },
      { text: `Body: ${JSON.stringify(req.body)}`, fontSize: 14 },
    ],
  };

  pdfMake.createPdf(pdfContent).getBuffer(async (buffer) => {
    console.log("sending email");
    try {
      const data = await resend.emails.send({
        from: "Melchor Tatlonghari <founder@make-time.net>",
        to: ["meltatlonghari3@gmail.com"],
        subject: "Hello world",
        react: EmailTemplate({ firstName: "John", body: JSON.stringify(req.body) }),
        attachments: [
          {
            filename: "document.pdf",
            content: buffer,
          },
        ],
      });

      console.log("done sending email");
      res.status(200).json(data);
    } catch (error) {
      console.log("error sending email", error);
      res.status(400).json(error);
    }
  });
};
```
