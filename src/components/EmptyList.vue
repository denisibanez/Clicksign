<template>
  <div class="create-contact-content">
    <img src="../assets/images/ic-book.svg" alt="">

    <p>Nenhum contato foi criado ainda.</p>

    <button-component />
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent'

export default {
  name: 'empty-list',
  components: {
    ButtonComponent
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.create-contact-body {
  margin: 100px 0;
  .create-contact-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      color: #2a2d3b;
      margin: 20px 0;
      @include formatText(16px, normal);
    }
  }
}
</style>