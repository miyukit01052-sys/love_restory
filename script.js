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
      <div class="origin-profile__name"><em>FOUNDER / PROFILE</em><p>みゆ</p><span>Re:Story 主宰</span></div>
      <div class="origin-profile__intro"><p>幼少期から自己肯定感がとても低く、<br>対人恐怖症や愛着障害などに長く苦しんできました。</p><p>自分との関係を変えていく中で、<br>内面だけでなく、恋愛・仕事・家族・人生も大きく変化。</p></div>
      <div class="origin-profile__story"><p>MY STORY</p><div class="origin-profile__stories">
        <article><span>SELF</span><p>対人恐怖症・愛着障害</p><i aria-hidden="true">→</i><strong>「私って最高♡」と思える自分に</strong></article>
        <article><span>CAREER</span><p>30社以上不採用</p><i aria-hidden="true">→</i><strong>プライム上場企業を含む複数社から内定</strong></article>
        <article><span>LOVE</span><p>本命彼女にもなれなかった恋愛</p><i aria-hidden="true">→</i><strong>経営者や上場起業家に<br>のめり込まれるほど愛される恋愛へ</strong></article>
        <article><span>FAMILY</span><p>家族との強い葛藤</p><i aria-hidden="true">→</i><strong>母と毎年、旅行や美食を楽しむ関係へ</strong></article>
        <article><span>LIFE</span><p>人生が崩れ、口座残高200円</p><i aria-hidden="true">→</i><strong>数十万円のジュエリーや<br>100万円ほどのバッグも<br>自分で叶えられる生活へ</strong></article>
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
