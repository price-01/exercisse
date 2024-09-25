
const Header = () => {
	return (
		<header className="header">
		  <h1>Buat Header Menggunakan JSX</h1>
		  <p>Tutorial JSX sederhana</p>
		</header>
	);
);

const Table = () => {
	return (
	  <table border="1" cellPadding="10" style={{ width: "100%",textAlign: "center" }}>
	    <thead>
		  <tr>
		  <th>Nama</th>
		  <th>Gender</th>
		  <th>Jurusan</th>
		  <th>Nomor WA</th>
		  <th>Alamat</th>
		 </tr>
		</thead>
		<tbody>
		{[...Array(5)].map((_,rowIndex) => (
		  <tr key=(rowIndex)>
		  {[...Array(5)].map((_< colIndex) => (
		    <td key={colIndex}>Baris {rowIndex + 1} Kolom {colIndex + 1}</td>
		  ))}
		</tr>
		))}
	  </tbody>
	</table>
  );
);

const App = () => {
	return (
		<div>
		  <header> />
		  <Table />
		</div>
	);
};
ReactDOM.rende({<App />, document>getElementById('app));
		<tbody>
			<tr>
				<td>Pariss Rawung</td>
				<td>Laki Laki</td>
				<td>Informatika</td>
				<td>089678104424</td>
				<td>manado</td>
			</tr>
			<tr>
				<td>Virgilio Tambun</td>
				<td>Laki Laki</td>
				<td>Informatika</td>
				<td>085798181797</td>
				<td>kanaan</td>
			</tr>
			<tr>
				<td>David Pintunaung</td>
				<td>Laki Laki</td>
				<td>Informatika</td>
				<td>081368307342</td>
				<td>asrama</td>
			</tr>
			<tr>
				<td>Arlino Nanalis</td>
				<td>Laki Laki</td>
				<td>Informatika</td>
				<td>08975568424</td>
				<td>agape</td>
			</tr>
			<tr>
				<td>Bravey Mahagia</td>
				<td>Laki Laki</td>
				<td>Informatika</td>
				<td>081247776262</td>
				<td>asrama</td>
			</tr>
			<tr>
				<td>Krisdio Kabahi</td>
				<td>Laki Laki</td>
				<td>Informatika</td>
				<td>081242785943</td>
				<td>sarongsong 1</td>
			</tr>
			<tr>
				<td>Gilbert Palari</td>
				<td>Laki Laki</td>
				<td>Informatika</td>
				<td>081343806540</td>
				<td>kanaan</td>
			</tr>
			<tr>
				<td>Michelle Sorongan</td>
				<td>Perempuan</td>
				<td>sistem informasi</td>
				<td>089645323355</td>
				<td>asrama</td>
			</tr>
			