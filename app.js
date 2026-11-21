const projects = {
  charter: { number: '01', type: 'MOBILE EXPERIENCE REDESIGN', title: '包车游首页 · 体验重构', summary: '围绕业务分流、商品曝光与转化路径，对包车游首页的信息架构与核心链路进行重构。负责体验设计、页面重构、视觉优化与设计落地，并跟进上线效果及数据复盘。', facts: [['项目角色', 'UX / UI 设计'], ['项目方向', '首页体验重构'], ['设计范围', '信息架构 · 转化链路']], folder: 'charter', images: ['8.jpg','9.jpg','12.jpg','13.jpg','11.jpg','10.jpg','4.jpg','5.jpg','7.jpg','6.jpg'] },
  buy: { number: '02', type: 'ON-DEMAND SERVICE', title: '帮我买 · 下单流程优化', summary: '针对市场竞争力下降和客诉问题，梳理功能、推荐与商品选择等内容层级，优化全流程下单体验，并推进设计落地。', facts: [['项目角色', 'UX / UI 设计'], ['项目方向', '下单体验优化'], ['设计范围', '信息架构 · 交互 · UI']], folder: 'buy-for-me', images: ['14.jpg','15.jpg','17.jpg','16.jpg','21.jpg','20.jpg','22.jpg','23.jpg','18.jpg','19.jpg'] },
  ai: { number: '03', type: 'AI + TRAVEL', title: 'AI 赋能 · Hopegoo 定制游', summary: '探索 AI 能力在定制游场景中的产品体验表达。此处先以现有项目视觉素材建立案例框架，项目背景、职责与成果可在后续补充。', facts: [['项目角色', '待补充'], ['项目方向', 'AI 定制游'], ['设计范围', '待补充']], folder: 'ai-travel', images: ['33.jpg','32.jpg','31.jpg'] },
  outdoor: { number: '04', type: 'CHANNEL DESIGN / 0→1', title: '户外游 · 频道设计', summary: '将端内碎片化的户外资源整合为独立频道，通过“场景种草—玩法探索—商品转化”重构用户体验，建立体系化的户外频道。负责从 0 到 1 的界面设计、信息架构、页面布局、交互体验与组件规范。', facts: [['项目角色', 'UX / UI 设计'], ['项目方向', '频道 0→1'], ['设计范围', '内容 · 商品 · 组件规范']], folder: 'outdoor', images: ['28.jpg','29.jpg','27.jpg','26.jpg','24.jpg','30.jpg','25.jpg'] },
  b2b: { number: '05', type: 'B2B & DESIGN SYSTEM', title: 'B 端与其他设计', summary: '汇集门店系统及其他多端设计探索。此处先保留视觉案例内容，具体项目背景与职责可按需要继续补充。', facts: [['项目角色', '待补充'], ['项目方向', 'B 端与多端设计'], ['设计范围', '待补充']], folder: 'b2b', images: ['39.jpg','38.jpg','35.jpg','34.jpg','36.jpg','37.jpg','42.jpg','43.jpg','40.jpg','44.jpg'] }
};
const dialog = document.querySelector('.project-dialog');
const gallery = document.querySelector('#modalGallery');
function openProject(key) {
  const p = projects[key];
  document.querySelector('#modalNumber').textContent = p.number;
  document.querySelector('#modalType').textContent = p.type;
  document.querySelector('#modalTitle').textContent = p.title;
  document.querySelector('#modalSummary').textContent = p.summary;
  document.querySelector('#modalFacts').innerHTML = p.facts.map(([k,v]) => `<div><small>${k}</small><span>${v}</span></div>`).join('');
  gallery.innerHTML = p.images.map((name, i) => `<img loading="${i < 2 ? 'eager' : 'lazy'}" src="assets/${p.folder}/${name}" alt="${p.title} - 设计图 ${i + 1}">`).join('');
  dialog.showModal(); document.body.style.overflow = 'hidden';
}
document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProject(card.dataset.project); });
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
