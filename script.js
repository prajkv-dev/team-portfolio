const teamMembers = [
  {
    name: "Vignesh B.Y",
    role: "Team Leader",
    email: "vigneshshettyby@gmail.com",
    instagram: "https://www.instagram.com/acosmist.77?utm_source=qr&igsh=cndtODJoaWc1ank3"
  },
  {
    name: "Prajwal K.V",
    role: "Team Representative",
    email: "kvpraju07@gmail.com",
    instagram: "https://www.instagram.com/prajwal_._kv_?igsh=M2lpcHFhbWlsd3E4",
    linkedin: "https://www.linkedin.com/in/prajwal-kv-4b16b4364"
  },
  {
    name: "Kiran Kumar N",
    role: "Team Member",
    email: "kirankk5342@gmail.com",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-n-48a487371"
  },
  {
    name: "Keerthana S",
    role: "Team Member",
    email: "keerthigowda6885@gmail.com",
    linkedin: "https://www.linkedin.com/in/keerthana-s-660646388"
  },
  {
    name: "M. Deekshitha",
    role: "Team Member",
    email: "dheekshitham7@gmail.com",
    instagram: "https://www.instagram.com/deekshu._.07?igsh=aXdmdHVxN3Fmbnh0",
    linkedin: "https://www.linkedin.com/in/m-dheekshitha-b16503388"
  },
  {
    name: "Srusti N",
    role: "Team Member",
    email: "shrugwda804@gmail.com",
    linkedin: "https://www.linkedin.com/in/shrusti-gowda-968653388"
  }
];

const container = document.getElementById("team-container");

teamMembers.forEach(member => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${member.name}</h2>
    <p><strong>Role:</strong> ${member.role}</p>
    <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
    <div class="social-links">
      ${member.instagram ? `<a href="${member.instagram}" target="_blank">Instagram</a>` : ""}
      ${member.linkedin ? `<a href="${member.linkedin}" target="_blank">LinkedIn</a>` : ""}
    </div>
  `;

  container.appendChild(card);
  }); 