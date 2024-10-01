# vpn

**Mobile app to connect VPN. Using Typescript + React Native and OpenVPN.**

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Demo Android

```bash
npm run android
```

# Demo iOS

```bash
npm run ios
```

| Name | Price | Money back | Devices support | Servers | Protocols | Try | Devices Count |
| ---- | ----- | ---------- | ------- | ------- | ---- | ---- | ---- |
| ExpressVPN | 12.95$/m, 9.99$/6m, 8.33$/12m | 30 days | iOS, Mac, Windows, Android, Linux, Routers | 3000+ | Lightway, OpenVPN, IKEv2 | - | 5 |
| BebraVPN | 5$/m, 3.5$/12m, 1.9$/24m | - | iOS, Mac, Windows, Android, Linux | 160 | OpenVPN, IKEv2 | 3 days free | Unlimited |
| OKVPN | 1.8$/m, 1.6$/3m, 1.3$/12m | - | iOS, Mac, Windows, Android | 100+ | OpenVPN | 1$ day | 5 |
| Surfshark | 12.95$/m, 3.99$/12m, 2.05$/24m | 30 days | iOS, Mac, Windows, Android, Linux, Smart TVs | 3200+ | WireGuard, IKEvv2, OpenVPN | 7 days free | Unlimited |
| CyberGhost | 11.99$/m, 6.99$/6m, 2.19$/26m | 14-45 days | iOS, Mac, Windows, Android, Linux, Smart TVs, Routers | 9000+ | WireGuard, OpenVPN, IKEv2 | - | 7 |
| IPVanish | 10.99$/m, 3.99$/12m | 30 days | iOS, Mac, Windows, Android, Linux, Routers | 2000+ | OpenVPN, IKEv2, L2TP | - | Unlimited |
| VyprVPN | 10$/m, 5$/12m | 30 days | iOS, Mac, Windows, Android, Routers | 700+ | WireGuard, OpenVPN, Chameleon | - | 5 |
| Private Internet Access | 11.95$/m, 3.33$/12m, 2.03$/36m | 30 days | iOS, Mac, Windows, Android, Linux, Routers | 35000+ | WireGuard, OpenVPN, IKEv2 | - | Unlimited |
| VanyaVPN | 5$/m, 3.5$/8m, 2.8$/15m, 1.9$/30m | - | iOS, Mac, Windows, Android, Linux, Router, Android TV | 160 | OpenVPN, IKEv2 | 1$ first day | Unlimited |
| NordVPN | 12.99$/m, 4.99$/12m, 3.39$/24m | 30 days | iOS, Mac, Windows, Android, Linux, Smart TVs | 6400+ | NordLynx (WireGuard), OpenVPN, IKEv2 | - | 6 |
| ProtonVPN | 9.99$/m, 5.99$/12m, 4.99$/24m | 30 days | iOS, Mac, Windows, Android, Linux | 1700+ | WireGuard, OpenVPN, IKEv2 | - | 10 |
| Mullvad | 5€/m (flat rate) | 30 days | iOS, Mac, Windows, Android, Linux | 800+ | WireGuard, OpenVPN | - | 5 |

I think main feature should be QBS network, of course it needs deep thinking and testing, but if you can bring qbs network to people - i think they will like it.
QBS mathematically can by proved anonymous.

Main reasons for users:
- Fast speed, like 10 gigabits
- All apps (simple)
- kill switch (may be banned in Russia)
- Free trial
- Allow paying in crypto
- unlimited devices, but limited keys
- limited countries (only high speeds)
- simplier = coolier

About servers:
- aeza.net (Shared)
- simple scaling (if there a lot of users)

About dev features:
- docker containers
- monitoring (not only about servers, but about all networks and speeds)
- QBS???
- auto reconnect to fastets
