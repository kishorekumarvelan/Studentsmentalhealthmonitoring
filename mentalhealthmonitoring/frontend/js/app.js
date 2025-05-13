document.getElementById('studentForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    stress_level: document.getElementById('stress').value,
    mood: document.getElementById('mood').value,
  };
  const res = await fetch('http://localhost:3000/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert('Student submitted: ' + result.message);
});
