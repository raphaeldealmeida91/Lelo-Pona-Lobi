import { Box, Button, Typography } from "@mui/material";
import MultiActionAreaCard from "../components/CardActu";
import { useNavigate } from "react-router-dom";
import { SubTitle } from "../styles/Typography/SubTitle";
import { TextBody } from "../styles/Typography/TextBody";
import { BtnSimple } from "../styles/Button/BtnSimple";
import HomeImg from "../assets/home.webp";
import LoveImg from "../assets/amour.webp";
import CycleImg from "../assets/cycle.webp";
import MontagneImg from "../assets/montagne.webp";
import PlanteImg from "../assets/plante.webp";
import DeterImg from "../assets/deter.webp";
import FamilleImg from "../assets/famille.webp";
import EcoleImg from "../assets/ecole.webp";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${HomeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#004675A1",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "900px",
            px: 4,
          }}
        >
          <SubTitle text="Lelo pona lobi" isWhite isLeft />
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#FFF",
              mb: 3,
              textAlign: "left",
              fontSize: {
                xs: "39px",
                md: "78px",
              },
            }}
          >
            L'avenir se prépare aujourd'hui
          </Typography>
          <TextBody
            text="Lelo Pona Lobi est une promesse. Une promesse d’action, de
            solidarité, et de changement. Ce projet est porté par la conviction
            que chaque enfant a un potentiel immense et que l’éducation est la
            clé pour le révéler."
            isWhite
            isLeft
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#B4CDFFA6",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              gap: 2,
              mt: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "220px",
                height: "280px",
              }}
            >
              <Box
                component="img"
                alt="Famille"
                src={FamilleImg}
                width="512"
                height="640"
                sizes="(max-width: 512px) 100vw, 512px"
                sx={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "320px",
                height: "320px",
              }}
            >
              <Box
                component="img"
                alt="Plante"
                src={PlanteImg}
                width="736"
                height="728"
                sizes="(max-width: 736px) 100vw, 736px"
                sx={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
              gap: 2,
              mt: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "220px",
                height: "280px",
              }}
            >
              <Box
                component="img"
                alt="Deter"
                src={DeterImg}
                width="451"
                height="600"
                sizes="(max-width: 451px) 100vw, 451px"
                sx={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "220px",
                height: "220px",
              }}
            >
              <Box
                component="img"
                alt="Love"
                src={LoveImg}
                width="736"
                height="713"
                sizes="(max-width: 736px) 100vw, 736px"
                sx={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "80%" },
            height: "100%",
            justifyContent: "center",
            alignItems: { md: "flex-start", xs: "center" },
            ml: { xs: 0, md: 10 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <SubTitle text="À propos de nous" />
          <Typography
            sx={{
              textAlign: { md: "left", xs: "center" },
              color: "rgb(39, 30, 89)",
              mb: 6,
              width: { md: "80%", xs: "100%" },
              fontSize: {
                xs: "16px",
                md: "20px",
              },
            }}
          >
            Notre association à pour mission de promouvoir une éducation
            inclusive et équitable pour libérer les potentiels, créer des
            opportunités et contribuer au développement économique et social de
            la RDC en réconciliant la jeunesse à son identité et son histoire.
          </Typography>
          <BtnSimple
            text="En savoir plus"
            handleClick={() => navigate("/about")}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#FFF",
          flexDirection: { xs: "column", md: "row" },
          mb: { md: -10, xs: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "80%" },
            height: "100%",
            justifyContent: "center",
            alignItems: { md: "center", xs: "center" },
            mb: { xs: 4, md: 0 },
            mt: { xs: 4, md: 0 },
          }}
        >
          <SubTitle text="L'école c'est pour toi !" />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              mt: 4,
              mb: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: { md: "70%", xs: "100%" },
                height: "220px",
                backgroundColor: "#EBF8F5",
                borderRadius: "8px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ml: 8,
              }}
            >
              <Typography
                sx={{
                  color: "#0ABD9D",
                  fontWeight: "bold",
                  width: "80%",
                  fontSize: "42px",
                }}
              >
                3
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "rgb(39, 30, 89)",
                  width: "80%",
                  fontSize: {
                    xs: "24px",
                    md: "32px",
                  },
                }}
              >
                Ecoles soutenues en 2026
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: { md: "70%", xs: "100%" },
                height: "220px",
                backgroundColor: "#EBF8F5",
                borderRadius: "8px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mr: 8,
              }}
            >
              <Typography
                sx={{
                  color: "#0ABD9D",
                  fontWeight: "bold",
                  width: "80%",
                  fontSize: "42px",
                }}
              >
                1000
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "rgb(39, 30, 89)",
                  width: "80%",
                  fontSize: {
                    xs: "24px",
                    md: "28px",
                  },
                }}
              >
                Elèves soutenues en 2026
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "80%" },
            height: "100%",
            justifyContent: "center",
            alignItems: { md: "flex-start", xs: "center" },
          }}
        >
          <Box
            component="img"
            alt="img"
            src={EcoleImg}
            sx={{
              width: { xs: "100%", md: "80%" },
              height: "auto",
              objectFit: "cover",
              display: "block",
              borderRadius: "8px",
              mb: 2,
            }}
          />
          <TextBody
            text="Avec « L’école c’est pour toi ! », nous souhaitons donner à chaque
            enfant congolais une chance de rêver, d’apprendre et de se
            construire. Cette action se décline en plusieurs étapes, la première
            étant de soutenir la rentrée scolaire de ses jeunes."
          />
          <BtnSimple
            text="Nos actions"
            handleClick={() => navigate("/actions")}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#FFF",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "80%" },
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <SubTitle text="Actualités" isCenter />
          <TextBody
            text="Restez informés sur nos actions et nos projets en cours ! Découvrez
            les dernières nouvelles de Lelo Pona Lobi"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 4, md: 0 },
          }}
        >
          <MultiActionAreaCard
            media={MontagneImg}
            title="Campagne découverte"
            description="Retour en image de notre première campagne de sensibilisation"
          />
          <MultiActionAreaCard
            media={MontagneImg}
            title="L'école c'est pour toi !"
            description="Les coulisses du projet en exclusivité. Ne ratez aucune miette !"
          />
          <MultiActionAreaCard
            media={MontagneImg}
            title="Po lobi na bino ezala tokoss"
            description="Les origines du slogan kinois !"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          minHeight: "100vh",
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
            mb: { md: 0, xs: 10 },
          }}
        >
          <SubTitle text="Rejoignez nous dans notre mission" />
          <TextBody
            text="Chaque don, petit ou grand, contribue à bâtir des écoles, offrir des
            opportunités éducatives et redonner espoir à des milliers d’enfants
            et de jeunes."
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
              color: "#000",
            }}
          >
            Faire un don
          </Button>
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
            src={CycleImg}
            sx={{
              width: "80%",
              height: "auto",
              objectFit: "cover",
              display: "block",
              borderRadius: "8px",
              mb: 3,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
