export default function sendMessage(message: string, fromName: string, fromEmail: string) {
  /* Send Slack notification: */
  fetch(
    atob(
      "aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDdCOTlMQkRNL0IwMzEwRjYxVUNDLzNsU0xVQVJmWk52YWlubXpKT0VUUEVGdAo="
    ),
    {
      method: "POST",
      body: `{"text":"${message.replace(/"/g, '\\"')}"}`,
    }
  )

  /* Send confirmation mail to user (via Netlify and SendGrid): */
  const url = "aHR0cHM6Ly93Z3R3by1kZXYubmV0bGlmeS5hcHAvLm5ldGxpZnkvZnVuY3Rpb25zL3NlbmRtYWlsPw==";
  fetch(
    `${atob(url)}senderEmail=${fromEmail}&senderName=${fromName}&message=${message}`
  )
}
