<template>
  <div class="signIn">
    <div class="bg"></div>
    <div class="outBox whiteBox boxWrap boxShadow">
      <div class="tcrWrap">
        <img src="../assets/img/cash-recycler.png" alt="TCR" />
        <p>welcome</p>
      </div>
      <div class="textWrap">
        <img :src="imgSrc" alt="logo" />
        <form @submit.prevent="login">
          <label for="">員工編號:</label>
          <input type="text" v-model.trim="employeeID" class="line" />
          <label for="">密碼:</label>
          <input type="password" v-model.trim="password" class="line" />
          <button type="submit" class="firstBtn round">登入</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
const src = require('@/assets/img/long-logo.png');

export default {
  data() {
    return {
      imgSrc: src,
      employeeID: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.employeeID && this.password) {
        sessionStorage.setItem('userNum', this.employeeID);
        this.$router.push('/home');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.signIn {
  background: $secondColor;
  width: 100%;
  height: 100vh;
  .bg {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../assets/img/signInBg.jpg');
    opacity: 0.05;
  }
  .boxWrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 350px;
    .tcrWrap {
      // border: 1px solid black;
      width: 170px;
      position: absolute;
      top: 39.5%;
      left: 15%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
      }
      p {
        position: absolute;
        top: 30px;
        left: 50px;
        color: $white;
      }
    }
    .textWrap {
      margin-left: 140px;
      img {
        width: 100%;
      }
      form {
        // border: 1px solid black;
        margin: 30px 20px;
        color: $black;
        font-size: 18px;

        label {
          display: block;
          margin-bottom: 8px;
        }
        input {
          outline: none;
          border: none;
          border-bottom: 2px solid $firstColor;
          width: 100%;
          font-size: 18px;
          margin-bottom: 30px;
          &.line {
            border-radius: 0;
          }
        }
        button {
          text-align: center;
          width: 100%;
          margin-top: 18px;
        }
      }
    }
  }
}
</style>
