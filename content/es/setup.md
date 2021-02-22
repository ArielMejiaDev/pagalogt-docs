---
title: Setup
description: 'Laravel helper para hacer pagos con PagaloGT.'
position: 2
category: Introducción
---

## Installation

Agrega `laravel pagalogt` con composer:

<code-group>
  <code-block label="composer" active>

  ```bash[terminal/cmd]
  composer require arielmejiadev/pagalogt
  ```

  </code-block>
</code-group>

## Publica el archivo de configuración

<p class="text-medium font-semibold tracking-tight">Este paso no es obligatorio.<p>

Ejecuta el siguiente comando en la terminal:

```php[terminal/cmd]
php artisan vendor:publish --tag=pagalogt-config
```

Con esto el setup del paquete esta listo.