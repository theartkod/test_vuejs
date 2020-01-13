<template>
  <div class="chat-message"
       :class="message.sender === 'me' ? 'chat-message--sent' : 'chat-message--received'">
    <div class="chat-message__bubble">
      {{ message.text }}
    </div>
    <div class="chat-message__info">
      <div class="chat-message__info-author">{{ message.author }}</div>
      <div class="chat-message__info-date">{{ message.created }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    message: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
