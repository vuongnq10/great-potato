export const count = async (data = {}): Promise<any> =>
  await fetch('/api/count', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, referrer: document?.referrer }),
  });
