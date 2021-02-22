---
title: Pagos en producción
description: 'Laravel helper para hacer pagos con PagaloGT.'
position: 4
category: 'Uso del paquete'
---

## Agrega tus credenciales de PagaloGT

Agrega tus credenciales de PagaloGT en el archivo `.env`:

```env
PAGALO_IDEN_EMPRESA='<LivePagaloIdenEmpresa>'
PAGALO_TOKEN='<LivePagaloToken>'
PAGALO_KEY_PUBLIC='<LivePagaloKeyPublic>'
PAGALO_KEY_SECRET='<LivePagaloKeySecret>'
PAGALO_ENVIRONMENT='live'
```

En este link puedes obtener tus credenciales [aquí](https://app.pagalocard.com/developerint), primero registrate y segue el proceso de PagaloGT para obtener tus credenciales.

#### Hacer un pago en producción

<alert type="danger">

<strong>Las peticiones sin el método `withTestCredentials()` seran procesadas de forma real.</strong>

</alert>

```php
use ArielMejiaDev\PagaloGT\PagaloGT;

//...

$payment = (new PagaloGT())->add(1, 'Test transaction', 100.00)
    ->setClient('John', 'Doe', 'john@doe.com')
    ->setCard('JOHN JOSEPH DOE DULLIE', 'XXXX XXXX XXXX XXXX', 12, 2022, 742)
    ->pay();
```

#### El método `setCard()`
---

Agrega una tarjeta de un cliente real a la transacción, este método require:

- cc name
- cc number
- cc month
- cc year
- cvc code
