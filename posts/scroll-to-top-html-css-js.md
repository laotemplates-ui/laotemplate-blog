---
title: "ວິທີເຮັດປຸ່ມ Scroll to Top ດ້ວຍ HTML, CSS, JavaScript"
date: "2026-07-19"
description: "ຄູ່ມືເຮັດປຸ່ມກັບຄືນເທິງສຸດຂອງໜ້າເວັບ (Scroll to Top) ແບບງ່າຍໆ ດ້ວຍ HTML, CSS ແລະ JavaScript ລ້ວນໆ ບໍ່ຕ້ອງໃຊ້ library ໃດໆ."
category: "ອອກແບບເວັບໄຊ"
image: "/images/scroll-to-top-html-css-js.webp"
---

## ບົດນຳ

ປຸ່ມ "ກັບຄືນເທິງສຸດ" (Scroll to Top) ຄືອົງປະກອບນ້ອຍໆ ແຕ່ຊ່ວຍໃຫ້ user ໃຊ້ງານເວັບໄຊງ່າຍຂຶ້ນ ໂດຍສະເພາະໜ້າທີ່ມີເນື້ອຫາຍາວ ບົດຄວາມນີ້ຈະສອນວິທີເຮັດແບບງ່າຍໆ ດ້ວຍ HTML, CSS, ແລະ JavaScript ລ້ວນໆ ບໍ່ຕ້ອງໃຊ້ library ພາຍນອກໃດໆ

## 1. ໂຄງສ້າງ HTML

ເລີ່ມຕົ້ນດ້ວຍການສ້າງ `<button>` ໄວ້ທ້າຍສຸດຂອງ `<body>`:

```html
<button id="scrollTopBtn" aria-label="ກັບຄືນເທິງສຸດ">
  ↑
</button>
```

ໃສ່ `aria-label` ໄວ້ນຳ ເພື່ອຊ່ວຍ accessibility ໃຫ້ screen reader ຮູ້ຈັກໜ້າທີ່ຂອງປຸ່ມນີ້

## 2. ຕົບແຕ່ງດ້ວຍ CSS

```css
#scrollTopBtn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #B8863B;
  color: #FCFBF8;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

#scrollTopBtn.show {
  opacity: 1;
  visibility: visible;
}

#scrollTopBtn:hover {
  transform: translateY(-4px);
  background-color: #9c7433;
}
```

ຈຸດສຳຄັນຄື `opacity: 0` ແລະ `visibility: hidden` ຕັ້ງໄວ້ເປັນຄ່າເລີ່ມຕົ້ນ — ປຸ່ມຈະເຊື່ອງໄວ້ກ່ອນ ຈົນກວ່າ user ຈະເລື່ອນລົງມາລະດັບໜຶ່ງ (ຄວບຄຸມຜ່ານ class `.show` ທີ່ຈະເພີ່ມດ້ວຍ JavaScript)

## 3. ເພີ່ມການເຮັດວຽກດ້ວຍ JavaScript

```javascript
const scrollTopBtn = document.getElementById("scrollTopBtn");

// ໂຊ/ເຊື່ອງປຸ່ມ ຕາມຕຳແໜ່ງການເລື່ອນ scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// ຄລິກແລ້ວເລື່ອນກັບຄືນເທິງສຸດແບບນຸ້ມນວນ
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
```

`behavior: "smooth"` ຄືກຸນແຈສຳຄັນ — ໃຫ້ browser ເລື່ອນແບບຄ່ອຍໆ ແທນທີ່ຈະກະໂດດຂຶ້ນເທິງທັນທີ (ຖ້າບໍ່ໃສ່ ຄ່າ default ຈະເປັນ `"auto"` ຄືກະໂດດທັນທີ)

## ສະຫຼຸບ

ພຽງແຄ່ 3 ໄຟລ໌ນ້ອຍໆ (HTML, CSS, JS) ກໍ່ສາມາດເຮັດປຸ່ມ Scroll to Top ທີ່ໃຊ້ງານໄດ້ຈິງແລ້ວ ໂດຍບໍ່ຕ້ອງເສຍເວລາໂຫຼດ library ພາຍນອກ ຫຼືເຮັດໃຫ້ເວັບໄຊຊ້າລົງ — ນີ້ຄືຫຼັກການດຽວກັນກັບທີ່ Template ຂອງລາວເທັມເພລດໃຊ້: ຂຽນ code ໃຫ້ນ້ອຍ, ເບົາ, ແລະ ໄວທີ່ສຸດ.