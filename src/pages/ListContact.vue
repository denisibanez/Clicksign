<template>
  <div class="container-fluid create-contact-wrapper">
    <div class="row"> 
      <div class="col-md-12">
        <header-component />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="list-contact-wrapper">
          <b-table hover :items="items">
            <template v-slot:cell(prevent)>
              <div class="prevent">
                <span>A</span>
              </div>
            </template>
            <template v-slot:cell(editar)>
              <div class="buttons">
                <img src="../assets/images/ic-edit.svg" alt="">
                <img src="../assets/images/ic-delete.svg" alt="">
              </div>
            </template>
            
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'
import Modal from '@/components/Modal'

export default {
  name: 'list-contact',

  components: {
    Modal,
    HeaderComponent
  },

  data() {
    return {
      items: [
        { 
          prevent: '',
          contatos: 'Alana',
          email: 'teste@teste.com.br',
          telefone: '(11) 98149-8517',
          editar: ''
        },
        { 
          prevent: '',
          contatos: 'Alana',
          email: 'teste@teste.com.br',
          telefone: '(11) 98149-8517',
          editar: ''
        },
        { 
          prevent: '',
          contatos: 'Alana',
          email: 'teste@teste.com.br',
          telefone: '(11) 98149-8517',
          editar: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

.list-contact-wrapper {
  margin: 30px 0;

  .b-table {
    border: 1px solid #e1e1e1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #ffffff;

    thead {
      th {
        border: 0;

        div {
          color: #9198af;
          @include formatText(13px, normal);
        }

        &:first-child {
          width: 50px;
        }

        &:last-child, &:first-child {
          div {
            display: none;
          }
        }
      }
    }

    tr {
      border: 1px solid #e1e1e1;

      &:hover {
        background-color: #fff3f2
      }
    }

    td {
      border: 0;
      color: #2a2d3b;
      @include formatText(14px, normal);
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      img {
        margin: 0 10px;
        cursor: pointer;
      }
    }

    .prevent {
      width: 24px;
      height: 24px;
      background-color: #fa8d68;
      border-radius: 50%;
      padding: 2px 7px;

      span {
        color: #ffffff;
        @include formatText(16px, normal);
      }
    }
  }
}
</style>