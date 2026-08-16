(() => {
  const config = window.RESTORY_CONFIG || {};
  document.querySelectorAll('.js-apply-link').forEach((link) => {
    if (config.applyUrl && config.applyUrl !== '#') link.href = config.applyUrl;
  });
  document.querySelectorAll('[data-image]').forEach((slot) => {
    const source = config.images?.[slot.dataset.image];
    if (!source) return;
    slot.style.backgroundImage = `url("${source}")`;
    slot.classList.add('has-image');
  });
  const originProfile = document.querySelector('.origin-profile');
  if (originProfile) {
    originProfile.innerHTML = `
      <div class="origin-profile__name"><p>みゆ</p><span>Re:Story 主宰</span></div>
      <div class="origin-profile__intro"><p>幼少期から自己肯定感がとても低く、<br>対人恐怖症や愛着障害などに長く苦しんできました。</p><p>自分との関係を変えていく中で、<br>内面だけでなく、恋愛・仕事・家族・人生も大きく変化。</p></div>
      <div class="origin-profile__story"><p>MY STORY</p><div class="origin-profile__shifts">
        <article><div><span>BEFORE</span><p>対人恐怖症・愛着障害などに長く苦しむ</p></div><i aria-hidden="true">↓</i><div><span>NOW</span><strong>「私って最高♡」と思える自分へ</strong></div></article>
        <article><div><span>BEFORE</span><p>面接に30社以上不採用</p></div><i aria-hidden="true">↓</i><div><span>NOW</span><strong>プライム上場企業を含む複数社から内定</strong></div></article>
        <article><div><span>BEFORE</span><p>本命彼女にもなれなかった恋愛</p></div><i aria-hidden="true">↓</i><div><span>NOW</span><strong>経営者や上場起業家に<br>のめり込まれるほど愛される恋愛へ</strong></div></article>
        <article><div><span>BEFORE</span><p>家族との強い葛藤</p></div><i aria-hidden="true">↓</i><div><span>NOW</span><strong>母と毎年、旅行や美食を楽しむ関係へ</strong></div></article>
        <article><div><span>BEFORE</span><p>人生が崩れ、口座残高200円</p></div><i aria-hidden="true">↓</i><div><span>NOW</span><strong>数十万円のジュエリーや<br>100万円ほどのバッグも<br>自分で叶えられる生活へ</strong></div></article>
      </div></div>
      <p class="origin-profile__study">心理学・マインド・コーチング・<br>カウンセリングなどを長年学び、<br>学びへの自己投資は累計700万円以上。</p>`;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
})();
