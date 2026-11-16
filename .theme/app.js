(function () {
  'use strict';

  // --- SVG Icons ---
  const ICONS = {
    folder: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>`,
    folderOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>`,
    file: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
    fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    fileCode: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 9.5 8 12l2 2.5"/><path d="m14 9.5 2 2.5-2 2.5"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
    fileVideo: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 15 5-3-5-3v6Z"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
    fileAudio: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="6" cy="18" r="4"/><path d="M10 18v-7a1 1 0 0 1 1-1h1"/></svg>`,
    fileImage: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="10" cy="12" r="2"/><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"/></svg>`,
    fileArchive: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12h4"/><path d="M10 16h4"/><path d="M10 8h4"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    x: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    sun: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    grid: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
    list: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>`,
    chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
    arrowDown: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    arrowUpDown: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`,
    home: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    cornerUpLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>`,
    terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,
    fileTextIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    searchX: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/></svg>`
  };

  // Extension to File Type Categorization
  const EXTENSIONS = {
    video: ['mp4', 'mkv', 'avi', 'mov', 'webm', 'flv', 'wmv', 'm4v'],
    audio: ['mp3', 'flac', 'wav', 'aac', 'ogg', 'm4a', 'wma', 'opus'],
    image: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico', 'bmp', 'tiff', 'avif'],
    archive: ['zip', 'tar', 'gz', 'bz2', 'xz', '7z', 'rar', 'iso', 'tgz'],
    code: ['js', 'ts', 'jsx', 'tsx', 'html', 'css', 'json', 'py', 'rs', 'go', 'c', 'cpp', 'h', 'cs', 'java', 'php', 'rb', 'sh', 'bash', 'yml', 'yaml', 'toml', 'sql', 'xml'],
    document: ['pdf', 'doc', 'docx', 'odt', 'rtf', 'txt', 'md', 'markdown', 'epub'],
    spreadsheet: ['xls', 'xlsx', 'csv', 'ods', 'tsv']
  };

  function getFileType(fileName, isDir) {
    if (isDir) return { type: 'folder', icon: ICONS.folder, iconClass: 'icon-folder' };
    const ext = fileName.split('.').pop().toLowerCase();
    for (const [type, exts] of Object.entries(EXTENSIONS)) {
      if (exts.includes(ext)) {
        if (type === 'video') return { type, icon: ICONS.fileVideo, iconClass: 'icon-video' };
        if (type === 'audio') return { type, icon: ICONS.fileAudio, iconClass: 'icon-audio' };
        if (type === 'image') return { type, icon: ICONS.fileImage, iconClass: 'icon-image' };
        if (type === 'archive') return { type, icon: ICONS.fileArchive, iconClass: 'icon-archive' };
        if (type === 'code') return { type, icon: ICONS.fileCode, iconClass: 'icon-code' };
        if (type === 'document' || type === 'spreadsheet') return { type, icon: ICONS.fileText, iconClass: 'icon-document' };
      }
    }
    return { type: 'file', icon: ICONS.file, iconClass: 'icon-file' };
  }

  // --- Helper Utilities ---
  function parseSizeToBytes(sizeStr) {
    if (!sizeStr || sizeStr.trim() === '-' || sizeStr.trim() === '') return -1;
    const clean = sizeStr.trim().toUpperCase();
    const match = clean.match(/^([\d.]+)\s*([KMGTPEZY]?)B?$/);
    if (!match) {
      const num = parseFloat(clean);
      return isNaN(num) ? 0 : num;
    }
    const val = parseFloat(match[1]);
    const unit = match[2];
    const multipliers = { '': 1, 'K': 1024, 'M': 1024 ** 2, 'G': 1024 ** 3, 'T': 1024 ** 4, 'P': 1024 ** 5 };
    return Math.round(val * (multipliers[unit] || 1));
  }

  function formatBytes(bytes) {
    if (bytes < 0) return '—';
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function parseDateToTimestamp(dateStr) {
    if (!dateStr || dateStr === '—') return 0;
    const ts = Date.parse(dateStr);
    if (!isNaN(ts)) return ts;
    const m = dateStr.match(/^(\d{2})-([a-zA-Z]{3})-(\d{4})\s+(\d{2}):(\d{2})(?::(\d{2}))?/);
    if (m) {
      const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
      const month = months[m[2].toLowerCase()];
      if (month !== undefined) {
        return new Date(Date.UTC(parseInt(m[3], 10), month, parseInt(m[1], 10), parseInt(m[4], 10), parseInt(m[5], 10), parseInt(m[6] || 0, 10))).getTime();
      }
    }
    return 0;
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const q = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!q) return escapeHtml(text);
    const regex = new RegExp(q, 'gi');
    let result = '';
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      result += escapeHtml(text.slice(lastIndex, match.index));
      result += `<mark class="search-highlight">${escapeHtml(match[0])}</mark>`;
      lastIndex = regex.lastIndex;
    }
    result += escapeHtml(text.slice(lastIndex));
    return result;
  }

  // --- Parser for Nginx HTML Output ---
  function parseNginxAutoindex() {
    const rawContainer = document.getElementById('raw-directory-content');
    let pre = rawContainer ? rawContainer.querySelector('pre') : document.querySelector('pre');

    const items = [];
    let parentDir = null;

    if (!pre) {
      return { items: [], parentDir: null };
    }

    // Check if the pre content is JSON
    const trimmedPre = pre.textContent.trim();
    if (trimmedPre.startsWith('[') && trimmedPre.endsWith(']')) {
      try {
        const jsonData = JSON.parse(trimmedPre);
        jsonData.forEach(entry => {
          const isDir = entry.type === 'directory';
          const href = isDir ? `${entry.name}/` : entry.name;
          const fileInfo = getFileType(entry.name, isDir);
          const bytes = isDir ? -1 : (entry.size || 0);
          items.push({
            name: entry.name,
            href: href,
            isDir: isDir,
            date: entry.mtime || '—',
            timestamp: parseDateToTimestamp(entry.mtime || ''),
            size: isDir ? '—' : formatBytes(bytes),
            bytes: bytes,
            type: fileInfo.type,
            icon: fileInfo.icon,
            iconClass: fileInfo.iconClass,
            fullUrl: new URL(href, window.location.href).href
          });
        });
        return { items, parentDir: window.location.pathname !== '/' ? '../' : null };
      } catch (e) {
        // Fall back to HTML parsing
      }
    }

    const links = pre.querySelectorAll('a');
    const metaRegex = /^([\d]{2}-[a-zA-Z]{3}-[\d]{4}\s+[\d]{2}:[\d]{2}(?::[\d]{2})?(?:\s+[A-Z]{3,4})?|[\d]{4}-[\d]{2}-[\d]{2}\s+[\d]{2}:[\d]{2}(?::[\d]{2})?)\s+(\S+)$/;

    links.forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;

      // Detect parent directory link
      if (href === '../' || href === '..' || href.endsWith('/../')) {
        parentDir = href;
        return;
      }

      // Recover full untruncated filename from href
      const rawName = href.replace(/\/$/, '');
      let displayName = '';
      try {
        displayName = decodeURIComponent(rawName);
      } catch (e) {
        displayName = rawName;
      }

      const isDir = href.endsWith('/');
      let dateStr = '—';
      let sizeStr = '—';
      let bytes = isDir ? -1 : 0;

      let next = a.nextSibling;
      if (next && next.nodeType === Node.TEXT_NODE) {
        const text = next.textContent.trim();
        const m = text.match(metaRegex);
        if (m) {
          dateStr = m[1].trim();
          sizeStr = m[2].trim();
          bytes = parseSizeToBytes(sizeStr);
        } else {
          // Fallback multi-space split
          const parts = text.split(/\s{2,}/).map(s => s.trim()).filter(Boolean);
          if (parts.length >= 2) {
            dateStr = parts[0];
            sizeStr = parts[1];
            bytes = parseSizeToBytes(sizeStr);
          } else if (parts.length === 1) {
            dateStr = parts[0];
          }
        }
      }

      const fileInfo = getFileType(displayName, isDir);

      items.push({
        name: displayName,
        href: href,
        isDir: isDir,
        date: dateStr,
        timestamp: parseDateToTimestamp(dateStr),
        size: sizeStr,
        bytes: bytes,
        type: fileInfo.type,
        icon: fileInfo.icon,
        iconClass: fileInfo.iconClass,
        fullUrl: new URL(href, window.location.href).href
      });
    });

    return { items, parentDir };
  }

  // --- Application State ---
  const state = {
    allItems: [],
    filteredItems: [],
    parentDir: null,
    searchQuery: '',
    sortField: 'name', // 'name' | 'date' | 'size'
    sortOrder: 'asc',  // 'asc' | 'desc'
    foldersFirst: true,
    viewMode: localStorage.getItem('nginx_view_mode') || 'table', // 'table' | 'grid'
    theme: localStorage.getItem('theme') || 'system'
  };

  // --- Toast Manager ---
  const Toast = {
    container: null,
    init() {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    },
    show(title, description, icon = ICONS.check) {
      if (!this.container) this.init();
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-content">
          <div class="toast-title">${escapeHtml(title)}</div>
          ${description ? `<div class="toast-description">${escapeHtml(description)}</div>` : ''}
        </div>
      `;
      this.container.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 200);
      }, 3500);
    }
  };

  // --- Copy All Links Feature for Download Managers ---
  function getFilteredFiles() {
    return state.filteredItems.filter(item => !item.isDir);
  }

  function copyLinksToClipboard(format = 'plain') {
    const files = getFilteredFiles();
    if (files.length === 0) {
      Toast.show('No downloadable files', 'There are no files in the current view to copy.', ICONS.searchX);
      return;
    }

    let textToCopy = '';
    let formatLabel = 'Plain URLs';

    if (format === 'plain') {
      textToCopy = files.map(f => f.fullUrl).join('\n');
      formatLabel = 'Plain URLs (IDM, JDownloader, Aria2)';
    } else if (format === 'aria2') {
      textToCopy = `aria2c -c -j4 ${files.map(f => `"${f.fullUrl}"`).join(' ')}`;
      formatLabel = 'Aria2 batch command';
    } else if (format === 'wget') {
      textToCopy = `wget -c ${files.map(f => `"${f.fullUrl}"`).join(' ')}`;
      formatLabel = 'Wget command';
    } else if (format === 'curl') {
      textToCopy = `curl -Z ${files.map(f => `-O "${f.fullUrl}"`).join(' ')}`;
      formatLabel = 'cURL command';
    } else if (format === 'file') {
      downloadLinksFile(files);
      return;
    }

    const isFiltered = state.searchQuery.trim().length > 0;
    const filterNote = isFiltered ? ` (Filtered from ${state.allItems.filter(i => !i.isDir).length} files)` : '';

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        animateCopyButtonSuccess();
        Toast.show(`Copied ${files.length} file link${files.length > 1 ? 's' : ''}`, `${formatLabel}${filterNote}`);
      }).catch(err => {
        fallbackCopy(textToCopy, files.length, formatLabel + filterNote);
      });
    } else {
      fallbackCopy(textToCopy, files.length, formatLabel + filterNote);
    }
  }

  function fallbackCopy(text, count, description) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      animateCopyButtonSuccess();
      Toast.show(`Copied ${count} link${count > 1 ? 's' : ''}`, description);
    } catch (e) {
      Toast.show('Copy failed', 'Please allow clipboard permissions in your browser.', ICONS.x);
    }
    document.body.removeChild(textarea);
  }

  function downloadLinksFile(files) {
    const content = files.map(f => f.fullUrl).join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `download-links.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    Toast.show('Exported links.txt', `Saved ${files.length} links for import into IDM / Aria2`);
  }

  function animateCopyButtonSuccess() {
    const mainBtn = document.getElementById('copy-all-btn');
    if (!mainBtn) return;
    const originalContent = mainBtn.innerHTML;
    mainBtn.innerHTML = `${ICONS.check} <span>Copied!</span>`;
    mainBtn.style.backgroundColor = '#10b981';
    mainBtn.style.color = '#ffffff';
    setTimeout(() => {
      mainBtn.innerHTML = originalContent;
      mainBtn.style.backgroundColor = '';
      mainBtn.style.color = '';
    }, 2000);
  }

  // --- Sorting & Filtering ---
  function sortItems(items) {
    return items.slice().sort((a, b) => {
      if (state.foldersFirst) {
        if (a.isDir && !b.isDir) return -1;
        if (!a.isDir && b.isDir) return 1;
      }

      let comparison = 0;
      if (state.sortField === 'name') {
        comparison = a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
      } else if (state.sortField === 'date') {
        comparison = (a.timestamp || 0) - (b.timestamp || 0);
      } else if (state.sortField === 'size') {
        comparison = a.bytes - b.bytes;
      }

      return state.sortOrder === 'asc' ? comparison : -comparison;
    });
  }

  function filterAndSort() {
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) {
      state.filteredItems = sortItems(state.allItems);
    } else {
      const filtered = state.allItems.filter(item => {
        return item.name.toLowerCase().includes(q);
      });
      state.filteredItems = sortItems(filtered);
    }
    renderContent();
    renderStats();
  }

  // --- Breadcrumb Generator ---
  function renderBreadcrumbs() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);

    let html = `
      <div class="breadcrumb-item">
        <a href="/" class="breadcrumb-link" title="Root Directory">${ICONS.home}</a>
      </div>
    `;

    let accumulatedPath = '';
    segments.forEach((seg, index) => {
      accumulatedPath += `/${seg}`;
      const isLast = index === segments.length - 1;
      let decodedSeg = seg;
      try { decodedSeg = decodeURIComponent(seg); } catch (e) {}

      html += `
        <span class="breadcrumb-separator">${ICONS.chevronRight}</span>
        <div class="breadcrumb-item">
          <a href="${accumulatedPath}/" class="breadcrumb-link ${isLast ? 'active' : ''}">${escapeHtml(decodedSeg)}</a>
        </div>
      `;
    });

    return html;
  }

  // --- Statistics Calculation ---
  function calculateStats() {
    let foldersCount = 0;
    let filesCount = 0;
    let totalBytes = 0;

    state.filteredItems.forEach(item => {
      if (item.isDir) {
        foldersCount++;
      } else {
        filesCount++;
        if (item.bytes > 0) totalBytes += item.bytes;
      }
    });

    return { foldersCount, filesCount, totalBytes, total: state.filteredItems.length };
  }

  function renderStats() {
    const statsEl = document.getElementById('stats-bar');
    if (!statsEl) return;

    const stats = calculateStats();
    const isSearching = state.searchQuery.trim().length > 0;

    let searchBadge = '';
    if (isSearching) {
      searchBadge = `<span class="badge badge-primary">Matched: ${stats.total} of ${state.allItems.length}</span>`;
    }

    statsEl.innerHTML = `
      ${searchBadge}
      <span class="badge">${stats.foldersCount} ${stats.foldersCount === 1 ? 'folder' : 'folders'}</span>
      <span class="badge">${stats.filesCount} ${stats.filesCount === 1 ? 'file' : 'files'}</span>
      <span class="badge">Total size: ${formatBytes(stats.totalBytes)}</span>
    `;
  }

  // --- Main Renderers ---
  function renderContent() {
    const container = document.getElementById('content-mount');
    if (!container) return;

    if (state.filteredItems.length === 0 && !state.parentDir) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">${ICONS.searchX}</div>
          <div class="empty-title">No files found</div>
          <div class="empty-desc">No files or directories matched "<strong>${escapeHtml(state.searchQuery)}</strong>".</div>
          <button class="btn btn-secondary btn-sm" id="empty-clear-btn">Clear search</button>
        </div>
      `;
      const clearBtn = document.getElementById('empty-clear-btn');
      if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
      }
      return;
    }

    if (state.viewMode === 'grid') {
      renderGridView(container);
    } else {
      renderTableView(container);
    }
  }

  function renderTableView(container) {
    let parentRowHtml = '';
    if (state.parentDir) {
      parentRowHtml = `
        <tr class="parent-dir-row">
          <td colspan="4">
            <div class="file-row-main">
              <span class="file-icon" style="color: hsl(var(--primary));">${ICONS.cornerUpLeft}</span>
              <a href="${state.parentDir}" class="file-link" style="font-weight: 600;">.. (Parent Directory)</a>
            </div>
          </td>
        </tr>
      `;
    }

    let rowsHtml = '';
    state.filteredItems.forEach(item => {
      const nameHighlighted = highlightMatch(item.name, state.searchQuery);
      const isFile = !item.isDir;
      const displaySize = item.isDir ? '—' : (item.bytes > 0 ? formatBytes(item.bytes) : escapeHtml(item.size));

      rowsHtml += `
        <tr>
          <td>
            <div class="file-row-main">
              <span class="file-icon ${item.iconClass}">${item.icon}</span>
              <div class="file-name-meta">
                <a href="${item.href}" class="file-link" title="${escapeHtml(item.name)}">${nameHighlighted}${item.isDir ? '/' : ''}</a>
                <div class="file-mobile-meta">${escapeHtml(item.date)} &bull; ${displaySize}</div>
              </div>
            </div>
          </td>
          <td class="file-date desktop-only">${escapeHtml(item.date)}</td>
          <td class="file-size desktop-only">${displaySize}</td>
          <td>
            <div class="file-actions">
              ${isFile ? `
                <a href="${item.href}" download="${escapeHtml(item.name)}" class="btn btn-ghost btn-icon btn-sm" title="Direct Download">
                  ${ICONS.download}
                </a>
                <button class="btn btn-ghost btn-icon btn-sm single-copy-btn" data-url="${escapeHtml(item.fullUrl)}" title="Copy Link">
                  ${ICONS.copy}
                </button>
              ` : `
                <a href="${item.href}" class="btn btn-ghost btn-icon btn-sm" title="Open Directory">
                  ${ICONS.chevronRight}
                </a>
              `}
            </div>
          </td>
        </tr>
      `;
    });

    const getSortIndicator = (field) => {
      if (state.sortField !== field) return `<span class="sort-indicator">${ICONS.arrowUpDown}</span>`;
      return `<span class="sort-indicator">${state.sortOrder === 'asc' ? ICONS.arrowUp : ICONS.arrowDown}</span>`;
    };

    container.innerHTML = `
      <div class="table-responsive">
        <table class="file-table">
          <thead>
            <tr>
              <th class="sortable ${state.sortField === 'name' ? 'active' : ''}" data-sort="name">
                Name ${getSortIndicator('name')}
              </th>
              <th class="sortable ${state.sortField === 'date' ? 'active' : ''} desktop-only" data-sort="date" style="width: 180px;">
                Date Modified ${getSortIndicator('date')}
              </th>
              <th class="sortable ${state.sortField === 'size' ? 'active' : ''} desktop-only" data-sort="size" style="width: 130px;">
                Size ${getSortIndicator('size')}
              </th>
              <th style="width: 90px; text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${parentRowHtml}
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;

    // Attach sort event listeners
    container.querySelectorAll('th.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const field = th.getAttribute('data-sort');
        if (state.sortField === field) {
          state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          state.sortField = field;
          state.sortOrder = field === 'size' || field === 'date' ? 'desc' : 'asc';
        }
        filterAndSort();
      });
    });

    // Attach single copy buttons
    container.querySelectorAll('.single-copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = btn.getAttribute('data-url');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            Toast.show('Link copied', 'Copied direct link to clipboard');
          }).catch(() => {
            fallbackCopy(url, 1, 'Direct Link');
          });
        } else {
          fallbackCopy(url, 1, 'Direct Link');
        }
      });
    });
  }

  function renderGridView(container) {
    let cardsHtml = '';

    if (state.parentDir) {
      cardsHtml += `
        <a href="${state.parentDir}" class="grid-card">
          <div class="grid-card-top">
            <div class="grid-card-icon" style="color: hsl(var(--primary));">${ICONS.cornerUpLeft}</div>
          </div>
          <div class="grid-card-name">.. (Parent Directory)</div>
          <div class="grid-card-footer">
            <span>Folder</span>
            <span>—</span>
          </div>
        </a>
      `;
    }

    state.filteredItems.forEach(item => {
      const nameHighlighted = highlightMatch(item.name, state.searchQuery);
      const isFile = !item.isDir;
      const sizeFormatted = item.isDir ? 'Folder' : (item.bytes > 0 ? formatBytes(item.bytes) : escapeHtml(item.size));

      cardsHtml += `
        <div class="grid-card">
          <div class="grid-card-top">
            <div class="grid-card-icon ${item.iconClass}">${item.icon}</div>
            <div class="file-actions">
              ${isFile ? `
                <a href="${item.href}" download="${escapeHtml(item.name)}" class="btn btn-ghost btn-icon btn-sm" title="Download">
                  ${ICONS.download}
                </a>
                <button class="btn btn-ghost btn-icon btn-sm single-copy-btn" data-url="${escapeHtml(item.fullUrl)}" title="Copy Link">
                  ${ICONS.copy}
                </button>
              ` : ''}
            </div>
          </div>
          <a href="${item.href}" class="grid-card-name" title="${escapeHtml(item.name)}">
            ${nameHighlighted}${item.isDir ? '/' : ''}
          </a>
          <div class="grid-card-footer">
            <span>${escapeHtml(item.date)}</span>
            <span class="badge" style="padding: 0.1rem 0.4rem; font-size: 0.7rem;">${sizeFormatted}</span>
          </div>
        </div>
      `;
    });

    container.innerHTML = `<div class="file-grid">${cardsHtml}</div>`;

    container.querySelectorAll('.single-copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = btn.getAttribute('data-url');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            Toast.show('Link copied', 'Copied direct link to clipboard');
          }).catch(() => {
            fallbackCopy(url, 1, 'Direct Link');
          });
        } else {
          fallbackCopy(url, 1, 'Direct Link');
        }
      });
    });
  }

  function clearSearch() {
    state.searchQuery = '';
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear-btn');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    if (clearBtn) clearBtn.classList.remove('visible');
    filterAndSort();
  }

  // --- Theme Toggle ---
  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    updateThemeIcon();
  }

  function updateThemeIcon() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    const isDark = document.documentElement.classList.contains('dark');
    btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // --- Layout Template Assembly ---
  function mountUI() {
    const app = document.getElementById('app');
    if (!app) return;

    // Detect OS for keyboard shortcut hint
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const shortcutKey = isMac ? '⌘K' : 'Ctrl+K';

    app.innerHTML = `
      <!-- Top Sticky Header -->
      <header class="site-header">
        <div class="container header-content">
          <div class="brand-section">
            <div class="brand-icon" title="Nginx File Index">
              ${ICONS.folderOpen}
            </div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              ${renderBreadcrumbs()}
            </nav>
          </div>

          <div class="header-actions">
            <!-- View Mode Toggle -->
            <button class="btn btn-outline btn-icon" id="view-mode-btn" title="Toggle view mode (Table / Grid)">
              ${state.viewMode === 'grid' ? ICONS.list : ICONS.grid}
            </button>

            <!-- Theme Toggle -->
            <button class="btn btn-outline btn-icon" id="theme-toggle-btn" title="Toggle dark/light mode">
              ${ICONS.moon}
            </button>
          </div>
        </div>
      </header>

      <!-- Main Body -->
      <main class="container" style="flex: 1;">
        <!-- Sub-header Toolbar -->
        <section class="toolbar-section">
          <div class="toolbar-grid">
            <!-- Search Bar (Shadcn pattern) -->
            <div class="search-wrapper">
              <span class="search-icon">${ICONS.search}</span>
              <input
                type="text"
                id="search-input"
                class="search-input"
                placeholder="Search files and folders..."
                autocomplete="off"
                spellcheck="false"
              />
              <div class="search-adornments">
                <button id="search-clear-btn" class="search-clear-btn" title="Clear search">
                  ${ICONS.x}
                </button>
                <kbd>${shortcutKey}</kbd>
              </div>
            </div>

            <!-- Download Manager Batch Copy Split Button -->
            <div class="download-action-wrapper">
              <div class="split-button" id="copy-split-dropdown">
                <button class="btn btn-primary" id="copy-all-btn" title="Copy all visible file links for IDM / JDownloader / Aria2">
                  ${ICONS.copy}
                  <span>Copy All Links</span>
                </button>
                <button class="btn btn-primary split-button-toggle" id="copy-dropdown-toggle" title="More download formats" aria-haspopup="true" aria-expanded="false">
                  ${ICONS.chevronDown}
                </button>

                <!-- Dropdown Popover -->
                <div class="dropdown-menu" id="download-dropdown-menu">
                  <div class="dropdown-header">Download Managers</div>
                  <button class="dropdown-item" data-format="plain">
                    <span class="dropdown-item-content">${ICONS.copy} Plain URLs (IDM, JDownloader)</span>
                  </button>
                  <button class="dropdown-item" data-format="aria2">
                    <span class="dropdown-item-content">${ICONS.terminal} Aria2 Command</span>
                  </button>
                  <button class="dropdown-item" data-format="wget">
                    <span class="dropdown-item-content">${ICONS.terminal} Wget Command</span>
                  </button>
                  <button class="dropdown-item" data-format="curl">
                    <span class="dropdown-item-content">${ICONS.terminal} cURL Command</span>
                  </button>
                  <div class="dropdown-divider"></div>
                  <button class="dropdown-item" data-format="file">
                    <span class="dropdown-item-content">${ICONS.fileTextIcon} Save as download-links.txt</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Metadata stats bar -->
          <div class="stats-bar" id="stats-bar" style="margin-top: 0.875rem;"></div>
        </section>

        <!-- Main Card Container -->
        <div class="content-card" id="content-mount"></div>
      </main>

      <!-- Clean Minimal Footer -->
      <footer class="site-footer">
        <div class="container footer-content">
          <span>Powered by Nginx &bull; Shadcn UI Autoindex Theme</span>
          <span>Press <kbd>/</kbd> or <kbd>${shortcutKey}</kbd> to search &bull; <kbd>Esc</kbd> to clear</span>
        </div>
      </footer>
    `;

    updateThemeIcon();
    bindEvents();
    filterAndSort();
  }

  function bindEvents() {
    const searchInput = document.getElementById('search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const viewModeBtn = document.getElementById('view-mode-btn');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const copyAllBtn = document.getElementById('copy-all-btn');
    const copyDropdownToggle = document.getElementById('copy-dropdown-toggle');
    const downloadDropdownMenu = document.getElementById('download-dropdown-menu');

    // Search Input event
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery.length > 0) {
          searchClearBtn.classList.add('visible');
        } else {
          searchClearBtn.classList.remove('visible');
        }
        filterAndSort();
      });
    }

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', clearSearch);
    }

    // View Mode Toggle
    if (viewModeBtn) {
      viewModeBtn.addEventListener('click', () => {
        state.viewMode = state.viewMode === 'table' ? 'grid' : 'table';
        localStorage.setItem('nginx_view_mode', state.viewMode);
        viewModeBtn.innerHTML = state.viewMode === 'grid' ? ICONS.list : ICONS.grid;
        renderContent();
      });
    }

    // Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Copy All Links Button (default: Plain URLs)
    if (copyAllBtn) {
      copyAllBtn.addEventListener('click', () => copyLinksToClipboard('plain'));
    }

    // Dropdown toggle
    if (copyDropdownToggle && downloadDropdownMenu) {
      copyDropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = downloadDropdownMenu.classList.toggle('show');
        copyDropdownToggle.classList.toggle('active', isOpen);
        copyDropdownToggle.setAttribute('aria-expanded', String(isOpen));
      });

      downloadDropdownMenu.querySelectorAll('.dropdown-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const format = btn.getAttribute('data-format');
          copyLinksToClipboard(format);
          downloadDropdownMenu.classList.remove('show');
          copyDropdownToggle.classList.remove('active');
          copyDropdownToggle.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', () => {
        downloadDropdownMenu.classList.remove('show');
        copyDropdownToggle.classList.remove('active');
        copyDropdownToggle.setAttribute('aria-expanded', 'false');
      });
    }

    // Global Keyboard Shortcuts (Ctrl+K, Cmd+K, /, Esc)
    window.addEventListener('keydown', (e) => {
      // Focus search
      if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && document.activeElement !== searchInput)) {
        e.preventDefault();
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }

      // Clear search or close popups on Escape
      if (e.key === 'Escape') {
        if (downloadDropdownMenu && downloadDropdownMenu.classList.contains('show')) {
          downloadDropdownMenu.classList.remove('show');
          if (copyDropdownToggle) {
            copyDropdownToggle.classList.remove('active');
            copyDropdownToggle.setAttribute('aria-expanded', 'false');
          }
        } else if (state.searchQuery) {
          clearSearch();
        } else if (document.activeElement === searchInput) {
          searchInput.blur();
        }
      }
    });
  }

  // --- Bootstrapping ---
  function init() {
    const parsed = parseNginxAutoindex();
    state.allItems = parsed.items;
    state.parentDir = parsed.parentDir;

    mountUI();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for testing if needed
  window.__NGINX_AUTOINDEX_THEME__ = {
    state,
    copyLinksToClipboard
  };
})();
