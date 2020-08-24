<template>
  <div>
    <p>Deseja realmente excluir o contato?</p>
  </div>
</template>

<script>
export default {
  name: 'modal-delete-contact'
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

p {
  @include formatText(16px, normal);
  color: #2a2d3b;
}
</style>
