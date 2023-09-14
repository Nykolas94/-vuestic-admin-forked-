<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div>
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { fetchUsersFromDB } from "@/api/sqlite";

export default {
  name: "Dashboard",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    this.users = await fetchUsersFromDB(); // Utilisez directement la fonction et affectez la valeur retournée à this.users
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
