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
      emacs24 24.1+1-2ubuntu3
      emacs24-bin-common 24.1+1-2ubuntu3
      emacs24-common 24.1+1-2ubuntu3
      emacs24-common-non-dfsg 24.1+1-1
      fonts-comfortaa 1.5-2
      fonts-freefont-otf 20120503-1
      fonts-gfs-artemisia 1.1-4
      fonts-gfs-complutum 1.1-5
      fonts-gfs-didot 1.1-5
      fonts-gfs-neohellenic 1.1-4
      fonts-gfs-olga 1.1-3
      fonts-gfs-solomos 1.1-4
      fonts-inconsolata 001.010-4
      fonts-junicode 0.7.6-1
      fonts-linuxlibertine 5.1.3-1
      fonts-oflb-asana-math 000.907-4
      fonts-stix 1.1.0-1
      latex-beamer 3.10-2
      latex-xcolor 2.11-1.1
      linux-headers-3.10.37.opinsys2 3.10.37.opinsys2-0
      linux-headers-3.12.10.opinsys4 3.12.10.opinsys4-0
      linux-headers-3.14.1.opinsys1 3.14.1.opinsys1-1
      linux-headers-3.5.0-48 3.5.0-48.72
      linux-headers-3.5.0-48-generic 3.5.0-48.72
      linux-image-3.10.37.opinsys2 3.10.37.opinsys2-0
      linux-image-3.12.10.opinsys4 3.12.10.opinsys4-0
      linux-image-3.14.1.opinsys1 3.14.1.opinsys1-1
      linux-image-3.5.0-48-generic 3.5.0-48.72
      linux-image-extra-3.5.0-48-generic 3.5.0-48.72
      opinsys-theme 0.2.8-102+quantal.i386+master.51ea8dc1b8032f58f8cc285257b7971f53ca7986
      otf-freefont 20120503-1
      pgf 2.10-1
      preview-latex-style 11.86-2ubuntu2
      prosper 1.00.4+cvs.2007.05.01-4
      ps2eps 1.68-1build1
      spotify-client-qt 1:0.9.4.183.g644e24e.428-1
      tex-gyre 2.004.1-4
      texlive-extra-utils 2012.20120611-2
      texlive-fonts-extra 2012.20120611-2
      texlive-fonts-extra-doc 2012.20120611-2
      texlive-fonts-recommended 2012.20120611-4
      texlive-fonts-recommended-doc 2012.20120611-4
      texlive-font-utils 2012.20120611-2
      texlive-generic-recommended 2012.20120611-4
      texlive-latex-extra 2012.20120611-2
      texlive-latex-extra-doc 2012.20120611-2
      texlive-latex-recommended 2012.20120611-4
      texlive-latex-recommended-doc 2012.20120611-4
      texlive-pictures 2012.20120611-4
      texlive-pictures-doc 2012.20120611-4
      texlive-pstricks 2012.20120611-2
      texlive-pstricks-doc 2012.20120611-2
      texlive-xetex 2012.20120611-4
      tipa 2:1.3-19
      ttf-marvosym 0.1+dfsg-2
    Removed packages:
      linux-headers-3.10.28.opinsys1 3.10.28.opinsys1-0
      linux-headers-3.12.10.opinsys3 3.12.10.opinsys3-1
      linux-headers-3.13.1.opinsys2 3.13.1.opinsys2-1
      linux-headers-3.5.0-47 3.5.0-47.71
      linux-headers-3.5.0-47-generic 3.5.0-47.71
      linux-image-3.10.28.opinsys1 3.10.28.opinsys1-0
      linux-image-3.12.10.opinsys3 3.12.10.opinsys3-1
      linux-image-3.13.1.opinsys2 3.13.1.opinsys2-1
      linux-image-3.5.0-47-generic 3.5.0-47.71
      linux-image-extra-3.5.0-47-generic 3.5.0-47.71
    Upgraded packages:
      adobe-flashplugin 11.2.202.350-0quantal1
        (was 11.2.202.346-0quantal1)
      adobe-flash-properties-gtk 11.2.202.350-0quantal1
        (was 11.2.202.346-0quantal1)
      curl 7.27.0-1ubuntu1.9
        (was 7.27.0-1ubuntu1.8)
      file 5.11-2ubuntu0.2
        (was 5.11-2ubuntu0.1)
      icedtea-6-jre-cacao:i386 6b30-1.13.1-1ubuntu2~0.12.10.2
        (was 6b30-1.13.1-1ubuntu2~0.12.10.1)
      icedtea-6-jre-jamvm:i386 6b30-1.13.1-1ubuntu2~0.12.10.2
        (was 6b30-1.13.1-1ubuntu2~0.12.10.1)
      libcurl3-gnutls:i386 7.27.0-1ubuntu1.9
        (was 7.27.0-1ubuntu1.8)
      libcurl3:i386 7.27.0-1ubuntu1.9
        (was 7.27.0-1ubuntu1.8)
      libcurl3-nss:i386 7.27.0-1ubuntu1.9
        (was 7.27.0-1ubuntu1.8)
      libgudev-1.0-0:i386 1:175-0ubuntu13.1
        (was 1:175-0ubuntu13)
      libmagic1:i386 5.11-2ubuntu0.2
        (was 5.11-2ubuntu0.1)
      libnss3-1d:i386 3.15.4-0ubuntu0.12.10.2
        (was 3.15.4-0ubuntu0.12.10.1)
      libnss3:i386 3.15.4-0ubuntu0.12.10.2
        (was 3.15.4-0ubuntu0.12.10.1)
      libpam-envfeed 0.5-20+quantal.i386+master.2b95668c898a81ee01d104287b7dd40dc027caed
        (was 0.5-3+quantal.i386+master.a1008b396bb364e613be80b2ffd30e850d2a6391)
      libpq5 9.1.13-0ubuntu0.12.10
        (was 9.1.12-0ubuntu0.12.10)
      libsnmp15 5.4.3~dfsg-2.5ubuntu1.1
        (was 5.4.3~dfsg-2.5ubuntu1)
      libsnmp-base 5.4.3~dfsg-2.5ubuntu1.1
        (was 5.4.3~dfsg-2.5ubuntu1)
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
      liitu-themes 0.2.8-102+quantal.i386+master.51ea8dc1b8032f58f8cc285257b7971f53ca7986
        (was 0.2.7-14~master.f7014a6f4abb225d411a516bd869ae802b17bdbe)
      linux-headers-generic 3.5.0.48.64
        (was 3.5.0.47.63)
      linux-headers-generic-pae 3.5.0.48.64
        (was 3.5.0.47.63)
      linux-libc-dev:i386 3.5.0-48.72
        (was 3.5.0-47.71)
      ltsp-lightdm 0.3.10-12+quantal.i386+master.b0e51f0ee219895b14672a76eff6cbe7b322a4d2
        (was 0.3.10-10+quantal.i386+master.b0e51f0ee219895b14672a76eff6cbe7b322a4d2)
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
      opinsys-linux-firmware 0.2.8-102+quantal.i386+master.51ea8dc1b8032f58f8cc285257b7971f53ca7986
        (was 0.2.0-0+opinsys1)
      oracle-java 1.7.55-10+quantal.i386+master.d559538bf4f6e4ab75919b9c76e607aa494a6e88
        (was 1.7.51-9+quantal.i386+master.4b136529a5a95fe0bbe0b4b2ae49a7c74c268e00)
      puavo-client 1.4.0-22+quantal.i386+master.52f4ed920a5f8ac9581c060ad17a44b89416529a
        (was 1.4.0-16+quantal.i386+master.a204348d4230e89635c64ef90da6dea7b47cff54)
      puavo-devscripts 0.5.0-71+quantal.i386+master.92bb964bfc649e72286f0acf65303a9d45a5cd7a
        (was 0.5.0-63+quantal.i386+master.9de2582892029b059ac1f8dc5983dbeef7c7e2a6)
      puavo-ltsp-client 0.12.0-226+quantal.i386+master.ecd902202b4e127ecae0005f6a02fd8e583a4f0d
        (was 0.12.0-205+quantal.i386+master.ffa64b7106095cd8abbd357144693e6ccbdc513a)
      puavo-ltsp-install 0.12.0-226+quantal.i386+master.ecd902202b4e127ecae0005f6a02fd8e583a4f0d
        (was 0.12.0-205+quantal.i386+master.ffa64b7106095cd8abbd357144693e6ccbdc513a)
      puavo-sharedir-client 0.4.0-17+quantal.i386+master.d4df52c74d62a1d57b9671ba37b124bad6884424
        (was 0.4.0-16+quantal.i386+master.67746e058ef921453508ee74b3596b4effc73083)
      puavo-vpn-client 0.1.3-5+quantal.i386+master.cf5d9c6c7fb5c3ea21d07df62edcb8f7baefb57c
        (was 0.1.3-1+quantal.i386+master.cf5d9c6c7fb5c3ea21d07df62edcb8f7baefb57c)
      puavo-wlanap 0.7.2-10+quantal.i386+master.192c46c141d6e53d5c7f2c7a7c62c76cde83f8e3
        (was 0.7.1-8+quantal.i386+master.14a2461b6f7fab92de98e7444cf7d46d8748ddf8)
      puavo-wlanap-dnsproxy 0.7.2-10+quantal.i386+master.192c46c141d6e53d5c7f2c7a7c62c76cde83f8e3
        (was 0.7.1-8+quantal.i386+master.14a2461b6f7fab92de98e7444cf7d46d8748ddf8)
      python-imaging 1.1.7-4ubuntu0.12.10.1
        (was 1.1.7-4build1)
      python-magic 5.11-2ubuntu0.2
        (was 5.11-2ubuntu0.1)
      spotify-client 1:0.9.4.183.g644e24e.428-1
        (was 1:0.9.0.133.gd18ed58.259-1)
      ssh-askpass-gnome 1:6.0p1-3ubuntu1.2
        (was 1:6.0p1-3ubuntu1.1)
      udev 175-0ubuntu13.1
        (was 175-0ubuntu13)
      webmenu 0.7.0-58+quantal.i386+master.eddf3afaa9b5278a3fe03f169b9b8bb4636f15a9
        (was 0.7.0-51+quantal.i386+master.c26a0cf839e1f5625201025d27b1d2881e5d57e4)
    Downgraded packages:

</advanced>
