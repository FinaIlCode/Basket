<?php
include"bd_connexion.php";
function getMatchs(){
	try{
		$cnx = connexionPDO();
		$req = $cnx->prepare("SELECT m.num_match, s.adresse_salle, m.date_match, m.heure_match, m.montant_déplt_p, m.montant_déplt_s FROM matchs m JOIN salle s ON m.num_salle = s.num_salle");
		$req->execute();

		$resultat = $req;
	} catch (PDOException $e) {
		print("Erreur !: " . $e->getMessage());
		die();
	}
	return $resultat;
}

function getSalles(){
	try{
		$cnx = connexionPDO();
		$req = $cnx->prepare("SELECT * FROM salle");
		$req->execute();

		$resultat = $req;
	} catch (PDOException $e) {
		print("Erreur !: " . $e->getMessage());
		die();
	}
	return $resultat;
}

function getEquipe(){
	try{
		$cnx = connexionPDO();
		$req = $cnx->prepare("SELECT * FROM equipe");
		$req->execute();

		$resultat = $req;
	} catch (PDOException $e) {
		print("Erreur !: " . $e->getMessage());
		die();
	}
	return $resultat;
}

function getArbitre(){
	try{
		$cnx = connexionPDO();
		$req = $cnx->prepare("SELECT * FROM arbitre");
		$req->execute();

		$resultat = $req;
	} catch (PDOException $e) {
		print("Erreur !: " . $e->getMessage());
		die();
	}
	return $resultat;
}

function addMatch($salle, $date, $heure, $equipe1, $equipe2, $arbitre1, $arbitre2, $mtn1, $mtn2){
	try{
		$cnx = connexionPDO();
		$req = $cnx->prepare("INSERT INTO matchs(num_match, num_salle, date_match, heure_match, num_equipe_1, num_equipe_2, num_arbitre_p, num_arbitre_s, montant_déplt_p, montant_déplt_s) values(NULL, ?,?,?,?,?,?,?,?,?)");
		$req->bindValue(1, $salle);
		$req->bindValue(2, $date);
		$req->bindValue(3, $heure);
		$req->bindValue(4, $equipe1);
		$req->bindValue(5, $equipe2);
		$req->bindValue(6, $arbitre1);
		$req->bindValue(7, $arbitre2);
		$req->bindValue(8, $mtn1);
		$req->bindValue(9, $mtn2);
		$req->execute();

		$resultat = $req;
	}catch (PDOException $e) {
		print("Erreur !: " . $e->getMessage());
		die();
	}
	return $resultat;
}

?>