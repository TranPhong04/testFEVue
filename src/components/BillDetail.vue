<template>
  <h1>Chi tiết Hóa đơn của bạn:</h1>
  <div v-for="f in film" :key="f.id">
    <h2>Tên Phim : {{ f.filmTitle }}</h2>
    <h2>Tên Ngày chiếu : {{ f.filmReleaseDate }}</h2>
    <h2>Thể Loại {{ f.filmGenre }}</h2>
    <h2>Thời Lượng : {{ f.filmDuration }} phút</h2>
    <h2>Giá/1 Ghế : {{ f.filmPrice }}</h2>
    <hr>
    <h3>Thành tiền : {{ totalSeat*f.filmPrice }} Đồng</h3>
</div>
</template>

<script>

export default {
  name:'confirmBill',
props: ['totalSeatProp'],
    data() {
        return {
            film:[],
            totalSeat:0
          
        }
    },



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
    const seat = this.$route.params.totals;
    this.totalSeat = seat;
    const filmIdFromRoute = this.$route.params.id;
    this.getFilmDetails(filmIdFromRoute);
  }
}
</script>

<style>

</style>