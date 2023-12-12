export const send = async ({ name = "", email = "", message = "", subject = "" }): Promise<{ success: boolean }> =>
  await (await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message, subject }),
  })).json();
