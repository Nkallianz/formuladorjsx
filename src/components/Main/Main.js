import {Layout,Tooltip,
    Icon, Row, 
    Col
} from 'antd';
const {Header,Content,Sider,Footer} = Layout;
import Navbar from './../Navbar/Navbar';
import MainRouter from './../../routers/mainRouters';

//import AppSet from './../AppSet/AppSet';
//import NoticeBar from './../NoticeBar/NoticeBar';
//import usuarios from '../../pages/usuarios/usuarios';


// Obrigado Fernanda Nubank pelo nome do AppSet
export default class Main extends React.Component {
  
 render(){
     console.log(Navbar)
     return(
        
         <Layout className="layout">
         <Header>
        <Navbar/>
             </Header>
             <Content id="Content">
               <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
               <MainRouter />
               </div>
             </Content>           
              <Footer className="footer">
                <img src="./../../assets/images/icons/oxsis_logo.png" style={{width:25,marginBottom:7}}/> <span>Por Oxsis 2018</span>
                                  
            </Footer>  
         </Layout>
        
     );
 }
}