FROM httpd:alpine

# Vue.js 빌드 파일 복사
COPY ./ /usr/local/apache2/htdocs/

# .htaccess 파일 복사
COPY .htaccess /usr/local/apache2/htdocs/.htaccess

CMD ["httpd-foreground"]