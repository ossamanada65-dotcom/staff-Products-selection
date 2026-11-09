const icons = {
  dashboard:
    '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.5 7.7 7.5 4.4 7.5-4.4M12 21v-8.9"/>',
  barcode: '<path d="M4 5v14M7 5v14M10 5v14M14 5v14M16 5v14M20 5v14"/>',
  trend: '<path d="m3 17 6-6 4 4 8-9M15 6h6v6"/>',
  clipboard:
    '<rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 5.5h6a1.5 1.5 0 0 0-1.5-2h-3A1.5 1.5 0 0 0 9 5.5ZM9 11h6M9 15h6"/>',
  truck: '<path d="M3 6h11v12H3zM14 10h4l3 3v5h-7z"/><circle cx="7" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/>',
  chart:
    '<path d="M2.708 11.375V8.125M6.5001 11.375V1.625M10.2922 11.375V4.875" stroke-width="1.3" stroke-linecap="round"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4 4"/>',
  check: '<path d="m5 12 4 4L19 6" />',
};

// Sidebar artwork follows the coordinates and lighter stroke in the supplied SVG.
const sidebarIcons = {
  dashboard: '<rect x="12.625" y="32.125" width="3.7917" height="4.875" rx=".5417"/><rect x="18.5833" y="32.125" width="3.7917" height="2.7083" rx=".5417"/><rect x="18.5833" y="37" width="3.7917" height="4.875" rx=".5417"/><rect x="12.625" y="39.1667" width="3.7917" height="2.7083" rx=".5417"/>',
  barcode: '<path d="M1.625 2.70703V10.2912M4.33333 2.70703V10.2912M6.5 2.70703V10.2912M9.20833 2.70703V10.2912M11.375 2.70703V10.2912"/>',
  bell: '<g transform="translate(0 -38)"><path d="M16.5612 79.8746C16.6562 80.0393 16.793 80.176 16.9577 80.2711C17.1224 80.3662 17.3092 80.4162 17.4993 80.4162C17.6895 80.4162 17.8763 80.3662 18.041 80.2711C18.2057 80.176 18.3424 80.0393 18.4375 79.8746M12.7665 76.8009C12.6958 76.8785 12.6491 76.9749 12.6321 77.0785C12.6152 77.1821 12.6287 77.2885 12.671 77.3845C12.7134 77.4806 12.7827 77.5623 12.8707 77.6197C12.9586 77.6771 13.0613 77.7076 13.1663 77.7077H21.8331C21.9381 77.7078 22.0408 77.6773 22.1288 77.62C22.2168 77.5627 22.2862 77.4811 22.3287 77.3851C22.3712 77.2891 22.3848 77.1828 22.368 77.0792C22.3512 76.9756 22.3046 76.8791 22.234 76.8014C21.5135 76.0587 20.7498 75.2695 20.7498 72.8323C20.7498 71.9703 20.4074 71.1436 19.7978 70.534C19.1883 69.9245 18.3617 69.582 17.4997 69.582C16.6377 69.582 15.8111 69.9245 15.2016 70.534C14.5921 71.1436 14.2496 71.9703 14.2496 72.8323C14.2496 75.2695 13.4853 76.0587 12.7665 76.8009Z"/></g>',
  box: '<g transform="translate(0 -76)"><path d="M12.7874 110.291L17.4999 113M17.4999 113L22.2124 110.291M17.4999 113L17.5 118.416M17.5 118.416C17.3098 118.416 17.123 118.366 16.9583 118.271L13.1667 116.104C13.0021 116.009 12.8655 115.872 12.7704 115.708C12.6753 115.543 12.6252 115.357 12.625 115.167V110.833C12.6252 110.643 12.6753 110.456 12.7704 110.292C12.8655 110.128 13.0021 109.991 13.1667 109.896L16.9583 107.729C17.123 107.634 17.3098 107.584 17.5 107.584C17.6902 107.584 17.877 107.634 18.0417 107.729L21.8333 109.896C21.9979 109.991 22.1345 110.128 22.2296 110.292C22.3247 110.456 22.3748 110.643 22.375 110.833V115.167C22.3748 115.357 22.3247 115.543 22.2296 115.708C22.1345 115.872 21.9979 116.009 21.8333 116.104L18.0417 118.271C17.877 118.366 17.6902 118.416 17.5 118.416Z"/></g>',
  trend: '<g transform="translate(0 -188)"><path d="M22.9172 222.542V219.293H19.6669M22.9172 219.293L18.3127 223.896L15.6041 221.188L12.083 224.709"/></g>',
  clipboard: '<g transform="translate(0 -223)"><path d="M19.6663 255.665H20.7496C21.0369 255.665 21.3124 255.78 21.5155 255.983C21.7187 256.186 21.8328 256.462 21.8328 256.749V264.333C21.8328 264.62 21.7187 264.896 21.5155 265.099C21.3124 265.302 21.0369 265.416 20.7496 265.416H14.2502C13.9629 265.416 13.6874 265.302 13.4843 265.099C13.2811 264.896 13.167 264.62 13.167 264.333V256.749C13.167 256.462 13.2811 256.186 13.4843 255.983C13.6874 255.78 13.9629 255.665 14.2502 255.665H15.3334M19.6663 255.665V255.124C19.6663 254.825 19.4239 254.582 19.1247 254.582H15.8751C15.5759 254.582 15.3334 254.825 15.3334 255.124V255.665M17.4999 259.457H19.6663M17.4999 262.166H19.6663M15.3334 259.457H15.3389M15.3334 262.166H15.3389"/></g>',
  truck: '<g transform="translate(0 -262)"><path d="M18.5835 301.251V295.834M18.5835 301.251H19.1252M18.5835 301.251H15.875M18.5835 295.834V294.751C18.5835 294.464 18.4694 294.188 18.2662 293.985C18.063 293.782 17.7874 293.668 17.5001 293.668H13.1664C12.8791 293.668 12.6035 293.782 12.4003 293.985C12.1972 294.188 12.083 294.464 12.083 294.751V300.709C12.083 300.853 12.1401 300.99 12.2417 301.092C12.3433 301.193 12.481 301.251 12.6247 301.251H13.7081M18.5835 295.834H20.4903C20.5715 295.835 20.6517 295.853 20.7248 295.888C20.7979 295.923 20.8622 295.975 20.9129 296.038L22.798 298.394C22.875 298.49 22.917 298.609 22.9172 298.732V300.709C22.9172 300.853 22.8601 300.99 22.7585 301.092C22.657 301.193 22.5192 301.251 22.3755 301.251H21.2921M13.7081 301.251C13.7081 301.849 14.1932 302.334 14.7916 302.334C15.3899 302.334 15.875 301.849 15.875 301.251M13.7081 301.251C13.7081 300.652 14.1932 300.167 14.7916 300.167C15.3899 300.167 15.875 300.652 15.875 301.251M19.1252 301.251C19.1252 301.849 19.6103 302.334 20.2087 302.334C20.807 302.334 21.2921 301.849 21.2921 301.251M19.1252 301.251C19.1252 300.652 19.6103 300.167 20.2087 300.167C20.807 300.167 21.2921 300.652 21.2921 301.251Z"/></g>',
  chart: '<g transform="translate(0 -300)"><path d="M13.708 340.875V337.625M17.5001 340.875V331.125M21.2922 340.875V334.375"/></g>',
};

document.querySelectorAll('[data-icon]').forEach((element) => {
  const iconName = element.dataset.icon;
  const inSidebar = element.closest('.sidebar');
  const path = inSidebar ? sidebarIcons[iconName] || icons[iconName] : icons[iconName];
  const viewBox = inSidebar && iconName === 'barcode' ? '0 0 13 13' : inSidebar ? '11 31 13 13' : iconName === 'chart' ? '0 0 13 13' : '0 0 24 24';

  element.innerHTML = `<svg viewBox="${viewBox}" aria-hidden="true">${path || ''}</svg>`;
});

const products = [
  { name: 'product 1', sku: 'SKU-2210', category: 'product', zone: 'A-12', price: '12.50', selected: true },
  { name: 'product 2', sku: 'SKU-3087', category: 'product', zone: 'A-14', price: '9.75' },
  { name: 'product 3', sku: 'SKU-1042', category: 'product', zone: 'B-02', price: '38.00' },
  { name: 'product 4', sku: 'SKU-2301', category: 'product', zone: 'D-07', price: '21.00' },
  { name: 'product 5', sku: 'SKU-2410', category: 'product', zone: 'D-08', price: '10.50' },
  { name: 'product 6', sku: 'SKU-1051', category: 'product', zone: 'B-03', price: '95.00' },
];

const translations = {
  en: {
    title: 'Products',
    subtitle: 'Your product catalog and prices',
    all: 'All products',
    selected: 'Selected',
    products: 'Products',
    name: 'NAME',
    sku: 'SKU',
    category: 'CATEGORY',
    zone: 'ZONE',
    price: 'PRICE (EGP)',
    view: 'View',
    generate: 'Generate barcode',
    clear: 'Clear',
    total: 'Total Products',
    warehouse: 'In the warehouse',
    ready: 'Ready for labels',
    printed: 'Labels printed today',
    byYou: 'By you',
    search: 'Search products, SKUs...',
    footer: '© 2027 Smart Warehouse. All rights reserved.',
    operations: 'OPERATIONS',
    planning: 'PLANNING',
    nav: ['Dashboard', 'Alerts ', 'Inventory', 'Products', 'AI forecast', 'Purchase orders ', 'Suppliers', 'Reports'],
    notifications: 'Notifications',
    notificationItems: [
      ['Low stock alert', 'Product 3 is running low · 10 min ago'],
      ['New purchase order', 'PO-1048 is awaiting review · 1 hour ago'],
      ['Inventory updated', 'Stock count completed · 3 hours ago'],
    ],
    close: 'Close',
    details: 'PRODUCT DETAILS',
    fields: ['SKU', 'Category', 'Zone', 'Price'],
    selectProduct: 'Select product',
    deselectProduct: 'Deselect product',
    selectedToast: 'Product selected.',
    deselectedToast: 'Product deselected.',
    noSelection: 'Select at least one product first.',
    copied: 'Copied',
    skuLabel: 'SKU',
    markedRead: 'Notification marked as read.',
    unavailable: 'is not part of this Products page.',
  },
  ar: {
    title: 'المنتجات',
    subtitle: 'كتالوج المنتجات والأسعار',
    all: 'كل المنتجات',
    selected: 'المحدد',
    products: 'المنتجات',
    name: 'الاسم',
    sku: 'رمز المنتج',
    category: 'الفئة',
    zone: 'الموقع',
    price: 'السعر (ج.م)',
    view: 'عرض',
    generate: 'إنشاء باركود',
    clear: 'مسح التحديد',
    total: 'إجمالي المنتجات',
    warehouse: 'في المستودع',
    ready: 'جاهز لطباعة الملصقات',
    printed: 'ملصقات مطبوعة اليوم',
    byYou: 'بواسطتك',
    search: 'ابحث عن المنتجات أو الرموز...',
    footer: '© 2027 سمارت ويرهاوس. جميع الحقوق محفوظة.',
    operations: 'العمليات',
    planning: 'التخطيط',
    nav: ['لوحة التحكم', 'التنبيهات', 'المخزون', 'المنتجات', 'توقعات الذكاء الاصطناعي', 'أوامر الشراء', 'الموردون', 'التقارير'],
    notifications: 'الإشعارات',
    notificationItems: [
      ['تنبيه انخفاض المخزون', 'المنتج 3 أوشك على النفاد · منذ 10 دقائق'],
      ['طلب شراء جديد', 'طلب الشراء PO-1048 بانتظار المراجعة · منذ ساعة'],
      ['تم تحديث المخزون', 'اكتمل جرد المخزون · منذ 3 ساعات'],
    ],
    close: 'إغلاق',
    details: 'تفاصيل المنتج',
    fields: ['رمز المنتج', 'الفئة', 'الموقع', 'السعر'],
    selectProduct: 'تحديد المنتج',
    deselectProduct: 'إلغاء التحديد',
    selectedToast: 'تم تحديد المنتج.',
    deselectedToast: 'تم إلغاء تحديد المنتج.',
    noSelection: 'حدد منتجًا واحدًا على الأقل أولًا.',
    copied: 'تم نسخ',
    skuLabel: 'رمز المنتج',
    markedRead: 'تم وضع الإشعار كمقروء.',
    unavailable: 'غير متاح في صفحة المنتجات.',
  },
};

const rows = document.querySelector('#productRows');
let currentView = 'all';
let menuProduct = null;
let dialogProduct = null;
let isArabic = false;

function setProductSelected(product, selected) {
  product.selected = selected;

  // Individual product selection moves the active selection to that row.
  if (selected) {
    products
      .filter((item) => item !== product)
      .forEach((item) => {
        item.selected = false;
      });
  }
}

function escapeHtml(value) {
  return String(value).replace(/[\x26\x3C\x3E\x22\x27]/g, (character) => {
    if (character === '&') return '&amp;';
    if (character === '<') return '&lt;';
    if (character === '>') return '&gt;';
    if (character === '"') return '&quot;';
    return '&#39;';
  });
}

function visibleProducts() {
  const query = document.querySelector('#searchInput').value.trim().toLowerCase();

  return products.filter((product) => {
    const arabicName = `المنتج ${product.name.match(/\d+/)?.[0] || ''}`;
    const matchesView = currentView !== 'selected' || product.selected;
    const matchesQuery = !query || [...Object.values(product), arabicName].some((value) =>
      String(value).toLowerCase().includes(query),
    );

    return matchesView && matchesQuery;
  });
}

function formatPageDigits() {
  const westernDigits = '0123456789';
  const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;

  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('script, style, input, textarea')) continue;

    node.textContent = node.textContent.replace(/[0-9٠-٩]/g, (digit) => {
      const westernIndex = westernDigits.indexOf(digit);
      const arabicIndex = arabicDigits.indexOf(digit);

      if (isArabic) return arabicDigits[westernIndex >= 0 ? westernIndex : arabicIndex];
      return westernDigits[arabicIndex >= 0 ? arabicIndex : westernIndex];
    });
  }
}

function render() {
  const visibleItems = visibleProducts();

  rows.innerHTML = visibleItems
    .map((product) => {
      const productNumber = product.name.match(/\d+/)?.[0] || '';
      const name = isArabic ? `المنتج ${productNumber}` : product.name;
      const category = isArabic ? 'منتج' : product.category;
      const safeName = escapeHtml(name);
      const safeSku = escapeHtml(product.sku);
      const safeCategory = escapeHtml(category);
      const safeZone = escapeHtml(product.zone);
      const safePrice = escapeHtml(product.price);

      return `
        <tr class="${product.selected ? 'selected-row' : ''}">
          <td>
            <input
              type="checkbox"
              aria-label="${isArabic ? 'تحديد' : 'Select'} ${safeName}"
              data-sku="${safeSku}"
              ${product.selected ? 'checked' : ''}
            >
          </td>
          <td>${safeName}</td>
          <td>${safeSku}</td>
          <td>${safeCategory}</td>
          <td>${safeZone}</td>
          <td>${safePrice}</td>
          <td>
            <div class="row-actions">
              <button class="view-button" data-action="view" data-sku="${safeSku}">
                ${isArabic ? 'عرض' : 'View'}
              </button>
              <button
                class="more-button"
                data-action="more"
                data-sku="${safeSku}"
                aria-label="${isArabic ? 'إجراءات أخرى لـ' : 'More actions for '}${safeName}"
              >
                <svg class="row-more-icon" aria-hidden="true" width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="34" height="36" rx="11" fill="white" />
                  <rect x="0.5" y="0.5" width="33" height="35" rx="10.5" stroke="#A0B4D6" stroke-opacity="0.5" />
                  <path d="M13.25 15.875L16.5 19.125L19.75 15.875" stroke-linecap="round" stroke="#24355F" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');

  const selectedCount = products.filter((product) => product.selected).length;
  const selectAll = document.querySelector('#selectAll');

  document.querySelector('#selectedCount').textContent = selectedCount;
  document.querySelector('#selectedMetric').textContent = selectedCount;
  document.querySelector('#tabCount').textContent = selectedCount;
  document.querySelector('.selection-count').lastChild.textContent = isArabic ? ' محدد' : ' selected';
  selectAll.setAttribute(
    'aria-label',
    isArabic ? 'تحديد كل المنتجات الظاهرة' : 'Select all visible products',
  );
  selectAll.checked = visibleItems.length > 0 && visibleItems.every((product) => product.selected);
  selectAll.indeterminate = visibleItems.some((product) => product.selected) && !selectAll.checked;

  formatPageDigits();
}

function toast(message) {
  const element = document.querySelector('#toast');

  element.textContent = message;
  formatPageDigits();
  element.classList.add('visible');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove('visible'), 2400);
}

function openDetails(product) {
  if (!product) return;

  dialogProduct = product;
  const copy = translations[isArabic ? 'ar' : 'en'];
  const productNumber = product.name.match(/\d+/)?.[0] || '';

  document.querySelector('#dialogProductName').textContent = isArabic
    ? `المنتج ${productNumber}`
    : product.name;
  document.querySelector('#dialogSku').textContent = product.sku;
  document.querySelector('#dialogCategory').textContent = isArabic ? 'منتج' : product.category;
  document.querySelector('#dialogZone').textContent = product.zone;
  document.querySelector('#dialogPrice').textContent = isArabic
    ? `${product.price} جنيه`
    : `${product.price} EGP`;
  document.querySelector('.dialog-eyebrow').textContent = copy.details;
  document.querySelectorAll('.product-details dt').forEach((element, index) => {
    element.textContent = copy.fields[index];
  });
  document.querySelector('.dialog-heading [data-close-dialog]').setAttribute('aria-label', copy.close);
  document.querySelector('.dialog-actions [data-close-dialog]').textContent = copy.close;
  document.querySelector('#dialogSelect').textContent = product.selected
    ? copy.deselectProduct
    : copy.selectProduct;

  document.querySelector('#productDialog').showModal();
  formatPageDigits();
}

function closeRowMenu() {
  document.querySelector('#rowMenu').hidden = true;
  menuProduct = null;
}

function openNotificationPopover() {
  const popover = document.querySelector('#notificationPopover');
  const trigger = document.querySelector('#notificationButton');
  const triggerBounds = trigger.getBoundingClientRect();

  popover.hidden = false;
  const popoverBounds = popover.getBoundingClientRect();
  const gap = 8;
  const isRtl = document.documentElement.dir === 'rtl';
  const preferredLeft = isRtl
    ? triggerBounds.left
    : triggerBounds.right - popoverBounds.width;
  const left = Math.max(gap, Math.min(preferredLeft, innerWidth - popoverBounds.width - gap));
  const top = Math.min(triggerBounds.bottom + gap, innerHeight - popoverBounds.height - gap);

  popover.style.left = `${left}px`;
  popover.style.right = 'auto';
  popover.style.top = `${Math.max(gap, top)}px`;
}

function updateRowMenuLanguage() {
  const copy = translations[isArabic ? 'ar' : 'en'];
  const menu = document.querySelector('#rowMenu');
  const action = menu.querySelector('.barcode-action');

  menu.dir = isArabic ? 'rtl' : 'ltr';
  action.dir = menu.dir;
  action.setAttribute('aria-label', copy.generate);
  const englishArtwork = menu.querySelector('.barcode-action-en');
  const arabicLabel = menu.querySelector('.barcode-action-ar');
  const arabicIcon = menu.querySelector('.barcode-action-icon');

  englishArtwork.hidden = isArabic;
  englishArtwork.style.display = isArabic ? 'none' : 'block';
  arabicLabel.hidden = !isArabic;
  arabicLabel.style.display = isArabic ? 'inline-block' : 'none';
  arabicLabel.textContent = copy.generate;
  arabicIcon.hidden = !isArabic;
  arabicIcon.style.display = isArabic ? 'block' : 'none';
}

function setLanguage(language) {
  isArabic = language === 'ar';
  const copy = translations[language];

  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.body.dir = isArabic ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.classList.toggle('chosen', button.dataset.lang === language);
  });

  document.querySelector('h1').textContent = copy.title;
  document.querySelector('.page-title p').textContent = copy.subtitle;
  document.querySelector('[data-view="all"]').textContent = copy.all;
  document.querySelector('[data-view="selected"]').firstChild.textContent = `${copy.selected} (`;
  document.querySelector('.product-panel h2').textContent = copy.products;

  const headers = ['', copy.name, copy.sku, copy.category, copy.zone, copy.price, ''];
  document.querySelectorAll('thead th').forEach((header, index) => {
    if (headers[index]) header.textContent = headers[index];
  });

  document.querySelector('#generateBarcodeLabel').textContent = copy.generate;
  document.querySelector('.clear-button').textContent = copy.clear;
  document.querySelector('#searchInput').placeholder = copy.search;
  document.querySelector('#searchInput').setAttribute('aria-label', copy.search);
  document.querySelector('.page-footer > p').textContent = copy.footer;

  const metricLabels = document.querySelectorAll('.metric-card p');
  metricLabels[0].textContent = copy.total;
  metricLabels[1].textContent = copy.selected;
  metricLabels[2].textContent = copy.printed;

  const metricNotes = document.querySelectorAll('.metric-note');
  metricNotes[0].textContent = copy.warehouse;
  metricNotes[1].textContent = copy.ready;
  metricNotes[2].textContent = copy.byYou;

  const groupHeadings = document.querySelectorAll('.nav-group h2');
  groupHeadings[0].textContent = copy.operations;
  groupHeadings[1].textContent = copy.planning;

  document.querySelectorAll('.nav-item').forEach((link, index) => {
    const labelNode = Array.from(link.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );

    if (labelNode) labelNode.textContent = copy.nav[index];
  });

  document.querySelector('.profile-vector').setAttribute(
    'aria-label',
    isArabic ? 'مستخدم · اسم المستخدم · موظف المخزن' : 'UN · User Name · Warehouse staff',
  );
  document.querySelector('.brand-vector').setAttribute(
    'aria-label',
    isArabic ? 'المستودع الذكي' : 'Smart Warehouse',
  );
  document.querySelector('nav').setAttribute('aria-label', isArabic ? 'التنقل الرئيسي' : 'Main navigation');
  document.querySelector('.language-switch').setAttribute('aria-label', isArabic ? 'اللغة' : 'Language');
  document.querySelector('#notificationButton').setAttribute('aria-label', copy.notifications);
  document.querySelector('.popover-heading b').textContent = copy.notifications;

  document.querySelectorAll('.notification-item').forEach((item, index) => {
    item.querySelector('b').textContent = copy.notificationItems[index][0];
    item.querySelector('small').textContent = copy.notificationItems[index][1];
  });

  document.querySelector('[data-close-notifications]').setAttribute('aria-label', copy.close);
  updateRowMenuLanguage();
  document.querySelector('#clearSelection').setAttribute('aria-label', copy.clear);
  document.querySelector('.dialog-heading [data-close-dialog]').setAttribute('aria-label', copy.close);
  document.querySelector('.dialog-actions [data-close-dialog]').textContent = copy.close;

  if (document.querySelector('#productDialog').open && dialogProduct) {
    openDetails(dialogProduct);
  }

  render();
}

document.querySelectorAll('.nav-item').forEach((link) => {
  link.dataset.originalLabel = link.textContent.trim().replace(/\d+$/, '').trim();

  link.addEventListener('click', (event) => {
    event.preventDefault();

    const label = link.dataset.originalLabel;

    if (label === 'Alerts') {
      event.stopPropagation();
      openNotificationPopover();
      return;
    }

    if (label === 'Products') {
      document.querySelectorAll('.nav-item').forEach((item) => {
        item.classList.toggle('active', item === link);
      });
      currentView = 'all';
      document.querySelectorAll('.tab').forEach((tab) => {
        tab.classList.toggle('selected-tab', tab.dataset.view === 'all');
      });
      render();
      document.querySelector('#searchInput').focus();
      return;
    }

    const message = isArabic
      ? `${label} غير متاح في صفحة المنتجات.`
      : `${label} ${translations.en.unavailable}`;
    toast(message);
  });
});

rows.addEventListener('change', (event) => {
  if (!event.target.matches('input[type="checkbox"][data-sku]')) return;

  const product = products.find((item) => item.sku === event.target.dataset.sku);
  if (!product) return;

  setProductSelected(product, event.target.checked);
  render();
});

document.querySelector('#selectAll').addEventListener('change', (event) => {
  visibleProducts().forEach((product) => {
    product.selected = event.target.checked;
  });
  render();
});

document.querySelector('#searchInput').addEventListener('input', render);

document.querySelectorAll('.tab').forEach((button) => {
  button.addEventListener('click', () => {
    currentView = button.dataset.view;
    document.querySelectorAll('.tab').forEach((tab) => {
      tab.classList.toggle('selected-tab', tab === button);
    });
    render();
  });
});

document.querySelector('#clearSelection').addEventListener('click', () => {
  products.forEach((product) => {
    product.selected = false;
  });
  render();
});

document.querySelector('#generateBarcode').addEventListener('click', () => {
  const selectedCount = products.filter((product) => product.selected).length;

  if (!selectedCount) {
    toast(translations[isArabic ? 'ar' : 'en'].noSelection);
    return;
  }

  const counter = document.querySelector('#printedCount');
  counter.textContent = Number(counter.textContent.replace(/[٠-٩]/g, (digit) => {
    return String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit));
  })) + selectedCount;

  const message = isArabic
    ? `تم إنشاء ملصقات الباركود لـ ${selectedCount} منتج.`
    : `Barcode labels generated for ${selectedCount} product${selectedCount === 1 ? '' : 's'}.`;
  toast(message);
});

rows.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]');
  if (!button) return;

  const product = products.find((item) => item.sku === button.dataset.sku);
  if (button.dataset.action === 'view') {
    openDetails(product);
    return;
  }

  menuProduct = product;
  const menu = document.querySelector('#rowMenu');
  const bounds = button.getBoundingClientRect();
  const menuWidth = 204;
  const anchorCenter = bounds.left + bounds.width / 2;
  const left = Math.max(8, Math.min(anchorCenter - (menuWidth - 22), innerWidth - menuWidth - 8));

  menu.style.top = `${Math.min(bounds.bottom + 6, innerHeight - 62)}px`;
  menu.style.left = `${left}px`;
  menu.style.setProperty('--menu-arrow-left', `${Math.max(10, Math.min(anchorCenter - left - 4, menuWidth - 18))}px`);
  updateRowMenuLanguage();
  menu.hidden = false;
});

document.querySelector('#rowMenu').addEventListener('click', (event) => {
  const action = event.target.closest('[data-row-action]')?.dataset.rowAction;
  if (action !== 'label' || !menuProduct) return;

  const product = menuProduct;
  closeRowMenu();
  const counter = document.querySelector('#printedCount');
  const currentCount = Number(counter.textContent.replace(/[٠-٩]/g, (digit) => {
    return String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit));
  }));
  counter.textContent = currentCount + 1;

  toast(isArabic ? 'تم إنشاء ملصق الباركود للمنتج.' : `Barcode label generated for ${product.name}.`);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('#rowMenu') && !event.target.closest('.more-button')) {
    closeRowMenu();
  }
});

document.querySelector('#notificationButton').addEventListener('click', (event) => {
  event.stopPropagation();
  const popover = document.querySelector('#notificationPopover');

  if (popover.hidden) {
    openNotificationPopover();
  } else {
    popover.hidden = true;
  }
});

document.querySelector('[data-close-notifications]').addEventListener('click', () => {
  document.querySelector('#notificationPopover').hidden = true;
});

document.querySelector('#notificationPopover').addEventListener('click', (event) => {
  const item = event.target.closest('.notification-item');
  if (!item) return;

  item.remove();
  toast(translations[isArabic ? 'ar' : 'en'].markedRead);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('#notificationPopover') && !event.target.closest('#notificationButton')) {
    document.querySelector('#notificationPopover').hidden = true;
  }
});

document.querySelector('#productDialog').addEventListener('click', (event) => {
  if (event.target === event.currentTarget || event.target.closest('[data-close-dialog]')) {
    event.currentTarget.close();
  }
});

document.querySelector('#dialogSelect').addEventListener('click', () => {
  if (!dialogProduct) return;

  setProductSelected(dialogProduct, !dialogProduct.selected);
  render();
  document.querySelector('#productDialog').close();
  toast(translations[isArabic ? 'ar' : 'en'][dialogProduct.selected ? 'selectedToast' : 'deselectedToast']);
});

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage('en');
