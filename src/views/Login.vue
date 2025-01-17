<template>
  <div class="login-container">
    <div class="login-box">
      <!-- Logo区域 -->
      <div class="logo-area">
        <h1>Music+</h1>
        <p>发现你的音乐世界</p>
      </div>

      <!-- 表单区域 -->
      <div class="form-container">
        <!-- 切换表单类型的标签 -->
        <div class="form-tabs">
          <span 
            :class="['tab', { active: currentForm === 'login' }]"
            @click="currentForm = 'login'"
          >
            登录
          </span>
          <span 
            :class="['tab', { active: currentForm === 'register' }]"
            @click="currentForm = 'register'"
          >
            注册
          </span>
        </div>

        <!-- 登录表单 -->
        <form v-if="currentForm === 'login'" @submit.prevent="handleLogin">
          <div class="form-group">
            <input 
              type="email" 
              v-model="loginForm.email" 
              placeholder="电子邮箱"
              required
            >
          </div>
          <div class="form-group">
            <input 
              type="password" 
              v-model="loginForm.password" 
              placeholder="密码"
              required
            >
          </div>
          <div class="form-actions">
            <label class="remember-me">
              <input type="checkbox" v-model="loginForm.remember">
              <span>记住我</span>
            </label>
            <a @click="currentForm = 'forgot'" class="forgot-link">忘记密码？</a>
          </div>
          <button type="submit" class="submit-btn">登录</button>
        </form>

        <!-- 注册表单 -->
        <form v-if="currentForm === 'register'" @submit.prevent="handleRegister">
          <div class="form-group">
            <input 
              type="text" 
              v-model="registerForm.username" 
              placeholder="用户名"
              required
            >
          </div>
          <div class="form-group">
            <input 
              type="email" 
              v-model="registerForm.email" 
              placeholder="电子邮箱"
              required
            >
          </div>
          <div class="form-group">
            <input 
              type="password" 
              v-model="registerForm.password" 
              placeholder="密码"
              required
            >
          </div>
          <div class="form-group">
            <input 
              type="password" 
              v-model="registerForm.confirmPassword" 
              placeholder="确认密码"
              required
            >
          </div>
          <button type="submit" class="submit-btn">注册</button>
        </form>

        <!-- 忘记密码表单 -->
        <form v-if="currentForm === 'forgot'" @submit.prevent="handleForgotPassword">
          <div class="form-group">
            <input 
              type="email" 
              v-model="forgotForm.email" 
              placeholder="请输入注册邮箱"
              required
            >
          </div>
          <button type="submit" class="submit-btn">发送重置链接</button>
          <a @click="currentForm = 'login'" class="back-link">返回登录</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      currentForm: 'login',
      loginForm: {
        email: '',
        password: '',
        remember: false
      },
      registerForm: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      forgotForm: {
        email: ''
      }
    }
  },
  methods: {
    handleLogin() {
      // 实现登录逻辑
      console.log('登录表单提交', this.loginForm)
    },
    handleRegister() {
      // 实现注册逻辑
      console.log('注册表单提交', this.registerForm)
    },
    handleForgotPassword() {
      // 实现忘记密码逻辑
      console.log('忘记密码表单提交', this.forgotForm)
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #f5f5f7, #ffffff);
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.logo-area {
  text-align: center;
  margin-bottom: 40px;
}

.logo-area h1 {
  font-size: 36px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 8px;
}

.logo-area p {
  color: #86868b;
  font-size: 16px;
}

.form-tabs {
  display: flex;
  margin-bottom: 24px;
  border-bottom: 1px solid #d2d2d7;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  color: #86868b;
  transition: all 0.3s ease;
}

.tab.active {
  color: #0066cc;
  border-bottom: 2px solid #0066cc;
}

.form-group {
  margin-bottom: 16px;
}

input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d2d2d7;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.1);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #86868b;
}

.forgot-link, .back-link {
  color: #0066cc;
  text-decoration: none;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #004499;
}

.back-link {
  display: block;
  text-align: center;
  margin-top: 16px;
}
</style> 