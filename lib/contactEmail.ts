interface ContactFormData {
  name: string;
  email: string;
  message: string;
  attachment?: File[];
}

export function sendEmail(data: ContactFormData) {
  const apiEndpoint = "/api/contact";

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);

  if (data.attachment && data.attachment.length > 0) {
    formData.append("attachment", data.attachment[0]); // Append file
  }

  fetch(apiEndpoint, {
    method: "POST",
    body: formData, // 🔥 Send as FormData, NOT JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}
