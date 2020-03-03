import Vue from 'vue'
import VueRouter from 'vue-router';
import Movie from '../views/movie/movie.vue';
import Cinema from '../views/cinema/cinema.vue';
import Profile from '../views/profie/profile.vue';
import Mine from '../views/mine/mine.vue';
import store from '@/store'
const NowPlaying = () => import("../views/movie/NowPlaying.vue")
const WillPlaying = () => import(/*webpackChunkName:'fff'*/'../views/movie/willPlaying')
const Login = () => import(/*webpackChunkName:'fff'*/'@/views/login/login.vue')
const Detail = () => import('@/views/movie/detail.vue'); 
const Search = () => import('@/views/search/search')
const City = () => import('@/views/city/City.vue')
Vue.use(VueRouter) 
const routes = [
  {
    path: "",
    redirect: "/movie",
    component: Movie
  },
  {
    path: "/movie",
    component: Movie,
    children: [
      {
        path: "",
        redirect:'/movie/nowPlaying',
        component: NowPlaying
      },
      {
        path: "nowPlaying",
        component: NowPlaying
      },
      {
        path: "willPlaying",
        component: WillPlaying
      }
    ]
  },
  {
    path: "/cinema",
    component: Cinema
  },
   {
    path:'/cinema/search',
    component:Search
  },
  {
    path: "/profile",
    component: Profile,
 
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/login",
   
    component: Login
  },
  {
    path:'/film/:filmId',
    component:Detail
  },
  {
      path:'/city',
      component:City
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
})
router.beforeEach((to, from, next) => {
  if(to.path==='/mine') {
    if(store.state.isLogin===1){
      next();
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
 
export default router 
