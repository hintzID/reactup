import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function FormSiswa() {
  return (
    <div className='container border bordered'>
    <Form>
      <h1>Formulir Siswa</h1>
      <hr />
      <FormGroup>
        <Label for="nama">Nama:</Label>
        <Input type="text" name="nama" id="nama" />
      </FormGroup>
      <FormGroup>
        <Label for="kelas">Kelas:</Label>
        <Input type="text" name="kelas" id="kelas" />
      </FormGroup>
      <FormGroup>
        <Label for="nilai">Nilai:</Label>
        <Input type="text" name="nilai" id="nilai" />
      </FormGroup>
      <Button color="primary" type="submit">Simpan</Button>
    </Form>
    </div>
  );
}

export default FormSiswa;
