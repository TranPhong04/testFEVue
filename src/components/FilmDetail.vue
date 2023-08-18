<template>
  <h1>Đặt vé xem phim thôi nào</h1>
  <div v-for="f in film" :key="f.id">
    <h2>Tên Phim : {{ f.filmTitle }}</h2>
    <h2>Tên Ngày phát hành : {{ f.filmReleaseDate }}</h2>
    <h2>Thể Loại {{ f.filmGenre }}</h2>
    <h2>Thời Lượng : {{ f.filmDuration }} phút</h2>
    <h2>Giá/1 Ghế : {{ f.filmPrice }}</h2>
</div>
<button @click="bookFilm(this.filmIdFromRoute)">Đặt vé Ngay</button>
  
</template>

<script>
export default {
    data() {
        return {
            film:[]
        }
    },

name:'FilmDetail',

  methods: {
    bookFilm(id) {
      this.$router.push({ name: 'slot', params: {id: id}});
    },
    getFilmDetails(filmId) {
        fetch('http://localhost:8080/film/'+filmId)
        .then(response => response.json())
        .then(data => {
          this.film= data;
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  mounted() {
    const filmIdFromRoute = this.$route.params.id;
    this.getFilmDetails(filmIdFromRoute);
  }
}
</script>

<style>

</style>