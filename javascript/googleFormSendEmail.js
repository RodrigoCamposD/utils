/**
 * @description Google Script function that's sends email for just submited form
 * 1. acess app script in your form page and click in script editor
 * 2. create a function and put this code in
 * 3. create a trigger for every submited form
 */
function newSendEmail() {
  const form = FormApp.getActiveForm();
  const responses = form.getResponses();
  const latestResponse = responses[responses.length - 1];
  const itemResponses = latestResponse.getItemResponses();
  const to = "receiver@email.com";
  let name = "";
  let body = "";
  let replyTo = "";
  itemResponses.forEach((el) => {
    body += `${el.getItem().getTitle()}: ${el.getResponse()} \n`;
    // this two lines above dependes on the "Email" and "Name" titles on form
    // updating the variables replyTo and name above to better customized email
    if (el.getItem().getTitle() === "Email") replyTo = el.getResponse();
    if (el.getItem().getTitle() === "Nome Completo") name = el.getResponse();
  });
  const subject = `Form sent by ${name}`;
  try {
    MailApp.sendEmail(to, replyTo, subject, body);
    console.log(`E-mail from ${name} ${email} sent successfully!`);
  } catch (error) {
    console.error("Error: ", error);
  }
}
