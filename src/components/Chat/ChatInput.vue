<template>
  <form class="chat-input" @submit.prevent>
    <input type="text"
           class="chat-input__inner"
           placeholder="Введите текст...">
    <button type="submit"
            class="chat-input__btn">
      <icon-send/>
    </button>
  </form>
</template>

<script>
import iconSend from '@/assets/icons/icon-send.svg';

export default {
  name: 'ChatInput',
  components: {
    iconSend,
  },
};
</script>
