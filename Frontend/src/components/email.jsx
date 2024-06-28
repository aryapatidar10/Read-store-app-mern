import emailjs from 'emailjs-com';

export const sendEmail = (data) => {
  const serviceId = 'service_tct5du9';
  const templateId = 'template_61iu27x';
  const userId = 'HF5GaTX1MhaSIO0rx';

  const emailData = {
    to_name: 'Recipient Name',  // Add the recipient name here
    from_name: data.name,
    from_email: data.email,
    message: data.message
  };

  return emailjs.send(serviceId, templateId, emailData, userId);
};
