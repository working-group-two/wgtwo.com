export default function sendMessage(message: string) {
  return fetch(
    atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDdCOTlMQkRNL0IwMzEwRjYxVUNDLzNsU0xVQVJmWk52YWlubXpKT0VUUEVGdAo="),
    {
      method: "POST",
      body: `{"text":"${message.replace(/"/g, '\\"')}"}`,
    }
  );
}
