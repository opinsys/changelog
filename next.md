## Opinsys 14.XX -

### Uudet toiminnallisuudet

- <advanced title="Käyttäjät voivat muokata omaa profiilia työpöydältä">
  Käyttäjät voivat nyt muokata oman käyttäjätunnuksensa tietoja. Esimerkiksi
  muokattavia tietoja ovat: oma kuva, puhelinnumero ja kieli. Tietojen voi muokata
  tapahtuu napsauttamalla Menu > Oma nimi.
  </advanced>

- <advanced title="Käyttäjän kuva näytetään Menu-valikossa.">
  Menu-valikossa näytetään käyttäjän oma kuva, jos hän on asettanut sen omaan profiiliinsa.
  </advanced>

- Kannettavat tietokoneet päivittyvät myös koulun verkon ulkopuolella.

- <advanced title="Lisätty KTouch-harjoituksia.">
  Järjestelmään on lisätty Terho Reuhkalan (Jyväskylän Kortepohjan koulu) tekemät harjoitukset.
  </advanced>

### Muut muutokset

- <advanced title="DVD/CD-levyjen poistoon ja lisäämiseen liittyvä ongelma on korjattu.">
  Ongelmana oli DVD/CD-levyasemien toiminnan epävakaus, joka johtui
  levyjen poistamisesta levyaseman fyysistä poistopainiketta
  käyttäen. Työpöydältä levykuvakkeesta poistamalla epävakautta ei ole
  ilmennyt. Korjauksen myötä DVD/CD-levyjen poisto levyaseman fyysistä
  poistopainiketta käyttäen toimii kuten työpöydältä.
  </advanced>

- <advanced title="DVD/CD-levyjen toistaminen VLC-soittimella.">
  Ongelmana oli DVD/CD-levyjen toistaminen VLC-soittimella. Avattaessa DVD-levyä
  VLC-ohjelmassa, ohjelma ilmoitti että polkua `/dev/dvd` ei ole. Ongelma on nyt korjattu
  ja VLC:llä voi toistaa DVD-levyjä valitsemalla ohjelmasta Media > Avaa Levy...
  </advanced>

- Spotify on päivitetty uusimpaan versioon.

- <advanced title="Lisätty uusia sivustoja Flashblockin sallittujen palveluiden listalle.">
  Lisätyt sivustot: ugri.net, rockway.fi, ugri.net, sanomapro.fi ja pelastusopisto.fi.
  </advanced>

- <advanced title="Lisätty uusia sivustoja Javan sallittujen palveluiden listalle.">
  Lisätyt sivustot: www.walter-fendt.de.
  </advanced>

- <advanced title="Java-päivitys">
  Oraclen Java-ohjelmisto on pävitetty uusimpaan versioon Java 7 Update 55 CPU.
  </advanced>

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
