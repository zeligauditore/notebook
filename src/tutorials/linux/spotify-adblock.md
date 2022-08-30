# Spotify AdBlock Fedora

::: tip Fuente
Revisar la [fuente](https://note.rojenz.de/post/spotify-adblock-fedora-34/)
:::

## 1-. Instalar

### Habilitar repo de [negativo17](https://negativo17.org/spotify-client/):

```bash
dnf config-manager --add-repo=https://negativo17.org/repos/fedora-spotify.repo
```

### Instalar:

```bash
dnf install spotify-client
```

## 2-. Build Adblock

### Instalar las dependencias:

```bash
dnf install rust cargo
```

### Clonar y contruir:

```bash
git clone https://github.com/abba23/spotify-adblock.git
```

```bash
cd spotify-adblock
```

```bash
make
```

### Instalar al system path:

```bash
sudo make install
```

## 3-. Agregar LD_PRELOAD

Agregar `LD_PRELOAD` al ejecutable de Spotify `/usr/bin/spotify` ejecutará el `adBlock` antes de iniciar Spotify:

### Agregar el valor `LD_PRELOAD` editando `/usr/bin/spotify` con nano:

::: warning Importante
Ejecutar con `sudo`
:::

```bash
nano /usr/bin/spotify
```

Agregar la siguiente línea al archivo ejecutable de Spotify:

```bash
export LD_PRELOAD=/usr/local/lib/spotify-adblock.so
```

### Debe quedar cómo:

```bash{14,15}
#!/usr/bin/sh
# Wrapper script for Spotify.

# The spotify binary has a RUNPATH of its origin folder. It requires a few
# librares compiled with minimum options (no external dependencies).
# The FFMpeg library is loaded ONLY on the system path libraries, ignoring the
# RUNPATH.

# So remove the RUNPATH from the binary, put all the libraries in its private
# folder and make sure that only the spotify binary can access them.

export LD_LIBRARY_PATH="/usr/lib64/spotify-client${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
export SCALE_FACTOR="$(/usr/lib64/spotify-client/get-scale-factor.py)"
export LD_PRELOAD=/usr/local/lib/spotify-adblock.so

exec /usr/lib64/spotify-client/spotify --force-device-scale-factor=$SCALE_FACTOR "$@" &
exec /usr/lib64/spotify-client/set-dark-theme-variant.py &

```
