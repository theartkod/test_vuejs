<template>
  <div class="chat">
    <chat-list/>
    <router-view/>
  </div>
</template>

<script>
import ChatList from '@/components/Chat/ChatList.vue';

export default {
  name: 'ChatWrap',
  components: {
    ChatList,
  },
};
</script>
