import { Box, Button } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import { SubTitle } from "../styles/Typography/SubTitle";
import { TextBody } from "../styles/Typography/TextBody";
import TerreImg from "../assets/terre.webp";
import EnsembleImg from "../assets/ensemble.webp";

const About = () => {
  return (
    <Box>
      <HeaderTitle title="À propos de nous" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "fex-start",
          width: "100%",
          height: { md: "110vh", xs: "90vh" },
          backgroundColor: "#FFF",
          flexDirection: "column",
        }}
      >
        <SubTitle text="Qui sommes nous ?" />
        <TextBody
          text="Lelo Pona Lobi est plus qu’une simple association, c’est un mouvement.
          Un mouvement social qui vise à libérer les consciences par le biais de
          l’éducation, convaincue qu’elle est la clé de l’émancipation
          individuelle et collective. L’association part du constat que le
          savoir, véritable arme de transformation, a été retiré à de nombreux
          jeunes en République démocratique du Congo."
        />
        <TextBody
          text="L’association milite et s’engage donc à rendre le savoir accessible à
          tous, quel que soit le parcours ou les capacités des individus, avec
          une attention particulière pour les personnes en situation de
          handicap. Ainsi, l’éducation est perçue non seulement comme un droit,
          mais comme une arme puissante pour reconstruire les bases d’une
          société forte et autonome."
        />
        <Box
          component="img"
          alt="img"
          src={TerreImg}
          sx={{
            width: { xs: "80%", md: "50%" },
            height: "auto",
            objectFit: "cover",
            display: "block",
            borderRadius: "8px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          minHeight: "70vh",
          backgroundColor: "#EAF8E8",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "80%" },
            height: "100%",
            justifyContent: "center",
            alignItems: { md: "flex-start", xs: "center" },
            ml: { md: 10, xs: 0 },
            mt: { md: 0, xs: 4 },
          }}
        >
          <SubTitle text="Notre mission" />
          <TextBody
            text="Permettre à chaque enfant congolais d’avoir accès à une éducation de
            qualité. Créer des opportunités pour un avenir meilleur sur tout le
            territoire. Nous nous engageons à lever les barrières qui empêchent l’éducation
            de jouer son rôle d’émancipation et à faire de l’apprentissage une
            réalité pour tous, sans distinction."
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            component="img"
            alt="img"
            src={EnsembleImg}
            sx={{
              display: "flex",
              width: "80%",
              height: { xs: "40%", md: "80%" },
              borderRadius: "8px",
              mb: { md: 0, xs: 6 },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          minHeight: "70vh",
          backgroundColor: "#CEDEFF",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            mt: { md: 0, xs: 4 },
          }}
        >
          <Box
            component="img"
            alt="img"
            src={EnsembleImg}
            sx={{
              display: "flex",
              width: "80%",
              height: { xs: "40%", md: "80%" },
              borderRadius: "8px",
              mb: { md: 0, xs: 6 },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "80%" },
            height: "100%",
            justifyContent: "center",
            alignItems: { md: "flex-start", xs: "center" },
            ml: { md: 10, xs: 0 },
            mb: { md: 0, xs: 4 },
          }}
        >
          <SubTitle text="Notre vision" />
          <TextBody
            text="Nous croyons fermement que l’éducation est un levier de
            transformation social. Le savoir est une arme importante à la
            construction de chaque individu et un outil indispensable pour bâtir
            une société équitable et prospère. Cependant, cette arme a été
            retirée à une grande partie de la jeunesse congolaise. À travers
            notre action, nous voulons leur redonner cet outil fondamental."
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "fex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#FFF",
          flexDirection: "column",
          mt: 4,
          mb: 4,
        }}
      >
        <SubTitle text='Pourquoi "Lelo Pona Lobi"' />
        <TextBody
          text="En lingala, « Lelo Pona Lobi » signifie « Aujourd’hui pour demain ».
          Ce nom incarne parfaitement notre engagement qui est d’agir
          aujourd’hui pour construire un avenir meilleur pour la jeunesse
          congolaise. Nous avons pour ambition de devenir un acteur clé dans
          l’éducation, non seulement au Congo mais aussi dans dans le monde,
          pour que chaque enfant puisse avoir les outils nécessaires à son
          émancipation."
        />
        <TextBody text="LELO PONA LOBI – car l’avenir se prépare aujourd’hui." />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "fex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#FFF",
          flexDirection: "column",
          mb: 4,
          mt: -6,
        }}
      >
        <SubTitle text="Rejoignez-nous" />
        <TextBody
          text="Que vous soyez un particulier, une entreprise ou une organisation,
          vous pouvez contribuer à notre mission. Ensemble, faisons de
          l’éducation un droit pour tous."
        />
        <Button
          component="a"
          variant="contained"
          href="https://www.helloasso.com/associations/lelo-pona-lobi/collectes/lelo-pona-lobi"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: "225px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "1px solid rgb(39, 30, 89)",
            backgroundColor: "#FFE084",
            textAlign: { md: "left", xs: "center" },
            color: "#000",
          }}
        >
          Faire un don
        </Button>
      </Box>
    </Box>
  );
};

export default About;
