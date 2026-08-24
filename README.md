# checkip-cli

Print your public IP address from the terminal. No API key, no signup.

```
$ checkip
203.0.113.42

$ checkip --json
{
  "ip": "203.0.113.42",
  "family": "IPv4",
  "country": "US"
}

$ checkip --country
US
```

## Install

```
npm install -g checkip-cli
```

Or run without installing:

```
npx checkip-cli
```

## How it works

One HTTPS request to the free API at [checkip.tools](https://checkip.tools):

```
GET https://checkip.tools/api/ip
→ { "ip": "…", "family": "IPv4|IPv6", "country": "…" }
```

The site also has a full set of free browser-based network tools — IP lookup with
geolocation, DNS and reverse DNS, WHOIS, ping, port checker, speed test and more,
in 18 languages: **[checkip.tools](https://checkip.tools)**

## Requirements

Node 18+ (uses the built-in `fetch`).

## License

MIT
