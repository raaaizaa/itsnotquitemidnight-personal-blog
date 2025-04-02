export function getCurrentDate() {
  const now = new Date();
  const currentDateTime = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(
    now.getHours()
  ).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  return currentDateTime;
}

export function formatDate(string){
  return new Date(string).toLocaleDateString(
    'en-US',
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
  );
}