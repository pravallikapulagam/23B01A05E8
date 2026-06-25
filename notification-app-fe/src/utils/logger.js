export async function Log(stack, level, packageName, message) {
  try {
    await fetch("http://4.224.186.213/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmF2YWxsaWthcHVsYWdhbTE2QGdtYWlsLmNvbSIsImV4cCI6MTc4MjM4MjUyOCwiaWF0IjoxNzgyMzgxNjI4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOTcyZDFiOTMtYWVkNS00N2QwLTllM2ItMDAxZWJmMWVkODQwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHVsYWdhbSBwcmF2YWxsaWthIiwic3ViIjoiZjE2NjJjM2ItOTgyNy00M2RjLWI5M2UtOTI2ZTA5ODFhOTA0In0sImVtYWlsIjoicHJhdmFsbGlrYXB1bGFnYW0xNkBnbWFpbC5jb20iLCJuYW1lIjoicHVsYWdhbSBwcmF2YWxsaWthIiwicm9sbE5vIjoiMjNiMDFhMDVlOCIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6ImYxNjYyYzNiLTk4MjctNDNkYy1iOTNlLTkyNmUwOTgxYTkwNCIsImNsaWVudFNlY3JldCI6IlVSVWtUTlNQZXRNYXlhcHMifQ.UwYmTPRkAaW3_HIS7G_RexgspDkkm0huaYvQycK5eHM",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });
  } catch (err) {
    console.error("Logging failed:", err);
  }
}