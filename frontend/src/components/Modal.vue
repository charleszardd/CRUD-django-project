<template>
    <v-dialog v-model="props.show" max-width="500px">
      <v-card color="#212121" class="rounded-lg pa-3 px-0">
        <v-card-title class="text-h5 text-center">{{ title }}</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="project.name"
              label="Project Name"
              variant="outlined"
              required
              @keyup.enter="submitProject"
            ></v-text-field>
  
            <v-textarea
              v-model="project.description"
              label="Description"
              variant="outlined"
              required
              @keyup.enter="submitProject"
            ></v-textarea>
  
            <v-text-field
              v-model="project.link"
              prepend-inner-icon="mdi-link"
              label="Project Link"
              variant="outlined"
              type="url"
              @keyup.enter="submitProject"
            ></v-text-field>
  
            <v-file-input
              :prepend-icon="false"
              prepend-inner-icon="mdi-image"
              label="Upload Image"
              variant="outlined"
              accept="image/*"
              @keyup.enter="submitProject"
              @change="handleImage"
            ></v-file-input>
          </v-form>
        </v-card-text>
        
        <v-card-actions class="pr-6">
          <v-btn color="red"  @click="closeModal">Cancel</v-btn>
          <v-btn color="#e2dfdf" :disabled="isFormIncomplete" variant="outlined" @click="submitProject">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, computed } from 'vue';
  
  const props = defineProps({
    show: Boolean,
    title: String,
    project: Object, 
  });
  
  const emit = defineEmits(['update:show', 'submit']);

  const handleImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    props.project.image = file; 
  }
};
  
  const closeModal = () => {
    emit('update:show', false);
  };
  
  const submitProject = () => {
    emit('submit', props.project);
    closeModal();
  };

  const isFormIncomplete = computed(() => {
    return !props.project.name || !props.project.description || !props.project.link || !props.project.image;
});
  </script>
  