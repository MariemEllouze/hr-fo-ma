import React from 'react'
import { Select } from 'antd';
const {Option}=Select ;
 



function CustomSelect ({data,onChange, defaultValue}){



  return (
    <Select
    defaultValue={defaultValue}
    onChange={onChange}
    showSearch
    style={{ width: 420}}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
     
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
    rules={[{ required: true, message: 'Please select ' }]}
  >
        {
          data.map((val) => (
              <Option   key={val.label} >
                {val.label}
              </Option>
          ))
      }
</Select>
  )
    
}

export default CustomSelect 
