<template>
  <div class="vh-100 container-fluid">
    <div class="row justify-content-between">
      <div class="col-auto border py-5">
        <ItemsList v-if="leftSelectedItems.length" :items="leftSelectedItems" type="item" />
        <span v-else class="text-success">Left list is empty</span>
      </div>
      <div class="col-auto border py-5">
        <ItemsList v-if="rightSelected" :items="rightSelectedItems" type="item" />
        <span v-else class="text-success">Left list is empty</span>
      </div>
    </div>
    <div class="row">
      <div class="col-6 border">
        <ItemsList :items="leftSelectors" type="checkbox" class="py-4" />
      </div>
      <div class="col-6 border">
        <ItemsList :items="rightSelectors" type="radio" class="py-4" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemsList from "@/components/ItemsList.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    ItemsList,
  },
  data: () => ({}),
  computed: {
    ...mapState(["rightSelected", "leftSelectors", "rightSelectors"]),
    ...mapGetters(["leftSelectedItems", "rightSelectedItems"]),
  },
};
</script>

<style scoped>
  .row {
    min-height: 200px;
    justify-content: center;
    align-items: center;
  }
</style>
