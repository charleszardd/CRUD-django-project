<template>
    <v-progress-circular
          indeterminate
          size="80"
          width="8"
          color="#212121"
          class="layer-1"
        ></v-progress-circular>

        <v-progress-circular
          indeterminate
          size="60"
          width="6"
          color="grey"
          class="layer-2"
        ></v-progress-circular>

        <v-progress-circular
          indeterminate
          size="40"
          width="4"
          color="#212121"
          class="layer-3"
        ></v-progress-circular>
</template>
<style scoped>
.v-progress-circular {
  position: absolute;
}

.layer-1 {
  animation: spin 2s linear infinite;
}

.layer-2 {
  animation: spin-reverse 3s linear infinite;
}

.layer-3 {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>