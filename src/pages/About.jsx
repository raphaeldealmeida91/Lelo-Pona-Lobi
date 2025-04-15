import { Box, Typography, Button } from "@mui/material";
import React from "react";
import TerreSection from "../assets/terre.jpeg";
import EnsembleSection from "../assets/ensemble.jpeg";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "70vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "50%",
            backgroundColor: "#CEDEFF",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "6%",
            left: "10%",
            width: "500px",
            height: "500px",
            backgroundColor: "#E1F9EA",
            zIndex: 1,
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "27%",
            left: "19%",
            width: "250px",
            height: "250px",
            backgroundColor: "#CEDEFF",
            zIndex: 1,
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "39%",
            zIndex: 2,
            maxWidth: "900px",
            px: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "rgb(39, 30, 89)",
              mb: 3,
              textAlign: "left",
              fontSize: {
                xs: "39px",
                md: "78px",
              },
            }}
          >
            A propos de nous
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "fex-start",
          width: "100%",
          height: "110vh",
          backgroundColor: "#FFF",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: { md: "left", xs: "center" },
            color: "rgb(39, 30, 89)",
            width: { md: "80%", xs: "100%" },
            fontSize: {
              xs: "24px",
              md: "48px",
            },
          }}
        >
          Qui sommes nous ?
        </Typography>
        <Typography
          sx={{
            textAlign: { md: "left", xs: "center" },
            color: "rgb(39, 30, 89)",
            mb: 6,
            width: { md: "80%", xs: "90%" },
            fontSize: {
              xs: "16px",
              md: "20px",
            },
          }}
        >
          Lelo Pona Lobi est plus qu’une simple association, c’est un mouvement.
          Un mouvement social qui vise à libérer les consciences par le biais de
          l’éducation, convaincue qu’elle est la clé de l’émancipation
          individuelle et collective. L’association part du constat que le
          savoir, véritable arme de transformation, a été retiré à de nombreux
          jeunes en République démocratique du Congo.
        </Typography>
        <Typography
          sx={{
            textAlign: { md: "left", xs: "center" },
            color: "rgb(39, 30, 89)",
            mb: 6,
            width: { md: "80%", xs: "90%" },
            fontSize: {
              xs: "16px",
              md: "20px",
            },
          }}
        >
          L’association milite et s’engage donc à rendre le savoir accessible à
          tous, quel que soit le parcours ou les capacités des individus, avec
          une attention particulière pour les personnes en situation de
          handicap. Ainsi, l’éducation est perçue non seulement comme un droit,
          mais comme une arme puissante pour reconstruire les bases d’une
          société forte et autonome.
        </Typography>
        <Box
          component="img"
          alt="img"
          src={TerreSection}
          sx={{
            display: "flex",
            width: { xs: "100%", md: "80%" },
            height: { xs: "25%", sm: "35%", md: "50%" },
            borderRadius: "8px",
            mb: 3,
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
          <Typography
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: { md: "left", xs: "center" },
              color: "rgb(39, 30, 89)",
              width: { md: "80%", xs: "100%" },
              fontSize: {
                xs: "24px",
                md: "48px",
              },
            }}
          >
            Notre mission
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "left", xs: "center" },
              color: "rgb(39, 30, 89)",
              width: { md: "80%", xs: "100%" },
              fontSize: {
                xs: "16px",
                md: "20px",
              },
            }}
          >
            – Permettre à chaque enfant congolais d’avoir accès à une éducation
            de qualité.
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "left", xs: "center" },
              color: "rgb(39, 30, 89)",
              width: { md: "80%", xs: "100%" },
              fontSize: {
                xs: "16px",
                md: "20px",
              },
            }}
          >
            – Créer des opportunités pour un avenir meilleur sur tout le
            territoire.
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "left", xs: "center" },
              color: "rgb(39, 30, 89)",
              width: { md: "80%", xs: "100%" },
              fontSize: {
                xs: "16px",
                md: "20px",
              },
            }}
          >
            Nous nous engageons à lever les barrières qui empêchent l’éducation
            de jouer son rôle d’émancipation et à faire de l’apprentissage une
            réalité pour tous, sans distinction.
          </Typography>
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
            src={EnsembleSection}
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
          }}
        >
          <Box
            component="img"
            alt="img"
            src={EnsembleSection}
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
            mt: { md: 0, xs: 4 },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: { md: "left", xs: "center" },
              color: "rgb(39, 30, 89)",
              width: { md: "80%", xs: "100%" },
              fontSize: {
                xs: "24px",
                md: "48px",
              },
            }}
          >
            Notre vision
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "left", xs: "center" },
              color: "rgb(39, 30, 89)",
              width: { md: "80%", xs: "100%" },
              fontSize: {
                xs: "16px",
                md: "20px",
              },
            }}
          >
            Nous croyons fermement que l’éducation est un levier de
            transformation social. Le savoir est une arme importante à la
            construction de chaque individu et un outil indispensable pour bâtir
            une société équitable et prospère. Cependant, cette arme a été
            retirée à une grande partie de la jeunesse congolaise. À travers
            notre action, nous voulons leur redonner cet outil fondamental.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "fex-start",
          width: "100%",
          height: "40vh",
          backgroundColor: "#FFF",
          flexDirection: "column",
          mt: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: { md: "left", xs: "center" },
            color: "rgb(39, 30, 89)",
            width: { md: "80%", xs: "100%" },
            fontSize: {
              xs: "24px",
              md: "48px",
            },
          }}
        >
          Pourquoi "Lelo Pona Lobi"
        </Typography>
        <Typography
          sx={{
            textAlign: { md: "left", xs: "center" },
            color: "rgb(39, 30, 89)",
            mb: 6,
            width: { md: "80%", xs: "90%" },
            fontSize: {
              xs: "16px",
              md: "20px",
            },
          }}
        >
          En lingala, « Lelo Pona Lobi » signifie « Aujourd’hui pour demain ».
          Ce nom incarne parfaitement notre engagement qui est d’agir
          aujourd’hui pour construire un avenir meilleur pour la jeunesse
          congolaise. Nous avons pour ambition de devenir un acteur clé dans
          l’éducation, non seulement au Congo mais aussi dans dans le monde,
          pour que chaque enfant puisse avoir les outils nécessaires à son
          émancipation.
        </Typography>
        <Typography
          sx={{
            textAlign: { md: "left", xs: "center" },
            color: "rgb(39, 30, 89)",
            mb: 6,
            width: { md: "80%", xs: "90%" },
            fontSize: {
              xs: "16px",
              md: "20px",
            },
          }}
        >
          LELO PONA LOBI – car l’avenir se prépare aujourd’hui.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "fex-start",
          width: "100%",
          height: "40vh",
          backgroundColor: "#FFF",
          flexDirection: "column",
          mt: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: { md: "left", xs: "center" },
            color: "rgb(39, 30, 89)",
            width: { md: "80%", xs: "100%" },
            fontSize: {
              xs: "24px",
              md: "48px",
            },
          }}
        >
          Rejoignez-nous
        </Typography>
        <Typography
          sx={{
            textAlign: { md: "left", xs: "center" },
            color: "rgb(39, 30, 89)",
            mb: 6,
            width: { md: "80%", xs: "90%" },
            fontSize: {
              xs: "16px",
              md: "20px",
            },
          }}
        >
          Que vous soyez un particulier, une entreprise ou une organisation,
          vous pouvez contribuer à notre mission. Ensemble, faisons de
          l’éducation un droit pour tous.
        </Typography>
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
          }}
        >
          Faire un don
        </Button>
      </Box>
    </Box>
  );
};

export default About;
