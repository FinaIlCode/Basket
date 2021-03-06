<div class="login-popup">
	<div class="popupFormMatch" id="popupFormMatch">

		<form name="formAddMatch" action="" class="form-container" method="post">
			<h2>Veuillez entrer les informations suivantes :</h2>
			<input type="hidden" name="action" value="matchs">
			<label for="mtn">
				<strong>Adresse de la salle</strong>
			</label><br/>
			<select required name="choixSalle" id="choixSalle" class ="liste">
				<option disabled selected value="">--Choisir la salle--</option>
				<?php 
				$salles = getSalles();
				while($ligne = $salles -> fetch(PDO::FETCH_OBJ)){
					?>
					<option value="<?php echo $ligne->num_salle ?>"> <?php echo $ligne->adresse_salle ?> </option>

					<?php
				}
				?>
			</select><br/><br/>
			<label for="mtn">
				<strong>Date du match</strong>
			</label><br/>
			<input type="date" id="date" name="date" required><br/><br/>
			<input type="time" id="heure" name="heure" required><br/><br/>
			

			<label for="mtn">
				<strong>Selectionner l'équipe 1</strong>
			</label>
			<label for="mtn">
				<strong>Selectionner l'équipe 2</strong>
			</label><br/>
			<select onchange="disable('choixEquipe1','choixEquipe2','arbitre1', 'arbitre2', 'listeEquipe1', 'listeEquipe1')" required name="choixEquipe1" id="choixEquipe1" class ="listeEquipe1">
				<option disabled selected value="">--Choisir une équipe--</option>
				<?php 
				$equipe = getEquipe();
				while($ligne = $equipe -> fetch(PDO::FETCH_OBJ)){
					?>
					<option disable=false value="<?php echo $ligne->num_equipe ?>"> <?php echo $ligne->nom_equipe ?> </option>

					<?php
				}
				?>
			</select>
			
			<select onchange="disable('choixEquipe2','choixEquipe1','arbitre1', 'arbitre2', 'listeEquipe1', 'listeEquipe2')" required name="choixEquipe2" id="choixEquipe2" class ="listeEquipe2">
				<option disabled selected value="">--Choisir une équipe--</option>
				<?php 
				$equipe = getEquipe();
				while($ligne = $equipe -> fetch(PDO::FETCH_OBJ)){
					?>
					<option disable=false value="<?php echo $ligne->num_equipe ?>"> <?php echo $ligne->nom_equipe ?> </option>

					<?php
				}
				?>
				
			</select><br/><br/>

			<label for="mtn">
				<strong>Selectionner l'arbitre 1</strong>
			</label><br/>
			<select onchange="disable('arbitre1','arbitre2','arbitre1', 'arbitre2', 'listeEquipe1', 'listeEquipe2')" required name="arbitre1" id="arbitre1" class ="listeArbitre">
				<option disabled selected value="">--Choisir un arbitre--</option>
				<?php 
				$equipe = getArbitre();
				while($ligne = $equipe -> fetch(PDO::FETCH_OBJ)){
					?>
					<option value="<?php echo $ligne->num_arbitre ?>"> <?php echo $ligne->nom_arbitre ?>  <?php echo $ligne->prenom_arbitre; ?></option>

					<?php
				}
				?>
				
			</select>
			<input type="text" name="mtn1" placeholder="montant de l'indemnité">

			<label for="mtn">
				<strong>Selectionner l'arbitre 2</strong>
			</label><br/>
			<select onchange="disable('arbitre2','arbitre1','arbitre2', 'arbitre1', 'listeEquipe2', 'listeEquipe1')" required name="arbitre2" id="arbitre2" class ="liste" >
				<option disabled selected value=""> --Choisir un arbitre--</option >
				<?php 
				$equipe = getArbitre();
				while($ligne = $equipe -> fetch(PDO::FETCH_OBJ)){
					?>
					<option value="<?php echo $ligne->num_arbitre ?>"> <?php echo $ligne->nom_arbitre ?>  <?php echo $ligne->prenom_arbitre; ?></option>

					<?php
				}
				?>

			</select>
			<input type="text" name="mtn2" placeholder="montant de l'indemnité">

			<input type="submit" name="btn" class="btn" value="Enregistrer">
			<input type="button" class="btn cancel" value="Annuler" onclick="closeForm('popupFormMatch')">
		</form>
	</div>
</div>