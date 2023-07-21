<template>
  <div class="container">
    <div class="row">
      <div v-for="item in items" :key="item.id" class="col-auto">
        <ListItem v-if="type == 'item'" :data="item" />
        <ListCheckbox
          v-if="type == 'checkbox'"
          :data="item"
          :checked="_id_list_left.includes(item.id)"
          :disabled="!_id_list_left.includes(item.id) && leftSelected.length == 6"
          @change="checkboxChange"
        />
        <ListRadio
          v-if="type == 'radio'"
          :data="item"
          :selected="rightSelected"
          @update="radioChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ListCheckbox from "./Checkbox.vue";
import ListItem from "./Item.vue";
import ListRadio from "./Radio.vue";

export default {
  components: {
    ListItem,
    ListCheckbox,
    ListRadio,
  },
  data() {
    return {};
  },
  props: ["items", "type"],
  computed: {
    ...mapState(["leftSelected", "rightSelected"]),
    ...mapGetters(["leftSelectedItems"]),
    _id_list_left() {
      return this.leftSelectedItems.map((item) => item.id);
    },
  },
  methods: {
    ...mapActions(["changeLeftSelected", "changeRightSelected"]),
    checkboxChange(obj) {
      this.changeLeftSelected(obj);
    },
    radioChange(value) {
      this.changeRightSelected(value);
    },
  },
};
</script>
