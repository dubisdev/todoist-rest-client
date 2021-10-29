# Quick Start

{% hint style="info" %}
**Good to know:** A quick start guide can be good to help folks get up and running with your API in a few steps. Some people prefer diving in with the basics rather than meticulously reading every page of documentation!
{% endhint %}

## Get an API key

The requests are authenticated using API keys. Any request that doesn't include an API key will return an error.

You can get a Todoist auth token from the [integrations page](https://todoist.com/app/settings/integrations) in your account.

## Install the Client

The best way to interact with our API is to use one of our official libraries:

{% tabs %}
{% tab title="NPM" %}
```bash
npm i todoist-rest-client
```
{% endtab %}

{% tab title="YARN" %}
```bash
yarn add todoist-rest-client
```
{% endtab %}

{% tab title="Skypack" %}
```javascript
import TDSClientfrom 'https://cdn.skypack.dev/todoist-rest-client';
```
{% endtab %}
{% endtabs %}

## Create your first task

Now you can import the client, initialize it with a todoist auth token and start handling your tasks.

```javascript
import TDSClient from "todoist-rest-client"


const myClient = Client("introduce_here_your_todoist_token")

```
