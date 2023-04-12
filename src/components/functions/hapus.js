export function handleHapus(siswa, setSiswa, nama, kelas, nilai) {
    const updatedSiswaList = siswa.filter(
      (s) => s.nama !== nama || s.kelas !== kelas || s.nilai !== nilai
    );
    setSiswa(updatedSiswaList);
  }
  