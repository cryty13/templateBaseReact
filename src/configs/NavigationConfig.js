import { 
  AppstoreOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const appsNavTree = [{
  key: 'crm',
  path: `${APP_PREFIX_PATH}/crm`,
  title: 'sidenav.apps',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'apps-ecommerce',
      path: `${APP_PREFIX_PATH}/crm/cliente`,
      title: 'sidenav.apps.ecommerce',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: `${APP_PREFIX_PATH}/crm/cliente/cliente-list`,
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: `${APP_PREFIX_PATH}/crm/cliente/cliente-add`,
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: `${APP_PREFIX_PATH}/crm/cliente/cliente-edit/12`,
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: `${APP_PREFIX_PATH}/crm/cliente/cliente-orders`,
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree,
]

export default navigationConfig;
