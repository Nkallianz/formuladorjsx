import ReactDOM from 'react-dom';
import Main from './components/Main/Main';

//Redux

//import {Provider} from 'react-redux';
import './assets/dist/antd.css';
//import 'antd/dist/antd.less';
import './assets/css/style.scss';
import './assets/font-awesome/css/fontawesome-all.css';
import './assets/font-awesome/scss/fa-regular.scss';

//const store = configureStore();

const app = (
    <div className="container">
        <Main />
     </div>
 );

ReactDOM.render(app, document.getElementById('Root'));