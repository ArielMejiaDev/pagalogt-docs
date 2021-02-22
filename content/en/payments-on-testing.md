---
title: Payments on development and testing environments
description: 'PagaloGT helper for PagaloGT payment gateway.'
position: 3
category: 'Using the package'
---

## Add credentials

Add your PagaloGT credentials on the app `.env` file:

```env
PAGALO_TEST_IDEN_EMPRESA='<TestPagaloIdenEmpresa>'
PAGALO_TEST_TOKEN='<TestPagaloToken>'
PAGALO_TEST_KEY_PUBLIC='<TestPagaloKeyPublic>'
PAGALO_TEST_KEY_SECRET='<TestPagaloKeySecret>'
PAGALO_ENVIRONMENT='test'
```

You can get the credentials [Here](https://app.pagalocard.com/developerint), you need to create an account and follow some steps with PagaloGT.

#### Make a testing payment

The method `withTestCredential()` add fake data to use on testing payments, it also set internally the request to pagaloGT Sandbox that would be requested with `pay()` method.

```php
use ArielMejiaDev\PagaloGT\PagaloGT;

//...

$payment = (new PagaloGT())->add(1, 'Test transaction', 100.00)
    ->setClient('John', 'Doe', 'john@doe.com')
    ->withTestCredentials()
    ->pay();
```

#### The `add()` method
---

Accepts variety of params but 3 are required: 

- quantity.
- product description.
- price.

#### The `setClient()` method
---

It requires 3 params: 

- the customer name.
- the customer lastname.
- the customer email.

#### The `withTestCredentials()` method
---

It adds a defaul testing customer credentials and fake customer card, this method is necessary on development or testing environments.

#### The `withTestCard()` method
---

You can override the testing card data to change values on development/testing environments, it requires the same params as `setCard()` method:

- name
- cc number
- cc month
- cc year
- cvc code

You can override only one or all methods as it is testing data.

#### The `pay()` method

It executes the request to sandbox or live environment wich is set, if you are using `withTestCredentials()` method or not.

## Using the facade

Alternatively, you can make a payment using the facade:

```php
use PagaloGT;

// ...

$payment = PagaloGT::add(1, 'Test transaction', 100.00)
    ->setClient('John', 'Doe', 'john@doe.com')
    ->withTestCard('John Doe')
    ->withTestCredentials()
    ->pay();
```

## Debug response

After the `pay()` method you are able to use the `response()` method, it returns an `Http Response` object, so you can use different methods to get more data related to the response:

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

## Validate the payment process with method `isSuccessful()`

Of course, you would like to do something after a purchase, if it is is successful, the package adds a convinient method to validate it easily:

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

## Iterating on products

Lets suppose that we have a Shopping cart with a Laravel `Support collection` or `Eloquent collection` of items, you can do something like:

```php
$payment = new PagaloGT();

$shoppingCart->each(function($item) use($payment) {
    $payment->add($item->quantity, $item->description, $item->price)
});

$payment->setClient('John', 'Doe', 'john@doe.com')
    ->withTestCredentials()
    ->pay();
```

## Retry the payment

The package retry 3 times the payment by default, but you can change this behavior:

`setRetry()` require two params, the first is the quantity of retries and the second param is the time that it would wait to retry again in seconds:

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
