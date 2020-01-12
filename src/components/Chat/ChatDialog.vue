<template>
  <div class="chat-dialog-wrap">
    <div class="chat-dialog">
      <chat-message v-for="item in 20" :title="item" :key="item"/>
    </div>
    <chat-input/>
  </div>
</template>

<script>
import ChatMessage from '@/components/Chat/ChatMessage.vue';
import ChatInput from '@/components/Chat/ChatInput.vue';

export default {
  name: 'ChatDialog',
  components: {
    ChatMessage,
    ChatInput,
  },
};
</script>
