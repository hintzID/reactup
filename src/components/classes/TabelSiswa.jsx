import React, { useState, useEffect } from 'react';
import { Table,Button } from 'reactstrap';
import { handleHapus } from '../functions/hapus.js';
import Header from './html_components/header.jsx';

function TabelSiswa() {
  const [siswa, setSiswa] = useState(() => {
    const savedSiswa = localStorage.getItem('siswa');
    return savedSiswa ? JSON.parse(savedSiswa) : [];
  });

  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('');
  const [nilai, setNilai] = useState('');

  const [siswaToEdit, setSiswaToEdit] = useState(null);

  const tambahSiswa = () => {
    const newSiswa = { nama, kelas, nilai };
    setSiswa([...siswa, newSiswa]);
    setNama('');
    setKelas('');
    setNilai('');
  };

  const ubahSiswa = () => {
    const updatedSiswa = { ...siswaToEdit, nama, kelas, nilai };
    const updatedSiswaIndex = siswa.findIndex(
      (s) => s.nama === siswaToEdit.nama && s.kelas === siswaToEdit.kelas
    );
    const updatedSiswaList = [...siswa];
    updatedSiswaList[updatedSiswaIndex] = updatedSiswa;
    setSiswa(updatedSiswaList);
    setNama('');
    setKelas('');
    setNilai('');
    setSiswaToEdit(null);
  };

  const handleEdit = (nama, kelas) => {
    const siswaToEdit = siswa.find((s) => s.nama === nama && s.kelas === kelas);
    setNama(siswaToEdit.nama);
    setKelas(siswaToEdit.kelas);
    setNilai(siswaToEdit.nilai);
    setSiswaToEdit(siswaToEdit);
  };

  useEffect(() => {
    localStorage.setItem('siswa', JSON.stringify(siswa));
  }, [siswa]);

  return (
    <div>
    <br />
    <Header />
    <br />
    <br />
    <div className='container border bordered border-success'> 
      <h1 className='text-center'>Tabel Siswa</h1>
      <hr className='bg-warning border border-danger' />
      <Table striped border bordered>
        <thead className='text-center'>
          <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map((s, i) => (
            <tr key={i}>
              <td>{s.nama}</td>
              <td>{s.kelas}</td>
              <td>{s.nilai}</td>
              <td className='text-center'>
              <button className='btn btn-warning col-5' onClick={() => handleEdit(s.nama, s.kelas)}>Ubah</button> &nbsp;
              <button className='btn btn-danger col-5' onClick={() => handleHapus(siswa, setSiswa, s.nama, s.kelas, s.nilai)}>Hapus</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                className='form-control'
                type='text'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </td>
            <td>
              <input
                className='form-control'
                type='text'
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                />
                </td>
                <td>
                <input
                className='form-control'
                type='text'
                value={nilai}
                onChange={(e) => setNilai(e.target.value)}
                />
                </td>
                <td className='text-center'>
                {siswaToEdit ? (
                <button className='btn btn-success col-10' onClick={ubahSiswa}>Simpan</button>
                ) : (
                  <Button className='col-10' onClick={() => tambahSiswa(siswa, setSiswa, nama, kelas, nilai)}>Tambah</Button>
                )}
                </td>
                </tr>
                </tbody>
                </Table>
                </div>
                </div>
                );
                }
                
                export default TabelSiswa;

