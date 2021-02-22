---
title: Transacciones con cybersource
description: 'Laravel helper para hacer pagos con PagaloGT.'
position: 5
category: 'Uso del paquete'
---

## Transacciones con Cybersource:

El paquete soporta el uso de transacciones con cybersource, solo necesitas agregar una variable a tu archivo `.env`:

```env
PAGALO_USE_CYBERSOURCE=true
```

También necesitaras un `script` para generar en tu frontend el `deviceFingerPrint` en tu formulario de checkout.

<p class="font-semibold tracking-tighter">Un ejemplo usando Blade:</p>

```php
<script>
    const merchantID  = 'visanetgt_jupiter'
    var environment = "{{  config('pagalogt.environment') }}"
    environment = environment.toLowerCase
    const checkout = document.querySelector('form')
    const newInputWrapper = document.createElement('div')
    newInputWrapper.innerHTML = '<input type="hidden" name="deviceFingerprintID" value="'+ cybs_dfprofiler(`${merchantID}`,`${environment}`) + '">'
    checkout.appendChild(newInputWrapper)
    function cybs_dfprofiler(merchantID,environment) {
        if (environment.toLowerCase() == 'live') {
            var org_id = 'k8vif92e'
        } else {
            var org_id = '1snn5n9w'
        }
        var sessionID = new Date().getTime()
        //One-Pixel Image Code
        var paragraphTM = document.createElement("p")
        str = "";
        str = "background:url(https://h.online-metrix.net/fp/clear.png?org_id=" + org_id + "&session_id=" + merchantID + sessionID + "&m=1)"
        paragraphTM.styleSheets = str
        document.body.appendChild(paragraphTM)
        var img = document.createElement("img")
        str = "https://h.online-metrix.net/fp/clear.png?org_id=" + org_id + "&session_id=" + merchantID + sessionID + "&m=2"
        img.src = str
        img.alt = ""
        document.body.appendChild(img)
        //Flash Code
        var objectTM = document.createElement("object")
        objectTM.data = "https://h.online-metrix.net/fp/fp.swf?org_id=" + org_id + "&session_id=" + merchantID + sessionID
        objectTM.type = "application/x-shockwave-flash"
        objectTM.width = "1"
        objectTM.height = "1"
        objectTM.id = "thm_fp"
        var param = document.createElement("param")
        param.name = "movie"
        param.value = "https://h.online-metrix.net/fp/fp.swf?org_id=" + org_id + "&session_id=" + merchantID + sessionID
        objectTM.appendChild(param)
        document.body.appendChild(objectTM)
        //JavaScript Code
        var tmscript = document.createElement("script")
        tmscript.src = "https://h.online-metrix.net/fp/tags.js?org_id=" + org_id + "&session_id=" + merchantID + sessionID
        tmscript.type = "text/javascript"
        document.body.appendChild(tmscript)
        return sessionID
    }
</script>
```

Este script agregará a tu formulario de checkout un input de tipo `hidden` con el valor del `deviceFingerprint`, debes tomar en cuenta que este `script` debe colocarse en la vista donde este el formulario de checkout.