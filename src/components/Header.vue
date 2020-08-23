<template>
  <div class="create-contact-header">
    <div class="row">
      <div class="col-md-3">
        <div class="create-contact-logo">
          <img src="../assets/images/ic-logo.svg" alt="">
        </div>
      </div>

      <div class="col-md-9">
        <div class="create-contact-search">
          <b-input-group-prepend>
            <b-form-input v-model="text" placeholder="Buscar ..."></b-form-input>
            <b-icon-search></b-icon-search>
          </b-input-group-prepend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-component',

  data () {
    return {
      text: null
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.create-contact-header {
  margin-top: 15px;

  .create-contact-search {
    input[type="text"] {
      background-color: #e4e7f4;
      height: 30px;

      &::placeholder {
        color: #9198af;
      }
    }

    svg {
      color: #9198af;
      position: absolute;
      right: 25px;
      top: 7px;
    }
  }
}
</style>