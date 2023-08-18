<template>
  <nav>
    <h1>Cinema Manage</h1>
    <ul class="nav-link">
      <div  v-for="cinema in cinemaList" :key="cinema.id"> 
        
        <li @click="listFilm(cinema.id)">{{ cinema.name }} - {{ cinema.address }}</li>
      
     </div>
     
       
    </ul>
  </nav>
</template>

<script>
export default {
 name : 'AppNavbar',
 data() {
    
    return {
      cinemaList: []
    };
  },
  mounted() {
    this.fetchCinemaList();
  },
  methods: {
    fetchCinemaList() {
      fetch('http://localhost:8080/cinema/listCinema')
        .then(response => response.json())
        .then(data => {
          this.cinemaList = data;
          
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
nav {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px ;
}
nav ul.nav-link{
    display: flex;
    justify-content: space-around;
    align-items:center ;
    list-style: none;
    padding: 0;
}
</style>