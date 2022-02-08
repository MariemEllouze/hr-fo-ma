import { Form, Button, Input  } from 'antd';
import CustomSelect from '../customSelect/CustomSelect';
import './PosteForm.scss';
import { useDispatch } from 'react-redux';
import { addPostes } from '../../../redux/actions/postesAction';
import React from 'react'




const data = {
  education: [
    { value: 1, label: 'Lycée ou equivalent ' },
    { value: 2, label: ' Certification' },
    { value: 3, label: 'Formation Professionelle' },
    { value: 4, label: 'Licence ' },
    { value: 5, label: 'Doctorat ' },
    { value: 5, label: ' Professionelle  ' },
    { value: 5, label: ' Non specifié ' },
  ],
  exp: [
    { value: 1, label: 'Sans objet  ' },
    { value: 2, label: ' Stage ' },
    { value: 3, label: 'Premier niveau ' },
    { value: 4, label: ' Associé' },
    { value: 5, label: 'Responsable ' },
    { value: 6, label: 'Exécutif ' },
    { value: 7, label: ' Cadre Moyen ' },
  ],
  type: [
    { value: 1, label: 'Temps plein' },
    { value: 2, label: ' Temps partiel' },
    { value: 3, label: 'Contrat' },
    { value: 4, label: 'Temporaire' },
    { value: 5, label: ' Autre' },
  ],
  cities: [
    { value: 1, label: 'Tunis' },
    { value: 2, label: ' Sfax' },
    { value: 3, label: 'Sousse' },
    { value: 4, label: 'Kairouan' },
    { value: 5, label: ' Bizerte' },
    { value: 6, label: 'Gabès' },
    { value: 7, label: 'Ariana' },
    { value: 8, label: 'Gafsa' },
    { value: 9, label: 'Monastir' },
    { value: 10, label: 'Ben Arous' },
    { value: 11, label: 'Kasserine' },
    { value: 12, label: 'Médenine' },
    { value: 13, label: 'Nabeul' },
    { value: 14, label: 'Tataouine' },
    { value: 15, label: 'Béja' },
    { value: 16, label: 'Le Kef' },
    { value: 17, label: 'Mahdia' },
    { value: 18, label: 'Sidi Bouzid' },
    { value: 19, label: 'Jendouba' },
    { value: 20, label: 'Tozeur' }, { value: 21, label: 'La Manouba' }, { value: 22, label: 'Siliana' }, { value: 23, label: 'Zaghouan' }, { value: 24, label: 'Kébili ' }, { value: 25, label: 'Autre' },
  ],

};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function PosteForm() {
  const [form] = Form.useForm();
  let dispatch = useDispatch();
  const onFinish = values => {
    console.log('Received values of form:', values);
     dispatch(addPostes(values));
   
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
    

  };
  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form layout="vertical" hideRequiredMark form={form} name="form"  onFinish={onFinish} onFinishFailed={onFinishFailed}  autoComplete="off">
      <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Missing Title  ' }]}>
        <Input className="title" placeholder="Please enter Title" />
      </Form.Item>
      <Form.Item name="city" label="City" rules={[{ required: true, message: 'Missing Cities ' }]}>
        <CustomSelect data={data.cities} value={data.cities} onChange={handleChange} >{data.cities} </CustomSelect>

      </Form.Item>
      <Form.Item name="education" label="Education" rules={[{ required: true, message: 'Missing education ' }]}>
        <CustomSelect data={data.education} onChange={handleChange} />

      </Form.Item>
      <Form.Item name="experience" label="Experience" rules={[{ required: true, message: 'Missing Experience' }]}>
        <CustomSelect data={data.exp} onChange={handleChange} />

      </Form.Item>
      <Form.Item name="positionType" label="PositionType" rules={[{ required: true, message: 'Missing Position Type ' }]}>
        <CustomSelect data={data.type} onChange={handleChange} />

      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: false, message: 'Missing Position Poste ' }]}>

        <Input.TextArea rows={4} className="description" value="" placeholder="please enter  description for more Details" />
      </Form.Item>



      <Form.Item {...tailLayout} shouldUpdate >

        <Button type="primary"  htmlType="submit" >
          Submit
         
        </Button>

        <Button htmlType="button" onClick={onReset} name="reset">
          Reset
        </Button>

      </Form.Item>

    </Form>

  );
};

export default PosteForm