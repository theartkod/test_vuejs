<template>
  <aside class="chat-list">
    <router-link :to="`/dialog/${item}`"
                 class="chat-list__item"
                 v-for="item in 10" :key="item">
      <div class="chat-list__info">
        <div class="chat-list__info-author">Илья</div>
        <div class="chat-list__info-date">12 мая 2023</div>
      </div>
      <div class="chat-list__item-part-message">
        Lorem ipsum dolor sit amet.
      </div>
    </router-link>
  </aside>
</template>

<script>
export default {
  name: 'ChatList',
};
</script>
