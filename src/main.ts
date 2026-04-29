import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import "./style.css";

// Bitta sahifa bo'lsa ham, uni "/" yo'liga (route) bog'lash shart
const routes = [
  {
    path: "/",
    component: () => import("./Home.vue"), // App.vue ni o'zini asosiy sahifa sifatida yuklaymiz
  },
  {
    path: "/privacy",
    component: () => import("./Privacy.vue"), // Yangi sahifa
  },
];

export const createApp = ViteSSG(App, { routes });
