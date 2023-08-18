<template>
  <h1>Chọn Ghế của bạn</h1>
  <hr>
  <h3 style="text-align: center;">Màn Hình</h3>
  <div class="list" v-for="s in slot" :key="s.seat"
             @click="choose(s.seat)"  >
    <span :class="{'status': s.status && !s.selected,
                    'select': s.selected && !s.status}"
        >{{ s.seat }}</span>
  </div>
  <hr>
  <div class="discript">
    <br />
    <div class="description">
      <button class="red-button"></button>
      <p>: Ghế đã được chọn</p>
    </div>
  </div>
  <div class="discript">
    <br />
    <div class="description">
      <button class="green-button"></button>
      <p>: Ghế bạn chọn</p>
    </div>
  </div>
  <h4>Tổng ghế đã đặt: {{ totalSeat }}</h4>
  <button class="green-button" v-if="totalSeat!=0" @click="bookFilm()">Đặt vé luôn</button>
</template>

<script>
export default {

name:'slot',
data() {
    return {
        slot:[],
        slotFromDB:[],
        yourSlot:{slot:0, selected:false},   
        totalSeat:0
    }
    
},
methods: {
    bookFilm(){
        this.$router.push({ name: 'confirmBill',params: {totals: this.totalSeat,id: this.filmIdFromRoute } });
    },
choose(id){
    if(!this.slot[id-1].selected){
    this.slot[id-1].selected = true;
    this.slot[id-1].status = !true;
    this.yourSlot.selected = true;
    }else{
        this.slot[id-1].selected = !true;
    }
    if(this.slot[id-1].selected){
        this.totalSeat++;
    }else{
        this.totalSeat--;
    }
},
totalSeatSelected(seat){
    if(this.slot[seat-1].selected){
        this.totalSeat++;
    }
},
fetchSlotList(id) {
      fetch('http://localhost:8080/slots/'+id)
        .then(response => response.json())
        .then(data => {
          this.slotFromDB = data;
          for(let i=0;i<this.slotFromDB.length;i++){
            
       this.slot[this.slotFromDB[i].id-1].status=true;
    }
          
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
       
    },

},
created() {
  // Tạo mảng slot với 100 phần tử có trạng thái status là false để hiện thị ghế ngồi
  for (let i = 1; i <= 100; i++) {
    this.slot.push({ seat: i, status: false,selected:false });
  }
  
},
mounted() {
    const filmIdFromRoute = this.$route.params.id;
   this.fetchSlotList(filmIdFromRoute)
   
   
}
}

</script>

<style>
.list{
    display: inline-block ;
    border: 1px solid #ebb;
    padding: 4px 15px;
    margin-right: 15px;
    border-radius: 4px;
    
}
.list span.status {
    background: red;
    color: red;
    pointer-events: none;
    
}
.list span.select {
    background: green;
    color: red;
    
}
.red-button {
  color: white;
  background-color: red;
  border: none;
  padding: 5px 10px;
  margin-right: 10px; /* Khoảng cách giữa nút và dòng mô tả */
}

.description {
  display: flex; /* Sử dụng flex để đảm bảo các phần tử nằm cùng một hàng */
  align-items: center; /* Căn giữa theo chiều dọc */
}
.green-button {
  color: white;
  background-color: green;
  border: none;
  padding: 5px 10px;
  margin-right: 10px; /* Khoảng cách giữa nút và dòng mô tả */
}
</style>