<template>
  <form class="chat-input" @submit.prevent="sendMessageMethod">
    <input type="text"
           v-model.trim="message"
           class="chat-input__inner"
           placeholder="Введите текст...">
    <button type="submit"
            :disabled="isSendingMessage"
            class="chat-input__btn">
      <icon-send v-if="!isSendingMessage"/>
      <loader-white v-else/>
    </button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { LOADERS } from '@/constants';
import iconSend from '@/assets/icons/icon-send.svg';
import loaderWhite from '@/assets/icons/loader-white.svg';

export default {
  name: 'ChatInput',
  data() {
    return {
      message: '',
    };
  },
  components: {
    iconSend,
    loaderWhite,
  },
  computed: {
    ...mapState(['loaders']),

    isSendingMessage() {
      return this.loaders.includes(LOADERS.SENDING_MESSAGE);
    },
  },
  methods: {
    ...mapActions(['sendMessage']),

    sendMessageMethod() {
      if (this.message && !this.isSendingMessage) {
        this.sendMessage({
          id: this.$route.params.id,
          message: this.message,
        })
          .then(() => {
            this.message = '';
          });
      }
    },
  },
};
</script>
