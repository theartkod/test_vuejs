import Vue from 'vue';
import VueRouter from 'vue-router';
import Chat from '@/components/Chat/Chat.vue';
import ChatDialog from '@/components/Chat/ChatDialog.vue';
import ChatDialogEmpty from '@/components/Chat/ChatDialogEmpty.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Chat,
    children: [
      {
        path: 'dialog/:id',
        name: 'chat-dialog',
        component: ChatDialog,
      },
      {
        path: '*',
        name: 'chat-dialog-empty',
        component: ChatDialogEmpty,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
