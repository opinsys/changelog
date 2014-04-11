## Opinsys 14.XX -

### Uudet toiminnallisuudet

- Käyttäjät voivat muokata työpöydän menu-valikon kautta omaa profiiliansa (nimi, kuva, puhelinnumero).

- Kannettavat tietokoneet päivittyvät myös koulun verkon ulkopuolella.

### Muut muutokset

- <advanced title="DVD/CD-levyjen poistoon ja lisäämiseen liittyvä ongelma on korjattu.">
  Ongelmana oli DVD/CD-levyasemien toiminnan epävakaus, joka johtui
  levyjen poistamisesta levyaseman fyysistä poistopainiketta
  käyttäen. Työpöydältä levykuvakkeesta poistamalla epävakautta ei ole
  ilmennyt. Korjauksen myötä DVD/CD-levyjen poisto levyaseman fyysistä
  poistopainiketta käyttäen toimii kuten työpöydältä.
  </advanced>

- Spotify on päivitetty uusimpaan versioon.

### Tiedossa olevat ongelmat

- Dropbox ei toimi käytettäessä Samba-kotihakemistoja.

- SMARTBoard Notebook-ohjelman piirtoalueelta häviää kosketus tietyssä
  tilanteessa.

<br />

<advanced>

### Pakettimuutokset

    New packages:
      linux-headers-3.5.0-48 3.5.0-48.72
      linux-headers-3.5.0-48-generic 3.5.0-48.72
      linux-image-3.5.0-48-generic 3.5.0-48.72
      linux-image-extra-3.5.0-48-generic 3.5.0-48.72
      spotify-client-qt 1:0.9.4.183.g644e24e.428-1
    Removed packages:
      linux-headers-3.5.0-47 3.5.0-47.71
      linux-headers-3.5.0-47-generic 3.5.0-47.71
      linux-image-3.5.0-47-generic 3.5.0-47.71
      linux-image-extra-3.5.0-47-generic 3.5.0-47.71
    Upgraded packages:
      adobe-flashplugin 11.2.202.350-0quantal1
        (was 11.2.202.346-0quantal1)
      adobe-flash-properties-gtk 11.2.202.350-0quantal1
        (was 11.2.202.346-0quantal1)
      file 5.11-2ubuntu0.2
        (was 5.11-2ubuntu0.1)
      icedtea-6-jre-cacao:i386 6b30-1.13.1-1ubuntu2~0.12.10.2
        (was 6b30-1.13.1-1ubuntu2~0.12.10.1)
      icedtea-6-jre-jamvm:i386 6b30-1.13.1-1ubuntu2~0.12.10.2
        (was 6b30-1.13.1-1ubuntu2~0.12.10.1)
      libgudev-1.0-0:i386 1:175-0ubuntu13.1
        (was 1:175-0ubuntu13)
      libmagic1:i386 5.11-2ubuntu0.2
        (was 5.11-2ubuntu0.1)
      libnss3-1d:i386 3.15.4-0ubuntu0.12.10.2
        (was 3.15.4-0ubuntu0.12.10.1)
      libnss3:i386 3.15.4-0ubuntu0.12.10.2
        (was 3.15.4-0ubuntu0.12.10.1)
      libpq5 9.1.13-0ubuntu0.12.10
        (was 9.1.12-0ubuntu0.12.10)
      libssl1.0.0:i386 1.0.1c-3ubuntu2.7
        (was 1.0.1c-3ubuntu2.6)
      libssl-dev 1.0.1c-3ubuntu2.7
        (was 1.0.1c-3ubuntu2.6)
      libssl-doc 1.0.1c-3ubuntu2.7
        (was 1.0.1c-3ubuntu2.6)
      libudev0:i386 175-0ubuntu13.1
        (was 175-0ubuntu13)
      libyaml-0-2:i386 0.1.4-2ubuntu0.12.10.3
        (was 0.1.4-2ubuntu0.12.10.2)
      libyaml-libyaml-perl 0.38-3ubuntu0.12.10.1
        (was 0.38-3)
      linux-headers-generic 3.5.0.48.64
        (was 3.5.0.47.63)
      linux-headers-generic-pae 3.5.0.48.64
        (was 3.5.0.47.63)
      linux-libc-dev:i386 3.5.0-48.72
        (was 3.5.0-47.71)
      nautilus-dropbox-dist 2.6.27-4+quantal.i386+master.1714b2f0dc96acaac451bf050e275532ffdc47ae
        (was 2.2.13-0+opinsys1)
      openjdk-6-jdk:i386 6b30-1.13.1-1ubuntu2~0.12.10.2
        (was 6b30-1.13.1-1ubuntu2~0.12.10.1)
      openjdk-6-jre-headless:i386 6b30-1.13.1-1ubuntu2~0.12.10.2
        (was 6b30-1.13.1-1ubuntu2~0.12.10.1)
      openjdk-6-jre:i386 6b30-1.13.1-1ubuntu2~0.12.10.2
        (was 6b30-1.13.1-1ubuntu2~0.12.10.1)
      openjdk-6-jre-lib 6b30-1.13.1-1ubuntu2~0.12.10.2
        (was 6b30-1.13.1-1ubuntu2~0.12.10.1)
      openssh-client 1:6.0p1-3ubuntu1.2
        (was 1:6.0p1-3ubuntu1.1)
      openssh-server 1:6.0p1-3ubuntu1.2
        (was 1:6.0p1-3ubuntu1.1)
      openssl 1.0.1c-3ubuntu2.7
        (was 1.0.1c-3ubuntu2.6)
      puavo-ltsp-client 0.12.0-216+quantal.i386+master.422736e57dea6796a91b3500acf1c60e762a9da3
        (was 0.12.0-205+quantal.i386+master.ffa64b7106095cd8abbd357144693e6ccbdc513a)
      puavo-ltsp-install 0.12.0-216+quantal.i386+master.422736e57dea6796a91b3500acf1c60e762a9da3
        (was 0.12.0-205+quantal.i386+master.ffa64b7106095cd8abbd357144693e6ccbdc513a)
      puavo-wlanap 0.7.2-9+quantal.i386+master.5e69f326fff17f62bf41c50049e94f52dceb6ce6
        (was 0.7.1-8+quantal.i386+master.14a2461b6f7fab92de98e7444cf7d46d8748ddf8)
      puavo-wlanap-dnsproxy 0.7.2-9+quantal.i386+master.5e69f326fff17f62bf41c50049e94f52dceb6ce6
        (was 0.7.1-8+quantal.i386+master.14a2461b6f7fab92de98e7444cf7d46d8748ddf8)
      python-magic 5.11-2ubuntu0.2
        (was 5.11-2ubuntu0.1)
      spotify-client 1:0.9.4.183.g644e24e.428-1
        (was 1:0.9.0.133.gd18ed58.259-1)
      ssh-askpass-gnome 1:6.0p1-3ubuntu1.2
        (was 1:6.0p1-3ubuntu1.1)
      udev 175-0ubuntu13.1
        (was 175-0ubuntu13)
      webmenu 0.7.0-57+quantal.i386+master.eddf3afaa9b5278a3fe03f169b9b8bb4636f15a9
        (was 0.7.0-51+quantal.i386+master.c26a0cf839e1f5625201025d27b1d2881e5d57e4)
    Downgraded packages:

</advanced>

## Opinsys 14.14 - Pellervo {#ltsp-quantal-master-2014-04-02-152902-i386}

### Uudet toiminnallisuudet

- Lisätty uusi laitetyyppi: langaton tukiasema
- Näyttöasetukset tulevat voimaan näyttöjen kytkemisten ja poiskytkemisten myötä. Käytännössä tämä korjaa ongelman jota on esiintynyt tietyn päätelaite-dokumenttikamerayhdistelmän kanssa. Tällöin kuvan vaihtaminen kameralta on saattanut hukata näyttöjen kloonausasetuksen.

### Muut muutokset

- Korjattu kannettavien kirjautumista tilanteessa, jossa ei olla oman
  koulun verkossa.

- Korjattu vieraskäyttäjien ryhmäoikeudet, jonka johdosta mm. Arduino
  toimii myös vierastunnuksilla.

- Korjattu kannettavien kirjautumisongelma offline-tilassa.

### Tiedossa olevat ongelmat

- Dropbox ei toimi käytettäessä Samba-kotihakemistoja

<br />

<advanced>

### Tekniset muutokset

- Korjattu palautetyökalun asettaminen koulukohtaisesti näkyviin

### Pakettimuutokset

    New packages:
      cowsay 3.03+dfsg1-4
      puavo-hw-log 1.0-4+quantal.i386+master.a842ee2b9c55af23a05e88ff67a4012b2cd12ffd
      python-xlib 0.14+20091101-1
      quicktile 0.2.1-1+quantal.i386+master.b9cc0acfa07174bd3541b2fad594718e3c0cf277
    Removed packages:
    Upgraded packages:
      apache2-utils 2.2.22-6ubuntu2.4
        (was 2.2.22-6ubuntu2.3)
      ca-certificates 20130906ubuntu0.12.10.1
        (was 20120623)
      initramfs-tools 0.103ubuntu0.2.2
        (was 0.103ubuntu0.2.1)
      initramfs-tools-bin 0.103ubuntu0.2.2
        (was 0.103ubuntu0.2.1)
      libnss-winbind:i386 2:3.6.6-3ubuntu5.4
        (was 2:3.6.6-3ubuntu5.3)
      libpam-winbind:i386 2:3.6.6-3ubuntu5.4
        (was 2:3.6.6-3ubuntu5.3)
      libsmbclient:i386 2:3.6.6-3ubuntu5.4
        (was 2:3.6.6-3ubuntu5.3)
      libwbclient0:i386 2:3.6.6-3ubuntu5.4
        (was 2:3.6.6-3ubuntu5.3)
      node-webkit 0.8.5-13+quantal.i386+master.3a98e76e018a71ce1f7bc62694772b4d0372663a
        (was 0.8.4-12+quantal.i386+master.388abd47a3ffc5a9e8b37a5d02cc7190ea761b7e)
      openssh-client 1:6.0p1-3ubuntu1.1
        (was 1:6.0p1-3ubuntu1)
      openssh-server 1:6.0p1-3ubuntu1.1
        (was 1:6.0p1-3ubuntu1)
      puavo-devscripts 0.5.0-63+quantal.i386+master.9de2582892029b059ac1f8dc5983dbeef7c7e2a6
        (was 0.5.0-61+quantal.i386+master.c2de20d48c3d78b25a301263ed0918135afafd37)
      puavo-ltsp-client 0.12.0-205+quantal.i386+master.ffa64b7106095cd8abbd357144693e6ccbdc513a
        (was 0.12.0-166+quantal.i386+master.2e522865bf26a9020a80bc9401f41149d48617ee)
      puavo-ltsp-install 0.12.0-205+quantal.i386+master.ffa64b7106095cd8abbd357144693e6ccbdc513a
        (was 0.12.0-166+quantal.i386+master.2e522865bf26a9020a80bc9401f41149d48617ee)
      puavo-wlanap 0.7.1-8+quantal.i386+master.14a2461b6f7fab92de98e7444cf7d46d8748ddf8
        (was 0.7.0-5+quantal.i386+master.7adb03fc1d04fc4b517f9ed59301e61ff5e08f3e)
      puavo-wlanap-dnsproxy 0.7.1-8+quantal.i386+master.14a2461b6f7fab92de98e7444cf7d46d8748ddf8
        (was 0.7.0-5+quantal.i386+master.7adb03fc1d04fc4b517f9ed59301e61ff5e08f3e)
      samba-common 2:3.6.6-3ubuntu5.4
        (was 2:3.6.6-3ubuntu5.3)
      samba-common-bin 2:3.6.6-3ubuntu5.4
        (was 2:3.6.6-3ubuntu5.3)
      smbclient 2:3.6.6-3ubuntu5.4
        (was 2:3.6.6-3ubuntu5.3)
      ssh-askpass-gnome 1:6.0p1-3ubuntu1.1
        (was 1:6.0p1-3ubuntu1)
      webmenu 0.7.0-51+quantal.i386+master.c26a0cf839e1f5625201025d27b1d2881e5d57e4
        (was 0.7.0-49+quantal.i386+master.e0059d23399f1536f6e3e7b4bc4d25d3a8d59df3)
      winbind 2:3.6.6-3ubuntu5.4
        (was 2:3.6.6-3ubuntu5.3)
    Downgraded packages:


</advanced>
