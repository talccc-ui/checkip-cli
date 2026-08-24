#!/usr/bin/env node
// checkip — print your public IP address using the free checkip.tools API.

const API = 'https://checkip.tools/api/ip';

const args = process.argv.slice(2);

if (args.includes('-h') || args.includes('--help')) {
  console.log(`Usage: checkip [options]

Prints your public IP address.

Options:
  --json      full JSON response ({ip, family, country})
  --country   print the country code instead of the IP
  -h, --help  show this help

Data comes from the free API at https://checkip.tools`);
  process.exit(0);
}

try {
  const res = await fetch(API, { headers: { 'user-agent': 'checkip-cli' } });
  if (!res.ok) {
    console.error(`checkip: API responded with HTTP ${res.status}`);
    process.exit(1);
  }
  const info = await res.json();
  if (args.includes('--json')) {
    console.log(JSON.stringify(info, null, 2));
  } else if (args.includes('--country')) {
    console.log(info.country ?? 'unknown');
  } else {
    console.log(info.ip);
  }
} catch (err) {
  console.error(`checkip: request failed (${err.cause?.code ?? err.message})`);
  process.exit(1);
}
