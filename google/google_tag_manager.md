# Google Tag Manager

Google Tag Manager is a tag management system that allows you to quickly and easily update tracking codes and related code fragments collectively known as "tags" on your website or mobile app.


## Tags

Tags are scripts.

You can use Tag Manager's web based user interface to set up tracking tags, establish triggers that cause your tag to fire when certain events occur, and create variables that can be used to simplify and automate your tag configurations.

<https://support.google.com/tagmanager/answer/6102821>


## Triggers

Triggers are events.

In Google Tag Manager, tags fire based on events, such as when a form is submitted or when a video is played. Triggers are used to listen for these events, and they govern when a tag is fired or blocked.

<https://support.google.com/tagmanager/topic/7679384>


## Variables

To a computer programmer, a variable is a symbol in code that can be used to represent a value that will change. A Tag Manager variable performs that same function.

<https://support.google.com/tagmanager/topic/7182737>


Page View fires when the GTM container code is loaded on the page. It fires even before you can see the page content. This trigger is the most basic trigger which is used often to fire a Pageview Tag. This is our “as soon as possible” trigger.

DOM Ready fires when the Document Object Model is ready, which means the browser is finished putting all the HTML elements in their appropriate positions. We use this if we need something to be present on the page before we fire a tag.

Window Loaded is the last chronologically and fires when the browser has finished rendering and displaying everything on the page.


Roll back container version

1. Select the Default Workspace.
2. Click Versions in the top menu.
3. Find the version you want to roll back to and click the Actions menu.
4. Select Publish from the Actions menu.



### HS Variables

- {{Order Total Value}} = Total amount
- {{Order Id}}
- {{Order Voucher}}
- {{Currency Code}}
- {{customerEmail}}


- {{productName}} +
- {{productSku}}
- {{productDetail}}
- {{categoryDetail}}


```
<script type="text/javascript">
	console.table(dataLayer);
</script>
```

