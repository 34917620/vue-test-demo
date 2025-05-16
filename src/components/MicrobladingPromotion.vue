<template>
  <div class="promotion-container">
    <section class="hero-section">
      <h1>专业纹绣服务</h1>
      <p>为您打造精致自然的眉形</p>
      <button class="cta-button">立即预约</button>
    </section>

    <section class="services-section">
      <h2>我们的服务</h2>
      <div class="service-cards">
        <div class="service-card">
          <h3>眉毛纹绣</h3>
          <p>根据脸型设计，打造自然眉形</p>
        </div>
        <div class="service-card">
          <h3>眼线纹绣</h3>
          <p>让双眼更有神采</p>
        </div>
        <div class="service-card">
          <h3>唇部纹绣</h3>
          <p>打造自然唇色</p>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <h2>案例展示</h2>
      <div class="gallery-grid">
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
        <div class="gallery-item"></div>
      </div>
    </section>

    <section class="contact-section">
      <h2>联系我们</h2>
      <form>
        <input type="text" placeholder="您的姓名" />
        <input type="tel" placeholder="联系电话" />
        <textarea placeholder="留言"></textarea>
        <button type="submit">提交</button>
      </form>
    </section>
  </div>
</template>

<script setup>
// 这里可以添加交互逻辑
</script>

<style scoped>
.promotion-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  padding: 4rem 0;
  background-color: #f8f9fa;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 1rem 2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.services-section {
  margin-bottom: 3rem;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service-card {
  padding: 2rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.gallery-item {
  height: 200px;
  background-color: #f0f0f0;
}

.contact-section form {
  max-width: 600px;
  margin: 0 auto;
}

.contact-section input,
.contact-section textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;
}

.contact-section button {
  width: 100%;
  padding: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>