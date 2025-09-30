   "use server";

import { Resend } from "resend";

    interface isType{
     msg:string,
     name:string
 }

   export const saveData = async (is:isType, fd: FormData):Promise<isType>  => {
   const name = String(fd.get("name") ?? "");
   const email = String(fd.get("email") ?? "");
   const message=String(fd.get("message") ?? "")
   const rs=fd.get("g-recaptcha-response") as string;

   const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
   method: "POST",
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ secret: "6LfApNYrAAAAAPam1WC7pQzO3Zmk6y5LQOrtn_CC", response:rs }),
 
      });

      const res=await response.json()
       
      if(res.success){
          console.log("database logic goes here")
          console.log("Name", name);
          console.log("Email", email);
          console.log("Message", message);
         
            const resend=new  Resend('re_31TyHg4h_JtKGY19Hw5TkTC2aGDaCWy7o')
            const res= await resend.emails.send({
                from: 'support team <onboarding@ninjatech.space>',
                to: email,
                subject: 'Confirmation',
                html: '<strong>Thank you for contacting me!</strong>',
            });


          return { msg: "Success", name };
      }
      else{
          console.log("do not be oversmart")
          return { msg: "Failed", name };
      }
   };
    
