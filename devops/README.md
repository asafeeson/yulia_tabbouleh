
```yaml
storage: /etc/traefik/acme.json # chmod 600 this file on the host system
caServer: https://acme-staging-v02.api.letsencrypt.org/directory # IMPORTANT: comment out this line to get production ready certificates. After this, clear acme.json file.
email: foobar@example.invalid # IMPORTANT: change this to your email

```

## Перед началом
- **ВАЖНО!** Закомментируйте следующие строки в traefik.yaml:
    ``` 
    api:
      dashboard: true
      insecure: true
      debug: true
    ```
- Создайте сеть Docker:
    ```bash 
    # создаем сеть с название которое указано в настройках
    sudo docker network create traefik_network
    # проверяем наличие новой сети в списке
    sudo docker network list
    ```
<br/>
<br/>

## Security settings information / Информация о настройках безопасности

> First, use your brain 🧠, not AI, before applying any settings. <br/>
> Сначала включите 🧠 мозг, а не ИИ, и только потом применяйте. 

In the secHeaders section of the config/dynamic.yaml file, HTTP security headers are configured for Traefik. Here is an explanation of each item:

В разделе `secHeaders` файла `config/dynamic.yaml` задаются HTTP-заголовки безопасности для Traefik. Ниже приведено объяснение каждого параметра:

| Параметр                    | Описание (RU)                                                                                                                                         | Description (EN)                                                                                                                      |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| **browserXssFilter: true**  | Включает заголовок `X-XSS-Protection`, активирующий встроенную защиту браузера от некоторых XSS-атак. В современных браузерах влияние минимально, но иногда используется. | Enables the X-XSS-Protection header, which helps some browsers prevent certain types of cross-site scripting (XSS) attacks.           |
| **contentTypeNosniff: true**| Добавляет заголовок `X-Content-Type-Options: nosniff`. Запрещает браузеру "угадывать" тип контента, предотвращая атаки, связанные с подменой типов файлов. | Sets the X-Content-Type-Options: nosniff header. This prevents browsers from trying to guess the MIME type of a resource, reducing the risk of drive-by download attacks. |
| **frameDeny: true**         | Добавляет заголовок `X-Frame-Options: DENY`, запрещающий отображение сайта внутри `<iframe>`. Защищает от clickjacking-атак.                         | Adds the X-Frame-Options: DENY header, which blocks your site from being embedded in an iframe, protecting against clickjacking attacks. |
| **stsIncludeSubdomains: true** | Включает директиву `includeSubDomains` для заголовка HSTS, распространяя политику на все поддомены.                                               | Adds the includeSubDomains directive to the Strict-Transport-Security (HSTS) header, ensuring that HSTS is enforced for all subdomains. |
| **stsPreload: true**        | Добавляет директиву `preload` к HSTS, позволяя включить сайт в список принудительного HTTPS-перехода в браузерах.                                     | Adds the preload directive to the HSTS header, allowing your domain to be included in browser preload lists for automatic HTTPS enforcement. |
| **stsSeconds: 31536000**    | Устанавливает срок действия HSTS в секундах (1 год). Браузер будет обращаться к сайту только по HTTPS в течение этого времени.                        | Sets the max-age for HSTS to one year (31,536,000 seconds), telling browsers to only access your site via HTTPS for this period.       |
| **customFrameOptionsValue: "SAMEORIGIN"** | Устанавливает `X-Frame-Options: SAMEORIGIN` — разрешает отображение сайта в `<iframe>` только с того же домена. Может переопределять `frameDeny`. | Sets X-Frame-Options: SAMEORIGIN, which allows your site to be embedded in an iframe only from the same origin. (Note: This can override frameDeny if both are set.) |

### customResponseHeaders

| Параметр           | Описание (RU)                                                                                      | Description (EN)                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **server: ""**     | Удаляет заголовок `Server`, чтобы не раскрывать технические детали сервера.                        | Removes the Server header from responses. This helps conceal server software details, reducing information leakage. |
| **x-powered-by: ""** | Удаляет заголовок `X-Powered-By`, чтобы не указывать используемые технологии (например, PHP или Express). | Removes the X-Powered-By header, which can reveal backend technologies and increase the risk of targeted attacks. |

> Эти настройки повышают безопасность сайта, минимизируют утечки информации и предотвращают распространённые атаки через уязвимости браузеров и протоколов.  

> These options are designed to enhance your site’s security by mitigating common web vulnerabilities and reducing information exposure.

