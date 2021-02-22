---
title: Cybersource transactions
description: 'Laravel helper para hacer pagos con PagaloGT.'
position: 5
category: 'Using the package'
---

The package support cybersource transactions just add this variable on `.env` file:

```env
PAGALO_USE_CYBERSOURCE=true
```

Also, it is necessary to add a `script` to generate the `deviceFingerPrint` on your frontend view with the checkout form:

<p class="font-semibold tracking-tighter">Example using blade:</p>

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
This `script` is going to generate a hidden `input` with the `deviceFingerPrint` value in your checkout form, in order to do this you must include this `script` in the same view file as the checkout form.