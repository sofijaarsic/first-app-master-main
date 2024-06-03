# Ionic-Memo-App

MemoApp je mobilna aplikacija razvijena koristeći Ionic i Angular koja omogućava korisnicima da prave, čuvaju i upravljaju beleškama. Aplikacija koristi Firebase za autentifikaciju i čuvanje podataka.

## Funkcionalnosti

- Kreiranje novih beleški
- Prikaz postojećih beleški
- Izmena i brisanje beleški
- Čuvanje omiljenih beleški
- Autentifikacija korisnika putem Firebase-a (email/password)

## Tehnologije

Aplikacija je razvijena koristeći sledeće tehnologije:

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Firebase](https://firebase.google.com/)

## Instalacija

Najpre klonirati repozitorijum na računar:

```bash
git clone https://github.com/sofijaarsic/ionic-memo-app.git
cd ionic-memo-app

Instalacija potrebnih paketa:

npm install

U environment.ts fajlu je potrebno zameniti Firebase konfiguracione podatke:
firebaseApiKey i firebaseRDBUrl.

Pokretanje aplikacije lokalno koristeći Ionic CLI:

ionic serve
