import './App.css'
import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function StartButton ( { onStart }: {onStart: () => void}) {

  return (
    <div className='container1'>
      <button 
      className="start"
      onClick={onStart}
      >        
        START QUIZ
      </button>
    </div>      
  )
}

type Question = {
  question: string;
  choices: string[];
  correct: string;
}

function ChemButton( {onSelect}: {onSelect: () => void}) {
  return (
    <button 
    className="chem"
    onClick = {onSelect}
    >
    CHEMISTRY
    </button>
  )
}

function BioButton({onSelect}: {onSelect: () => void}) {
  return (
    <button 
    className="bio"
    onClick = {onSelect}
    >
      BIOLOGY
    </button>
  )
}

function PhysButton({onSelect}: {onSelect: () => void}) {
  return (
    <button 
    className="physics"
    onClick = {onSelect}
    >
      PHYSICS
    </button>
  )
}

function SubjectSelection() {
  return (
    <div>
      <h1 className='p2'>
        SELECT SUBJECT
      </h1>
      
    </div>
  )
}

function GradeSelection() {
  return (
    <div>
      <h1 className='p3'>
        CHOOSE A GRADE
      </h1>
    </div>
  )
}

function G10Button ({ onGrade }: {onGrade: () => void}) {
  return (
    <button 
      className='G10'
      onClick={onGrade}
    >
      Grade 10
    </button>
  )
}

function G11Button ({ onGrade }: {onGrade: () => void}) {
  return (
    <button 
      className='G11'
      onClick={onGrade}
    >
      Grade 11
    </button>
  )
}

function G12Button ({ onGrade }: {onGrade: () => void}) {
  return (
    <button 
      className='G12'
      onClick={onGrade}
    >
      Grade 12
    </button>
  )
}

const easyChemQuestions = [
  
    {question: "What is the IUPAC name for CaBr2?",
    choices: [
      "Carbon Dibromide",
      "Calcium Dibromide",
      "Calcium Bromide",
      "Calcium Chloride",
    ],
    correct: "Calcium Bromide"},

    {question: "What is the formula for Propane/Tricarbon Octahydride?",
    choices: [
      "CH4",
      "C3H8",
      "C5H12",
      "CH3",
      ],
    correct: "C3H8"},

    {question: "What are the coefficients to this equation: Al + CuCl2 -> Cu + AlCl3?",
    choices: [
      "(2, 2, 4, 5)",
      "(2, 3, 3, 2)",
      "(1, 4, 2, 2)", 
      "(4, 6, 6, 4)"
    ],
    correct: "(2, 3, 3, 2)"},

    {question: "What is the atomic number for Barium?",
    choices: [
      "4",
      "56",
      "23",
      "88",
    ],
    correct: "56"},

    {question: "Which subatomic particle does not have an assigned charge?",
    choices: [
      "Neutron", 
      "Quanta", 
      "Electron", 
      "Proton",
    ],
    correct: "Neutron"},

    {question: "What is the correct number of electrons for each energy level?",
    choices: [
      "(1, 4, 4, 12)", 
      "(3, 6, 12, 24)", 
      "(2, 8, 8, 18)", 
      "(1, 3, 9, 27)",
    ],
    correct: "(2, 8, 8, 18)"}, 

    {question: "Which family does Iodine belong to?", 
    choices: [
      "Noble Gases",
      "Alkaline Earth Metals", 
      "Halogens", 
      "Lanthanides",
    ],
    correct: "Halogens"},

    {question: "When two or more reactants react to form one product, is it called...",
    choices: [
      "Synthesis", 
      "Double Displacement", 
      "Single Replacement", 
      "Neutralization",
    ],
    correct: "Synthesis"},

    {question: "CuCl2 consists of the following elements...",
    choices: [
      "(Cobalt and Chlorine)", 
      "(Copper and Bromide)", 
      "(Copper and Carbon)", 
      "(Copper and Chlorine)",
    ],
    correct: "(Copper and Chlorine)"},

    {question: "Sodium and Chlorine Gas combine to form...",
    choices: [
      "NaCl",
      "NaCl2", 
      "Na2Cl", 
      "NaCl3",
    ],
    correct: "NaCl"},
  
]

const mediumChemQuestions = [
  {
    question: "Calculate the number of oxygen atoms in 3.50g of Water.",
    choices: [
      "3.80 x 10^25",
      "3.23 x 10^-25",
      "1.17 x 10^23",
      "1.98 x 10^23",
    ],
    correct: "1.17 x 10^23",
  },

  {
    question: "Determine the empirical formula of a compound given that 58.8% carbon, 9.80% hydrogen, 31.4% oxygen.",
    choices: [
      "C2H5O",
      "C6H12O6",
      "CH2O",
      "C5H10O2",
    ],
    correct: "C5H10O2",
  },

  {
    question: "If element X has a sample of 100 with a mass of 12.00 and 10 atoms with a mass of 14.00, calculate the average atomic mass(amu).",
    choices: [
      "12.05",
      "13.14",
      "12.18",
      "12.10",
    ],
    correct: "12.18",
  },

  {
    question: "Given 3.50g of hydrogen gas and 18.0g of nitrogen gas (N2 + 3H2 -> 2NH3), determine the limiting reactant.",
    choices: [
      "Hydrogen Gas",
      "Nitrogen Gas",
      "Ammonia",
      "Hydrogen",
    ],
    correct: "Hydrogen Gas",
  },

  {
    question: "Which allows particles to move apart as they are heated?",
    choices: [
      "Intermolecular Forces",
      "Potential Energy",
      "Kinetic Energy",
      "Intramolecular Forces",
    ],
    correct: "Kinetic Energy",
  },

  {
    question: "What is the relationship between the temperature and vapour pressure of a substsance?",
    choices: [
      "Indirect",
      "Direct",
      "Constant",
      "Independent",
    ],
    correct: "Direct",
  },

  {
    question: "A gas occupies 733ml at 10.0 degrees celsius, then rises to 950ml. Calculate the temperature(degrees celsius) at this new volume.",
    choices: [
      "94",
      "370",
      "13",
      "7.8",
    ],
    correct: "94",
  },

  {
    question: "Who developed the first barometer?",
    choices: [
      "Galileo Galilei",
      "Amadeo Avogadro",
      "Blaise Pascal",
      "Evangelista Torricelli",
    ],
    correct: "Evangelista Torricelli",
  },

  {
    question: "Which element is the most electronegative?",
    choices: [
      "Fluorine",
      "Cesium",
      "Oxygen",
      "Chloride",
    ],
    correct: "Fluorine",
  },

  {
    question: "Name the following alkane: C6H14",
    choices: [
      "Ethane",
      "Benzene",
      "Hexane",
      "Propane",
    ],
    correct: "Hexane",
  },
]

const hardChemQuestions = [
  {
    question: "Which light waves has the greatest energy?",
    choices: [
      "Gamma",
      "X-rays",
      "Radio",
      "Infrared",
    ],
    correct: "Gamma",
  },

  {
    question: "How is the chemical properties of an element determined?",
    choices: [
      "Electron Arrangement",
      "Wavelength",
      "Energy",
      "pH",
    ],
    correct: "Electron Arrangement",
  },

  {
    question: "Which of the following is a factor of how reaction rates are determined?",
    choices: [
      "Spontaneity",
      "Product Concentration",
      "Pressure",
      "Enthalpy Change",
    ],
    correct: "Pressure",
  },

  {
    question: "Which of the following is an example of dynamic equilibrium?",
    choices: [
      "Puddles",
      "Oxidation of Iron",
      "Acid-Base Neutralization",
      "Vapour Pressure",
    ],
    correct: "Vapour Pressure",
  },

  {
    question: "How is the equilibrium constant calculated?",
    choices: [
      "(Product Concentration * Reactant Concentration)",
      "(Product Concentration/Reactant Concentration)",
      "(Product Concentration - Reactant Concentration)",
      "(Product Concentration + Reactant Concentration)",
    ],
    correct: "(Product Concentration/Reactant Concentration)",
  },

  {
    question: "What is the [H3O+] in a 0.2 M NaOH(aq) solution?",
    choices: [
      "5 x 10^-14",
      "9.88 x 10^-15",
      "3.69 x 10^12",
      "4.24 x 10^-19",
    ],
    correct: "5 x 10^-14",
  },

  {
    question: "Determine the oxidation number of nitrogen in NH2^-",
    choices: [
      "+4",
      "-3",
      "-1",
      "+2",
    ],
    correct: "-3",
  },

  {
    question: "In the following reaction: 2 Ag + Mg(NO3)2 -> 2 AgNO3 + Mg, identify the oxidation agent.",
    choices: [
      "Mg(NO3)2",
      "Ag",
      "Mg",
      "AgNO3",
    ],
    correct: "Mg(NO3)2",
  },

  {
    question: "How many moles of electrons pass through a wire carrying 1.74 A of current for 28.6 minutes?",
    choices: [
      "1.89 x 10^-2",
      "3.09 x 10^-2",
      "3.48 x 10^-2",
      "4.09 x 10^-2",
    ],
    correct: "3.09 x 10^-2",
  },

  {
    question: "How many seconds needed to generate 3.00 moles of electrons from 10.0A of current?",
    choices: [
      "6.00",
      "79.4",
      "2.90 x 10^4",
      "1.90 x 10^5",
    ],
    correct: "2.90 x 10^4",
  },
]

const easyPhysicsQuestions = [
  {
    question: "How far(km) will a car go in 3.5 h at a constant speed of 95km/h?",
    choices: [
      "27",
      "230",
      "330",
      "1.2 x 10^3",
    ],
    correct: "330",
  },

  {
    question: "If a car accelerates from 0 to 26.8m/s in 2.0s, what is its acceleration? (m/s^2)",
    choices: [
      "-13.4",
      "3.8",
      "13.4",
      "9.8",
    ],
    correct: "13.4",
  },

  {
    question: "If you travel around a 400m CIRCULAR track twice and stop, by how much have you displaced? (m)",
    choices: [
      "800",
      "400",
      "1600",
      "0",
    ],
    correct: "0",
  },

  {
    question: "What is the relationship between mass and acceleration if the force is held constant?",
    choices: [
      "Direct",
      "Indirect",
      "Constant",
      "Independent"
    ],
    correct: "Indirect",
  },

  {
    question: "If I apply a force to the right, what direction will the force of friction act?",
    choices: [
      "Perpendicular",
      "Right",
      "Left",
      "Parallel",
    ],
    correct: "Left",
  },

  {
    question: "Which scientist developed the three laws of motion?",
    choices: [
      "Blaise Pascal",
      "Socrates",
      "Issac Newton",
      "Marie Curie",
    ],
    correct: "Issac Newton",
  },

  {
    question: "What is the unit for impulse?",
    choices: [
      "Newton-Seconds(Ns)",
      "Meters/Second(m/s)",
      "kilograms * meters/second(kg * m/s)",
      "Meters(m)",
    ],
    correct: "Newton-Seconds(Ns)",
  },

  {
    question: "What is gravitational potential energy?",
    choices: [
      "energy of motion",
      "energy of heat",
      "stored energy based on height",
      "energy based on molecule disturbance",
    ],
    correct: "stored energy based on height",
  },

  {
    question: "For Newton's Second Law, what idea represents F in the equation: F = ma?",
    choices: [
      "Energy",
      "Work",
      "Current",
      "Force"
    ],
    correct: "Force",
  },

  {
    question: "To resist changes in motion is called what?",
    choices: [
      "Mass",
      "Acceleration",
      "Inertia",
      "Velocity",
    ],
    correct: "Inertia",
  },
]

const mediumPhysicsQuestions = [
  {
    question: "An object starts from rest and accelerates uniformly in the positive direction. After 11s, its speed is 70m/s, how far will it travel?",
    choices: [
      "234m",
      "105m",
      "95m",
      "385m"
    ],
    correct: "385m",
  },

  {
    question: "An object is decelerating in a straight line. Which of the following is ALWAYS TRUE.",
    choices: [
      "Velocity = 0",
      "Direction of acceleration is opposite to the direction of velocity.",
      "Acceleration changes.",
      "Acceleration is constant."
    ],
    correct: "Direction of acceleration is opposite to the direction of velocity.",
  },

  {
    question: "A proton has a mass of 1.672 x 10^-27kg. What is its weight?",
    choices: [
      "2.345 x 10^-26N",
      "2.238 x 10^-24N",
      "3.238 x 10^-21N",
      "1.640 x 10^-26N",
    ],
    correct: "1.640 x 10^-26N",
  },

  {
    question: "A diver jumps with a velocity of 4.2m/s. The diver enters the water 2.5s later. How high is the platform?",
    choices: [
      "20m",
      "12m",
      "18m",
      "32m",
    ],
    correct: "20m",
  },

  {
    question: "A positive test charge of 7.0mC experiences a force of 5.6 x 10^-2N. What is the electric field?",
    choices: [
      "8.0 x 10^0N/C",
      "1.20 x 10^1N/C",
      "2.3 x 10^-1N/C",
      "3.24 x 10^-2N/C",
    ],
    correct: "8.0 x 10^0N/C",
  },

  {
    question: "If a 5.0m experiences a current of 10A west of the wire and a downwards magnetic field of 5.0 x 10^-5T, determine the magnetic force.",
    choices: [
      "1.8 x 10^-3 N",
      "9.1 x 10^-2 N",
      "2.5 x 10^-3 N",
      "2.5 x 10^-2 N",
    ],
    correct: "2.5 x 10^-3 N",
  },

  {
    question: "What does lambda represent in the universal wave equation?",
    choices: [
      "Frequency",
      "Speed",
      "Period",
      "Wavelength",
    ],
    correct: "Wavelength",
  },

  {
    question: "If the speed in a deep region of water has 24cm/s, shallow region of 15cm/s, a frequency of 4.0 Hz, and an incident angle of 40o, what is the angle of refraction?",
    choices: [
      "29",
      "24",
      "12",
      "45",
    ],
    correct: "24",
  },

  {
    question: "What primary force acts on an object during free-fall for downwards acceleration? Neglect air resistance.",
    choices: [
      "Tension",
      "Applied",
      "Friction",
      "Gravity",
    ],
    correct: "Gravity",
  },

  {
    question: "What direction does a transverse wave travel in?",
    choices: [
      "Parallel",
      "Exponential",
      "Perpendicular",
      "Linear",
    ],
    correct: "Perpendicular",
  },
]

const hardPhysicsQuestions = [
  {
    question: "F1 = 12.0N [10o N of E], F2 = 8.0N [30o W of N], find F1 + F2.",
    choices: [
      "12.0N [12o W of N]",
      "32.1N [23.1o E of N]",
      "11.9N [49.1o N of E]",
      "34.1N [45.5o N of W]",
    ],
    correct: "11.9N [49.1o N of E]",
  },

  {
    question: "If two masses are suspended by a single pulley that hang on each side. Let m1 = 4.0kg, m2 = 6.0kg, find the tension force.",
    choices: [
      "47N",
      "96N",
      "2.0N",
      "45N",
    ],
    correct: "47N",
  },

  {
    question: "A 4.0kg mass is tied to a rope length of 1.5m that swings in a horizontal circle. The rope is at an angle of 20o to the horizontal, find the tension in the rope.",
    choices: [
      "39.2N",
      "115N",
      "234N",
      "125N",
    ],
    correct: "115N",
  },

  {
    question: "If 5 identical 0.85kg books are stacked on top of each other with 2.50cm thickness laying flat, what is the potential energy of the system?",
    choices: [
      "3.4J",
      "1.2J",
      "4.5J",
      "2.1J",
    ],
    correct: "2.1J",
  },

  {
    question: "Calculate the escape velocity of our solar system.",
    choices: [
      "348433 m/s",
      "237234 m/s",
      "616479 m/s",
      "324533 m/s",
    ],
    correct: "616479 m/s",
  },

  {
    question: "How far apart are two aprallel plates if a potential difference of 600V and an electric field of 1.2 x 10^4 N/C?",
    choices: [
      "0.01m",
      "0.03m",
      "0.05m",
      "0.07m",
    ],
    correct: "0.05m",
  },

  {
    question: "A beam of electrons moving at 2.0 x 10^8 m/s passes through a uniform magnetic field of 41 mT, what is the radius of this circular path?",
    choices: [
      "0.021m",
      "0.035m",
      "0.012m",
      "0.028m",
    ],
    correct: "0.028m",
  },

  {
    question: "42 and 64 ohm are connected in parallel. The current connected to the 64 ohm resistor is 3.00A, find the current in the first resistor.",
    choices: [
      "2.34A",
      "5.69A",
      "4.57A",
      "2.98A",
    ],
    correct: "4.57A",
  },

  {
    question: "The flux of a single-loop coil of area 37cm^2 changes from 6.5 x 10^-3T to 9.3 x 10^-3T in 0.50s. WHat emf is induced into the coil?",
    choices: [
      "2.1 x 10^-5V",
      "3.4 x 10^-5V",
      "1.8 x 10^-5V",
      "5.6 x 10^-5V",
    ],
    correct: "2.1 x 10^-5V",
  },

  {
    question: "A ball is struck at a velocity of 24.5 m/s 35o above the horizontal. Find the maximum height of the ball.",
    choices: [
      "9.8m",
      "34.9m",
      "10.1m",
      "56.7m",
    ],
    correct: "10.1m",
  },
]

const easyBioQuestions = [
  {
    question: "If a population exceeds the carrying capacity of an environment...",
    choices: [
      "Increases exponentially",
      "Food supply increases",
      "Decreases rapidly",
      "Population evolves",
    ],
    correct: "Decreases rapidly",
  },

  {
    question: "What is one of the products in the photosynthesis equation?",
    choices: [
      "Oxygen Gas",
      "Carbon Dioxide",
      "Sulfuric Acid",
      "Water Vapour",
    ],
    correct: "Oxygen Gas",
  },

  {
    question: "Which organism is an example of a producer?",
    choices: [
      "Lion",
      "Humans",
      "Grass",
      "Deer",
    ],
    correct: "Grass",
  },

  {
    question: "Density-independent limiting factors include...",
    choices: [
      "Competition",
      "Frost",
      "Parasitism",
      "Stress",
    ],
    correct: "Frost",
  },

  {
    question: "Which bacteria converts nitrates into nitrogen gas?",
    choices: [
      "Nitrifying bacteria",
      "Denitrifying bacteria",
      "Nitrogen-fixing bacteria",
      "Worms"
    ],
    correct: "Denitrifying bacteria",
  },

  {
    question: "All the living and nonliving things that reside in a given area is called",
    choices: [
      "Biosphere",
      "Population",
      "Community",
      "Ecosystem"
    ],
    correct: "Ecosystem",
  },

  {
    question: "What percentage of energy is given to each trophic level in a food pyramid?",
    choices: [
      "10%",
      "20%",
      "30%",
      "40%"
    ],
    correct: "10%",
  },

  {
    question: "Which of the following is an example of a decomposer?",
    choices: [
      "Grass",
      "Lions",
      "Worms",
      "Rabbits",
    ],
    correct: "Worms",
  },

  {
    question: "A specific role assigned to each organism in the environment is said to be its...",
    choices: [
      "Niche",
      "Threat",
      "Mutualism",
      "Species",
    ],
    correct: "Niche",
  },

  {
    question: "Polar bears are an example of a...",
    choices: [
      "Biotic factor",
      "Abiotic factor",
      "Decomposer",
      "Producer",
    ],
    correct: "Biotic factor",
  },
]

const mediumBioQuestions = [
  {
    question: "Homeostasis is best defined as...",
    choices: [
      "The ability for living things to maintain their inner selves.",
      "The process of breaking down proteins",
      "The ability of an organism to do work",
      "The location of where photosynthesis occurs.",
    ],
    correct: "The ability for living things to maintain their inner selves.",
  },

  {
    question: "Which blood cells are responsible for producing antibodies?",
    choices: [
      "Erthrocytes",
      "Leukocytes",
      "Prokaryotes",
      "Lymphocytes (B cells)",
    ],
    correct: "Lymphocytes (B cells)",
  },

  {
    question: "What are antagonistic hormones?",
    choices: [
      "Hormone pairs that have opposite effects on the same body function.",
      "A molecule/drug that blocks a single hormone through binding cell receptors.",
      "Hormones that actively suppress bodily functions",
      "Hormones that produce antiviral properties",
    ],
    correct: "Hormone pairs that have opposite effects on the same body function",
  },

  {
    question: "Which is a factor that affect blood pressure?",
    choices: [
      "Eye type",
      "Blood type",
      "Diuretics",
      "Number of blood cells",
    ],
    correct: "Diuretics",
  },

  {
    question: "Which organ primarily excretes ammonia?",
    choices: [
      "Heart",
      "Lungs",
      "Liver",
      "Kidney",
    ],
    correct: "Kidney",
  },

  {
    question: "Which of the following is an example of how the nervous system is used?",
    choices: [
      "Production of blood cells",
      "Fight or Flight",
      "Nutrient breakdown",
      "Provide bone support",
    ],
    correct: "Fight or Flight",
  },

  {
    question: "Aging is an example of which changes?",
    choices: [
      "Homeostatic",
      "Genetic",
      "Behavioral",
      "Environmental",
    ],
    correct: "Homeostatic",
  },

  {
    question: "What is a negative feedback loop?",
    choices: [
      "The response of a system that accelerates the same changes",
      "The response of a system that causes it to revert back to its original state",
      "A response that continously increases the original stimulus",
      "A process where a system moves farther away from its normal range",
    ],
    correct: "The response of a system that causes it to revert back to its original state",
  },

  {
    question: "Why does the blood type matter for patients?",
    choices: [
      "Determining blood pressure",
      "Ensuring enough blood is needed for transfusion",
      "Identifying which nutrients are needed",
      "Ensuring blood compability during transfusions"
    ],
    correct: "Ensuring blood compability during transfusions",
  },

  {
    question: "What can happen if a homeostatic system fails to properly regulate the body?",
    choices: [
      "Bodily functions shut down",
      "The body becomes stronger",
      "A disease/disorder may develop",
      "Feedback mechanisms are no longer necessary"
    ],
    correct: "A disease/disorder may develop",
  },
]

const hardBioQuestions = [
  {
    question: "Why are sex-linked recessive traits most commonly found in men than women?",
    choices: [
      "Males have one Y chromosome that causes this trait to occur.",
      "Females have a direct immunity inherited from their fathers.",
      "Males have an a singular X chromosome, so one recessive allele can cause this trait.",
      "Females have two X chromosomes, which means they always express the recessive trait.",
    ],      
    correct: "Males have an a singular X chromosome, so one recessive allele can cause this trait.",
  },

  {
    question: "How do you think that scientists determine the structure of DNA?",
    choices: [
      "Through x-ray crystallography and research behind the chemical composition",
      "Comparing the size of DNA between different populations",
      "Analyzing the DNA through microscopes",
      "How DNA behaves under different temperatures",
    ],
    correct: "Through x-ray crystallography and research behind the chemical composition",
  },

  {
    question: "How did Charles Darwin primarily develop his theory of evolution?",
    choices: [
      "Reading books about animals",
      "Analyzing a specific type of organism",
      "Conducting experiments and observing traits in a laboratory",
      "Observing different types of organisms through travelling",
    ],
    correct: "Observing different types of organisms through travelling",
  },

  {
    question: "Why is it difficult to determine the definition of a species?",
    choices: [
      "Species are hard to find",
      "Species are evolving throughout time and creating different types of organisms",
      "All organisms in a species have different physical characteristics",
      "Scientists has not discovered enough species to classify them",
    ],
    correct: "Species are evolving throughout time and creating different types of organisms",
  },

  {
    question: "What is a strategy to maintain biodiversity?",
    choices: [
      "Public education",
      "Destroying habitats to maintain environments",
      "Introducing species from different habitats",
      "Overfertilization",
    ],
    correct: "Public education",
  },

  {
    question: "Which issue is related to the conservation of biodiversity?",
    choices: [
      "Analyzing changes in food distribution",
      "Access to public transportation",
      "Designing new computer software",
      "Hydroelectric development",
    ],
    correct: "Hydroelectric development",
  },

  {
    question: "What is the highest level of the classification system?",
    choices: [
      "Phylum",
      "Class",
      "Domain",
      "Species",
    ],
    correct: "Domain",
  },

  {
    question: "Which method is able to help determine evolutionary relationships?",
    choices: [
      "Biochemistry",
      "Soil erosion",
      "Weather forecasting",
      "Environmental analysis",
    ],
    correct: "Biochemistry",
  },

  {
    question: "In genetics, what is the purpose of a punnet square?",
    choices: [
      "Predicting the survivability of a community",
      "Predicting the rate of evolution in a species",
      "Predicting the possible genetic combinations of offspring",
      "Predicting the rate of growth in a population",
    ],
    correct: "Predicting the possible genetic combinations of offspring",
  },

  {
    question: "Which is an exception to occur when independent assortment occurs?",
    choices: [
      "Crossing over",
      "Linked genes",
      "Chromosome replication",
      "Random fertilization",
    ],
    correct: "Linked genes",
  },
]
function ChoiceButton({ onAnswer, choice}: {choice: string; onAnswer: () => void}) {
  return (
    <button
      onClick={onAnswer}
      className='choices'
    >
      {choice}
    </button>
  )
}

export default function App () {
  const [page, setPage] = useState("home");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("")
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [questionSet, setQuestionSet] = useState<Question[]>(easyChemQuestions)
  const currentQuestion = questionSet[questionIndex]
  // const [topic, setTopic] = useState("") add topics later. 
  
  const BackHandle = () => {
    if (page === "subjects") {
      setPage("home")
    }
    else if (page === "difficulty") {
      setPage("subjects")
    }

    else if (page === "Quiz") {
      setPage("difficulty")
      setScore(0)
      setQuestionIndex(0)
    }
  }

  function checkAnswer(choice: string) {
    if (choice === currentQuestion.correct) {
      setScore(previousScore => previousScore + 1)
    }
    if (questionIndex < questionSet.length - 1) {
      setQuestionIndex(previousquestionIndex => previousquestionIndex + 1)
    } else {
        setPage("Score")
      }
  }

  return (
    <div>

      {page === "home" && (
        <>
          <h1 className="p">
            WAGON QUIZZES
          </h1>
            <StartButton onStart={() => {
              setPage("subjects")
              
              }}/>
        </>
      )} 

      {page === "subjects" && (
        <div className='selections'>
          <SubjectSelection/>
          <ChemButton onSelect = {() => { 
            setSubject("CHEMISTRY") 
            setPage("difficulty")
            }}/>
          <PhysButton onSelect = {() => {
            setSubject("PHYSICS")
            setPage("difficulty")
            }}/>
          <BioButton onSelect = {() => {
            setSubject("BIOLOGY")
            setPage("difficulty")
            }}/>

          <button 
          className='back'
          onClick={BackHandle}
          >
          BACK
          </button>
        </div>         
      )}

      {page === "difficulty" && (
        <div className='diffselection'>
          <GradeSelection/>
          <G10Button onGrade={() => {
            if (subject === 'CHEMISTRY') {
              setQuestionSet(easyChemQuestions)
            }

            if (subject === 'PHYSICS') {
              setQuestionSet(easyPhysicsQuestions)
            }

            if (subject === 'BIOLOGY') {
              setQuestionSet(easyBioQuestions)
            }
            setDifficulty("G10")
            setPage("Quiz")
          }}/>
          <G11Button onGrade={() => {

            if (subject === 'CHEMISTRY') {
              setQuestionSet(mediumChemQuestions)
            }

            if (subject === 'PHYSICS') {
              setQuestionSet(mediumPhysicsQuestions)
            }

            if (subject === 'BIOLOGY') {
              setQuestionSet(mediumBioQuestions)
            }
            setDifficulty("G11")
            setPage("Quiz")
          }}/>
          <G12Button onGrade={() => {

            if (subject === "CHEMISTRY") {
              setQuestionSet(hardChemQuestions)
            }

            if (subject === "PHYSICS") {
              setQuestionSet(hardPhysicsQuestions)
            }

            if (subject === "BIOLOGY") {
              setQuestionSet(hardBioQuestions)
            }
            setDifficulty("G12")
            setPage("Quiz")
          }}/>
          <button 
          className='back'
          onClick={BackHandle}
          >
          BACK
          </button>
        </div>
      )}
      {page === "Quiz" && (
        <div>
          <h1 className='p5'>
            {difficulty}
          </h1>

          {subject === "CHEMISTRY" && difficulty === "G10" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            
            </div>
          )}

          {subject === "CHEMISTRY" && difficulty === "G11" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            </div>
          )}

          {subject === "CHEMISTRY" && difficulty === "G12" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            </div>
          )}

          {subject === 'PHYSICS' && difficulty === "G10" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            </div>
          )}

          {subject === 'PHYSICS' && difficulty === "G11" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            </div>
          )}

          {subject === 'PHYSICS' && difficulty === "G12" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            </div>
          )}

          {subject === 'BIOLOGY' && difficulty === "G10" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            </div>
          )}

          {subject === 'BIOLOGY' && difficulty === "G11" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            </div>
          )}

          {subject === 'BIOLOGY' && difficulty === "G12" && (
            <div>
              <h1 className='p6'>
                {currentQuestion.question}
              </h1>

              {currentQuestion.choices.map((choice) => (
                <ChoiceButton 
                onAnswer={() => checkAnswer(choice)}
                choice = {choice}
                />
              ))}
            </div>
          )}

          <button 
          className='back'
          onClick={BackHandle}
          >
          BACK
          </button>
        </div>
      )}
      
      {page === "Score" && (
        <div>
          <h1 className='p7'>
            QUIZ COMPLETE
          </h1>

          <h1 className='p8'>
            SCORE: {score}/{questionSet.length}
          </h1>

        <button
          className='backHome'
          onClick = {() => {
            setScore(0)
            setQuestionIndex(0)
            setDifficulty("")
            setSubject("")
            //setTopic("")
            setPage("home")
            setQuestionSet([])
          }}
        >
          HOME
        </button>
          
        </div>
      )}
     
    <Analytics />
    <SpeedInsights />
    </div>
  )
}

// - create topics, add motionvational quotes, images, properly website design, separate arrays for each topic, randomizing feature.