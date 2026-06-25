export async function fetchNotifications() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmF2YWxsaWthcHVsYWdhbTE2QGdtYWlsLmNvbSIsImV4cCI6MTc4MjM3OTY1MywiaWF0IjoxNzgyMzc4NzUzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNWY3MTRkNTMtYjFjYS00MTA0LWJiYTQtZDI1YWQ1NTZkMjc2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHVsYWdhbSBwcmF2YWxsaWthIiwic3ViIjoiZjE2NjJjM2ItOTgyNy00M2RjLWI5M2UtOTI2ZTA5ODFhOTA0In0sImVtYWlsIjoicHJhdmFsbGlrYXB1bGFnYW0xNkBnbWFpbC5jb20iLCJuYW1lIjoicHVsYWdhbSBwcmF2YWxsaWthIiwicm9sbE5vIjoiMjNiMDFhMDVlOCIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6ImYxNjYyYzNiLTk4MjctNDNkYy1iOTNlLTkyNmUwOTgxYTkwNCIsImNsaWVudFNlY3JldCI6IlVSVWtUTlNQZXRNYXlhcHMifQ.aOuyC8STXnKeepQLtyvBkjOr0Utgo48VaXM8QmS8mcE",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return await response.json();
}