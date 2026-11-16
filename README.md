# Nginx Autoindex Theme

A lightweight theme for Nginx directory listings. It replaces the default raw autoindex output with a cleaner UI that supports search, sorting, dark mode, and quick download-link copying.

> [!IMPORTANT]
> This project is designed for Nginx's built-in `autoindex` feature. It does not replace Nginx itself; it enhances the generated listing with custom HTML/CSS/JS assets.

## Features

- Clean, responsive directory browser
- Dark and light mode support
- Search and filtering for items in the listing
- Sort by name, date, or size
- Folder-first layout and file type icons
- Copy download links in multiple formats (`plain`, `curl`, `wget`, `aria2`)
- Works with standard Nginx `autoindex` output

## Project structure

```text
.
├── nginx.conf
├── .theme/
│   ├── app.js
│   ├── style.css
│   ├── header.html
│   └── footer.html
├── demo/
│   └── index.html
└── README.md
```

## Quick start

1. Copy the theme assets into your web root or a dedicated theme directory.
2. Point Nginx to serve `/.theme/` from your theme folder.
3. Enable Nginx `autoindex` and inject the header/footer template.
4. Reload Nginx.

### Example Nginx config

```nginx
server {
    listen 80;
    server_name localhost;

    root /var/www/html;
    charset utf-8;

    location ^~ /.theme/ {
        alias /var/www/theme/;
        autoindex off;
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    location / {
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;

        add_before_body /.theme/header.html;
        add_after_body /.theme/footer.html;
    }
}
```

> [!TIP]
> The provided [`nginx.conf`](./nginx.conf) is the reference configuration for this project. Adjust the `root` and `alias` paths to match your deployment environment.

## Demo

A simple browser preview is included in [`demo/index.html`](./demo/index.html).

## Customization

- Edit [`style.css`](./.theme/style.css) to adjust colors, spacing, and layout.
- Update [`app.js`](./.theme/app.js) to change sorting, filtering, or download helpers.
- Replace the injected HTML in [`header.html`](./.theme/header.html) and [`footer.html`](./.theme/footer.html) to add branding or extra metadata.
