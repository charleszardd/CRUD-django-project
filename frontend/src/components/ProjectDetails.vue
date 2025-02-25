<template>
  <v-container fluid class="px-10 main-font mt-10">

    <div v-if="isLoading" class="loader-overlay">
      <Loader />
    </div>

    <div v-else>
      <v-row class="d-flex mt-5" align="center">
        <v-col>
          <span class="text-black text-h5 main-font-semibold mr-2">Projects 🚀</span>
        </v-col>
        <v-col class="justify-end d-flex">
          <Button elevation="10" icon="mdi-plus" height="45" @click="addProject" :noSpacing="false">
            Create Projects
          </Button>
          <Modal
            v-model:show="showModal"
            :project="selectedProject"
            :isEdit="isEditing"
            title="Add Project"
            @submit="handleSubmit"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="project in projects" :key="project.id" cols="12" md="4">
          <v-card max-height="700" height="480" class="card mt-5 rounded-lg" elevation="10">
            <v-img :src="getImageUrl(project.image)" cover height="200"></v-img>
            <v-card-title class="text-h6">{{ project.name }}</v-card-title>
            <v-card-text class="text-grey-darken-2">
              {{ project.description }}
            </v-card-text>
            <v-card-actions class="pl-4">
              <v-btn
                v-if="project.link"
                :href="project.link"
                target="_blank"
                variant="outlined"
                color="primary"
                class="normal-text"
              >
                <v-icon class="mr-2" left>mdi-web</v-icon>
                Visit Project
              </v-btn>
            </v-card-actions>

            <v-card-actions class="action-items">
              <v-btn color="grey" icon="mdi-pencil-outline" @click="editProject(project)"></v-btn>
              <v-btn color="grey" icon="mdi-delete-outline" @click="deleteProject(project.id)"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Modal from "./Modal.vue";

const isLoading = ref(true);
const showModal = ref(false);
const projects = ref([]);
const selectedProject = ref(null);
const isEditing = ref(false);

const getImageUrl = (image) => {
  return image ? image : "/placeholder-image.jpg";
};

const addProject = () => {
  showModal.value = true;
  isEditing.value = false;
  selectedProject.value = { name: "", description: "", link: "", image: "" };
};

const editProject = (project) => {
  showModal.value = true;
  isEditing.value = true;
  selectedProject.value = { ...project };
};

const handleSubmit = async (projectData) => {
  const formData = new FormData();
  formData.append("name", projectData.name);
  formData.append("description", projectData.description);
  formData.append("link", projectData.link);
  if (projectData.image instanceof File) {
    formData.append("image", projectData.image);
  }

  try {
    if (isEditing.value) {
      await axios.put(`/api/projects/${projectData.id}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      projects.value = projects.value.map((p) =>
        p.id === projectData.id ? projectData : p
      );
    } else {
      const response = await axios.post("/api/projects/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      projects.value.push(response.data);
    }
    showModal.value = false;
  } catch (error) {
    console.error(
      "Error submitting project:",
      error.response?.data || error.message
    );
  }
};

const deleteProject = async (id) => {
  if (!confirm("Are you sure you want to delete this project?")) return;

  try {
    await axios.delete(`/api/projects/${id}/`);
    projects.value = projects.value.filter((p) => p.id !== id);
  } catch (error) {
    console.error(
      "Error deleting project:",
      error.response?.data || error.message
    );
  }
};

const fetchProjects = async () => {
  try {
    const response = await axios.get("/api/projects/");
    projects.value = response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

onMounted(fetchProjects);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>
<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.card {
  position: relative;
}
.action-items {
  position: absolute;
  bottom: 0;
  right: 0;
}

</style>