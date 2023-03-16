<template>
  <div>
    <h1>Usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { User } from './src/services/UserService/types';
import { getUsers } from './src/services/UserService';

export default defineComponent({
  setup() {
    const users = ref<User[]>([]);

    onMounted(async () => {
      try {
        users.value = await getUsers();
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    });

    return {
      users,
    };
  },
});
</script>
