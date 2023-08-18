<template>
  <div>
    <h1>Danh sách những phim nổi bật</h1>
    <div>
    <ul>
      <li v-for="film in filmList" :key="film.id">
      <h2><button @click="bookFilm(film.filmId)">{{ film.filmTitle }}</button></h2>
      </li>  
    </ul>
  </div>
  </div>
</template>

<script>
export default {
name :'listFilm',
data() {
    
    return {
      filmList: []
    };
  },
  mounted() {
    this.fetchCinemaList();
  },
  methods: {
    bookFilm(filmId) {
      this.$router.push({name: 'filmDetail', params: {id: filmId}});
    },
    fetchCinemaList() {
      fetch('http://localhost:8080/films')
        .then(response => response.json())
        .then(data => {
          this.filmList = data;
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    listFilm(id){
    console.error(id);
    this.$router.push({ name: 'listFilm', params: { id } });
  }

  }
}

</script>

<style>

</style>