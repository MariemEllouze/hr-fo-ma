import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import './SiderDemo.scss';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  TeamOutlined,
  FileDoneOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Input, Space } from 'antd';

const onSearch = value => console.log(value);
const { Search } = Input;


// (importer svg dans le code)import {ReactComponent  as LogoSvg}  from '../../../Icone/p.svg';

const { Header, Sider, Content } = Layout;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    
  };
  render() {

    return (
      <Layout style={{height:'100vh'}}>
        <Sider   trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['Acceuil']}>

              <Menu.Item key="1" icon={<SearchOutlined />} >
              <Space direction="vertical">
               <Search placeholder="Search .." onSearch={onSearch} style={{ width: 200 }} />
    
              </Space>
              </Menu.Item>
              <Menu.Item key="2" icon={<HomeOutlined />}>
              <Link to='/Acceuil' className='menu-item'>
                Acceuil
              </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={< FileDoneOutlined />}>
              <Link to='/PosteBanque' className='menu-item'>
                Postes/Banque de condidateurs
                </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<TeamOutlined />}>
              <Link to='/Condidat' className='menu-item'>
                Candidats
                </Link>
              </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 10 , background:"#fff"}}>
            <div className='avatar'>
              <Avatar style={{ float: 'right',size:'small' , height: '32px' }} icon={<UserOutlined />} />
            </div>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { 
              className: 'trigger',
              onClick: this.toggle,
              
            })}


          </Header>
         
          <Content 
            className="Contenu"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,

            }}
          >
          
           
           {this.props.children}
          </Content>
         
        </Layout>
      </Layout>

    );
  }
} export default SiderDemo;
