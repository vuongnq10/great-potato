type EmailType = {
  name: string,
  email: string,
  message: string,
  subject: string
};

export const send = async (data: EmailType): Promise<{ success: boolean }> => {
  const { name = "", email = "", message = "", subject = "" } = data;
  return await (await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message, subject }),
  })).json();
}
