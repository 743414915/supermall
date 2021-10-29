<template>
  <div class="profile-info">
    <nav-bar class="profile-Bar">
      <template #left>
        <img src="~assets/img/profile/unLogin.svg" alt="" class="img ulLogin">
      </template>
      <template #center>
        <div class="profile-Bar-center">
          <div class="profile-Bar-top">
            <span>登录</span>
            <span>/注册</span>
          </div>
          <div class="profile-Bar-bot">
            <img src="~assets/img/profile/phone.svg" alt="" class="img phone">
            <div>暂无绑定手机号</div>
          </div>
        </div>
      </template>
      <template #right>
        <div class="rightRow">&gt;</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "ProfileInfo",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

  .profile-Bar {
    background-color: var(--color-tint);

    height: 100px;
    position: relative;

    color: #eee;
  }

  .profile-Bar-center {
    width: 120px;
    display: flex;
    flex-direction: column;

    margin: 20px 0 0 10px;
  }

  .profile-Bar-top,
  .profile-Bar-bot {
    width: 100%;
    height: 15px;

    font-size: 13px;
  }

  .profile-Bar-top {
    margin-bottom: 20px;
  }

  .profile-Bar-bot {
    width: 130px;
  }

  .profile-Bar-bot span {
    display: inline-block;
    margin-bottom: 10px;
  }

  .img {
    /*position: absolute;*/
  }

  .ulLogin {
    width: 50px;
    height: 50px;

    margin-top: 20px;
  }

  .phone {
    width: 30px;
    float: left;
  }

  .rightRow {
    margin-top: 25px;
  }

</style>
