<template>
  <div>
    <h1>Status dos personagens de Rick and Morty</h1>
    <div class="form">
      <v-select
        label="Status"
        :items="status"
        v-model="selectedStatus"
        @update:model-value="getCharacters"
      ></v-select>

      <SpinnerLoader v-if="isLoading" />
      <StatusList v-else :results="results" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import StatusList from "./StatusList.vue";
import SpinnerLoader from "@/components/SpinnerLoader.vue";

const status = reactive(["alive", "dead", "unknown"]);
const selectedStatus = ref("");
const isLoading = ref(false);
let pagination = reactive({});
let results = reactive([]);

const getCharacters = async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const statusParam = selectedStatus.value
    ? `?status=${selectedStatus.value}`
    : "";

  const response = await axios.get(
    `${process.env.VUE_APP_API_URL}/character/${statusParam}`,
  );

  Object.assign(pagination, response.data.pagination);
  Object.assign(results, response.data.results);
  isLoading.value = false;
};

getCharacters();
</script>

<style lang="scss" scoped>
.form {
  margin: 2rem auto;
  max-width: 500px;
}
</style>
