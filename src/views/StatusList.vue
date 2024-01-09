<template>
  <v-row>
    <template v-for="(character, index) in results" :key="index">
      <v-col cols="12">
        <v-card color="#1F7087" theme="dark">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div style="text-align: start">
              <v-card-title class="text-h5">
                {{ character.id }} :: {{ character.name }}
              </v-card-title>
              <v-card-subtitle>
                Status: {{ character.status }} <br />
                Origin: {{ character.origin.name }}
              </v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" rounded="0">
              <v-img :src="character.image" :alt="character.name"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script setup>
defineProps({
  results: Array,
});
</script>

<style lang="scss" scoped></style>
