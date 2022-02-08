
import React ,{useEffect} from 'react';
import { Form, Input,  Checkbox, Button, DatePicker , Select} from 'antd';
import CustomSelect from '../customSelect/CustomSelect.jsx';
import SingleUploader  from '../uploadButton/UploadButton.js';
import { useDispatch, useSelector } from 'react-redux';
import {  loadPostes } from '../../../redux/actions/postesAction.js';


const data = {
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
  gender:[{value:1, label:'Male'}, {value:2, label:'Female'}]
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  function CandidatForm ()  {
    const [form] = Form.useForm();
   
    const onFinish = (values) => {
        
      console.log('Received values of form: ', values);
    };
  
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      }
  
      const onReset = () => {
        form.resetFields();
      };
  
      const handleChange = () => {
        form.setFieldsValue({ sights: [] });
        
    
      };
      const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      };
     
      
      const { Option } = Select;
      const dateFormat = 'YYYY/MM/DD';
     
      let dispatch = useDispatch();
      const { postes, isLoading, errorMessage } = useSelector(state => state.data)
      useEffect(() => {
        dispatch(loadPostes());
        console.log("load poste")
      }, []);
    return (
      <Form
        layout="vertical" hideRequiredMark form={form} name="form"  onFinish={onFinish} onFinishFailed={onFinishFailed}  autoComplete="off"
       
      > 
       <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: 'Missing First Name  ' }]}>
        <Input className="firstName" placeholder="Please enter First Name" />
      </Form.Item>
      <Form.Item name="lastName " label="Last Name " rules={[{ required: true, message: 'Missing Last Name  ' }]}>
        <Input className="lastName" placeholder="Please enter Last Name " />
      </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input  placeholder="Please enter E-mail"/>
        </Form.Item>
        <Form.Item
          name="number"
          label="Phone Number"
          rules={[{ required: true, message: 'Please enter number phone' }]}

        >
          <Input addonBefore="+216"  placeholder="Please enter number"/>
        </Form.Item>
  
        <Form.Item name="city" label="City" rules={[{ required: true, message: 'Missing Cities ' }]}>
        <CustomSelect data={data.cities} value={data.cities} onChange={handleChange} >{data.cities} </CustomSelect>

       </Form.Item>
        
       <Form.Item  name="gender" label="Gender" rules={[{ required: true, message: 'Please select gender!' }]}>
        <CustomSelect data={data.gender} value={data.gender} onChange={handleChange} >{data.gender} </CustomSelect>
       
       </Form.Item>
      
       <Form.Item  name="poste" label="Poste" rules={[{ required: true, message: 'Please select poste!' }]}>
        <Select    rules={[{ required: true, message: 'Please select poste ' }]}>
        {isLoading && <h3>Loading..</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        {postes && postes.map((poste) => (
         console.log((poste.title, poste.city)),  <Option value={poste.title||poste.city||poste.positionType}>{poste.title||poste.city||poste.positionType}</Option>
       
          
       
       
           ))}
        </Select> 
        

    </Form.Item>
    
 
       <Form.Item name="date-picker" label="Date Naissance" {...config}>
       <DatePicker  format={dateFormat} />
      </Form.Item>
      <Form.Item >
       <SingleUploader />
      </Form.Item>
     
  
       
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
         
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          
        <Button htmlType="button" onClick={onReset} name="reset">
          Reset
        </Button>
        </Form.Item>
      </Form>
    );
    };

export default CandidatForm ;