
import {useNavigate,useLocation} from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
    AppOutline,
    MessageOutline,
    UnorderedListOutline,
    UserOutline,
  } from 'antd-mobile-icons'

import { LayoutWrapper } from './style';


export default ()=>{

    const navigate = useNavigate();
    const location = useLocation()
    const { pathname } = location;

    const setRouteActive = (value) => {
       navigate(value); 
    }

    const tabs = [{
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
          },
          {
            key: '/list',
            title: '列表',
            icon: <UnorderedListOutline />,
          },
          {
            key: '/study',
            title: '学习',
            icon: <MessageOutline />,
          },
          {
            key: '/me',
            title: '个人中心',
            icon: <UserOutline />,
          },
    ];

    const Items = ()=>{
        return(
            <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        )
    }

    return(
        <LayoutWrapper>
           
            <ul className='tab-ul'>
                <Items/>
            </ul>
        </LayoutWrapper>
    )
}