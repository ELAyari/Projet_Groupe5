# Projet_Groupe5

## Description du Projet
Ce projet est une application web simple développée par notre équipe. Il comprend les pages suivantes :
- Page d'Accueil
- Page d'Inscription
- Page de Connexion
- Page de Recherche
- Page de Profil
- Page de Contact

## Structure du Projet
- `index.html` : Page d'accueil.
- `registration.html` : Page d'inscription.
- `login.html` : Page de connexion.
- `search.html` : Page de recherche.
- `profile.html` : Page de profil.
- `contact.html` : Page de contact.
- `styles/style.css` : Fichier CSS partagé pour le style du site.
- `scripts/script.js` : Fichier JavaScript partagé pour les fonctionnalités interactives.

Collaborateurs

Nasri

Sarra

Malek

Weal

Amal

Yosr

## Comment Utiliser le Projet

1. Cloner le Dépôt
Pour commencer, clonez le dépôt sur votre machine locale :

git clone <repository_url>

2. Créer une Nouvelle Branche
Chaque membre crée une nouvelle branche pour sa fonctionnalité :

git checkout -b feature/<nom_de_la_branche>
Nasri a créé la branche feature/registration pour la page d'inscription.

Sarra a créé la branche feature/home pour la page d'accueil.

Malek a créé la branche feature/search pour la page de recherche.

Weal a créé la branche feature/login pour la page de connexion.

Amal a créé la branche feature/profile pour la page de profil.

Yosr a créé la branche feature/contact pour la page de contact.

3. Ajouter des Fichiers
Après avoir créé ou modifié des fichiers, ajoutez-les à l'index Git :


git add <nom_du_fichier>

Nasri a ajouté registration.html et inscription.md.

Sarra a ajouté index.html et accueil.md.

Malek a ajouté search.html et recherche.md.

Weal a ajouté login.html et connexion.md.

Amal a ajouté profile.html et profil.md.

Yosr a ajouté contact.html et contact.md.

4. Faire un Commit
Validez les modifications avec un message descriptif :



git commit -m "Description des modifications"
Nasri a fait un commit pour la page d'inscription : git commit -m "Added registration page".

Sarra a fait un commit pour la page d'accueil : git commit -m "Added home page".

Malek a fait un commit pour la page de recherche : git commit -m "Added search page".

Weal a fait un commit pour la page de connexion : git commit -m "Added login page".

Amal a fait un commit pour la page de profil : git commit -m "Added profile page".

Yosr a fait un commit pour la page de contact : git commit -m "Added contact page".

5. Pousser les Modifications vers GitHub
Envoyez les modifications de votre branche vers GitHub :



git push origin feature/<nom_de_la_branche>
Nasri a poussé la branche feature/registration.

Sarra a poussé la branche feature/home.

Malek a poussé la branche feature/search.

Weal a poussé la branche feature/login.

Amal a poussé la branche feature/profile.

Yosr a poussé la branche feature/contact.

6. Fusionner une Branche dans main
Une fois les modifications validées, fusionnez la branche dans main :



git checkout main
git pull origin main
git merge feature/<nom_de_la_branche>
git push origin main
Nasri a fusionné feature/registration dans main.

Sarra a fusionné feature/home dans main.

Malek a fusionné feature/search dans main.

Weal a fusionné feature/login dans main.

Amal a fusionné feature/profile dans main.

Yosr a fusionné feature/contact dans main.


7. Supprimer une Branche Locale
Après avoir fusionné une branche, supprimez-la localement :



git branch -d feature/<nom_de_la_branche>
Nasri a supprimé feature/registration.

Sarra a supprimé feature/home.

Malek a supprimé feature/search.

Weal a supprimé feature/login.

Amal a supprimé feature/profile.

Yosr a supprimé feature/contact.

8. Supprimer une Branche Distante
Supprimez la branche distante après l'avoir fusionnée :


git push origin --delete feature/<nom_de_la_branche>
Nasri a supprimé feature/registration.

Sarra a supprimé feature/home.

Malek a supprimé feature/search.

Weal a supprimé feature/login.

Amal a supprimé feature/profile.

Yosr a supprimé feature/contact.