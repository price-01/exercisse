const message = () => {
	const question = "Apa kabar hari ini?";
	const respons = "Baik baiksaja.";
	
	return `
		<h2>${question}</h2>
		<hr />
		<ul>
		  <li><strong>Jawaban:</strong> ${respons}</li>
		</ul>
	`;
};

export default message;
	