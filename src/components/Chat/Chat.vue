<template>
  <div class="chat">
    <chat-list :messages="messages"/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ChatList from '@/components/Chat/ChatList.vue';

export default {
  name: 'ChatWrap',
  components: {
    ChatList,
  },
  computed: {
    ...mapState(['messages']),
  },
  methods: {
    ...mapActions(['loadMessages']),
  },
  mounted() {
    if (this.$route.path !== '/') {
      this.$router.push('/');
    }
    this.loadMessages();
  },
};
</script>
