<template>
  <div class="chat-dialog-wrap">
    <template v-if="!isLoadDialog && dialog">
      <div class="chat-dialog">
        <chat-message v-for="item in dialog.parts"
                      :message="item"
                      :key="item.id"/>
      </div>
      <chat-input/>
    </template>
    <template v-else>
      <div class="loader">
        <loader/>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import loader from '@/assets/icons/loader.svg';
import ChatMessage from '@/components/Chat/ChatMessage.vue';
import ChatInput from '@/components/Chat/ChatInput.vue';
import { LOADERS } from '@/constants';

export default {
  name: 'ChatDialog',
  data() {
    return {
      dialog: null,
    };
  },
  components: {
    ChatMessage,
    ChatInput,
    loader,
  },
  watch: {
    '$route.params.id': function test() {
      this.loadDialogMethod();
    },
  },
  computed: {
    ...mapState(['loaders']),
    isLoadDialog() {
      return this.loaders.includes(LOADERS.LOAD_DIALOG);
    },
  },
  methods: {
    ...mapActions(['loadDialog']),
    async loadDialogMethod() {
      this.dialog = await this.loadDialog(this.$route.params.id);
    },
  },
  mounted() {
    this.loadDialogMethod();
  },
};
</script>
