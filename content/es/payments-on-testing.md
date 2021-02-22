---
title: Pagos en ambientes de desarrollo y testing
description: 'Laravel helper para hacer pagos con PagaloGT.'
position: 3
category: 'Uso del paquete'
---

### Agrega tus credenciales de PagaloGT

Agrega tus credenciales de PagaloGT en el archivo `.env`:

```env
PAGALO_TEST_IDEN_EMPRESA='<TestPagaloIdenEmpresa>'
PAGALO_TEST_TOKEN='<TestPagaloToken>'
PAGALO_TEST_KEY_PUBLIC='<TestPagaloKeyPublic>'
PAGALO_TEST_KEY_SECRET='<TestPagaloKeySecret>'
PAGALO_ENVIRONMENT='test'
```

En este link puedes obtener tus credenciales [aquí](https://app.pagalocard.com/developerint), primero registrate y sigue el proceso de PagaloGT para obtener tus credenciales.

#### Hacer un pago de prueba

El método `withTestCredential()` agrega datos de prueba para usar en pagos de prueba.

```php
use ArielMejiaDev\PagaloGT\PagaloGT;

//...

$payment = (new PagaloGT())->add(1, 'Test transaction', 100.00)
    ->setClient('John', 'Doe', 'john@doe.com')
    ->withTestCredentials()
    ->pay();
```

#### El método `add()`
---

Acepta una variedad de parametros pero 3 son requeridos:

- quantity (cantidad).
- product description (descripción).
- price (precio).

#### El método `setClient()`
---

Requiere de 3 parametros:

- Nombre del cliente.
- Apellidos del cliente.
- Email del cliente.

#### El método `withTestCredentials()`
---

Agrega un cliente de pruebas por defecto con sus credenciales y un tarjeta de pruebas, este método es necesario en ambientes de desarrollo o testing para no realizar pagos reales.

#### El método `withTestCard()`
---

Puedes sobreescribir los datos de la tarjeta de un cliente de pruebas en ambientes de desarrollo/testing, el método requiere los mismo parametros que el método `setCard()`:

- name (nombre).
- cc number (número de la tarjeta).
- cc month (mes de la tarjeta).
- cc year (año de la tarjeta).
- cvc code (código cvc de la tarjeta).

Puedes sobreescribir uno o varios de los datos en las tarjetas de prueba.

#### The `pay()` method

Ejecuta la petición al servidor en ambiente sandbox o live si estas utilizando el método `withTestCredentials` o no.

## Usando el facade

Alternativamente, puedes usar el facade para realizar pagos:

```php
use PagaloGT;

// ...

$payment = PagaloGT::add(1, 'Test transaction', 100.00)
    ->setClient('John', 'Doe', 'john@doe.com')
    ->withTestCard('John Doe')
    ->withTestCredentials()
    ->pay();
```

## Inspecciona la respuesta

Despues de usar el método `pay()` puedes usar el método `response()`, este retorna un objeto `Http Response`, así que puedes encadenar diferentes métodos para obtener más información de la petición:

```php
$payment->response()->body() : string;
$payment->response()->json() : array|mixed;
$payment->response()->status() : int;
$payment->response()->ok() : bool;
$payment->response()->successful() : bool;
$payment->response()->failed() : bool;
$payment->response()->serverError() : bool;
$payment->response()->clientError() : bool;
$payment->response()->header($header) : string;
$payment->response()->headers() : array;
```

## Valida el pago exitoso con el método `isSuccessful()`

Por supuesto, es util poder validar si el pago fue realizado exitosamente, el paquete agrega un método conveniente para validar esto facilmente:

```php
$payment = PagaloGT::add(1, 'Test transaction', 100.00)
    ->setClient('John', 'Doe', 'john@doe.com')
    ->withTestCard('John Doe')
    ->withTestCredentials()
    ->pay();

if($payment->isSuccessful()) {
    auth()->user()->notify(new ThanksForPurchaseNotification());
    return redirect()->back()->with(['success' => 'Thanks for your purchase...']);
}

return redirect()->back()->with(['error' => 'Whoops! something fail, the payment fail...']);
```

## Iterar sobre productos

Vamos a suponer que tenemos un shopping cart, que nos retorna alguna `collection` de Laravel de tipo `Support` o de `Eloquent` podemos hacer algo como esto:

```php
$payment = new PagaloGT();

$shoppingCart->each(function($item) use($payment) {
    $payment->add($item->quantity, $item->description, $item->price)
});

$payment->setClient('John', 'Doe', 'john@doe.com')
    ->withTestCredentials()
    ->pay();
```

## Reintentar el pago

El paquete reintentara 3 veces realizar el pago, en el caso de que la primera ocasión no sea exitosa, sin embargo este compartamiento puede ser modificado:

El método `setRetry()` recibe dos parametros el primero es la cantidad de veces que intentara ejecutar la petición y el segundo es la cantidad de tiempo que espera entre cada intento en segundos. 

```php
$payment = new PagaloGT();

$shoppingCart->each(function($item) use($payment) {
    $payment->add($item->quantity, $item->description, $item->price)
});

$payment->setClient('John', 'Doe', 'john@doe.com')
    ->withTestCredentials()
    ->setRetry(5, 5)
    ->pay();
```

