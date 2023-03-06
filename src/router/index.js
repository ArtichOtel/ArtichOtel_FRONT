import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import AdminPanel from "../views/AdminPanel.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";
import RoomSelectionView from "../views/RoomSelectionView.vue";
import RoomPresentation from "../components/RoomPresentation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "home",
      component: HomeView,
      meta: { transition: 'slide-right' },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPanel,
      meta: { transition: 'slide-left' },
    },
    // Test for room presentation
    // TODO : Delete v
    {
      path: "/room",
      name: 'room',
      component: RoomPresentation,
    },
    // ==========================
    {
      path: "/booking",
      name: "booking",
      component: RoomSelectionView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: PageNotFoundView,
      // redirect: "/",
    },
  ],
});

export default router;
