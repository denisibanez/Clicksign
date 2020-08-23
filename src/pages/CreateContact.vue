<template>
  <div class="container-fluid create-contact-wrapper">
    <div class="row"> 
      <div class="col-md-12">
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

        <div class="create-contact-body">
          <div class="row">
            <div class="col-md-12">
              <div class="create-contact-content">
                <img src="../assets/images/ic-book.svg" alt="">

                <p>Nenhum contato foi criado ainda.</p>

                <button v-b-modal.modal-create-contact>
                  <img src="../assets/images/ic-plus.svg" class="ic_plus">
                  Criar contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal-create-contact />
  </div>
</template>

<script>
import ModalCreateContact from '@/components/ModalCreateContact'

export default {
  name: 'create-contact',

  components: {
    ModalCreateContact
  },

  data () {
    return {
      text: null
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.create-contact-wrapper {
  background-color: #f8f9fd;
  min-height: 100vh;

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
      
      button {
        width: 144px;
        height: 40px;
        border-radius: 20px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px rgba(255, 255, 255, 0.16);
        background-color: #dbff90;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fa7268;
        @include formatText(14px, 500);

        img {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
