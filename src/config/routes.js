import LoginPage from '../components/pages/Login/Login';
import ProfilePage from '../components/pages/Profile/Profile';
import RegisterPage from '../components/pages/Register/Register';
import ShoppingPage from '../components/pages/ShoppingCart/Index';
import HomePage from '../components/pages/Homepage/Homepage';
import About from '../components/pages/About/About';
import Contact from '../components/pages/Contact/Contact';

const components = {
  shopping: {
    url: '/shopping',
    component: ShoppingPage,
  },
  login: {
    url: '/login',
    component: LoginPage,
  },
  profile: {
    url: '/profile',
    component: ProfilePage,
  },
  register: {
    url: '/register',
    component: RegisterPage,
  },
  homepage: {
    url: '/',
    component: HomePage,
  },
  about: {
    url: '/about',
    component: About,
  },
  contact: {
    url: '/contact',
    component: Contact,
  },
};

// Role ไหนเข้าหน้าไหนได้บ้าง
export default {
  guest: {
    allowedRoutes: [
      components.login,
      components.register,
      components.shopping,
      components.homepage,
      components.about,
      components.contact,
      components.profile,
    ],
    redirectRoutes: '/login',
  },
  user: {
    allowedRoutes: [components.todo, components.profile],
    redirectRoutes: '/profile',
  },
};
