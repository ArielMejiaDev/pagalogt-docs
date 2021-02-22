---
title: Setup
description: 'PagaloGT helper for PagaloGT payment gateway.'
position: 2
category: Introduction
---

## Installation

Add `laravel pagalogt` using composer:

<code-group>
  <code-block label="composer" active>

  ```bash[terminal/cmd]
  composer require arielmejiadev/pagalogt
  ```

  </code-block>
</code-group>

## Publish config file

In terminal execute the next command:

```php[terminal/cmd]
php artisan vendor:publish --tag=pagalogt-config
```

With this you are done with the setup.