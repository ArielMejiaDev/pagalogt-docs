---
title: Payments on production
description: 'PagaloGT helper for PagaloGT payment gateway.'
position: 4
category: 'Using the package'
---

## Add credentials

Add your PagaloGT credentials on the app `.env` file:

```env
PAGALO_IDEN_EMPRESA='<LivePagaloIdenEmpresa>'
PAGALO_TOKEN='<LivePagaloToken>'
PAGALO_KEY_PUBLIC='<LivePagaloKeyPublic>'
PAGALO_KEY_SECRET='<LivePagaloKeySecret>'
PAGALO_ENVIRONMENT='live'
```

You can get the credentials [Here](https://app.pagalocard.com/developerint), you need to create an account and follow some steps with PagaloGT.

#### Make a production payment

<alert type="danger">

<strong>Requests without `withTestCredentials()` are going to be a real transaction.</strong>

</alert>

```php
use ArielMejiaDev\PagaloGT\PagaloGT;

//...

$payment = (new PagaloGT())->add(1, 'Test transaction', 100.00)
    ->setClient('John', 'Doe', 'john@doe.com')
    ->setCard('JOHN JOSEPH DOE DULLIE', 'XXXX XXXX XXXX XXXX', 12, 2022, 742)
    ->pay();
```

#### The `setCard()` method
---

It adds a real customer card for real transactions, it requires:

- cc name
- cc number
- cc month
- cc year
- cvc code
