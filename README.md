# quasar-node-mysql
tuto quasar node mysql

# Pré-requis
  - Node & Npm 
  (https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)
  - Quasar cli 
  (https://quasar.dev/quasar-cli/installation)
  - nvm (node v10.23.2 pour quasar et v12 pour express)
  (https://github.com/nvm-sh/nvm#install--update-script)
  - MySQL (tuto réaliser avec MariaDB)
  (https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04)

# Install Project
  - 1ere etape monter notre application front-end avec quasar
  - 2eme etape configurer back-end en commençant par notre DB et nous démarrons notre back

( ???
  - Nous avons besoin de 2 terminal en mode de développement:
    - 1 pour notre compilation du mode developpement de quasar
    - 1 autre pour notre api express avec node js et notre relation avec notre db
)

## Premier terminal

- Monter notre application quasar en front-end
```
git clone git@github.com:hsukrd/quasar-node-mysql.git
cd quasar-node-mysql/front
nvm i 10.23.2
npm i
quasar dev
```

## Deuxième terminal:
  - Démarrer la base de données local:
```
sudo systemctl start mariadb.service
```
  - Ouvrir la console mariadb:
```
sudo mysql
```

## dans la console mariadb:

!!! si vous n'avez jamais utiliser mariadb sur votre pc il vous faudra creer un utilisateur et lui donner des droit

```
create user 'tuto'@'localhost' identified by 'tuto$';
grant all privileges on *.* to 'tuto'@'localhost';
flush privileges;
```
## Et enfin si vos utilisateur sont déja creer
(toujour dans la console)
```
create database quasar_tutorial;
grant all privileges on quasar_tutorial.* to 'tuto'@'localhost';
flush privileges;
```

## et maintenant toujour dans la console mariadb nous pouvons monter nos tables:
```
source database/db.sql
exit
```

## Il nous manque plus qu'a démarrer notre api:
```
cd quasar-node-mysql/back
npm i
nodemon
```

(Il ce peux que les commandes soit à peine exact le tuto est en cours de réalisations n'hésiter pas à me tenir au courant)

J'espères que cela poura vous aidez ;)