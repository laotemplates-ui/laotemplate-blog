---
title: "ວິທີສ້າງແຖບເມນູ (Navbar) ງາມໆ ແລະ ຮອງຮັບມືຖື ດ້ວຍ HTML ແລະ CSS"
date: "2026-07-19"
description: "ຄູ່ມືສ້າງ Navbar ແບບ Responsive ດ້ວຍ HTML ແລະ CSS ລ້ວນໆ ໃຫ້ສະແດງຜົນງາມທັງໜ້າຈໍຄອມພິວເຕີ ແລະ ມືຖື."
category: "ອອກແບບເວັບໄຊ"
---

## ບົດນຳ

Navbar (ແຖບເມນູ) ຄືອົງປະກອບທຳອິດທີ່ລູກຄ້າເຫັນເມື່ອເຂົ້າມາເບິ່ງເວັບໄຊ ຖ້າ Navbar ອອກແບບບໍ່ດີ ຫຼື ໃຊ້ບໍ່ໄດ້ຢູ່ໜ້າຈໍມືຖື ອາດເຮັດໃຫ້ລູກຄ້າອອກຈາກເວັບໄຊທັນທີ ບົດຄວາມນີ້ຈະສອນວິທີສ້າງ Navbar ແບບ Responsive (ຮອງຮັບທຸກຂະໜາດໜ້າຈໍ) ດ້ວຍ HTML ແລະ CSS ລ້ວນໆ ບໍ່ຕ້ອງໃຊ້ JavaScript ຫຼື Framework ໃດໆ

## 1. ໂຄງສ້າງ HTML

ເລີ່ມຕົ້ນດ້ວຍໂຄງສ້າງພື້ນຖານ: ໂລໂກ້ຢູ່ຊ້າຍ ແລະ ລາຍການເມນູຢູ່ຂວາ

```html
<nav class="navbar">
  <div class="navbar-logo">ລາວເທັມເພລດ</div>

  <!-- ສ່ວນຄວບຄຸມການເປີດ/ປິດເມນູ (ຕ້ອງວາງໄວ້ກ່ອນ navbar-menu) -->
  <input type="checkbox" id="menu-toggle" class="menu-toggle" />
  <label for="menu-toggle" class="menu-icon">☰</label>

  <!-- ລາຍການເມນູ -->
  <ul class="navbar-menu">
    <li><a href="#">ໜ້າຫຼັກ</a></li>
    <li><a href="#">ບໍລິການ</a></li>
    <li><a href="#">ຜົນງານ</a></li>
    <li><a href="#">ຕິດຕໍ່ເຮົາ</a></li>
  </ul>
</nav>
```

ຈຸດສຳຄັນຄື `<input type="checkbox">` ຮ່ວມກັບ `<label>` — ນີ້ຄືເຕັກນິກ "CSS-only" ທີ່ໃຊ້ checkbox ເປັນຕົວຄວບຄຸມການເປີດ/ປິດເມນູ ໂດຍບໍ່ຕ້ອງພຶ່ງ JavaScript ເລີຍ

## 2. ຕົບແຕ່ງດ້ວຍ CSS (Desktop)

ຕັ້ງຄ່າພື້ນຖານໃຫ້ Navbar ຈັດວາງແບບແຖວດຽວ (row) ສຳລັບໜ້າຈໍຄອມພິວເຕີກ່ອນ

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #FCFBF8;
  border-bottom: 1px solid rgba(27, 27, 24, 0.1);
}

.navbar-logo {
  font-size: 20px;
  font-weight: 700;
  color: #1B1B18;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: 32px;
}

.navbar-menu a {
  text-decoration: none;
  color: rgba(27, 27, 24, 0.7);
  font-size: 15px;
  transition: color 0.2s ease;
}

.navbar-menu a:hover {
  color: #B8863B;
}

.menu-toggle,
.menu-icon {
  display: none;
}
```

## 3. ເຮັດໃຫ້ຮອງຮັບມືຖື (Responsive)

ໃຊ້ `@media` query ເພື່ອກຳນົດ style ໃໝ່ ຕອນໜ້າຈໍນ້ອຍກວ່າ 768px (ຂະໜາດມືຖື/tablet)

```css
@media (max-width: 768px) {
  .navbar-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #FCFBF8;
    padding: 16px 32px;
    gap: 16px;
    border-bottom: 1px solid rgba(27, 27, 24, 0.1);
    z-index: 999; /* ປ້ອງກັນບໍ່ໃຫ້ເນື້ອຫາອື່ນໃນເວັບບັງເມນູ */
  }

  .menu-icon {
    display: block;
    font-size: 24px;
    cursor: pointer;
    color: #1B1B18;
  }

  /* ເມື່ອ checkbox ຖືກຕິກ ໃຫ້ສະແດງເມນູທີ່ຢູ່ຖັດຈາກມັນ */
  .menu-toggle:checked ~ .navbar-menu {
    display: flex;
  }

  .navbar {
    position: relative;
  }
}
```

ວິທີເຮັດວຽກ: `.menu-toggle:checked ~ .navbar-menu` ຄື CSS selector ພິເສດ (sibling selector) ທີ່ໝາຍຄວາມວ່າ "ຖ້າ checkbox ຖືກຕິກ (checked) ໃຫ້ສະແດງ `.navbar-menu` ທີ່ຢູ່ຫຼັງມັນ" — ຕອນຄລິກ icon ☰ (ຊຶ່ງເປັນ `<label>` ເຊື່ອມກັບ checkbox) checkbox ຈະຖືກ toggle ອັດຕະໂນມັດ ເຮັດໃຫ້ເມນູເປີດ/ປິດໄດ້ ໂດຍບໍ່ຕ້ອງໃຊ້ JavaScript ເລີຍ

## ສະຫຼຸບ

ດ້ວຍ HTML ແລະ CSS ພຽງ 2 ໄຟລ໌ນ້ອຍໆ ກໍ່ສາມາດສ້າງ Navbar ທີ່ໃຊ້ງານໄດ້ຈິງ ຮອງຮັບທັງໜ້າຈໍຄອມພິວເຕີ ແລະ ມືຖື ໂດຍໃຊ້ເຕັກນິກ "CSS-only checkbox hack" ຊ່ວຍໃຫ້ບໍ່ຕ້ອງໂຫຼດ JavaScript ເພີ່ມ ເວັບໄຊຈຶ່ງໄວ ແລະ ເບົາ — ນີ້ຄືຫຼັກການດຽວກັນທີ່ Template ຂອງລາວເທັມເພລດໃຊ້ໃນທຸກໜ້າ.