<template>
  <aside class="chat-list">
    <template v-if="!isLoadMessages">
      <router-link :to="`/dialog/${item.id}`"
                   class="chat-list__item"
                   v-for="item in messages" :key="item.id">
        <div class="chat-list__info">
          <div class="chat-list__info-author">Илья</div>
          <div class="chat-list__info-date">12 мая 2023</div>
        </div>
        <div class="chat-list__item-part-message">
          {{ item.subject }}
        </div>
      </router-link>
    </template>
    <template v-else>
      <div class="loader">
        <loader/>
      </div>
    </template>
    <template v-if="!isLoadMessages && !messages.length">
      <div class="loader">
        Сообщений нет
      </div>
    </template>
  </aside>
</template>

<script>
import { mapState } from 'vuex';
import { LOADERS } from '@/constants';
import loader from '@/assets/icons/loader.svg';

export default {
  name: 'ChatList',
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    loader,
  },
  computed: {
    ...mapState(['loaders']),

    isLoadMessages() {
      return this.loaders.includes(LOADERS.LOAD_MESSAGES);
    },
  },
};
</script>
