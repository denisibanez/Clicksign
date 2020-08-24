<template>
  <div class="list-contact-wrapper">{{highlite}}
    <b-table hover :items="listData" :class="{ 'highlite' : highlite }">
      <template v-slot:cell(prevent)>
        <div class="prevent">
          <span>A</span>
        </div>
      </template>
      <template v-slot:cell(editar)>
        <div class="buttons">
          <img src="../assets/images/ic-edit.svg" alt="" @click="showModal('modal-edit-contact')">
          <img src="../assets/images/ic-delete.svg" alt="" @click="showModal('modal-delete-contact')">
        </div>
      </template>
      
    </b-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'list-contact',

  computed: {
    ...mapGetters({
      listData: 'listData',
      highlite: 'highlite'
    })
  },

  methods: {
    showModal(event) {
      this.$bvModal.show(event)
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

        &:nth-child(5), &:first-child {
          div {
            display: none;
          }
        }

        &:last-child {
          display: none;
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

      &:last-child {
        display: none;
      }
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

  .highlite {
   tbody {
    tr {

      &:last-child {
        background-color: #fff3f2
      }
    }
   }
  }
}
</style>